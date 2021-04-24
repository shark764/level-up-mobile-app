import React, { ReactNode } from 'react';
import { StyleProp, SafeAreaView, ViewStyle, View } from 'react-native';
import styles from './Container.styles';

interface Props {
  background: 'light' | 'dark' | 'none';
  style?: StyleProp<ViewStyle>;
  defaultPadding?: boolean;
  children: ReactNode;
}

const Container = ({
  background,
  children,
  defaultPadding = true,
  style
}: Props) => (
  <SafeAreaView style={[styles.general, styles[background], style]}>
    <View style={defaultPadding && styles.padding}>{children}</View>
  </SafeAreaView>
);

export default Container;
