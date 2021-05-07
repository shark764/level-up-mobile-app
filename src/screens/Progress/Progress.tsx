import React from 'react';
import { Container } from '@components/Container';
import { Text } from '@components/Text';
import { ScrollView, View, Image, TouchableHighlight } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import { AchievementsItem } from './components/AchievementsItem';
import { GamesItem } from './components/GamesItem';
import { HeadSection } from '@components/HeadSection';
import { useNavigation } from '@react-navigation/core';
import { Achievement, Game } from '@app-types/appData';
// @ts-ignore
import progressProfile from '@assets/images/progress-profile.png';
// @ts-ignore
import facility from '@assets/images/facility.png';
// @ts-ignore
import ruby from '@assets/images/ruby.png';
// @ts-ignore
import coin from '@assets/images/coin.png';
// @ts-ignore
import medal1 from '@assets/images/medal-1.png';
// @ts-ignore
import medal2 from '@assets/images/medal-2.png';
// @ts-ignore
import medal3 from '@assets/images/medal-3.png';
// @ts-ignore
import medal4 from '@assets/images/medal-4.png';
// @ts-ignore
import medal5 from '@assets/images/medal-5.png';
// @ts-ignore
import leaderboard from '@assets/images/leaderboard.png';

import styles from './Progress.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const achievements: Array<Achievement> = [
  {
    title: 'Complete this task',
    rewardType: 'coin',
    reward: 15,
    progress: 90,
    achievement: ''
  },
  {
    title: 'Complete this task',
    rewardType: 'ruby',
    reward: 2,
    progress: 90,
    achievement: ''
  }
];

const games: Array<Game> = [
  {
    gameType: 'standard',
    level: 1,
    points: 246,
    time: '2 Days Ago',
    players: [{ id: 1, name: 'Michael Scott' }],
    scores: [{ player: { name: 'Michael Scott', id: 1 }, score: 10 }],
    history: [
      { player: { name: 'Michael Scott', id: 1 }, score: 10 },
      { player: { name: 'Michael Scott', id: 1 }, score: 2 },
      { player: { name: 'Michael Scott', id: 1 }, score: 6 }
    ]
  },
  {
    gameType: 'multiplayer',
    level: 4,
    points: 501,
    time: '10 Days Ago',
    players: [
      { id: 1, name: 'Michael Scott' },
      { id: 2, name: 'Alexander Jonhson' },
      { id: 3, name: 'Juan Abdul' }
    ],
    scores: [
      { player: { name: 'Michael Scott', id: 1 }, score: 78 },
      { player: { name: 'Alexander Jonhson', id: 2 }, score: 54 },
      { player: { name: 'Juan Abdul', id: 3 }, score: 61 }
    ],
    history: [
      { player: { name: 'Michael Scott', id: 1 }, score: 10 },
      { player: { name: 'Alexander Jonhson', id: 2 }, score: 2 },
      { player: { name: 'Juan Abdul', id: 3 }, score: 8 }
    ]
  }
];

const Progress = () => {
  const { navigate } = useNavigation();
  const onGameSelected = (game: Game) => {
    navigate('Game', { game });
  };
  const navigateTo = (screen: string) => {
    navigate(screen);
  };

  return (
    <>
      <Container background='dark'>
        <ScrollView>
          <HeadSection
            style={styles.headSection}
            textStyle={styles.backText}
            backText='Back'
          />
          <View style={[styles.header, styles.spaceBetween]}>
            <View style={styles.spaceBetween}>
              <Image source={facility} />
              <Text type='heading-5' style={styles.titleText}>
                CA Fire
              </Text>
            </View>
            <View style={styles.points}>
              <Button
                mode='contained'
                style={styles.coinButton2}
                contentStyle={[styles.coinButton]}>
                <Image source={coin} style={styles.buttonIcon} />
                <Text type='body-sm' style={[styles.buttonText]}>
                  {' '}
                  123
                </Text>
              </Button>
              <Button
                mode='contained'
                style={styles.rubyButton}
                contentStyle={[styles.headerButton]}>
                <Image source={ruby} style={styles.buttonIcon} />
                <Text type='body-sm' style={styles.buttonText}>
                  {' '}
                  456
                </Text>
              </Button>
            </View>
          </View>
          <View style={styles.activitySection}>
            <Text type='heading-5' style={styles.mainTitle}>
              My Activity
            </Text>
            <View style={styles.avatarContainer}>
              <View style={styles.avatarPic}>
                <Avatar.Image source={progressProfile} />
              </View>
              <View>
                <View>
                  <Text type='heading-4' style={styles.mainInfo}>
                    @michael
                  </Text>
                  <Text type='body' style={styles.secondaryInfo}>
                    Michael Scott
                  </Text>
                  <Text type='body-sm' style={styles.league}>
                    X League
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.spaceBetween]}>
              <View style={styles.spaceBetween}>
                <View style={styles.scoreSection}>
                  <Text type='heading-2' style={styles.mainScore}>
                    12
                  </Text>
                  <Text type='heading-6' style={styles.secondaryScore}>
                    RANKING
                  </Text>
                </View>
                <View style={styles.vr} />
                <View style={styles.scoreSection}>
                  <Text type='heading-2' style={styles.mainScore}>
                    13.2K
                  </Text>
                  <Text type='heading-6' style={styles.secondaryScore}>
                    SCORE
                  </Text>
                </View>
              </View>
              <View style={styles.leaderboard}>
                <View style={styles.leaderboardBadge}>
                  <Text type='body' style={styles.leaderboardText}>
                    Leaderboard
                  </Text>
                </View>
                <Image source={leaderboard} />
              </View>
            </View>
          </View>
          <View style={styles.medalSection}>
            <View style={[styles.spaceBetween]}>
              <Text type='heading-5' style={styles.mainTitle}>
                Medals
              </Text>
              <Text type='heading-5' style={styles.viewTitle}>
                View All
              </Text>
            </View>
            <View style={[styles.spaceBetween]}>
              <Image source={medal3} />
              <Image source={medal1} />
              <Image source={medal2} />
              <Image source={medal4} />
              <Image source={medal5} />
            </View>
          </View>
          <View style={styles.medalSection}>
            <View style={[styles.spaceBetween]}>
              <Text type='heading-5' style={styles.mainTitle}>
                Games
              </Text>
              <TouchableOpacity onPress={() => navigateTo('GameHistory')}>
                <Text type='heading-5' style={styles.viewTitle}>
                  View History
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              {games.map((game, index) => (
                <GamesItem
                  {...game}
                  key={index}
                  onPress={() => {
                    onGameSelected(game);
                  }}
                />
              ))}
            </View>
          </View>
          <View style={styles.medalSection}>
            <View style={[styles.spaceBetween]}>
              <Text type='heading-5' style={styles.mainTitle}>
                Achievements
              </Text>
              <TouchableHighlight
                onPress={() => {
                  navigateTo('Achievements');
                }}>
                <Text type='heading-5' style={styles.viewTitle}>
                  View All
                </Text>
              </TouchableHighlight>
            </View>
            <View>
              {achievements.map((achiement, index) => (
                <AchievementsItem {...achiement} key={index} />
              ))}
            </View>
          </View>
        </ScrollView>
      </Container>
    </>
  );
};

export default Progress;
