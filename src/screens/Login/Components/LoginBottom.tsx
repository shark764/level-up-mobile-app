import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-reanimated';
import facebook_image from '../assets/facebook_image';
import google_image from '../assets/google_image';
import twitter_image from '../assets/twitter_image';



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
    colDivider: string,
    circle: object,

}

const loginBottom = (props: Props) => {
    const { navigate } = useNavigation();
    const navigateTo = (screen: string) => {
        navigate(screen);
    };
    return (
        <View style={props.viewStyle}>
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
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
                color='primary'
            />
            <View style={props.textDivider}>
                <View style={{ flex: 1, height: 1, backgroundColor: props.colDivider, marginTop: '2.5%' }} />
                <View style={{ width: '50%' }}><Text style={{ color: props.colDivider, textAlign: 'center' }}>OR LOG IN WITH</Text></View>
                <View style={{ flex: 1, height: 1, backgroundColor: props.colDivider, marginTop: '2.5%' }} />
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginTop: 25, marginBottom: 35 }}>

                <TouchableHighlight
                    style={props.circle}
                    onPress={() => {
                        navigateTo(props.navigationButton);
                    }}
                    underlayColor='white'                >
                    <Image
                        style={{
                            width: 20,
                            height: 40, marginTop: 13, marginLeft: 22
                        }}
                        source={{
                            uri: facebook_image,
                        }}
                    />
                </TouchableHighlight>

                <TouchableHighlight
                    style={props.circle}
                    onPress={() => {
                        navigateTo(props.navigationButton);
                    }}
                    underlayColor='white'                >
                    <Image
                        style={{
                            width: 37,
                            height: 37, marginTop: 13, marginLeft: 13
                        }}
                        source={{
                            uri: google_image,
                        }}
                    />
                </TouchableHighlight>

                <TouchableHighlight
                    style={props.circle}
                    onPress={() => {
                        navigateTo(props.navigationButton);
                    }}
                    underlayColor='white'                >
                    <Image
                        style={{
                            width: 37,
                            height: 37, marginTop: 13, marginLeft: 14
                        }}
                        source={{
                            uri: twitter_image,
                        }}
                    />
                </TouchableHighlight>

            </View>
            <Text style={props.mainFooter}>Don't have an account? <Text style={props.subFooter}>Sign Up</Text></Text>
        </View>
    );
}

export default loginBottom;
