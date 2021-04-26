import React from 'react';
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

  return (
    <>
      <Container background='dark'>
        <ScrollView>
          <View style={styles.main}>
            <HeadSection
              textStyle={styles.backText}
              backText='Back'
              stepsText='Step 1/4'
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
              />
              <TextInputContainer
                icon='lock-outline'
                colorIcon='#50E5C3'
                label='Your Password'
                placeholder='Type your password'
              />
              <Button
                style={styles.button}
                onPress={() => {
                  navigateTo('SignUpStep2');
                }}
                title='Next'
                color='primary'
              />
              <View style={styles.signUpWithContainer}>
                <Text type='body' style={styles.labelText}>OR SIGN UP WITH</Text>
              </View>
              <View style={styles.socialMedia}>
                <Image
                  style={styles.socialMediaLogo}
                  source={logo_fb}
                />
                <Image
                  style={styles.socialMediaLogo}
                  source={logo_google}
                />
                <Image
                  style={styles.socialMediaLogo}
                  source={logo_tw}
                />
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
