import React from 'react';
import { Platform, ScrollView, View, Image } from 'react-native';
import { PERMISSIONS, request, check, RESULTS } from 'react-native-permissions';
import { Button } from '@components/Button';
import { Container } from '@components/Container';
import { Text } from '@components/Text';
import { HeadSection } from '@components/HeadSection';
import { setAppData } from '@state/appDataSlice';
import { useSelector, useDispatch } from 'react-redux';

// @ts-ignore
import locationImage from '@assets/images/permissions.png';

import styles from './EnableLocation.styles';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '@state/reducer';

const EnableLocation = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const { showPermissionsScreen } = useSelector(
    (state: RootState) => state.appData
  );

  const shouldRequest = (checkPermission: string) =>
    checkPermission !== RESULTS.UNAVAILABLE &&
    checkPermission !== RESULTS.GRANTED;

  const enablePermissions = async () => {
    if (Platform.OS === 'ios') {
      const locationCheck = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      const cameraCheck = await check(PERMISSIONS.IOS.CAMERA);
      const galleryCheck = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
      console.info(cameraCheck);
      try {
        shouldRequest(locationCheck) &&
          (await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE));
        shouldRequest(cameraCheck) && (await request(PERMISSIONS.IOS.CAMERA));
        shouldRequest(galleryCheck) &&
          (await request(PERMISSIONS.IOS.PHOTO_LIBRARY));
      } catch (error) {
        console.error(error);
      }
    }

    if (Platform.OS === 'android') {
      const locationCheck = await check(
        PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION
      );
      const cameraCheck = await check(PERMISSIONS.ANDROID.CAMERA);
      const galleryCheck = await check(
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
      );
      shouldRequest(locationCheck) &&
        (await request(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION));
      shouldRequest(cameraCheck) && (await request(PERMISSIONS.ANDROID.CAMERA));
      shouldRequest(galleryCheck) &&
        (await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE));
    }
    //@ts-ignore
    dispatch(setAppData({ showPermissionsScreen: false }));

    goNext();
  };

  const goNext = () => navigate('SignUpStep2');

  if (!showPermissionsScreen) {
    goNext();
  }

  return (
    <Container background='dark' style={styles.enableLocationContainer}>
      <ScrollView>
        <HeadSection backText='Back' textStyle={styles.backText} />
        <View style={styles.mainIconContainer}>
          <Image source={locationImage} />
        </View>
        <View style={styles.mainText}>
          <Text type='heading-3' style={styles.header}>
            Enable app permissions
          </Text>
          <Text type='body-md' style={styles.subheader}>
            In order to get full access to LevelUp
          </Text>
          <Text type='body-md' style={styles.subheader}>
            Live features make sure you are
          </Text>
          <Text type='body-md' style={styles.subheader}>
            allowing the following permissions
          </Text>
        </View>
        <View style={styles.bottom}>
          <Button
            color='primary'
            title='Enable access'
            onPress={enablePermissions}
            style={styles.mainButton}
            // titleStyle={style.buttonTitle}
          />
          <Button
            color='transparent'
            mode='text'
            title='Not Now'
            onPress={goNext}
            titleStyle={styles.buttonTitle}
            style={styles.mainButton}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default EnableLocation;
