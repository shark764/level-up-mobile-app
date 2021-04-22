import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput as Input,
  TextInputProps
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './TextInput.styles';

interface Props extends TextInputProps {
  icon: string;
  text: string;
}

const TextInput = (props: Props) => (
  <View style={styles.iconInputContainer}>
    <Icon style={styles.icon} name={props.icon} size={26} />
    <ScrollView>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>{props.text}</Text>
        <Input
          placeholderTextColor={styles.placeholderColor}
          style={[styles.textInput, props.style ? props.style : {}]}
          {...props}
        />
      </View>
    </ScrollView>
  </View>
);

export default TextInput;
