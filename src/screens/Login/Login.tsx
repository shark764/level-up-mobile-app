import React from 'react';
import { Text, ScrollView, View, } from 'react-native';
import styles from './Login.styles';
import LoginHeader from './Components/LoginHeader';
import LoginTextInput from './Components/LoginTextInput';
import LoginBottom from './Components/LoginBottom';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container } from '@components/Container';

const Login = () => {
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
            <LoginTextInput viewStyle={styles.containerInputs} />
            <LoginBottom
              viewStyle={styles.containerBottom}
              linkStyle={styles.link}
              navigationLink={'ForgotPassword'}
              buttonStyle={styles.button}
              navigationButton={'SignUp'}
              buttonTittle={styles.buttonTitle}
              mainFooter={styles.mainFooter}
              subFooter={styles.subFooter}
              textDivider={styles.textDivider}
              colDivider={styles.colDivider}
            />
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Login;
