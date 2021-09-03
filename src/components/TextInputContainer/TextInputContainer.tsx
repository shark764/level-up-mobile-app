/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, TextInputProps } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './TextInputContainer.styles';
import { getColor } from '@utils/tailwind';

type Props = TextInputProps & {
  icon?: string;
  colorIcon?: string;
  label: string;
  placeholder?: string;
  errorVisible?: boolean;
  errorMessage?: string;
};

const TextInputContainer = ({
  icon,
  colorIcon,
  errorMessage,
  errorVisible,
  ...props
}: Props) => {
  if (icon) {
    return (
      <View style={styles.inputContainer}>
        <TextInput
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
                <Icon name={icon || 'user'} size={26} color={colorIcon} />
              )}
            />
          }
          right={
            <TextInput.Icon
              name={() => (
                <Icon
                  name={'warning'}
                  size={26}
                  color={getColor('red')}
                  style={{ display: errorVisible ? 'flex' : 'none' }}
                />
              )}
            />
          }
          error={errorVisible}
          value={props.value}
          {...props}
          selectionColor={undefined}
        />
        <HelperText type='error' visible={errorVisible ? errorVisible : false}>
          {errorMessage}
        </HelperText>
      </View>
    );
  } else {
    return (
      <View style={styles.inputContainer}>
        <TextInput
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
          selectionColor={undefined}
        />
        <HelperText type='error' visible={errorVisible ? errorVisible : false}>
          Error: {errorMessage}
        </HelperText>
      </View>
    );
  }
};

export default TextInputContainer;
