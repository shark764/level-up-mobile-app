import React from 'react';
import { View, TouchableHighlight, Image } from 'react-native';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-reanimated';
// @ts-ignore
import logo_fb from '../../../assets/social_media/logo_fb.png';
// @ts-ignore
import logo_google from '../../../assets/social_media/logo_google.png';
// @ts-ignore
import logo_tw from '../../../assets/social_media/logo_tw.png';
import { Text } from '@components/Text';
import { getColor } from '@utils/tailwind';


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
    socialMedia: object,
    socialMediaLogo: object,
    loginValidation: () => void;
}

const loginBottom = ({ loginValidation, ...props }: Props) => {
    const { navigate } = useNavigation();
    const navigateTo = (screen: string) => {
        navigate(screen);
    };
    return (
        <View style={props.viewStyle}>
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                <TouchableHighlight onPress={() => {
//                         navigateTo(props.navigationLink);
                    }}
                    underlayColor={getColor('charcoal')}
                >
                    <Text type="body" style={props.linkStyle}>I forgot my password</Text>
                </TouchableHighlight>
            </View>
            <Button
                style={props.buttonStyle}
                onPress={() => { loginValidation() }}
                title='Log In'
                color='primary'
            />
            <View style={props.textDivider}>
                <View style={{ flex: 1, height: 1, backgroundColor: props.colDivider, marginTop: '4.5%' }} />
                <View style={{ width: '50%' }}><Text type="body" style={{ color: 'white', textAlign: 'center' }}>OR LOG IN WITH</Text></View>
                <View style={{ flex: 1, height: 1, backgroundColor: props.colDivider, marginTop: '4.5%' }} />
            </View>

            <View style={props.socialMedia}>
                <TouchableHighlight
                    onPress={() => {
                        navigateTo(props.navigationButton);
                    }}
                    underlayColor='transparent'>
                    <Image
                      style={props.socialMediaLogo}
                      source={logo_fb}
                    />
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => {
                        navigateTo(props.navigationButton);
                    }}
                    underlayColor='transparent'>
                    <Image
                      style={props.socialMediaLogo}
                      source={logo_google}
                    />
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => {
                        navigateTo(props.navigationButton);
                    }}
                    underlayColor='transparent'>
                    <Image
                      style={props.socialMediaLogo}
                      source={logo_tw}
                    />
                </TouchableHighlight>
            </View>

            <TouchableHighlight
                onPress={() => {
                  navigateTo('SignUp');
                }}>
                <Text type="body" style={props.mainFooter}>Don't have an account? <Text type="body" style={props.subFooter}>Sign Up</Text></Text>
            </TouchableHighlight>
        </View>
    );
}

export default loginBottom;
