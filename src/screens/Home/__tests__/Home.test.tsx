import React from 'react';
import { Home } from '../index';
import renderer from 'react-test-renderer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from '@components/Text';
const { Navigator, Screen } = createStackNavigator();

const MockLogin = () => <Text type='body-lg-semi'>Login Screen</Text>;
const MockSignUp = () => <Text type='body-lg-semi'>SignUp Screen</Text>;

describe('<Home />', () => {
  it('renders correctly', async () => {
    const result = renderer
      .create(
        <NavigationContainer>
          <Navigator headerMode='none'>
            <Screen name='Home' component={Home} />
            <Screen name='Login' component={MockLogin} />
            <Screen name='SignUp' component={MockSignUp} />
          </Navigator>
        </NavigationContainer>
      )
      .toJSON();
    expect(result).toMatchSnapshot();
  });
  /*it('should show Login component when Log In button is pressed', () => {});
  it('should show SignUp component when Sign Up button is pressed', () => {});*/
});
