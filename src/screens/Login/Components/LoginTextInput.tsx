import React from 'react';
import { TextInputContainer } from '@components/TextInputContainer';
import { TextInput } from 'react-native-paper';

export interface Props {
  handleUsername: (value: string) => void;
  handlePassword: (value: string) => void;
}

const loginTextInput = ({ handleUsername, handlePassword }: Props) => {
  return (
    <>
      <TextInputContainer
        icon='person-outline'
        colorIcon='#50E5C3'
        label='Username or Email'
        onChangeText={(value) => {
          handleUsername(value);
        }}
      />

      <TextInputContainer
        icon='lock-outline'
        colorIcon='#50E5C3'
        label='Type Your Password'
        onChangeText={(value) => {
          handlePassword(value);
        }}
      />
    </>
  );
};

export default loginTextInput;
