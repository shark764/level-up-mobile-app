import React from 'react';
import { Container } from '@components/Container';
import { Text } from '@components/Text';
import { ScrollView, View, Image } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import { AchievementItem } from './components/AchievementItem';
import { HeadSection } from '@components/HeadSection';
import { Achievement, Game } from '@app-types/appData';
// @ts-ignore
import ruby from '@assets/images/ruby.png';
// @ts-ignore
import coin from '@assets/images/coin.png';
import styles from './Achievements.styles';

const achievementsList: Array<Achievement> = [
  {
    title: 'Achievement',
    achievement: 'Do this and that to complete this achievement',
    rewardType: 'coin',
    reward: 15,
    progress: 1
  },
  {
    title: 'Achievement',
    achievement: 'Do this and that to complete this achievement',
    rewardType: 'ruby',
    reward: 2,
    progress: 1
  },
  {
    title: 'Achievement',
    achievement: 'Do this and that to complete this achievement',
    rewardType: 'coin',
    reward: 25,
    progress: 0.50
  },
  {
    title: 'Achievement',
    achievement: 'Do this and that to complete this achievement',
    rewardType: 'ruby',
    reward: 5,
    progress: 0.25
  }
];

const Achievements = () => {
  return (
    <>
      <Container background='dark'>
        <ScrollView>
          <HeadSection
            style={styles.headSection}
            textStyle={styles.backText}
            backText='Back'
          />

          <View style={styles.achievementsList}>
            <Text style={styles.title} type='heading-3'>Achievements</Text>
            <View>
              {achievementsList.map((achievement, index) => (
                <AchievementItem {...achievement} key={index} />
              ))}
            </View>
          </View>
        </ScrollView>
      </Container>
    </>
  );
};

export default Achievements;
