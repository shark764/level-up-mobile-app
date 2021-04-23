import React from 'react';

import { SafeAreaView, Text, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './ForgotPassword.styles';
import ForgotPasswordHeader from './Components/ForgotPasswordHeader';
import ForgotPasswordInput from './Components/ForgotPasswordInput';
import ForgotPasswordBottom from './Components/ForgotPasswordBottom';

const ForgotPassword = () => {
  return (
    <SafeAreaView style={[styles.fpContainer]}>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.backSection}>
            <Icon style={styles.backIcon} name='chevron-left' size={26} />
            <Text style={styles.backText}> Back</Text>
          </View>
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
