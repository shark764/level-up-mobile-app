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
          text='Username or Email'
          placeholder='Username'
        />
      </View>
      <View style={props.viewStyle}>
        <TextInput
          icon='lock-outline'
          text='Type your password'
          placeholder=''
        />
      </View>
    </>
  );
};

export default loginTextInput;
