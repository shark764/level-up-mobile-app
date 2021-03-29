import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import tailwind from 'tailwind-rn';

const styles = {
  homeContainer: 'h-full bg-gray-100',
  main: 'pt-40 pl-5 pr-5',
  mainText: 'mb-44',
  header: 'mb-5',
  textHeader: 'text-4xl font-bold',
  textSubHeader: 'text-xl text-gray-500',
  button: 'mb-2',
  buttonTitle: 'text-xl',
  bottomText: 'text-sm'
};

const Home = () => {
  const { navigate } = useNavigation();
  const navigateTo = (screen: string) => {
    navigate(screen);
  };

  return (
    <SafeAreaView style={[tailwind(styles.homeContainer)]}>
      <View style={tailwind(styles.main)}>
        <View style={tailwind(styles.mainText)}>
          <View style={tailwind(styles.header)}>
            <Text style={tailwind(styles.textHeader)}>Welcome to</Text>
            <Text style={tailwind(styles.textHeader)}>Level Up Live</Text>
          </View>
          <Text style={tailwind(styles.textSubHeader)}>Become part of the</Text>
          <Text style={tailwind(styles.textSubHeader)}>next generation</Text>
          <Text style={tailwind(styles.textSubHeader)}>Level up</Text>
        </View>
        <Button
          style={tailwind(styles.button)}
          titleStyle={tailwind(styles.buttonTitle)}
          onPress={() => {
            navigateTo('SignUp');
          }}
          title='Sign Up'
          color='bg-gray-200'
        />
        <Button
          style={tailwind(styles.button)}
          onPress={() => {
            navigateTo('Login');
          }}
          title='Login'
          titleStyle={tailwind(styles.buttonTitle)}
        />
        <View style={tailwind('items-center')}>
          <Text style={tailwind(styles.bottomText)}>
            By using Level Up you accept
          </Text>
          <Text style={tailwind(styles.bottomText)}>
            The Terms of Service and Privacy Policy
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
