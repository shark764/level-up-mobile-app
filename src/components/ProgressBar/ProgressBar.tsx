import React from 'react';
import { View } from 'react-native';
import { ProgressBar as PB } from 'react-native-paper';
import styles from './ProgressBar.styles';

interface Props {
  style?: any;
  progress: number;
  color?: string;
}

const ProgressBar = (props: Props) => {
  return (
    <View {...props} style={[styles.container, props.style || {}]}>
      <PB progress={props.progress} color={props.color} />
    </View>
  );
};

export default ProgressBar;
