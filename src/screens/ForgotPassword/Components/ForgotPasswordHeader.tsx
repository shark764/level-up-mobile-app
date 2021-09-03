import React from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';
import { Text } from '@components/Text';

export interface Props {
  viewStyle: StyleProp<ViewStyle>;
  textHeader: StyleProp<ViewStyle>;
  textSubHeader: StyleProp<ViewStyle>;
}

const forgotPasswordHeader = (props: Props) => {
  return (
    <>
      <View style={props.viewStyle}>
        <Text type='heading-1' style={props.textHeader}>
          Forgot your
        </Text>
        <Text type='heading-1' style={props.textHeader}>
          password?
        </Text>
      </View>
      <View style={props.viewStyle}>
        <Text type='body-md' style={props.textSubHeader}>
          Enter your registered email and we will get back to you with the reset
          password link and confirmation
        </Text>
      </View>
    </>
  );
};

export default forgotPasswordHeader;
