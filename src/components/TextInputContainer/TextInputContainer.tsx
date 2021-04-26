import React from 'react';
import {
  View,
  TextInputProps
} from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './TextInputContainer.styles';

interface Props extends TextInputProps {
  icon?: string;
  colorIcon?: string;
  label: string;
  placeholder?: string;
}

const TextInputContainer = (props: Props) => {
  if (props.icon) {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          label={props.label}
          placeholder={props.placeholder}
          theme={{
            colors: {
              primary: '#9BB1D2',
              text: '#F5F9FF',
              placeholder: '#F5F9FF',
              background: '#393B60'
            }
          }}
          left={
            <TextInput.Icon
              name={() => (
                <Icon
                  name={props.icon}
                  size={26}
                  color={props.colorIcon}
                />
              )}
            />
          }
          value={props.value}
          {...props}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          label={props.label}
          placeholder={props.placeholder}
          theme={{
            colors: {
              primary: '#9BB1D2',
              text: '#F5F9FF',
              placeholder: '#F5F9FF',
              background: '#393B60'
            }
          }}
          value={props.value}
          {...props}
        />
      </View>
    );
  }
};

export default TextInputContainer;
