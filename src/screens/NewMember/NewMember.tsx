import { Container } from '@components/Container';
import styles from './NewMember.styles';
import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Text } from '@components/Text';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/core';
// @ts-ignore
import cafire from '@assets/images/ca-fire.png';

const NewMember = () => {
  const { navigate } = useNavigation();
  const navigateTo = (screen: string) => {
    navigate(screen);
  };
  return (
    <Container background='dark'>
      <ScrollView>
        <View style={styles.main}>
          <Image style={styles.memberPicture} source={cafire} />
          <View style={[{ alignItems: 'center' }, styles.body]}>
            <Text type='body-lg' style={styles.bodyText}>
              You are now a member
            </Text>
            <Text type='body-lg' style={styles.bodyText}>
              of CA Fire
            </Text>
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => {
                navigateTo('Progress');
              }}
              title='Start'
              color='primary'
            />
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default NewMember;
