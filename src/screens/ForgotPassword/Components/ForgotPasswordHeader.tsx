import React from 'react';
import { View, Text } from 'react-native';

export interface Props {
  viewStyle: object;
  textHeader: object;
  textSubHeader: object;
}

const forgotPasswordHeader = (props: Props) => {
  return (
    <>
      <View style={props.viewStyle}>
        <Text style={props.textHeader}>Forgot your</Text>
        <Text style={props.textHeader}>password?</Text>
      </View>
      <View style={props.viewStyle}>
        <Text style={props.textSubHeader}>
          Enter your registered email and we will
        </Text>
        <Text style={props.textSubHeader}>
          get back to you with the reset password
        </Text>
        <Text style={props.textSubHeader}>link and confirmation</Text>
      </View>
    </>
  );
};

export default forgotPasswordHeader;
