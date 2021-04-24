import React from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import styles from './SignUp.styles';
import { TextInput } from '@components/TextInput';
import { Button } from '@components/Button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/core';

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
            <View style={styles.headerSection}>
              <View style={styles.backSection}>
                <Icon style={styles.backIcon} name='chevron-left' size={26} />
                <Text style={styles.backText}> Back </Text>
              </View>
              <View>
                <Text style={styles.stepsText}>Step 1/3</Text>
              </View>
            </View>

            <View style={[styles.mainText]}>
              <View style={styles.titleSection}>
                <Text style={styles.textTitle}>Create Your</Text>
                <Text style={styles.textTitle}>Account</Text>
              </View>
              <View style={styles.input}>
                <TextInput
                  icon='mail-outline'
                  text='Email'
                  placeholder='Your email'
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  icon='lock-outline'
                  text='Password'
                  placeholder='Type your password'
                />
              </View>
              <Button
                // style={styles.button}
                // titleStyle={styles.buttonTitle}
                onPress={() => {
                  navigateTo('');
                }}
                title='Next'
                color='primary'
              />
              <View style={styles.signUpWithContainer}>
                <Text style={styles.labelText}>OR SIGN UP WITH</Text>
              </View>
              <Button
                style={styles.button}
                titleStyle={styles.buttonTitle}
                onPress={() => {
                  navigateTo('');
                }}
                title='Sign up with Facebook'
                // color='bg-gray-500'
              />
              <Button
                style={styles.button}
                titleStyle={styles.buttonTitle}
                onPress={() => {
                  navigateTo('');
                }}
                title='Sign up with Google'
                // color='bg-gray-500'
              />

              <View style={styles.haveAccountContainer}>
                <Text style={styles.labelText}>Already have an account?</Text>
                <Text style={styles.loginText}> Log In</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SignUp;
