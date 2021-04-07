import React from 'react';
import {  View } from 'react-native';
import { TextInput } from '@components/TextInput';
import { faUser, faLock, faArrowRight, faArrowLeft, faChevronLeft, } from '@fortawesome/free-solid-svg-icons';

export interface Props {
    viewStyle:object;
}
 
const loginTextInput = (props: Props) => {
    return (
        <><View style={props.viewStyle}>
            <TextInput icon={faUser} text='Username' placeholder='Choose your username' />
        </View>
            <View style={props.viewStyle}>
                <TextInput icon={faLock} text='Password' placeholder='Type your password' />
            </View></>
    );
}
 
export default loginTextInput;