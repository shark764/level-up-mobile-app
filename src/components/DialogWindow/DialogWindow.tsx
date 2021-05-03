import React from 'react';
import { View, Dimensions, Image } from 'react-native';
import { Paragraph, Dialog, Portal, Button } from 'react-native-paper';
import { Text } from '@components/Text';
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
        style={{ maxHeight: 0.6 * Dimensions.get('window').height }}
      >
        <Dialog.Content>
          <View {...props} style={[styles.container, props.style || {}]}>
            <Image style={styles.icon} source={props.icon} />
            <Text type='heading-3'>
              {props.title}
            </Text>
            <Text type='body'>
              {props.text}
            </Text>
          </View>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={props.close}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default DialogWindow;
