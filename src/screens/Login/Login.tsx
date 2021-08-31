import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import styles from './Login.styles';
import LoginHeader from './Components/LoginHeader';
import LoginBottom from './Components/LoginBottom';
import { Container } from '@components/Container';
import { HeadSection } from '@components/HeadSection';
import { TextInputContainer } from '@components/TextInputContainer';
import { useNavigation } from '@react-navigation/core';
import { isEmailValid, isPasswordValid } from '@utils/index';
import { login } from '../../api/login.js';
import { useDispatch } from 'react-redux';
import { setAppData } from '@state/appDataSlice';
//@ts-ignore
//import SnackBar from 'react-native-snackbar-component';
import { Snackbar } from '@components/Snackbar';
import { ProgressBar } from 'react-native-paper';
import { getColor } from '@utils/tailwind';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [open, setOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState('');
  const [showProgressBar, setShowProgressBar] = useState(false);
  const { navigate } = useNavigation();

  const navigateTo = (screen: string) => {
    navigate(screen);
  };
  const loginValidation = async () => {
    setUsernameError(false);
    setPasswordError(false);
    setShowProgressBar(true);
    const credentials = {
      email: username,
      password
    };
    try {
      const result = await login(credentials);
      try {
        //@ts-ignore
        dispatch(setAppData({ accessToken: result.data.accessToken }));
        //@ts-ignore
        dispatch(setAppData({ authToken: result.data.authorizationToken }));
      } catch (e) {
        console.error(e);
      }
      setShowProgressBar(false);
      navigateTo('Progress');
    } catch (e) {
      if (open) setOpen(false);
      setOpen(true);
      setShowProgressBar(false);
      setSnackMessage(e.response.data.error.message);
    }
  };
  const handleUsername = (value: string) => {
    setUsername(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleMessage = () => {
    return snackMessage;
  };

  return (
    <>
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
                errorVisible={!isEmailValid(username) || usernameError}
                errorMessage='Enter a valid username or email'
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
          <ProgressBar
            indeterminate
            visible={showProgressBar}
            color={getColor('white')}
          />
        </ScrollView>
      </Container>
      <Snackbar type='error' visible={open} onDismiss={() => setOpen(false)}>
        {handleMessage()}
      </Snackbar>
    </>
  );
};

export default Login;
