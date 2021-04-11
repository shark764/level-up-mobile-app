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
      <SafeAreaView style={[styles.signUpContainer]}>
        <ScrollView>
          <View style={styles.main}>
            <HeadSection
              textStyle={styles.backText}
              backText='Back'
              stepsText='Step 2/3'
            />

            <View style={[styles.mainText]}>
              <View style={styles.titleSection}>
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
                  onChange={onChange}
                />
              )}

              <Button
                style={styles.button}
                titleStyle={styles.buttonTitle}
                title='Create Account'
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

export default SignUpStep2;
