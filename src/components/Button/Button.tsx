import React, { ComponentProps } from 'react';
import { Button as MaterialButton } from 'react-native-paper';
import { Text } from '@components/Text';
import myStyles from './Button.styles';

type Size = 'sm' | 'md' | 'lg';
type Props = Omit<ComponentProps<typeof MaterialButton>, 'children'> & {
  titleStyle?: any;
  title: string;
  color?: 'primary' | 'default' | 'transparent' | 'secondary';
  size?: Size;
};

const getFontType = (size: Size) => {
  switch (size) {
    case 'sm':
      return 'body';
    case 'md':
      return 'body-md';
    default:
      return 'body-lg';
  }
};

const Button = ({
  size = 'sm',
  color = 'default',
  mode = 'contained',
  disabled = false,
  ...props
}: Props) => (
  <MaterialButton
    {...props}
    mode={mode}
    style={[myStyles.button, props.style]}
    disabled={disabled}
    contentStyle={[
      myStyles.button,
      mode !== 'outlined'
        ? myStyles.bgColor[color][disabled ? 'disabled' : 'enabled']
        : myStyles.borderColor[color],
      myStyles.padding[size],
      props.contentStyle
    ]}>
    <Text
      type={getFontType(size)}
      style={[
        myStyles.text,
        myStyles.textColor[color][mode][disabled ? 'disabled' : 'enabled'],
        props.titleStyle
      ]}>
      {props.title}
    </Text>
  </MaterialButton>
);

export default Button;
