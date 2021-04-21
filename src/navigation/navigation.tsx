import React from 'react';
import { Home } from '@screens/Home';
import { SignUp } from '@screens/SignUp';
import { SignUpStep2 } from '@screens/SignUpStep2';
import { Login } from '@screens/Login';
<<<<<<< HEAD
<<<<<<< HEAD
import { ForgotPassword, ForgotPasswordVerification, ForgotPasswordReset, ForgotPasswordConfirm } from '@screens/ForgotPassword';
import { JoinRange} from '@screens/JoinRange';
import { RangeProfile} from '@screens/RangeProfile';
=======
import { ForgotPassword, ForgotPasswordVerification } from '@screens/ForgotPassword';
>>>>>>> Vefication screen
=======
import { ForgotPassword, ForgotPasswordVerification, ForgotPasswordReset, ForgotPasswordConfirm } from '@screens/ForgotPassword';
>>>>>>> Build PasswordConfirmation screen, commit and push all changes and MR
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EnableLocation } from '@screens/EnableLocation';
import { Progress } from '@screens/Progress';

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
        <Screen name='Progress' component={Progress} />
        <Screen name='ForgotPasswordVerification' component={ForgotPasswordVerification} />
        <Screen name='ForgotPasswordReset' component={ForgotPasswordReset} />
        <Screen name='ForgotPasswordConfirm' component={ForgotPasswordConfirm} />
        <Screen name='JoinRange' component={JoinRange} />
        <Screen name='RangeProfile' component={RangeProfile} />
      </Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
