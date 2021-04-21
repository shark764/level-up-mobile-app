import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@components/Button';
import styles from './ForgotPassword.styles';
import { View, Text, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export interface Props {

}

const ForgotPasswordVerification = () => {
    const { navigate } = useNavigation();
    const navigateTo = (screen: string) => {
      navigate(screen);
    };  
    return (
        <SafeAreaView style={[styles.fpContainer]}>
            <ScrollView>
                <View style={styles.main}>
                    <View style={styles.backSection}>
                        <FontAwesomeIcon style={styles.backIcon} icon={faChevronLeft} size={16} />
                        <Text style={styles.backText}> Back</Text>
                    </View>
                    <View style={styles.containerText}>
                        <Text style={styles.textHeader}>Verification</Text>
                    </View>
                    <View style={styles.verication}>
                        <Text style={styles.textSubHeader}>Enter the verification code we just sent on</Text>
                        <Text style={styles.textSubHeader}>your email address</Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: 'black', width: '75%', alignSelf: 'center', marginTop:75, marginBottom:30}}>
                        <View style={{ width: '25%' }}>
                            <View style={{ borderBottomColor: "white", borderBottomWidth: 1, alignSelf: 'center' }}>
                                <TextInput style={{ textAlign: "center", color: 'white', fontSize: 24, paddingRight: 10, paddingLeft: 10 }} placeholderTextColor="white" keyboardType="numeric" maxLength={1} placeholder="0" autoFocus={true} />
                            </View>
                        </View>
                        <View style={{ width: '25%' }}>
                            <View style={{ borderBottomColor: "white", borderBottomWidth: 1, alignSelf: 'center' }}>
                                <TextInput style={{ textAlign: "center", color: 'white', fontSize: 24, paddingRight: 10, paddingLeft: 10 }} placeholderTextColor="white" keyboardType="numeric" maxLength={1} placeholder="0" autoFocus={true} />
                            </View>
                        </View>
                        <View style={{ width: '25%' }}>
                            <View style={{ borderBottomColor: "white", borderBottomWidth: 1, alignSelf: 'center' }}>
                                <TextInput style={{ textAlign: "center", color: 'white', fontSize: 24, paddingRight: 10, paddingLeft: 10 }} placeholderTextColor="white" keyboardType="numeric" maxLength={1} placeholder="0" autoFocus={true} />
                            </View>
                        </View>
                        <View style={{ width: '25%' }}>
                            <View style={{ borderBottomColor: "white", borderBottomWidth: 1, alignSelf: 'center' }}>
                                <TextInput style={{ textAlign: "center", color: 'white', fontSize: 24, paddingRight: 10, paddingLeft: 10 }} placeholderTextColor="white" keyboardType="numeric" maxLength={1} placeholder="0" autoFocus={true} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.containerText}>
                        <Button
                            style={styles.button}
                            onPress={() => {
                                navigateTo('ForgotPasswordReset');
                            }}
                            title='Verify'
                            color='bg-gray-400'
                            titleStyle={styles.buttonTitle}
                        />
                        <View style={styles.containerBottom}>
                            <Text style={styles.mainFooter}>Don't receive a code? <Text style={styles.subFooter}>Resend</Text></Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ForgotPasswordVerification;