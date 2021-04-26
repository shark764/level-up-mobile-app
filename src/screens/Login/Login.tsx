import React, { useState } from 'react';
import { Text, ScrollView, View, } from 'react-native';
import styles from './Login.styles';
import LoginHeader from './Components/LoginHeader';
import LoginTextInput from './Components/LoginTextInput';
import LoginBottom from './Components/LoginBottom';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container } from '@components/Container';
import style from '@screens/EnableLocation/EnableLocation.styles';
import { useNavigation } from '@react-navigation/core';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const credentials = {
    'user': 'user',
    'pass': '1234'
  };
  const { navigate } = useNavigation();
  const navigateTo = (screen: string) => {
    navigate(screen);
  };
  const loginValidation = () => {
    if (credentials.user === username && credentials.pass === password) navigateTo('Progress')
    else console.log('failed');
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
          <View style={styles.backSection}>
            <Icon style={styles.backIcon} name='chevron-left' size={26} />
            <Text style={styles.backText}> Back</Text>
          </View>
          <View>
            <LoginHeader
              viewStyle={styles.containerText}
              textStyle={styles.textHeader}
            />
            <LoginTextInput
              handleUsername={handleUsername}
              handlePassword={handlePassword}
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
              loginValidation={loginValidation}
            />
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Login;
