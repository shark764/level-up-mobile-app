import React, { useEffect } from 'react';
import { ScrollView, View, Image } from 'react-native';
import { Button } from '@components/Button';
import { Container } from '@components/Container';
import { Text } from '@components/Text';
import { HeadSection } from '@components/HeadSection';
// @ts-ignore
import locationImage from '@assets/images/location.png';

import styles from './EnableLocation.styles';
import RNLocation from 'react-native-location';
import { useNavigation } from '@react-navigation/core';

const EnableLocation = () => {
  const { navigate } = useNavigation();

  useEffect(() => {
    const checkPermission = async () => {
      const granted = await RNLocation.checkPermission({
        ios: 'whenInUse',
        android: {
          detail: 'coarse'
        }
      });

      if (granted) {
        console.info('Permission already granted, skipping');
        navigate('Home');
      }
    };

    checkPermission();
  }, [navigate]);

  const enableLocation = async () => {
    const granted = await RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
        rationale: {
          title: 'We need to access your location',
          message: 'We use your location to show where you are on the map',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel'
        }
      }
    });
    if (granted) {
      console.info('Permission granted, skipping');
      navigate('JoinRange');
    } else {
      console.info('permission not granted');
      navigate('JoinRange');
    }
  };

  return (
    <Container background='dark' style={styles.enableLocationContainer}>
      <ScrollView>
        <HeadSection
          backText='Back'
          textStyle={styles.backText}
          stepsText='step 4/4'
        />
        <View style={styles.mainIconContainer}>
          <Image source={locationImage} />
        </View>
        <View style={styles.mainText}>
          <Text type='heading-3' style={styles.header}>
            Enable your location
          </Text>
          <Text type='body-md' style={styles.subheader}>
            In order to get full access to
          </Text>
          <Text type='body-md' style={styles.subheader}>
            LevelUpLive features make sure
          </Text>
          <Text type='body-md' style={styles.subheader}>
            Location Services are turned on
          </Text>
        </View>
        <View style={styles.bottom}>
          <Button
            color='primary'
            title='Use My Location'
            onPress={enableLocation}
            style={styles.mainButton}
            // titleStyle={style.buttonTitle}
          />
          <Button
            color='transparent'
            mode='text'
            title='Not Now'
            onPress={enableLocation}
            titleStyle={styles.buttonTitle}
            style={styles.mainButton}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default EnableLocation;
