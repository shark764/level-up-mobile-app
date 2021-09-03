import AsyncStorage from '@react-native-async-storage/async-storage';

export const uploadAvatar = async (data: FormData) => {
  try {
    const res = await AsyncStorage.getItem('persist:root');
    const persistedData = JSON.parse(res ?? '{}');
    const accessToken = JSON.parse(persistedData.appData ?? {}).accessToken;
    const newData = await fetch(
      'https://dev-lul-mob.herokuapp.com/userprofile/settings/avatar',
      {
        body: data,
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          'Accept-Encoding': 'gzip, deflate, br',
          Access: `bearer ${accessToken}`
        }
      }
    );
    return newData.json();
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
