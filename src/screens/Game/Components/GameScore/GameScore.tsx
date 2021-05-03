import React from 'react';
import { View } from 'react-native';
import { ListItem } from '@components/ListItem';
import { Text } from '@components/Text';
import { GameScore } from '@app-types/appData';
import styles from './GameScore.styles';

interface Props {
  gameType: 'multiplayer' | 'standard';
  score: GameScore;
}

const GameScoreHistory = ({ gameType, score: { player, score } }: Props) => (
  <ListItem>
    <View>
      <Text
        type={gameType === 'multiplayer' ? 'body-md-semi' : 'body'}
        style={styles.mainText}>
        {gameType === 'multiplayer' ? player.name : 'Details'}
      </Text>
      {gameType === 'multiplayer' && (
        <Text type='body' style={styles.subText}>
          Details
        </Text>
      )}
    </View>
    <View>
      <Text type='body-lg-semi' style={styles.scoreText}>
        {score}
      </Text>
    </View>
  </ListItem>
);

export default GameScoreHistory;
