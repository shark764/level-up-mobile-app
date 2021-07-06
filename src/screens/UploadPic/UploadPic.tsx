import React, { useState } from 'react';
import { ScrollView, View, Image } from 'react-native';
import { Button } from '@components/Button';
import { Container } from '@components/Container';
import { Text } from '@components/Text';
import { HeadSection } from '@components/HeadSection';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { getColor } from '@utils/tailwind';
// @ts-ignore
import avatar from '@assets/images/avatar.png';
import { IconButton } from 'react-native-paper';

import styles from './UploadPic.styles';
import { RootState } from '@state/reducer';

const UploadPic = () => {
  const { navigate } = useNavigation();
  const { showPermissionsScreen } = useSelector(
    (state: RootState) => state.appData
  );
  const [isUploaded, setIsUploaded] = useState(false);

  const navigateTo = (screen: string) =>
    showPermissionsScreen ? navigate(screen) : navigate('JoinRange');

  return (
    <Container background='dark'>
      <ScrollView>
        <HeadSection
          backText='Back'
          textStyle={styles.backText}
          stepsText='Step 3/3'
        />
        <View style={styles.mainIconContainer}>
          {!isUploaded ? (
            <IconButton
              icon='camera-outline'
              style={[styles.camera]}
              color={getColor('purple')}
              size={50}
              onPress={() => setIsUploaded(true)}
            />
          ) : (
            <Image source={avatar} style={styles.avatar} />
          )}
        </View>
        <View style={styles.mainText}>
          <Text type='heading-3' style={styles.header}>
            Add a profile picture
          </Text>
          <Text type='body-md' style={styles.subheader}>
            Add a picture or image to your
          </Text>
          <Text type='body-md' style={styles.subheader}>
            profile
          </Text>
        </View>
        <View style={styles.bottom}>
          <Button
            color='primary'
            title='Save'
            onPress={() => navigateTo('EnableLocation')}
            style={styles.mainButton}
            disabled={!isUploaded}
            // titleStyle={style.buttonTitle}
          />
          <Button
            color='transparent'
            mode='text'
            title='Add Later'
            onPress={() => navigateTo('EnableLocation')}
            titleStyle={styles.buttonTitle}
            style={styles.mainButton}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default UploadPic;
