import { Container } from '@components/Container';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-paper';
//@ts-ignore
import AvatarImage from '@assets/images/avatar.png';

import styles from './More.styles';
import { Text } from '@components/Text';

const More = () => {
  const { navigate } = useNavigation();
  const navigateTo = (screen: string) => {
    navigate(screen);
  };

  return (
    <>
      <Container background='dark'>
        <ScrollView style={styles.fullScroll}>
          <View style={styles.mainContainer}>
            <Avatar.Image source={AvatarImage} style={styles.avatar} />
            <View style={styles.mainText}>
              <Text type='heading-4' style={styles.userName}>
                Michael Scott
              </Text>
              <TouchableOpacity onPress={() => navigateTo('UploadPic')}>
                <Text type='body' style={styles.changeProfile}>
                  Change profile picture
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Container>
    </>
  );
};

export default More;
