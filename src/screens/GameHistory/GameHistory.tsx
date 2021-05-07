import { Game } from '@app-types/appData';
import { Container } from '@components/Container';
import { HeadSection } from '@components/HeadSection';
import { Text } from '@components/Text';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { GameHistoryItem } from './components/GameHistoryItem';
import styles from './GameHistory.styles';

const games: Array<Game> = [
  {
    gameType: 'standard',
    finished: true,
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
    finished: true,
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
  },
  {
    gameType: 'standard',
    finished: true,
    level: 1,
    points: 324,
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
    gameType: 'standard',
    finished: true,
    level: 1,
    points: 124,
    time: '2 Days Ago',
    players: [{ id: 1, name: 'Michael Scott' }],
    scores: [{ player: { name: 'Michael Scott', id: 1 }, score: 10 }],
    history: [
      { player: { name: 'Michael Scott', id: 1 }, score: 10 },
      { player: { name: 'Michael Scott', id: 1 }, score: 2 },
      { player: { name: 'Michael Scott', id: 1 }, score: 6 }
    ]
  }
];
const GameHistory = () => {
  const { navigate } = useNavigation();

  const onGameSelected = (game: Game) => navigate('Game', { game });

  return (
    <Container background='dark'>
      <ScrollView>
        <HeadSection
          style={styles.headSection}
          textStyle={styles.backText}
          backText='Back'
        />
        <View style={styles.titleContainer}>
          <Text type='heading-3' style={styles.title}>
            Game History
          </Text>
        </View>
        <View style={styles.list}>
          {games.map((game, index) => (
            <TouchableOpacity onPress={() => onGameSelected(game)}>
              <GameHistoryItem
                gameType={game.gameType}
                score={game.points}
                key={index}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </Container>
  );
};

export default GameHistory;
