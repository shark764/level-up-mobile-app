import React from 'react';
import { View, Dimensions, Image } from 'react-native';
import { Paragraph, Dialog, Portal } from 'react-native-paper';
import { Text } from '@components/Text';
import { Button } from '@components/Button';
import styles from './DialogWindow.styles';

interface Props {
  title: string;
  text: string;
  style?: any;
  color?: string;
  visible: boolean;
  close: () => void;
  icon?: any;
}

const DialogWindow = (props: Props) => {
  return (
    <Portal>
      <Dialog
        visible={props.visible}
        onDismiss={props.close}
        style={[styles.windowSize, styles.content]}
      >
        <Dialog.Content>
          <View {...props} style={[styles.container, props.style || {}]}>
            <Image style={styles.icon} source={props.icon} />
            <Text type='heading-2' style={styles.textColor}>
              {props.title}
            </Text>
            <Text type='body-md' style={styles.textColor}>
              {props.text}
            </Text>
          </View>
        </Dialog.Content>
        <View>
          <Button
            onPress={props.close}
            title='Done'
            color='primary'
          />
        </View>
      </Dialog>
    </Portal>
  );
};

export default DialogWindow;
