import React, { useState } from 'react';
import { Text, ScrollView, View, } from 'react-native';
import styles from './Login.styles';
import LoginHeader from './Components/LoginHeader';
// import LoginTextInput from './Components/LoginTextInput';
import LoginBottom from './Components/LoginBottom';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container } from '@components/Container';
import { HeadSection } from '@components/HeadSection';
import { TextInputContainer } from '@components/TextInputContainer';
import style from '@screens/EnableLocation/EnableLocation.styles';
import { useNavigation } from '@react-navigation/core';

const Login = () => {
  const [username, setUsername] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const credentials = {
    'user': 'user',
    'pass': 'Test1234'
  };
  const { navigate } = useNavigation();
  const navigateTo = (screen: string) => {
    navigate(screen);
  };
  const loginValidation = () => {
    setUsernameError(false);
    setPasswordError(false);
    if ((username && _isUsernameValid(username)) && (password && _isPasswordValid(password))) {
      if (credentials.user === username && credentials.pass === password) {
        navigateTo('Progress');
      } else {
        console.log('failed');
      }
    } else {
      if (!username) { setUsernameError(true); }
      if (!password) { setPasswordError(true); }
    }
  };
  const handleUsername = (value: string) => {
    setUsername(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const _isUsernameValid = (username: string) => {
    if (username) {
      return (/^(?=.*[a-zA-Z0-9])[^~@#$%^&*+=`|{}:;!.?\"()\[\]\-_]{4,}$/).test(username);
    } else {
      return true;
    }
  };
  const _isPasswordValid = (password: string) => {
    if (password) {
      return (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[^~@#$%^&*+=`|{}:;!.?\"()\[\]\-_]{8,12}$/).test(password);
    } else {
      return true;
    }
  };

  return (
    <Container background='dark'>
      <ScrollView>
        <View style={styles.main}>
          <HeadSection
            textStyle={styles.backText}
            backText='Back'
          />
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
              onChangeText={(value) => { handleUsername(value)}}
              error={!_isUsernameValid(username) || usernameError}
              errorVisible={!_isUsernameValid(username) || usernameError}
              errorMessage='Enter a valid username'
            />
            <TextInputContainer
              icon='lock-outline'
              colorIcon='#50E5C3'
              label='Password'
              placeholder='Type your Password'
              secureTextEntry={true}
              onChangeText={(value) => { handlePassword(value) }}
              error={!_isPasswordValid(password) || passwordError}
              errorVisible={!_isPasswordValid(password) || passwordError}
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
