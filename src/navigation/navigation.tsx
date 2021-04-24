import React from 'react';
import { Home } from '@screens/Home';
import { SignUp } from '@screens/SignUp';
import { SignUpStep2 } from '@screens/SignUpStep2';
import { Login } from '@screens/Login';
import { ForgotPassword } from '@screens/ForgotPassword';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EnableLocation } from '@screens/EnableLocation';

const { Navigator, Screen } = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator headerMode='none'>
        <Screen name='Home' component={Home} />
        <Screen name='Login' component={Login} />
        <Screen name='SignUp' component={SignUp} />
        <Screen name='SignUpStep2' component={SignUpStep2} />
        <Screen name='ForgotPassword' component={ForgotPassword} />
        <Screen name='EnableLocation' component={EnableLocation} />
      </Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
