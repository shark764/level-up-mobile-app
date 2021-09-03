import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, ScrollView, TouchableHighlight, Image } from 'react-native';
import styles from './SignUp.styles';
import { Text } from '@components/Text';
import { TextInputContainer } from '@components/TextInputContainer';
import { Button } from '@components/Button';
import { HeadSection } from '@components/HeadSection';
import { Container } from '@components/Container';
import { useNavigation } from '@react-navigation/core';
import { isEmailValid, isPasswordValid } from '@utils/index';
import { setUserData } from '@state/signUpSlice';
// @ts-ignore
import logo_fb from '../../assets/social_media/logo_fb.png';
// @ts-ignore
import logo_google from '../../assets/social_media/logo_google.png';
// @ts-ignore
import logo_tw from '../../assets/social_media/logo_tw.png';

const SignUp = () => {
  const dispatch = useDispatch();

  const { navigate } = useNavigation();
  const navigateTo = (screen: string) => {
    navigate(screen);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const showSignUpWith = false;

  const validateData = () => {
    setEmailError(false);
    setPasswordError(false);
    if (email && isEmailValid(email) && password && isPasswordValid(password)) {
      dispatch(setUserData({ email: email, password: password }));
      navigateTo('EnableLocation');
    } else {
      if (!email) {
        setEmailError(true);
      }
      if (!password) {
        setPasswordError(true);
      }
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
                <Text type='heading-1' style={styles.textTitle}>
                  Create Your
                </Text>
                <Text type='heading-1' style={styles.textTitle}>
                  Account
                </Text>
              </View>
              <TextInputContainer
                icon='person-outline'
                colorIcon='#50E5C3'
                label='Email'
                placeholder='Your Email'
                value={email}
                onChangeText={(value) => setEmail(value)}
                // error={!isEmailValid(email) || emailError}
                errorVisible={!isEmailValid(email) || emailError}
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
                // error={!isPasswordValid(password) || passwordError}
                errorVisible={!isPasswordValid(password) || passwordError}
                errorMessage='Enter a valid password (At least: 8 characters, 1 lower case letter, 1 upper case letter, 1 number, no special characters)'
              />
              <Button
                style={styles.button}
                onPress={() => {
                  validateData();
                }}
                title='Next'
                color='primary'
              />
              {showSignUpWith && (
                <>
                  <View style={styles.signUpWithContainer}>
                    <View style={styles.divider} />
                    <Text type='body' style={styles.labelText}>
                      OR SIGN UP WITH
                    </Text>
                    <View style={styles.divider} />
                  </View>
                  <View style={styles.socialMedia}>
                    <TouchableHighlight
                      onPress={() => {}}
                      underlayColor='transparent'>
                      <Image style={styles.socialMediaLogo} source={logo_fb} />
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
                      <Image style={styles.socialMediaLogo} source={logo_tw} />
                    </TouchableHighlight>
                  </View>
                </>
              )}

              <TouchableHighlight
                onPress={() => {
                  navigateTo('Login');
                }}>
                <View style={styles.haveAccountContainer}>
                  <Text type='body' style={styles.labelText}>
                    Already have an account?
                    <Text type='body' style={styles.loginText}>
                      {' '}
                      Log In
                    </Text>
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
