import React from 'react';
import {
  View,
  TouchableHighlight,
  TouchableHighlightProps
} from 'react-native';
import { Text } from '@components/Text';
import styles from './HeadSection.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

interface Props extends TouchableHighlightProps {
  style?: any;
  textStyle?: any;
  color?: string;
  backText: string;
  stepsText?: string;
}

const HeadSection = (props: Props) => {
  const navigation = useNavigation();

  return (
    <View {...props} style={[styles.headerSection, props.style || {}]}>
      <TouchableHighlight
        onPress={() => {
          navigation.goBack();
        }}>
        <View style={styles.backSection}>
          <Icon style={styles.backIcon} name='chevron-left' size={26} />
          <Text type='body' style={props.textStyle}>
            {' '}
            {props.backText}
          </Text>
        </View>
      </TouchableHighlight>
      {props.stepsText && (
        <View>
          <Text type='body' style={props.textStyle}>
            {' '}
            {props.stepsText}
          </Text>
        </View>
      )}
    </View>
  );
};

export default HeadSection;
