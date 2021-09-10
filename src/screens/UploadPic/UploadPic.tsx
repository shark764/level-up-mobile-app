import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Platform
} from 'react-native';
import { Button } from '@components/Button';
import { Container } from '@components/Container';
import { Text } from '@components/Text';
// import { HeadSection } from '@components/HeadSection';
import ImagePicker, {
  Image as ImageType,
  Options
} from 'react-native-image-crop-picker';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { getColor } from '@utils/tailwind';
import { IconButton, ProgressBar } from 'react-native-paper';
import { RootState } from '@state/reducer';
import styles from './UploadPic.styles';
import { Snackbar } from '@components/Snackbar';
import { Dialog } from '@components/Dialog';
import { useGetUserPictureQuery } from '@api/mobileQuery';
import { SemanticColors } from '@app-types/appData';
import { uploadAvatar } from '@api/user';
import { HeadSection } from '@components/HeadSection';
import { PERMISSIONS, request, check, RESULTS } from 'react-native-permissions';

type SnackBarInfo = {
  type?: SemanticColors;
  visible?: boolean;
  message?: string;
};

const UploadPic = () => {
  const { navigate } = useNavigation();
  const { showPermissionsScreen } = useSelector(
    (state: RootState) => state.appData
  );
  const [showDialog, setShowDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageType | undefined>();
  const [snackbarInfo, setSnackbarInfo] = useState<SnackBarInfo>({});
  const [isUploading, setIsUploading] = useState(false);

  const {
    data = {},
    error: pictureError,
    isError: isPictureFetchingError,
    isLoading,
    refetch
  } = useGetUserPictureQuery(true);

  const navigateTo = (screen: string) =>
    showPermissionsScreen ? navigate(screen) : navigate('More');

  const shouldRequest = (checkPermission: string) =>
    checkPermission !== RESULTS.UNAVAILABLE &&
    checkPermission !== RESULTS.GRANTED;

  const enablePermissions = async () => {
    if (Platform.OS === 'ios') {
      const cameraCheck = await check(PERMISSIONS.IOS.CAMERA);
      const galleryCheck = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
      console.info(cameraCheck);
      try {
        shouldRequest(cameraCheck) && (await request(PERMISSIONS.IOS.CAMERA));
        shouldRequest(galleryCheck) &&
          (await request(PERMISSIONS.IOS.PHOTO_LIBRARY));
      } catch (error) {
        console.error(error);
      }
    }

    if (Platform.OS === 'android') {
      const cameraCheck = await check(PERMISSIONS.ANDROID.CAMERA);
      const galleryCheck = await check(
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
      );
      shouldRequest(cameraCheck) && (await request(PERMISSIONS.ANDROID.CAMERA));
      shouldRequest(galleryCheck) &&
        (await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE));
    }
  };

  const openImagePicker = async (option: 'gallery' | 'camera') => {
    const options: Options = {
      mediaType: 'photo',
      cropping: true,
      width: 500,
      height: 500,
      multiple: false,
      compressImageQuality: 0.5,
      includeBase64: true,
      forceJpg: true
    };
    setShowDialog(false);
    try {
      await enablePermissions();
      const image: ImageType =
        option === 'camera'
          ? await ImagePicker.openCamera(options)
          : await ImagePicker.openPicker(options);
      setSelectedImage(image);
    } catch (err) {
      console.error(err);
      setSnackbarInfo({
        type: 'error',
        //@ts-ignore
        message: err.toString(),
        visible: true
      });
    }
  };

  const uploadPicture = async () => {
    if (selectedImage) {
      setIsUploading(true);
      console.info(selectedImage);
      const formData = new FormData();
      formData.append('image', {
        name:
          selectedImage.filename?.toLowerCase() ||
          selectedImage.path.substring(
            selectedImage.path.lastIndexOf('/') + 1,
            selectedImage.path.length
          ),
        type: 'multipart/form-data',
        height: selectedImage.height,
        width: selectedImage.width,
        uri: selectedImage.path
      });
      try {
        const res = await uploadAvatar(formData);
        console.info('Res', res.status);
        const { status } = res;
        const snackMessage: SnackBarInfo =
          status === 'success'
            ? {
                type: 'success',
                message: 'Picture uploaded successfully',
                visible: true
              }
            : {
                type: 'error',
                message: res.error.message,
                visible: true
              };
        if (status !== 'error') {
          setSelectedImage(undefined);
          refetch();
          setIsUploading(false);
        }
        setSnackbarInfo(snackMessage);
      } catch (e) {
        console.error(e);
        setIsUploading(false);
        setSnackbarInfo({
          type: 'error',
          message: e.toString(),
          visible: true
        });
      }
    }
  };

  return (
    <>
      <Container background='dark'>
        <ScrollView>
          <HeadSection backText='Back' textStyle={styles.backText} />
          <View style={styles.mainIconContainer}>
            {!data.data && !selectedImage ? (
              <View style={styles.cameraContainer}>
                <IconButton
                  icon='camera-outline'
                  style={[styles.camera]}
                  color={getColor('purple')}
                  size={50}
                  onPress={() => setShowDialog(true)}
                />
              </View>
            ) : (
              <TouchableOpacity
                style={styles.previewContainer}
                onPress={() => setShowDialog(true)}>
                <Image
                  source={{
                    uri: selectedImage
                      ? // @ts-ignore
                        `data:${selectedImage.mime};base64,${selectedImage.data}`
                      : data.data
                  }}
                  style={[styles.avatar]}
                />
              </TouchableOpacity>
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
              onPress={uploadPicture}
              style={styles.mainButton}
              disabled={!selectedImage}
              // titleStyle={style.buttonTitle}
            />
            <Button
              color='transparent'
              mode='text'
              title='Add Later'
              onPress={() => navigateTo('More')}
              titleStyle={styles.buttonTitle}
              style={styles.mainButton}
            />
          </View>
        </ScrollView>
        <ProgressBar
          indeterminate
          visible={isLoading || isUploading}
          color={getColor('white')}
        />
      </Container>
      <Dialog visible={showDialog} onDismiss={() => setShowDialog(false)}>
        <Button
          color='primary'
          title='Take photo'
          onPress={() => openImagePicker('camera')}
          style={styles.mainButton}
        />
        <Button
          color='primary'
          title='Choose photo'
          onPress={() => openImagePicker('gallery')}
          style={styles.mainButton}
        />
        <Button
          color='transparent'
          mode='text'
          title='Cancel'
          onPress={() => setShowDialog(false)}
          style={styles.mainButton}
        />
      </Dialog>
      <Snackbar
        type={snackbarInfo.type || 'error'}
        visible={snackbarInfo.visible ?? isPictureFetchingError}
        onDismiss={() =>
          setSnackbarInfo({
            visible: false,
            type: snackbarInfo.type
          })
        }>
        {
          // @ts-ignore
          snackbarInfo.message || pictureError?.data.error.message
        }
      </Snackbar>
    </>
  );
};

export default UploadPic;
