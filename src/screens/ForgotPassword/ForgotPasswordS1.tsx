import React from 'react';

import { SafeAreaView, Text, ScrollView, View, Image } from 'react-native';
import { Button } from '@components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from './ForgotPasswordS1.styles';
import { faChevronLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ForgotPasswordHeader from './ComponentsS1/ForgotPasswordHeader';
import ForgotPasswordInput from './ComponentsS1/ForgotPasswordInput';
import ForgotPasswordBottom from './ComponentsS1/ForgotPasswordBottom';


interface Props {}

const ForgotPassword = (props: Props) => {
  
  return (
    <SafeAreaView style={[styles.fpContainer]}>
    <ScrollView>
      <View style={styles.main}>
        <View style={styles.backSection}>
          <FontAwesomeIcon style={styles.backIcon} icon={faChevronLeft} size={16}/>
          <Text style={styles.backText}> Back</Text> 
        </View>
        <View>
          <ForgotPasswordHeader viewStyle={styles.containerText} textHeader={styles.textHeader} textSubHeader={styles.textSubHeader}/>
          <ForgotPasswordInput viewStyle={styles.containerInputs}/>
          <ForgotPasswordBottom viewStyle={styles.containerText} buttonStyle={styles.button} navigationButton={'SignUp'} buttonTitleStyle={styles.buttonTitle}/>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
  );
};

export default ForgotPassword;
