import React, { useState } from 'react';
import { Container } from '@components/Container';
import { SafeAreaView, ScrollView, View } from 'react-native';
import styles from './ForgotPassword.styles';
import ForgotPasswordHeader from './Components/ForgotPasswordHeader';
import { TextInputContainer } from '@components/TextInputContainer';
import ForgotPasswordBottom from './Components/ForgotPasswordBottom';
import { HeadSection } from '@components/HeadSection';
import { forgotPasswordSendEmail } from '../../api/forgotPassword';
import { isEmailValid } from '@utils/index';
import { Snackbar } from '@components/Snackbar';
import { ProgressBar } from 'react-native-paper';
import { getColor } from '@utils/tailwind';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState('');
  const [showProgressBar, setShowProgressBar] = useState(false);
  const handleMessage = () => {
    return snackMessage;
  };
  const handleEmail = (value: string) => {
    setEmail(value);
  };
  const sendEmail = async () => {
    setShowProgressBar(true);
    try {
      await forgotPasswordSendEmail({ email });
      setShowProgressBar(false);
    } catch (e) {
      if (open) setOpen(false);
      setOpen(true);
      setShowProgressBar(false);
      setSnackMessage(e.response.data.error.message);
    }
  };
  return (
    <>
      <Container background='dark'>
        <SafeAreaView>
          <ScrollView>
            <View>
              <HeadSection textStyle={styles.backText} backText='Back' />
              <View>
                <ForgotPasswordHeader
                  viewStyle={styles.containerText}
                  textHeader={styles.textHeader}
                  textSubHeader={styles.textSubHeader}
                />
                <TextInputContainer
                  icon='person-outline'
                  colorIcon={
                    !isEmailValid(email) ? styles.redColor : styles.greenColor
                  }
                  label='Your email'
                  placeholder='myemail@..'
                  onChangeText={(value: string) => {
                    handleEmail(value);
                  }}
                  errorVisible={!isEmailValid(email)}
                  errorMessage='The email you entered is invalid. Please try again'
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    borderColor: !isEmailValid(email) ? styles.redColor : '',
                    borderWidth: !isEmailValid(email) ? 1 : 0
                  }}
                />
                <ForgotPasswordBottom
                  buttonStyle={styles.button}
                  navigationButton={'ForgotPasswordVerification'}
                  buttonTitleStyle={styles.buttonTitle}
                  sendEmail={sendEmail}
                />
                <ProgressBar
                  indeterminate
                  visible={showProgressBar}
                  color={getColor('white')}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Container>
      <Snackbar type='error' visible={open} onDismiss={() => setOpen(false)}>
        {handleMessage()}
      </Snackbar>
    </>
  );
};

export default ForgotPassword;
