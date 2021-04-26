import { Container } from "@components/Container";
import { Text } from "@components/Text";
import styles from "./RangeProfile.styles";
import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { TextInputContainer } from "@components/TextInputContainer";
import { Card } from "@components/Card";
import {default as Icon} from 'react-native-vector-icons/Feather';
import {default as CommunityIcon} from 'react-native-vector-icons/MaterialCommunityIcons';
// @ts-ignore
import homeBackground from '@assets/images/evan-nesbitt.png';
// @ts-ignore
import cafire from '@assets/images/ca-fire.png';
import { Button } from "@components/Button";

export interface Props {

}

const RangeProfile = () => {
    return (
        <Container background='dark' defaultPadding={false}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <ImageBackground source={homeBackground} style={stylesx.image}>
                        <View style={{height:'100%'}}>
                            <View style={{ flexDirection: 'row', marginLeft: 15, marginTop:25 }}>
                                <View>
                                    <Icon name='chevron-left' size={26} style={{ color: 'white' }} />
                                </View>
                                <View>
                                    <Text type='body' style={{ color: 'white' }}> Back</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'column', alignItems: 'flex-end', marginTop:160 }}>
                                <View style={{ flexDirection: 'row', marginRight: 20, backgroundColor: '#14162B', borderRadius: 5, padding: 7, paddingRight: 12, paddingLeft: 12 }}>
                                    <View>
                                        <CommunityIcon name='image' size={18} style={{ color: '#9BB1D2' }} />
                                    </View>
                                    <View>
                                        <Text type='heading-6' style={{ color: '#9BB1D2' }}>  PHOTOS</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ flexDirection: 'column', backgroundColor:'#24263F'}}>
                    <View style={styles.bodyHeaderContainer}>
                        <View style={{ flexDirection: 'row', marginBottom: 25 }}>
                            <View style={{ marginRight: 15, marginTop: 8 }}>
                                <Image style={{ width: 50, height: 50 }} source={cafire} />
                            </View>
                            <View style={{ marginRight: 15 }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <View>
                                        <Text type='heading-2' style={{ color: 'white' }}>CA Fire</Text>
                                    </View>
                                    <View>
                                        <Text type='body' style={styles.members}>467 Members</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text type="body-sm" style={{ color: '#9BB1D2', textAlign: 'justify' }}>Facility description nullam enim odio, porttitor eget enim eget, lacinia sollicitudin ipsum. Phasellus quis ante in lacus bibendum aliquam.</Text>
                        </View>
                    </View>
                    <View style={styles.subBodyContainer}>
                        <View style={{ borderBottomColor: '#9BB1D2', borderBottomWidth: 1, flexDirection: 'row', padding: 16 }}>
                            <View>
                                <Icon color={'#9BB1D2'} name='credit-card' size={26} style={{ marginRight: 15, marginTop: '5%' }} />
                            </View>
                            <View>
                                <Text type='body' style={{ color: '#9BB1D2' }}>Free membership</Text>
                            </View>
                        </View>
                        <View style={{ borderBottomColor: '#9BB1D2', borderBottomWidth: 1, flexDirection: 'row', padding: 16 }}>
                            <View>
                                <Icon color={'#9BB1D2'} name='credit-card' size={26} style={{ marginRight: 15, marginTop: '5%' }} />
                            </View>
                            <View>
                                <Text type='body' style={{ color: '#9BB1D2' }}>2715 Ash Dr. San Jose, South Dakota 834475, United States</Text>
                            </View>
                        </View>
                        <View style={{ borderBottomColor: '#9BB1D2', borderBottomWidth: 1, flexDirection: 'row', padding: 16 }}>
                            <View>
                                <Icon color={'#9BB1D2'} name='credit-card' size={26} style={{ marginRight: 15, marginTop: '5%' }} />
                            </View>
                            <View>
                                <Text type='body' style={{ color: '#9BB1D2' }}>Open Now</Text>
                            </View>
                        </View>
                        <View style={{ borderBottomColor: '#9BB1D2', borderBottomWidth: 1, flexDirection: 'row', padding: 16 }}>
                            <View>
                                <Icon color={'#9BB1D2'} name='credit-card' size={26} style={{ marginRight: 15, marginTop: '10%' }} />
                            </View>
                            <View>
                                <Text type='body' style={{ color: '#9BB1D2' }}>(316) 555-0116</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 35, marginBottom:20}}>
                            <Button
                                /*onPress={() => {
                                        navigateTo('');
                                    }}*/
                                title='Become a member'
                                color='primary'
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>

        </Container>
    );
};

const stylesx = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        height: '100%'
    }
});

export default RangeProfile;