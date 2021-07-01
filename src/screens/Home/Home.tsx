import React from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Image
} from 'react-native';
import { Text } from '@components/Text';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import styles from './Home.styles';
import { Container } from '@components/Container';
// @ts-ignore
import homeBackground from '@assets/images/home-background.png';
// @ts-ignore
import MainLogo from '@assets/images/main-logo.png';
const Home = () => {
  const { navigate } = useNavigation();
  const navigateTo = (screen: string) => {
    navigate(screen);
  };

  return (
    <ImageBackground source={homeBackground} style={stylesx.image}>
      <Container background='none'>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View style={styles.main}>
            <View style={[styles.mainText]}>
              <View style={styles.header}>
                <Text type='heading-3' style={styles.textHeader}>
                  Welcome To
                </Text>
              </View>
              <Image source={MainLogo} />
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
      </Container>
    </ImageBackground>
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

export default Home;
