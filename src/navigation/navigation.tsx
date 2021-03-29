import React from 'react';
import { Home } from '@screens/Home';
import { SignUp } from '@screens/SignUp';
import { Login } from '@screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator headerMode='none'>
        <Screen name='Home' component={Home} />
        <Screen name='Login' component={Login} />
        <Screen name='SignUp' component={SignUp} />
      </Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
