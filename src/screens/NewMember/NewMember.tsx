import { Container } from '@components/Container';
import styles from './NewMember.styles';
import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '@components/Text';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/core';

export interface Props {

}

const NewMember = () => {
    const { navigate } = useNavigation();
    const navigateTo = (screen: string) => {
        navigate(screen);
    };
    return (
        <Container background='dark'>
            <ScrollView>
                <View style={styles.main}>
                    <View style={styles.memberPicture}>
                    </View>
                    <View style={[{ alignItems: 'center' }, styles.body]}>
                        <Text type='heading-2' style={styles.bodyText}>You are now a member</Text>
                        <Text type='heading-2' style={styles.bodyText}>of Gun Club</Text>
                    </View>
                    <View style={styles.button}>
                        <Button
                            onPress={() => { navigateTo('') }}
                            title='Start'
                            color='primary'
                        />
                    </View>
                </View>
            </ScrollView>
        </Container>
    );
}

export default NewMember;