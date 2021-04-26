import React, {useState} from 'react';
import { View, SafeAreaView, ScrollView, TouchableHighlight } from 'react-native';
import styles from './SignUpStep2.styles';
import { Text } from '@components/Text';
import { TextInputContainer } from '@components/TextInputContainer';
import { Button } from '@components/Button';
import { HeadSection } from '@components/HeadSection';
import { Container } from '@components/Container';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/core';
import DateTimePicker from '@react-native-community/datetimepicker';
import { convertDateMDY } from '@utils'

const SignUpStep2 = () => {
  const { navigate } = useNavigation();
  const navigateTo = (screen: string) => {
    navigate(screen);
  };
  const today = new Date();

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

  const showDatePicker = () => {
    setShow(true);
  };

  return (
    <>
      <Container background='dark'>
        <ScrollView>
          <View style={styles.main}>
            <HeadSection
              textStyle={styles.backText}
              backText='Back'
              stepsText='Step 2/4'
            />

            <View style={[styles.mainText]}>
              <View style={styles.titleSection}>
                <Text type='heading-1' style={styles.textTitle}>Your</Text>
                <Text type='heading-1' style={styles.textTitle}>Account</Text>
              </View>
              <TextInputContainer
                icon='person-outline'
                colorIcon='#50E5C3'
                label='Username'
                placeholder='Choose your username'
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
                  testID="dateTimePicker"
                  timeZoneOffsetInMinutes={0}
                  value={date}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}

              <Button
                style={styles.button}
                title='Create Account'
                color='primary'
                onPress={() => navigateTo('UploadPic')}
              />

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

export default SignUpStep2;
