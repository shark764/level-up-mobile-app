import React, { useEffect } from 'react';
import { ScrollView, View, Image } from 'react-native';
import { Button } from '@components/Button';
import { Container } from '@components/Container';
import { Text } from '@components/Text';
// @ts-ignore
import locationImage from '@assets/images/location.svg';

import style from './EnableLocation.styles';
import RNLocation from 'react-native-location';
import { useNavigation } from '@react-navigation/core';

const EnableLocation = () => {
  const { navigate } = useNavigation();

  useEffect(() => {
    /*const checkPermission = async () => {
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

    checkPermission();*/
  }, []);

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
      navigate('Home');
    } else {
      console.info('permission not granted');
      navigate('Login');
    }
  };

  return (
    <Container background='dark' style={style.enableLocationContainer}>
      <ScrollView>
        <View style={style.mainIconContainer}>
          <Image
            source={locationImage}
            style={{
              width: 100,
              height: 300,
              display: 'flex',
              justifyContent: 'center',
              resizeMode: 'cover'
            }}
          />
        </View>
        <View style={style.mainText}>
          <Text type='heading-3' style={style.header}>
            Enable your location
          </Text>
          <Text type='body-md' style={style.subheader}>
            In order to get full access to
          </Text>
          <Text type='body-md' style={style.subheader}>
            LevelUpLive features make sure
          </Text>
          <Text type='body-md' style={style.subheader}>
            Location Services are turned on
          </Text>
        </View>
        <View style={style.bottom}>
          <Button
            color='primary'
            title='Use My Location'
            onPress={enableLocation}
            style={style.mainButton}
            // titleStyle={style.buttonTitle}
          />
          <Button
            color='transparent'
            mode='text'
            title='Not Now'
            onPress={enableLocation}
            titleStyle={style.buttonTitle}
            style={style.mainButton}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default EnableLocation;
