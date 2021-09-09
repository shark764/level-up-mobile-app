import React, { useState } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { View, ScrollView, TouchableHighlight } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import { Snackbar } from '@components/Snackbar';
import styles from './SignUpStep2.styles';
import { Text } from '@components/Text';
import { TextInputContainer } from '@components/TextInputContainer';
import { Button } from '@components/Button';
import { HeadSection } from '@components/HeadSection';
import { Container } from '@components/Container';
import { useNavigation } from '@react-navigation/core';
import DateTimePicker from '@react-native-community/datetimepicker';
import { convertDateMDY, isUsernameValid } from '@utils/index';
import type { RootState } from '@state/reducer';
import {
  sendSignUp,
  getUserData,
  getRegisterResponse
} from '@state/signUpSlice';

type Props = {
  registerResponseStatus: any;
};

const SignUpStep2 = (props: Props) => {
  const dispatch = useDispatch();
  const UserData = useSelector(getUserData);
  const { navigate } = useNavigation();
  const navigateTo = (screen: string) => {
    navigate(screen);
  };
  const today = new Date();

  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [date, setDate] = useState(today);
  const [dateString, setDateString] = useState(convertDateMDY(today));
  const [showCalendar, setShowCalendar] = useState(false);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const onChange = (_: Event, selectedDate?: Date) => {
    setShowCalendar(false);
    if (selectedDate) {
      setDate(selectedDate);
      setDateString(convertDateMDY(selectedDate));
    }
  };

  const showDatePicker = () => {
    setShowCalendar(true);
  };

  const validateData = () => {
    setUsernameError(false);
    if (username && isUsernameValid(username)) {
      setShowProgressBar(true);
      dispatch(sendSignUp(UserData));
    } else {
      if (!username) {
        setUsernameError(true);
      }
    }
  };

  if (props.registerResponseStatus) {
    if (props.registerResponseStatus.status === 'success') {
      if (showProgressBar) {
        setShowProgressBar(false);
        navigateTo('EnableLocation');
      }
    } else {
      if (showProgressBar) {
        setShowProgressBar(false);
        setShowSnackbar(true);
      }
    }
  }

  return (
    <>
      <Container background='dark'>
        <ScrollView>
          <View style={styles.main}>
            <HeadSection
              textStyle={styles.backText}
              backText='Back'
              stepsText='Step 2/3'
            />

            <View style={[styles.mainText]}>
              <View style={styles.titleSection}>
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
              {showCalendar && (
                <DateTimePicker
                  testID='dateTimePicker'
                  timeZoneOffsetInMinutes={0}
                  value={date}
                  mode='date'
                  is24Hour={true}
                  display='default'
                  onChange={onChange}
                />
              )}

              <Button
                style={styles.button}
                title='Create Account'
                color='primary'
                onPress={() => validateData()}
              />
              <ProgressBar
                indeterminate
                visible={showProgressBar}
                color={Colors.white}
              />

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

      {showSnackbar && (
        <Snackbar
          type='error'
          visible={showSnackbar}
          onDismiss={() => setShowSnackbar(false)}>
          {props.registerResponseStatus.error.message}
        </Snackbar>
      )}
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    registerResponseStatus: getRegisterResponse(state)
  };
};

export default connect(mapStateToProps)(SignUpStep2);
