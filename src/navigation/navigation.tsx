import React from 'react';
import { Home } from '@screens/Home';
import { SignUp } from '@screens/SignUp';
import { SignUpStep2 } from '@screens/SignUpStep2';
import { Login } from '@screens/Login';

import {
  ForgotPassword,
  ForgotPasswordVerification,
  ForgotPasswordReset,
  ForgotPasswordConfirm
} from '@screens/ForgotPassword';
import { JoinRange } from '@screens/JoinRange';
import { RangeProfile } from '@screens/RangeProfile';
import { Membership } from '@screens/Membership';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EnableLocation } from '@screens/EnableLocation';
import { Progress } from '@screens/Progress';
import { Consent} from '@screens/Consent';
import { SafetyVideo } from '@screens/SafetyVideo';
import { NewMember } from '@screens/NewMember';
import { getColor } from '@utils/tailwind';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { UploadPic } from '@screens/UploadPic';
import { Game } from '@screens/Game';
const { Navigator, Screen } = createStackNavigator();
const Tab = createBottomTabNavigator();

export const TabsBottomNavigation = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let icon;
        switch (route.name) {
          case 'Level Up':
            icon = 'trophy-outline';
            break;
          case 'Shop':
            icon = 'cart-outline';
            break;
          case 'Social':
            icon = 'bullhorn-outline';
            break;
          case 'Messages':
            icon = 'forum-outline';
            break;
          default:
            icon = 'menu';
        }
        return <Icon name={icon} size={size} color={color} />;
      }
    })}
    tabBarOptions={{
      style: { backgroundColor: '#24263F', paddingVertical: 10 },
      tabStyle: { backgroundColor: '#24263F' },
      activeTintColor: getColor('green'),
      inactiveTintColor: '#C8C9D0',
      labelStyle: { fontFamily: 'MartianBThai-Regular' },
      // @ts-ignore
      indicatorStyle: { backgroundColor: 'red' },
      safeAreaInsets: {
        bottom: 20
      }
    }}>
    <Tab.Screen name='Level Up' component={Progress} />
    <Tab.Screen name='Shop' component={Progress} />
    <Tab.Screen name='Social' component={Progress} />
    <Tab.Screen name='Messages' component={Progress} />
    <Tab.Screen name='More' component={Progress} />
  </Tab.Navigator>
);
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator headerMode='none'>
        <Screen name='Home' component={Home} />
        <Screen name='Login' component={Login} />
        <Screen name='SignUp' component={SignUp} />
        <Screen name='SignUpStep2' component={SignUpStep2} />
        <Screen name='ForgotPassword' component={ForgotPassword} />
        <Screen name='UploadPic' component={UploadPic} />
        <Screen name='EnableLocation' component={EnableLocation} />
        <Screen
          name='ForgotPasswordVerification'
          component={ForgotPasswordVerification}
        />
        <Screen name='ForgotPasswordReset' component={ForgotPasswordReset} />
        <Screen
          name='ForgotPasswordConfirm'
          component={ForgotPasswordConfirm}
        />
        <Screen name='JoinRange' component={JoinRange} />
        <Screen name='RangeProfile' component={RangeProfile} />
        <Screen name='Membership' component={Membership} />
        <Screen name='Consent' component={Consent} />
        <Screen name='SafetyVideo' component={SafetyVideo} />
        <Screen name='NewMember' component={NewMember} />
        <Screen name='Progress' component={TabsBottomNavigation} />
        <Screen name='Game' component={Game} />
      </Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
