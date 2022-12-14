import { Container } from '@components/Container';
import { Text } from '@components/Text';
import styles from './SafetyVideo.styles';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
//@ts-ignore
import VideoPlayer from 'react-native-video-controls';
import { HeadSection } from '@components/HeadSection';
export interface Props {}

const SafetyVideo = () => {
  const { navigate } = useNavigation();
  const navigateTo = (screen: string) => {
    navigate(screen);
  };

  return (
    <Container background='dark'>
      <ScrollView>
        <View style={styles.main}>
          <HeadSection textStyle={styles.backText} backText='Back' />
          <View>
            <View>
              <Text type='heading-2' style={styles.headerText}>
                Safety Video
              </Text>
            </View>
            <View style={{ width: '80%' }}>
              <Text type='body-lg' style={styles.subHeaderText}>
                Watch this safety video before you join a facility
              </Text>
            </View>
            <View
              style={[styles.videoContainer, { width: '100%', height: 250 }]}>
              <VideoPlayer
                source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
                paused={true}
                resizeMode='cover'
              />
            </View>
            <View>
              <Text type='heading-6' style={styles.bottomText}>
                THIS SAFETY VIDEO IS MANDATORY*
              </Text>
            </View>

            <View style={{ marginBottom: 20, marginTop: 55 }}>
              <Button
                onPress={() => {
                  navigateTo('NewMember');
                }}
                title='Watch Now'
                color='primary'
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default SafetyVideo;
