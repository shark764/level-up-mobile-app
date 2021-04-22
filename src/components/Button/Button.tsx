import React from 'react';
import { TouchableHighlight, TouchableHighlightProps } from 'react-native';
import { Text } from '@components/Text';
import tailwind from 'tailwind-rn';

interface Props extends TouchableHighlightProps {
  style?: any;
  titleStyle?: any;
  title: string;
  color?: string;
}

const Button = (props: Props) => (
  <TouchableHighlight
    {...props}
    style={[
      tailwind(`p-5 items-center rounded ${props.color ? props.color : ''}`),
      props.style || {}
    ]}>
    <Text type='body-lg' style={props.titleStyle}>
      {props.title}
    </Text>
  </TouchableHighlight>
);

export default Button;
