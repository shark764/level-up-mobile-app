import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from '@components/TextInput';


export interface Props {
  viewStyle: object;
}

const loginTextInput = (props: Props) => {
  return (
    <>
      <View style={props.viewStyle}>
        <TextInput
          icon='perm-identity'
          text='Username'
          placeholder='Choose your username'
        />
      </View>
      <View style={props.viewStyle}>
        <TextInput
          icon='lock-outline'
          text='Password'
          placeholder='Type your password'
        />
      </View>
    </>
  );
};

export default loginTextInput;
