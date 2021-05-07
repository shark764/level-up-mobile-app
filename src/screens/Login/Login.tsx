import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import styles from './Login.styles';
import LoginHeader from './Components/LoginHeader';
// import LoginTextInput from './Components/LoginTextInput';
import LoginBottom from './Components/LoginBottom';
import { Container } from '@components/Container';
import { HeadSection } from '@components/HeadSection';
import { TextInputContainer } from '@components/TextInputContainer';
import { useNavigation } from '@react-navigation/core';
import { isUsernameValid, isPasswordValid } from '@utils/index';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const credentials = {
    user: 'user',
    pass: 'Test1234'
  };
  const { navigate } = useNavigation();
  const navigateTo = (screen: string) => {
    navigate(screen);
  };
  const loginValidation = () => {
    setUsernameError(false);
    setPasswordError(false);
    if (
      username &&
      isUsernameValid(username) &&
      password &&
      isPasswordValid(password)
    ) {
      if (credentials.user === username && credentials.pass === password) {
        navigateTo('Progress');
      } else {
        console.info('failed');
      }
    } else {
      if (!username) {
        setUsernameError(true);
      }
      if (!password) {
        setPasswordError(true);
      }
    }
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
