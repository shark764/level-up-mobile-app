import React, { useState } from 'react';
import { ScrollView, View, ToastAndroid } from 'react-native';
import styles from './Login.styles';
import LoginHeader from './Components/LoginHeader';
// import LoginTextInput from './Components/LoginTextInput';
import LoginBottom from './Components/LoginBottom';
import { Container } from '@components/Container';
import { HeadSection } from '@components/HeadSection';
import { TextInputContainer } from '@components/TextInputContainer';
import { useNavigation } from '@react-navigation/core';
import { isUsernameValid, isPasswordValid } from '@utils/index';
import axios from 'axios';
import { useEffect } from 'react';

interface Props {
  visible: any,
  message: string,
}

const Toast = ({ visible, message }: Props) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    return null;
  }
  return null;
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [visibleToast, setvisibleToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  useEffect(() => {
    setvisibleToast(false)
  }, [visibleToast]);


  const { navigate } = useNavigation();
  const navigateTo = (screen: string) => {
    navigate(screen);
  };
  const loginValidation = () => {
    setUsernameError(false);
    setPasswordError(false);
    const credentials = {
      email: username,
      password: password
    }
    axios.post('https://dev-lul-sec.herokuapp.com/api/auth/login', credentials).then(response => {
      setToastMessage(response.data.status);
      setvisibleToast(true);
      navigateTo('Progress');
    }).catch(error => {
      setToastMessage(error.response.data.error.message);
      setvisibleToast(true);
    })
  };
  const handleUsername = (value: string) => {
    setUsername(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  return (
    <Container background='dark'>
      <ScrollView>
        <Toast visible={visibleToast} message={toastMessage} />
        <View style={styles.main}>
          <HeadSection textStyle={styles.backText} backText='Back' />
          <View>
            <LoginHeader
              viewStyle={styles.containerText}
              textStyle={styles.textHeader}
            />

            <TextInputContainer
              icon='person-outline'
              colorIcon='#50E5C3'
              label='Username or Email'
              placeholder='Type your username or email'
              onChangeText={(value) => {
                handleUsername(value);
              }}
              // error={!isUsernameValid(username) || usernameError}
              errorVisible={!isUsernameValid(username) || usernameError}
              errorMessage='Enter a valid username'
            />
            <TextInputContainer
              icon='lock-outline'
              colorIcon='#50E5C3'
              label='Password'
              placeholder='Type your Password'
              secureTextEntry={true}
              onChangeText={(value) => {
                handlePassword(value);
              }}
              // error={!isPasswordValid(password) || passwordError}
              errorVisible={!isPasswordValid(password) || passwordError}
              errorMessage='Enter a valid password (At least: 8 characters, 1 lower case letter, 1 upper case letter, no special characters)'
            />

            <LoginBottom
              viewStyle={styles.containerBottom}
              linkStyle={styles.link}
              navigationLink={'ForgotPassword'}
              buttonStyle={styles.button}
              navigationButton={'Login'}
              buttonTittle={styles.buttonTitle}
              mainFooter={styles.mainFooter}
              subFooter={styles.subFooter}
              textDivider={styles.textDivider}
              colDivider={styles.colDivider}
              circle={styles.buttonCircle}
              socialMedia={styles.socialMedia}
              socialMediaLogo={styles.socialMediaLogo}
              loginValidation={loginValidation}
            />
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Login;
