import React from 'react';
import { View } from 'react-native';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';

export interface Props {
  viewStyle: object;
  buttonStyle: object;
  navigationButton: string;
  buttonTitleStyle: object;
}

const forgotPasswordHeader = (props: Props) => {
  const { navigate } = useNavigation();
  const navigateTo = (screen: string) => {
    navigate(screen);
  };
  return (
    <>
      <View style={props.viewStyle}>
        <Button
          style={props.buttonStyle}
          onPress={() => {
            navigateTo(props.navigationButton);
          }}
          title='Send'
          titleStyle={props.buttonTitleStyle}
        />
      </View>
    </>
  );
};

export default forgotPasswordHeader;
