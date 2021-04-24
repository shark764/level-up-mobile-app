import React from 'react';
import { View, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import { Text } from '@components/Text';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import styles from './Home.styles';
import { Container } from '@components/Container';
// @ts-ignore
import homeBackground from '@assets/images/home-background.png';
const Home = () => {
  const { navigate } = useNavigation();
  const navigateTo = (screen: string) => {
    navigate(screen);
  };

  return (
    <Container background='dark'>
      <ImageBackground source={homeBackground} style={stylesx.image}>
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
              <Text type='heading-3' style={styles.textSubHeader}>
                Level up your game and
              </Text>
              <Text type='heading-3' style={styles.textSubHeader}>
                be part of the next-gen
              </Text>
              <Text type='heading-3' style={styles.textSubHeader}>
                shooters
              </Text>
            </View>
            <Button
              style={styles.button}
              onPress={() => {
                navigateTo('SignUp');
              }}
              title='Sign Up'
              color='primary'
            />
            <Button
              mode='text'
              color='transparent'
              style={styles.button}
              titleStyle={styles.buttonTitle}
              onPress={() => {
                navigateTo('Login');
              }}
              title='Log In'
            />
            <View style={styles.footer}>
              <Text type='body' style={styles.bottomText}>
                By using Level Up Live you accept
              </Text>
              <Text type='body' style={styles.bottomText}>
                the Terms of Service and Privacy Policy
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </Container>
  );
};

const stylesx = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  }
});

export default Home;
