import React from 'react';
import { Component } from 'react';
import { Card } from "@components/Card";
import { Container } from "@components/Container";
import { ScrollView, View } from 'react-native';
import styles from './Membership.styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Text } from '@components/Text';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';



export interface Props {

}


const Membership = () => {
    const { navigate } = useNavigation();
    const navigateTo = (screen: string) => {
      navigate(screen);
    };
    return (
        <Container background='dark'>
            <ScrollView>
                <View style={styles.backSection}>
                    <Icon style={styles.backIcon} name='chevron-left' size={26} />
                    <Text type='heading-3' style={styles.textWhite}> Become a member</Text>
                </View>
                <View style={styles.body}>
                    <View>
                        <Text type='heading-4' style={styles.bodyHeaderText}>Memberships</Text>
                    </View>
                    <View style={styles.bodyContent}>
                        <Card cardColor='#393B60'>
                            <View style={[styles.flexColumn]}>
                                <View style={[styles.flexRow, { justifyContent: 'space-between' }]}>
                                    <View style={[styles.flexColumn, { width: '80%' }]}>
                                        <View>
                                            <Text type='body-lg' style={[styles.bodyHeaderText, { textAlign: 'justify' }]}>Membership Free</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text type='body-lg' style={[styles.bodyHeaderText,{marginLeft:15}]}>FREE</Text>
                                    </View>
                                </View>
                                <View style={[styles.flexRow, { marginTop: 10 }]}>
                                    <View style={styles.icon}>
                                        <Icon style={styles.backIcon} name='check-circle' size={16} />
                                    </View>
                                    <View style={{ width: '76%' }}>
                                        <Text type='body' style={[styles.textWhite, { textAlign: 'justify' }]}>Earn coins and redeem at our store</Text>
                                    </View>
                                </View>
                                <View style={styles.flexRow}>
                                    <View style={styles.icon}>
                                        <Icon style={styles.backIcon} name='check-circle' size={16} />
                                    </View>
                                    <View style={{ width: '76%' }}>
                                        <Text type='body' style={[styles.textWhite, { textAlign: 'justify' }]}>Rent Space and create events</Text>
                                    </View>
                                </View>
                                <View style={styles.flexRow}>
                                    <View style={[styles.icon]}>
                                        <Icon style={styles.backIcon} name='check-circle' size={16} />
                                    </View>
                                    <View style={{ width: '76%' }}>
                                        <Text type='body' style={[styles.textWhite, { textAlign: 'justify' }]}>Be part of our leaderboard</Text>
                                    </View>
                                </View>
                                <View style={styles.flexRow}>
                                    <View style={styles.icon}>
                                        <Icon style={styles.backIcon} name='check-circle' size={16} />
                                    </View>
                                    <View style={{ width: '76%' }}>
                                        <Text type='body' style={[styles.textWhite, { textAlign: 'justify' }]}>More</Text>
                                    </View>
                                </View>
                            </View>
                        </Card>
                        <View style={styles.button}>
                            <Button
                                onPress={() => { navigateTo('Consent') }}
                                title='Select'
                                color='primary'
                            />
                        </View>
                        <Card cardColor='#393B60'>
                            <View style={[styles.flexColumn]}>
                                <View style={[styles.flexRow, { justifyContent: 'space-between' }]}>
                                    <View style={[styles.flexColumn, { width: '80%' }]}>
                                        <View>
                                            <Text type='body-lg' style={[styles.bodyHeaderText, { textAlign: 'justify' }]}>Membership Gold</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text type='body-lg' style={[styles.bodyHeaderText,{marginLeft:15}]}>$130.00</Text>
                                    </View>
                                </View>
                                <View style={[styles.flexRow, { marginTop: 10 }]}>
                                    <View style={styles.icon}>
                                        <Icon style={styles.backIcon} name='check-circle' size={16} />
                                    </View>
                                    <View style={{ width: '76%' }}>
                                        <Text type='body' style={[styles.textWhite, { textAlign: 'justify' }]}>6 months</Text>
                                    </View>
                                </View>
                                <View style={styles.flexRow}>
                                    <View style={styles.icon}>
                                        <Icon style={styles.backIcon} name='check-circle' size={16} />
                                    </View>
                                    <View style={{ width: '76%' }}>
                                        <Text type='body' style={[styles.textWhite, { textAlign: 'justify' }]}>Become part of our leaderboard</Text>
                                    </View>
                                </View>
                                <View style={styles.flexRow}>
                                    <View style={[styles.icon]}>
                                        <Icon style={styles.backIcon} name='check-circle' size={16} />
                                    </View>
                                    <View style={{ width: '76%' }}>
                                        <Text type='body' style={[styles.textWhite, { textAlign: 'justify' }]}>Rent space for free once a month</Text>
                                    </View>
                                </View>
                                <View style={styles.flexRow}>
                                    <View style={styles.icon}>
                                        <Icon style={styles.backIcon} name='check-circle' size={16} />
                                    </View>
                                    <View style={{ width: '76%' }}>
                                        <Text type='body' style={[styles.textWhite, { textAlign: 'justify' }]}>Invite 1 friend</Text>
                                    </View>
                                </View>
                            </View>
                        </Card>
                        <View style={styles.button}>
                            <Button
                                onPress={() => { navigateTo('Consent') }}
                                title='Select'
                                color='primary'
                            />
                        </View>
                        <Card cardColor='#393B60'>
                            <View style={[styles.flexColumn]}>
                                <View style={[styles.flexRow, { justifyContent: 'space-between' }]}>
                                    <View style={[styles.flexColumn, { width: '80%' }]}>
                                        <View>
                                            <Text type='body-lg' style={[styles.bodyHeaderText, { textAlign: 'justify'}]}>Membership Black</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text type='body-lg' style={[styles.bodyHeaderText,{marginLeft:15}]}>$180.00</Text>
                                    </View>
                                </View>
                                <View style={[styles.flexRow, { marginTop: 10 }]}>
                                    <View style={styles.icon}>
                                        <Icon style={styles.backIcon} name='check-circle' size={16} />
                                    </View>
                                    <View style={{ width: '76%' }}>
                                        <Text type='body' style={[styles.textWhite, { textAlign: 'justify' }]}>6 months</Text>
                                    </View>
                                </View>
                                <View style={styles.flexRow}>
                                    <View style={styles.icon}>
                                        <Icon style={styles.backIcon} name='check-circle' size={16} />
                                    </View>
                                    <View style={{ width: '76%' }}>
                                        <Text type='body' style={[styles.textWhite, { textAlign: 'justify' }]}>Become part of our leaderboard</Text>
                                    </View>
                                </View>
                                <View style={styles.flexRow}>
                                    <View style={[styles.icon]}>
                                        <Icon style={styles.backIcon} name='check-circle' size={16} />
                                    </View>
                                    <View style={{ width: '76%' }}>
                                        <Text type='body' style={[styles.textWhite, { textAlign: 'justify' }]}>Rent space for free once a month</Text>
                                    </View>
                                </View>
                                <View style={styles.flexRow}>
                                    <View style={styles.icon}>
                                        <Icon style={styles.backIcon} name='check-circle' size={16} />
                                    </View>
                                    <View style={{ width: '76%' }}>
                                        <Text type='body' style={[styles.textWhite, { textAlign: 'justify' }]}>Invite 1 friend</Text>
                                    </View>
                                </View>
                            </View>
                        </Card>
                        <View style={styles.button}>
                            <Button
                                onPress={() => { navigateTo('Consent') }}
                                title='Select'
                                color='primary'
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Container>
    );
}

export default Membership;