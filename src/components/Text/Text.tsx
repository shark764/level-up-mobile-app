import React, { ReactNode } from 'react';
import { StyleProp, Text as T, TextStyle } from 'react-native';
import myStyles from './Text.styles';

interface Props {
  style?: StyleProp<TextStyle>;
  children: ReactNode;
  type:
    | 'display-1'
    | 'display-2'
    | 'heading-1'
    | 'heading-2'
    | 'heading-3'
    | 'heading-4'
    | 'heading-5'
    | 'heading-6'
    | 'paragraph'
    | 'body'
    | 'body-semi'
    | 'body-sm'
    | 'body-sm-semi'
    | 'body-md'
    | 'body-md-semi'
    | 'body-lg'
    | 'body-lg-semi';
}

const Text = ({ type, style = {}, children }: Props) => {
  return <T style={[myStyles[type], style]}>{children}</T>;
};

export default Text;
