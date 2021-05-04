import React from 'react';
import { View } from 'react-native';
import { TextInput } from '@components/TextInput';

export interface Props {
  viewStyle: object;
}

const forgotPasswordInput = (props: Props) => {
  return (
    <>
      <View style={props.viewStyle}>
        <TextInput icon='mail-outline' text='Email' placeholder='Your Email' />
      </View>
    </>
  );
};

export default forgotPasswordInput;
