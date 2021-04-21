import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-reanimated';

export interface Props {
    viewStyle: object,
    linkStyle: object,
    navigationLink: string,
    buttonStyle: object,
    navigationButton: string,
    buttonTittle: object,
    mainFooter: object,
    subFooter: object,
    textDivider: object,
    colDivider: string

}

const loginBottom = (props: Props) => {
    const { navigate } = useNavigation();
    const navigateTo = (screen: string) => {
      navigate(screen);
    };
    return (
        <View style={props.viewStyle}>
            <View style={{flexDirection:'row', alignSelf:'flex-end'}}>  
                <Text style={props.linkStyle} onPress={() => {
                    navigateTo(props.navigationLink);
                    }}>I forgot my password
                </Text>
            </View>
            <Button
                style={props.buttonStyle}
                onPress={() => {
                navigateTo(props.navigationButton);
                }}
                title='Log In'
                titleStyle={props.buttonTittle}
            />
            <View style={props.textDivider}>
                <View style={{flex: 1, height: 1, backgroundColor:props.colDivider, marginTop:'2.5%'}} />
                <View style={{width:'50%'}}><Text style={{color:props.colDivider, textAlign:'center'}}>OR LOG IN WITH</Text></View>
                <View style={{flex: 1, height: 1, backgroundColor:props.colDivider, marginTop:'2.5%'}} />
            </View>
            <Button
                style={props.buttonStyle}
                onPress={() => {
                navigateTo(props.navigationButton);
                }}
                title='Facebook'
                titleStyle={props.buttonTittle}
            />
            <Button
                style={props.buttonStyle}
                onPress={() => {
                navigateTo(props.navigationButton);
                }}
                title='Google'
                titleStyle={props.buttonTittle}
            />
            <Text style={props.mainFooter}>Don't have an account? <Text style={props.subFooter}>Sign Up</Text></Text> 
        </View>        
    );
}
 
export default loginBottom;
