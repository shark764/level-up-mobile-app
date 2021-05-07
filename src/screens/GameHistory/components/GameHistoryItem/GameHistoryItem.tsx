import React from 'react';
import { View } from 'react-native';
import { ListItem } from '@components/ListItem';
import { Text } from '@components/Text';
import styles from './GameHistoryItem.styles';

interface Props {
  gameType: 'multiplayer' | 'standard';
  score: number;
}

const GameScoreHistory = ({ gameType, score }: Props) => {
  return (
    <ListItem>
      <View>
        <Text type='body-md-semi' style={styles.mainText}>
          {gameType === 'multiplayer' ? 'Multiplayer' : 'Standard Game'}
        </Text>
      </View>
      <View>
        <Text type='body-sm' style={styles.subText}>
          05/03/2020
        </Text>
        <Text type='body-lg-semi' style={styles.scoreText}>
          +{score}
        </Text>
      </View>
    </ListItem>
  );
};

export default GameScoreHistory;
