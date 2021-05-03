import React, {useState} from 'react';
import { View, SafeAreaView, ScrollView, TouchableHighlight, Image } from 'react-native';
import styles from './SignUp.styles';
import { Text } from '@components/Text';
import { TextInputContainer } from '@components/TextInputContainer';
import { Button } from '@components/Button';
import { HeadSection } from '@components/HeadSection';
import { Container } from '@components/Container';
import { useNavigation } from '@react-navigation/core';
import logo_fb from '../../assets/social_media/logo_fb.png';
import logo_google from '../../assets/social_media/logo_google.png';
import logo_tw from '../../assets/social_media/logo_tw.png';

const SignUp = () => {
  const { navigate } = useNavigation();
  const navigateTo = (screen: string) => {
    navigate(screen);
  };

  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const _isEmailValid = (email: string) => {
    if (email) {
      return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email);
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

  const validateData = () => {
    setEmailError(false);
    setPasswordError(false);
    if ((email && _isEmailValid(email)) && (password && _isPasswordValid(password))) {
      navigateTo('SignUpStep2');
    } else {
      if (!email) { setEmailError(true); }
      if (!password) { setPasswordError(true); }
    }
  };

  return (
    <>
      <Container background='dark'>
        <ScrollView>
          <View style={styles.main}>
            <HeadSection
              textStyle={styles.backText}
              backText='Back'
              stepsText='Step 1/3'
            />

            <View style={[styles.mainText]}>
              <View style={styles.titleSection}>
                <Text type='heading-1' style={styles.textTitle}>Create Your</Text>
                <Text type='heading-1' style={styles.textTitle}>Account</Text>
              </View>
              <TextInputContainer
                icon='person-outline'
                colorIcon='#50E5C3'
                label='Email'
                placeholder='Your Email'
                value={email}
                onChangeText={(value) => setEmail(value)}
                error={!_isEmailValid(email) || emailError}
                errorVisible={!_isEmailValid(email) || emailError}
                errorMessage='Enter a valid email'
              />
              <TextInputContainer
                icon='lock-outline'
                colorIcon='#50E5C3'
                label='Your Password'
                placeholder='Type your password'
                secureTextEntry={true}
                value={password}
                onChangeText={(value) => setPassword(value)}
                error={!_isPasswordValid(password) || passwordError}
                errorVisible={!_isPasswordValid(password) || passwordError}
                errorMessage='Enter a valid password (At least: 8 characters, 1 lower case letter, 1 upper case letter, no special characters)'
              />
              <Button
                style={styles.button}
                onPress={() => {
                  validateData();
                }}
                title='Next'
                color='primary'
              />
              <View style={styles.signUpWithContainer}>
                  <View style={styles.divider} />
                  <Text type='body' style={styles.labelText}>OR SIGN UP WITH</Text>
                  <View style={styles.divider} />
              </View>
              <View style={styles.socialMedia}>
                <TouchableHighlight
                  onPress={() => {}}
                  underlayColor='transparent'>
                  <Image
                    style={styles.socialMediaLogo}
                    source={logo_fb}
                  />
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => {}}
                  underlayColor='transparent'>
                  <Image
                    style={styles.socialMediaLogo}
                    source={logo_google}
                  />
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => {}}
                  underlayColor='transparent'>
                  <Image
                    style={styles.socialMediaLogo}
                    source={logo_tw}
                  />
                </TouchableHighlight>
              </View>

              <TouchableHighlight
                onPress={() => {
                  navigateTo('Login');
                }}>
                <View style={styles.haveAccountContainer}>
                  <Text type='body' style={styles.labelText}>Already have an account?
                    <Text type='body' style={styles.loginText}> Log In</Text>
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </Container>
    </>
  );
};

export default SignUp;
