import React from 'react';
import { View, Image } from 'react-native';
import { Text } from '@components/Text';
import { ListItem } from '@components/ListItem';
// @ts-ignore
import level1 from '@assets/images/level-1.png';
// @ts-ignore
import level4 from '@assets/images/level-4.png';
import { Game } from '@app-types/appData';
import styles from './GamesItem.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends Game {
  onPress: any;
}

const GamesItem = ({ points, level, gameType, time, onPress }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <ListItem>
      <View style={styles.spaceBetween}>
        <Image source={level === 1 ? level1 : level4} />
        <View style={styles.gameInfo}>
          <Text
            type='body'
            style={[
              gameType === 'standard'
                ? styles.gameTypeStandard
                : styles.gameTypeMulti
            ]}>
            {gameType === 'standard' ? 'Standard Game' : 'Multiplayer Game'}
          </Text>
          <Text type='body-sm' style={styles.time}>
            {time}
          </Text>
        </View>
      </View>
      <View style={styles.spaceBetween}>
        <Text type='body' style={styles.points}>
          +
        </Text>
        <Text type='body' style={styles.points}>
          {' '}
          {points}
        </Text>
      </View>
    </ListItem>
  </TouchableOpacity>
);

export default GamesItem;
