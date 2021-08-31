import React from 'react';
import { Button } from '@components/Button';
import { StyleProp, ViewStyle, View } from 'react-native';
import styles from './ForgotPasswordBottom.styles';
export interface Props {
  buttonStyle?: StyleProp<ViewStyle>;
  navigationButton: string;
  buttonTitleStyle: StyleProp<ViewStyle>;
  sendEmail: () => void;
}

const ForgotPasswordHeader = (props: Props) => {
  return (
    <View style={styles.spaceBottom}>
      <Button
        style={props.buttonStyle}
        onPress={() => {
          props.sendEmail();
        }}
        title='Next'
        color='primary'
      />
    </View>
  );
};

export default ForgotPasswordHeader;
