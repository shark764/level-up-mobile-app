import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Text, ScrollView, View, } from 'react-native';
import styles from './ForgotPasswordS3.styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TextInput } from '@components/TextInput';
import { faLock, faChevronLeft, } from '@fortawesome/free-solid-svg-icons';
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
                        <FontAwesomeIcon style={styles.backIcon} icon={faChevronLeft} size={16} />
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
                            <TextInput icon={faLock} text='New Password' placeholder='Type your password' />
                        </View>
                        <View style={styles.containerInputs}>
                            <TextInput icon={faLock} text='Confirm New Password' placeholder='Confirm your password' />
                        </View>
                        <View style={styles.containerText}>
                            <Button
                                style={styles.button}
                                onPress={() => {
                                    navigateTo('ForgotPasswordConfirm');
                                }}
                                title='Submit'
                                color='bg-gray-400'
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