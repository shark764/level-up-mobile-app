import React from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import styles from './Home.styles';

const Home = () => {
  const { navigate } = useNavigation();
  const navigateTo = (screen: string) => {
    navigate(screen);
  };

  return (
    <SafeAreaView style={[styles.homeContainer]}>
      <ScrollView>
        <View style={styles.main}>
          <View style={[styles.mainText]}>
            <View style={styles.header}>
              <Text style={styles.textHeader}>Welcome to</Text>
              <Text style={styles.textHeader}>Level Up Live</Text>
            </View>
            <Text style={styles.textSubHeader}>Become part of the</Text>
            <Text style={styles.textSubHeader}>next generation</Text>
            <Text style={styles.textSubHeader}>Level up</Text>
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
            title='Login'
            titleStyle={styles.buttonTitle}
          />
          <View style={styles.footer}>
            <Text style={styles.bottomText}>By using Level Up you accept</Text>
            <Text style={styles.bottomText}>
              The Terms of Service and Privacy Policy
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
