import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Text, ScrollView, View, } from 'react-native';
import styles from './ForgotPasswordS4.styles';
import { Button } from '@components/Button';


export interface Props {

}

const ForgotPasswordConfirm = () => {
    const { navigate } = useNavigation();
    const navigateTo = (screen: string) => {
        navigate(screen);
    };
    return (<>
        <SafeAreaView style={[styles.loginContainer]}>
            <ScrollView>
                <View style={styles.main}>
                    <View>
                        <View style={styles.iconContainer}>
                            <View style={styles.icon}>
                            </View>
                        </View>
                        <View style={styles.containerText}>
                            <Text style={styles.textHeader}>Your password has been</Text>
                            <Text style={styles.textHeader}>successfuly changed!</Text>
                        </View>
                        <View style={styles.containerText}>
                            <Button
                                style={styles.button}
                                onPress={() => {
                                    navigateTo('Login');
                                }}
                                title='Log In'
                                color='bg-gray-400'
                                titleStyle={styles.buttonTitle}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    </>);
}

export default ForgotPasswordConfirm;