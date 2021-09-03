import AsyncStorage from '@react-native-async-storage/async-storage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mobileApi = createApi({
  reducerPath: 'mobileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dev-lul-mob.herokuapp.com',
    prepareHeaders: async () => {
      const res = await AsyncStorage.getItem('persist:root');
      const persistedData = JSON.parse(res ?? '{}');
      const token = JSON.parse(persistedData.appData ?? {}).accessToken;
      return new Headers({ Access: `bearer ${token}` });
    }
  }),
  endpoints: (builder) => ({
    getUserPicture: builder.query<any, boolean>({
      query: (getUrl: boolean = true) =>
        `userprofile/settings/avatar?url=${getUrl}`
    })
  })
});

// @ts-ignore
export const { useGetUserPictureQuery } = mobileApi;
