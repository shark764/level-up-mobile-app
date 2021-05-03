import React from 'react';
import { View } from 'react-native';
import { Text } from '@components/Text';

export interface Props {
  viewStyle: object;
  textStyle: object;
}

const loginHeader = (props: Props) => {
  return (
    <View style={props.viewStyle}>
      <Text type='heading-1' style={props.textStyle}>
        Log In with
      </Text>
      <Text type='heading-1' style={props.textStyle}>
        Your Account
      </Text>
    </View>
  );
};

export default loginHeader;
