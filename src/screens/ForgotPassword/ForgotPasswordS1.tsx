import React from 'react';

import { SafeAreaView, ScrollView, View } from 'react-native';
import styles from './ForgotPassword.styles';
import ForgotPasswordHeader from './Components/ForgotPasswordHeader';
import ForgotPasswordInput from './Components/ForgotPasswordInput';
import ForgotPasswordBottom from './Components/ForgotPasswordBottom';
import { HeadSection } from '@components/HeadSection';

const ForgotPassword = () => {
  return (
    <SafeAreaView style={[styles.fpContainer]}>
      <ScrollView>
        <View style={styles.main}>
          <HeadSection
            textStyle={styles.backText}
            backText='Back'
            stepsText='Step 1/4'
          />
          <View>
            <ForgotPasswordHeader
              viewStyle={styles.containerText}
              textHeader={styles.textHeader}
              textSubHeader={styles.textSubHeader}
            />
            <ForgotPasswordInput viewStyle={styles.containerInputs} />
            <ForgotPasswordBottom
              viewStyle={styles.containerText}
              buttonStyle={styles.button}
              navigationButton={'ForgotPasswordVerification'}
              buttonTitleStyle={styles.buttonTitle}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
