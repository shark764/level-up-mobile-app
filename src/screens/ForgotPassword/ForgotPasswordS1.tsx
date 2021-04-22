import React from 'react';

import { SafeAreaView, Text, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './ForgotPasswordS1.styles';
import ForgotPasswordHeader from './ComponentsS1/ForgotPasswordHeader';
import ForgotPasswordInput from './ComponentsS1/ForgotPasswordInput';
import ForgotPasswordBottom from './ComponentsS1/ForgotPasswordBottom';

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
              navigationButton={'SignUp'}
              buttonTitleStyle={styles.buttonTitle}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
