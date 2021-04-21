import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TouchableHighlightProps
} from 'react-native';
import tailwind from 'tailwind-rn';
import styles from './HeadSection.styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
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
    <View
      {...props}
      style={[
        styles.headerSection,
        props.style || {}
      ]}
    >
      <TouchableHighlight
      onPress={() => {
        navigation.goBack();
      }}>
        <View style={styles.backSection}>
          <FontAwesomeIcon style={styles.backIcon} icon={faChevronLeft} size={16}/>
          <Text style={props.textStyle}> {props.backText}</Text>
        </View>
      </TouchableHighlight>
      <View>
        <Text style={props.textStyle}> {props.stepsText}</Text>
      </View>
    </View>
  );
};

export default HeadSection;
