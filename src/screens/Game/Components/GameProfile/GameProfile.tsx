import React from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Button } from '@components/Button';
import { Text } from '@components/Text';
import styles from './GameProfile.styles';
import { GameScore } from '@app-types/appData';

interface Props extends GameScore {
  gameState: 'progress' | 'over' | 'results';
}
const GameProfile = ({ player, score, gameState }: Props) => (
  <View>
    <View style={styles.multiplayer}>
      <Avatar.Icon icon='account-outline' style={styles.avatar} />
      <Text type='body-semi' style={styles.userText}>
        {player.name.split(' ')[0]}
      </Text>
      <Text type='body-semi' style={styles.userText}>
        {player.name.split(' ')[1]}
      </Text>
    </View>
    {gameState === 'progress' && (
      <Button
        size='sm'
        title={score.toString()}
        style={styles.scoreButton}
        contentStyle={styles.scoreButtonContent}
        titleStyle={styles.scoreButtonText}
      />
    )}
  </View>
);

export default GameProfile;
