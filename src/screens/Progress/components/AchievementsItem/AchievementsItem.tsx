import React from 'react';
import { Text } from '@components/Text';
import { Image, View } from 'react-native';
import { ListItem } from '@components/ListItem';
// @ts-ignore
import coin from '@assets/images/coin.png';
// @ts-ignore
import ruby from '@assets/images/ruby.png';
import styles from './Achievements.styles';

interface Props {
  achievement: string;
  rewardType: 'coin' | 'ruby';
  reward: number;
}
const AchievementsItem = ({ achievement, rewardType, reward }: Props) => (
  <ListItem>
    <Text type='heading-4' style={[styles.achievement, styles.achievementFont]}>
      {achievement}
    </Text>
    <View style={styles.spaceBetween}>
      <Image source={rewardType === 'coin' ? coin : ruby} />
      <Text type='heading-3' style={styles.reward}>
        {reward}
      </Text>
    </View>
  </ListItem>
);

export default AchievementsItem;
