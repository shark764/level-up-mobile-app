import React from 'react';
import {  View } from 'react-native';
import { TextInput } from '@components/TextInput';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export interface Props {
    viewStyle: object,
    
}
 
const forgotPasswordInput = (props: Props) => {
    return (
        <><View style={props.viewStyle}>
            <TextInput icon={faEnvelope} text='Email' placeholder='Your Email'/>
          </View></>
    );
}
 
export default forgotPasswordInput;