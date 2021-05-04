<<<<<<< HEAD
import React, {useState} from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableHighlight } from 'react-native';
import styles from './SignUpStep2.styles';
import { TextInput } from '@components/TextInput';
import { Button } from '@components/Button';
import { HeadSection } from '@components/HeadSection';
import { faUser, faCalendar } from '@fortawesome/free-regular-svg-icons';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { convertDateMDY } from '@utils'
=======
import React, { useState } from 'react';
import { View, ScrollView, TouchableHighlight } from 'react-native';
import styles from './SignUpStep2.styles';
import { Text } from '@components/Text';
import { TextInputContainer } from '@components/TextInputContainer';
import { Button } from '@components/Button';
import { HeadSection } from '@components/HeadSection';
import { Container } from '@components/Container';
import { useNavigation } from '@react-navigation/core';
import DateTimePicker from '@react-native-community/datetimepicker';
import { convertDateMDY, isUsernameValid } from '@utils/index';
>>>>>>> e129f18123dfcdec05ae542f229d24c442cb39d4

const SignUpStep2 = () => {
  const { navigate } = useNavigation();
  const navigateTo = (screen: string) => {
    navigate(screen);
  };
  const today = new Date();

<<<<<<< HEAD
=======
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState(false);
>>>>>>> e129f18123dfcdec05ae542f229d24c442cb39d4
  const [date, setDate] = useState(today);
  const [dateString, setDateString] = useState(convertDateMDY(today));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      setDate(selectedDate);
      setDateString(convertDateMDY(selectedDate));
    }
  };

<<<<<<< HEAD
=======


>>>>>>> e129f18123dfcdec05ae542f229d24c442cb39d4
  const showDatePicker = () => {
    setShow(true);
  };

<<<<<<< HEAD
  return (
    <>
      <SafeAreaView style={[styles.signUpContainer]}>
=======
  const validateData = () => {
    setUsernameError(false);
    if (username && isUsernameValid(username)) {
      navigateTo('UploadPic');
    } else {
      if (!username) {
        setUsernameError(true);
      }
    }
  };

  return (
    <>
      <Container background='dark'>
>>>>>>> e129f18123dfcdec05ae542f229d24c442cb39d4
        <ScrollView>
          <View style={styles.main}>
            <HeadSection
              textStyle={styles.backText}
              backText='Back'
              stepsText='Step 2/3'
            />

            <View style={[styles.mainText]}>
              <View style={styles.titleSection}>
<<<<<<< HEAD
                <Text style={styles.textTitle}>Create Your</Text>
                <Text style={styles.textTitle}>Account</Text>
              </View>
              <View style={styles.input}>
                <TextInput
                  icon={faUser}
                  text='Username'
                  placeholder='Choose your username'
                 />
              </View>
              <View style={styles.input}>
                <TextInput
                  icon={faCalendar}
                  text='Date of Birth'
                  showSoftInputOnFocus={false}
                  onPressIn={showDatePicker}
                  value={dateString}
                 />
              </View>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  timeZoneOffsetInMinutes={0}
                  value={date}
                  mode="date"
                  is24Hour={true}
                  display="default"
=======
                <Text type='heading-1' style={styles.textTitle}>
                  Your
                </Text>
                <Text type='heading-1' style={styles.textTitle}>
                  Account
                </Text>
              </View>
              <TextInputContainer
                icon='person-outline'
                colorIcon='#50E5C3'
                label='Username'
                placeholder='Choose your username'
                onChangeText={(value) => setUsername(value)}
                // error={!isUsernameValid(username) || usernameError}
                errorVisible={!isUsernameValid(username) || usernameError}
                errorMessage='Enter a valid username'
              />
              <TextInputContainer
                icon='calendar-today'
                colorIcon='#50E5C3'
                label='Date of Birth'
                placeholder='mm/dd/yyyy'
                onPressIn={() => showDatePicker()}
                showSoftInputOnFocus={false}
                value={dateString}
              />
              {show && (
                <DateTimePicker
                  testID='dateTimePicker'
                  timeZoneOffsetInMinutes={0}
                  value={date}
                  mode='date'
                  is24Hour={true}
                  display='default'
>>>>>>> e129f18123dfcdec05ae542f229d24c442cb39d4
                  onChange={onChange}
                />
              )}

              <Button
                style={styles.button}
<<<<<<< HEAD
                titleStyle={styles.buttonTitle}
                title='Create Account'
                color='bg-gray-500'
=======
                title='Create Account'
                color='primary'
                onPress={() => validateData()}
>>>>>>> e129f18123dfcdec05ae542f229d24c442cb39d4
              />

              <TouchableHighlight
                onPress={() => {
                  navigateTo('Login');
                }}>
                <View style={styles.haveAccountContainer}>
<<<<<<< HEAD
                  <Text style={styles.labelText}>Already have an account?
                    <Text style={styles.loginText}> Log In</Text>
=======
                  <Text type='body' style={styles.labelText}>
                    Already have an account?
                    <Text type='body' style={styles.loginText}>
                      Log In
                    </Text>
>>>>>>> e129f18123dfcdec05ae542f229d24c442cb39d4
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
<<<<<<< HEAD
      </SafeAreaView>
=======
      </Container>
>>>>>>> e129f18123dfcdec05ae542f229d24c442cb39d4
    </>
  );
};

export default SignUpStep2;
