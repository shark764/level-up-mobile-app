import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { Button } from '@components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

import style from './EnableLocation.styles';
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
      navigate('Home');
    } else {
      console.info('permission not granted');
      navigate('Login');
    }
  };

  return (
    <SafeAreaView style={style.enableLocationContainer}>
      <ScrollView>
        <View style={style.mainIconContainer}>
          <FontAwesomeIcon
            style={style.mainIcon}
            icon={faMapMarkedAlt}
            size={150}
          />
        </View>
        <View style={style.mainText}>
          <Text style={style.header}>Enable your location</Text>
          <Text style={style.subheader}>Chose your location to start find</Text>
          <Text style={style.subheader}>Level Up facility partners</Text>
        </View>
        <View style={style.bottom}>
          <Button
            title='Use My Location'
            onPress={enableLocation}
            color={style.buttonColor}
            style={style.mainButton}
            titleStyle={style.buttonTitle}
          />
          <Text style={style.skipText} onPress={enableLocation}>
            Skip
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EnableLocation;
