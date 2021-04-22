import React, { ReactNode } from 'react';
import { StyleProp, SafeAreaView, ViewStyle } from 'react-native';
import styles from './Container.styles';

interface Props {
  background: 'light' | 'dark';
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const Container = ({ background, children, style }: Props) => (
  <SafeAreaView style={[styles[background], style]}>{children}</SafeAreaView>
);

export default Container;
