import React, { useEffect, useState } from 'react';
import { HeadSection } from '@components/HeadSection';
import styles from './Game.styles';
import { Container } from '@components/Container';
import { ScrollView, View, Animated } from 'react-native';
import { Text } from '@components/Text';
import { StackScreenProps } from '@react-navigation/stack';
import { ScreenParamsProps } from '@app-types/screen';
import { GameProfile } from './Components/GameProfile';
import { GameScore } from './Components/GameScore';
import { Button } from '@components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from '@screens/EnableLocation/EnableLocation.styles';
import { useNavigation } from '@react-navigation/core';

type Props = StackScreenProps<ScreenParamsProps, 'GameInfo'>;
type GameState = 'progress' | 'over' | 'results';
const GameInfo = ({
  route: {
    params: { game }
  }
}: Props) => {
  const [gameState, setGameState] = useState<GameState>('progress');
  const [opacity] = useState(new Animated.Value(1));
  const [fade, setFade] = useState<boolean>(true);
  const { navigate } = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setGameState('over');
      setTimeout(() => {
        setGameState('results');
      }, 2000);
    }, 10000);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(opacity, {
        toValue: fade ? 0 : 1,
        useNativeDriver: true,
        duration: 1000
      }).start();
      setFade(!fade);
    }, 1100);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fade]);

  const navigateTo = (screen: string) => {
    navigate(screen);
  };

  return (
    <Container background='dark'>
      <HeadSection backText='Back' textStyle={styles.backText} />
      <ScrollView>
        {gameState === 'progress' || gameState === 'results' ? (
          <>
            {gameState === 'progress' && (
              <Animated.View style={[{ opacity }, styles.progress]}>
                <Icon name='access-point' style={styles.gameIcon} size={20} />
                <Text type='body-lg-semi' style={styles.backText}>
                  Live Game in Progress
                </Text>
              </Animated.View>
            )}
            <View style={styles.center}>
              {gameState === 'progress' && (
                <Text type='heading-3' style={[styles.subtitle]}>
                  {game.gameType === 'multiplayer' ? 'Players' : 'Player'}
                </Text>
              )}
              {gameState === 'results' && game.gameType === 'multiplayer' && (
                <Text type='heading-3' style={[styles.subtitle]}>
                  Best Player
                </Text>
              )}
            </View>
            {gameState === 'progress' && (
              <View
                style={[
                  styles.multiplayerAvatar,
                  game.gameType === 'multiplayer'
                    ? styles.spaceBetween
                    : styles.center
                ]}>
                {game.scores.map((score, index) => (
                  <GameProfile {...score} key={index} gameState={gameState} />
                ))}
              </View>
            )}

            {gameState === 'results' && (
              <View style={[styles.multiplayerAvatar, styles.center]}>
                <GameProfile {...game.scores[0]} gameState={gameState} />
              </View>
            )}

            <View style={styles.center}>
              {gameState === 'progress' && (
                <Text type='heading-3' style={[styles.subtitle]}>
                  History
                </Text>
              )}
              {gameState === 'results' && (
                <Text type='heading-3' style={[styles.subtitle]}>
                  {game.gameType === 'standard' ? 'Your Results' : 'Results'}
                </Text>
              )}
            </View>
            <View>
              {gameState === 'progress' &&
                game.history.map((score, index) => (
                  <GameScore
                    key={index}
                    gameType={game.gameType}
                    score={score}
                  />
                ))}
              {gameState === 'results' && (
                <>
                  {game.gameType === 'multiplayer' ? (
                    game.history.map((score, index) => (
                      <GameScore
                        key={index}
                        gameType={game.gameType}
                        score={score}
                      />
                    ))
                  ) : (
                    <View style={styles.center}>
                      <Text type='heading-1' style={style.buttonTitle}>
                        71
                      </Text>
                    </View>
                  )}
                </>
              )}
            </View>
            {gameState === 'results' && (
              <Button
                style={style.doneButton}
                color='primary'
                title='Done'
                onPress={() => navigateTo('Progress')}
              />
            )}
          </>
        ) : (
          <View style={styles.gameOver}>
            <Text type='heading-2' style={styles.backText}>
              Game Over
            </Text>
            <Animated.View style={[{ opacity }, styles.progress]}>
              <Text type='body-semi' style={styles.backText}>
                Loading results...
              </Text>
            </Animated.View>
          </View>
        )}
      </ScrollView>
    </Container>
  );
};

export default GameInfo;
