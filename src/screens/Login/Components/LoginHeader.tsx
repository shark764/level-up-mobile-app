import React from 'react';
import {  View, Text } from 'react-native';

export interface Props {
    viewStyle: object,
    textStyle: object,
}
 
const loginHeader = (props: Props) => {
    return (
        <View style= {props.viewStyle}>
            <Text style={props.textStyle}>Log In with</Text>
            <Text style={props.textStyle}>Your Account</Text>
      </View>
    );
}
 
export default loginHeader;