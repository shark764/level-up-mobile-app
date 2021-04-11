import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput as Input,
  TextInputProps
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from './TextInput.styles';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props extends TextInputProps {
  icon: IconProp;
  text: string;
}

const TextInput = (props: Props) => (
  <View style={styles.iconInputContainer}>
    <FontAwesomeIcon style={styles.icon} icon={props.icon} size={16} />
    <ScrollView>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>{props.text}</Text>
        <Input
          placeholderTextColor={styles.placeholderColor}
          style={[styles.textInput, props.style ? props.style : {}]}
          value={props.value}
          {...props}
        />
      </View>
    </ScrollView>
  </View>
);

export default TextInput;
