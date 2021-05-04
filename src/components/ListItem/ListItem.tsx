import React, { ReactNode } from 'react';
import {
  StyleProp,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
  ViewStyle
} from 'react-native';
import styles from './ListItem.styles';

interface Props extends TouchableHighlightProps {
  children: ReactNode;
  itemStyle: StyleProp<ViewStyle>
}

const ListItem = (props: Props) => (
  <TouchableHighlight
    style={[styles.itemContainer, styles.itemContainerBg, props.style]}>
    <View style={[styles.spaceBetween, props.itemStyle]}>{props.children}</View>
  </TouchableHighlight>
);

export default ListItem;
