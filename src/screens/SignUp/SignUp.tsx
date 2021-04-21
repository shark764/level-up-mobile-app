import React from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableHighlight } from 'react-native';
import styles from './SignUp.styles';
import { TextInput } from '@components/TextInput';
import { Button } from '@components/Button';
import { HeadSection } from '@components/HeadSection';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const { navigate } = useNavigation();
  const navigateTo = (screen: string) => {
    navigate(screen);
  };

  return (
    <>
      <SafeAreaView style={[styles.signUpContainer]}>
        <ScrollView>
          <View style={styles.main}>
            <HeadSection
              textStyle={styles.backText}
              backText='Back'
              stepsText='Step 1/3'
            />

            <View style={[styles.mainText]}>
              <View style={styles.titleSection}>
                <Text style={styles.textTitle}>Create Your</Text>
                <Text style={styles.textTitle}>Account</Text>
              </View>
              <View style={styles.input}>
                <TextInput
                  icon={faEnvelope}
                  text='Email'
                  placeholder='Your Email'
                 />
              </View>
              <View style={styles.input}>
                <TextInput
                  icon={faLock}
                  text='Password'
                  placeholder='Type your password'
                 />
              </View>
              <Button
                style={styles.button}
                titleStyle={styles.buttonTitle}
                onPress={() => {
                  navigateTo('SignUpStep2');
                }}
                title='Next'
                color='bg-gray-500'
              />
              <View style={styles.signUpWithContainer}>
                <Text style={styles.labelText}>OR SIGN UP WITH</Text>
              </View>
              <Button
                style={styles.button}
                titleStyle={styles.buttonTitle}
                title='Sign Up with Facebook'
                color='bg-gray-500'
              />
              <Button
                style={styles.button}
                titleStyle={styles.buttonTitle}
                title='Sign Up with Google'
                color='bg-gray-500'
              />

              <TouchableHighlight
                onPress={() => {
                  navigateTo('Login');
                }}>
                <View style={styles.haveAccountContainer}>
                  <Text style={styles.labelText}>Already have an account?
                    <Text style={styles.loginText}> Log In</Text>
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SignUp;
