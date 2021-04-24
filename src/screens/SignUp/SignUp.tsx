import React from 'react';
import { View, SafeAreaView, ScrollView, TouchableHighlight } from 'react-native';
import styles from './SignUp.styles';
import { Text } from '@components/Text';
import { TextInputContainer } from '@components/TextInputContainer';
import { Button } from '@components/Button';
import { HeadSection } from '@components/HeadSection';
import { Container } from '@components/Container';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/core';

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
                label='Username or Email'
              />
              <TextInputContainer
                icon='lock-outline'
                colorIcon='#50E5C3'
                label='Your Password'
              />
              <Button
                onPress={() => {
                  navigateTo('SignUpStep2');
                }}
                title='Next'
                color='primary'
              />
              <View style={styles.signUpWithContainer}>
                <Text type='body' style={styles.labelText}>OR SIGN UP WITH</Text>
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
