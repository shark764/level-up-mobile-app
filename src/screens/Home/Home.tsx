import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '@components/Text';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import styles from './Home.styles';
import { Container } from '@components/Container';

const Home = () => {
  const { navigate } = useNavigation();
  const navigateTo = (screen: string) => {
    navigate(screen);
  };

  return (
    <Container background='dark'>
      <ScrollView>
        <View style={styles.main}>
          <View style={[styles.mainText]}>
            <View style={styles.header}>
              <Text type='heading-1' style={styles.textHeader}>
                Welcome to
              </Text>
              <Text type='heading-1' style={styles.textHeader}>
                Level Up Live
              </Text>
            </View>
            <Text type='paragraph' style={styles.textSubHeader}>
              Become part of the
            </Text>
            <Text type='paragraph' style={styles.textSubHeader}>
              next generation
            </Text>
            <Text type='paragraph' style={styles.textSubHeader}>
              Level up
            </Text>
          </View>
          <Button
            style={styles.button}
            titleStyle={styles.buttonTitle}
            onPress={() => {
              navigateTo('SignUp');
            }}
            title='Sign Up'
            color='bg-gray-500'
          />
          <Button
            style={styles.button}
            onPress={() => {
              navigateTo('Login');
            }}
            title='Log In'
            titleStyle={styles.buttonTitle}
          />
          <View style={styles.footer}>
            <Text type='body-sm' style={styles.bottomText}>
              By using Level Up you accept
            </Text>
            <Text type='body-sm' style={styles.bottomText}>
              The Terms of Service and Privacy Policy
            </Text>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Home;
