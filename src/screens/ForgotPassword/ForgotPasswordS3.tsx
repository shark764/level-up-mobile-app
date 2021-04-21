import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Text, ScrollView, View, } from 'react-native';
import styles from './ForgotPasswordS3.styles';

import { TextInput } from '@components/TextInput';

import { Button } from '@components/Button';



interface Props { }

const ForgotPasswordReset = (props: Props) => {
    const { navigate } = useNavigation();
    const navigateTo = (screen: string) => {
        navigate(screen);
    };
    return (
        <SafeAreaView style={[styles.loginContainer]}>
            <ScrollView>
                <View style={styles.main}>
                    <View style={styles.backSection}>
                        <Text style={styles.backText}> Back</Text>
                    </View>
                    <View>
                        <View style={styles.containerText}>
                            <Text style={styles.textHeader}>Reset your</Text>
                            <Text style={styles.textHeader}>password</Text>
                        </View>
                        <View style={styles.containerText}>
                            <Text style={styles.textSubHeader}>Create a new password and confirm</Text>
                        </View>
                        <View style={styles.containerInputs}>

                        </View>
                        <View style={styles.containerInputs}>

                        </View>
                        <View style={styles.containerText}>
                            <Button
                                style={styles.button}
                                onPress={() => {
                                    navigateTo('ForgotPasswordConfirm');
                                }}
                                title='Submit'
                                titleStyle={styles.buttonTitle}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ForgotPasswordReset;