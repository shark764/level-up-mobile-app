import React from 'react';
import {  View, Text } from 'react-native';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';

export interface Props {
    viewStyle: object,
    linkStyle: object,
    navigationLink: string,
    buttonStyle: object,
    navigationButton: string,
    buttonTittle: object,
    mainFooter: object,
    subFooter: object
}
 
const loginBottom = (props: Props) => {
    const { navigate } = useNavigation();
    const navigateTo = (screen: string) => {
      navigate(screen);
    };
    return (
        <View style={props.viewStyle}>
            <Text style={props.linkStyle} onPress={() => {
                navigateTo(props.navigationLink);
                }}>I forgot my password
            </Text>
            <Button
                style={props.buttonStyle}
                onPress={() => {
                navigateTo(props.navigationButton);
                }}
                title='Log In'
                color= 'bg-gray-400 w-full rounded'
                titleStyle={props.buttonTittle}
            />
            <Text style={props.mainFooter}>Don't have an account? <Text style={props.subFooter}>Sing Up</Text></Text> 
        </View>        
    );
}
 
export default loginBottom;