/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TouchableHighlight,
  TouchableHighlightProps,
  Image
} from 'react-native';
import { Text } from '@components/Text';
import styles from './HeadSection.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
// @ts-ignore
import cafire from '@assets/images/ca-fire.png';
import tailwind from 'tailwind-rn';

interface Props extends TouchableHighlightProps {
  style?: any;
  textStyle?: any;
  color?: string;
  backText: string;
  stepsText?: string;
  stepImage?: boolean;
}

const addFacilityLogo = (image: any) => {
  if (image === true) {
    return <Image style={styles.imageDimensions} source={cafire} />;
  }
};

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
        <View style={{ flexDirection: 'row' }}>
          <View style={tailwind('mr-2')}>
            {addFacilityLogo(props.stepImage)}
          </View>
          <View>
            <Text type='body' style={props.textStyle}>
              {' '}
              {props.stepsText}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default HeadSection;
