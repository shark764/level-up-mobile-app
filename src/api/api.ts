import axios, { AxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

type APISource = 'mob' | 'sec';

let persistedData: any | null = null;
let accessToken: string | null = null;
axios.interceptors.request.use(async (config) => {
  try {
    const res = await AsyncStorage.getItem('persist:root');
    persistedData = JSON.parse(res ?? '{}');
    accessToken = JSON.parse(persistedData.appData ?? {}).accessToken;
    config.headers.Access = accessToken;
    return config;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
});

const sec = axios.create({
  baseURL: `https://dev-lul-sec.herokuapp.com`
});

const mob = axios.create({
  baseURL: `https://dev-lul-mob.herokuapp.com`
});

const LvlUpAPI = async (source: APISource = 'sec') => {
  return source === 'sec' ? sec : mob;
};

export const getData = async (
  endPoint: string,
  config?: AxiosRequestConfig,
  source: APISource = 'sec'
) => {
  const { get } = await LvlUpAPI(source);
  return get(endPoint, config);
};

export const postData = async (
  endPoint: string,
  data?: any,
  config?: AxiosRequestConfig,
  source: APISource = 'sec'
) => {
  const { post } = await LvlUpAPI(source);
  return post(endPoint, data, config);
};

export const patchData = async (
  endPoint: string,
  data?: any,
  config?: AxiosRequestConfig,
  source: APISource = 'sec'
) => {
  const { patch } = await LvlUpAPI(source);
  return patch(endPoint, data, config);
};

export const putData = async (
  endPoint: string,
  data?: any,
  config?: AxiosRequestConfig,
  source: APISource = 'sec'
) => {
  const { put } = await LvlUpAPI(source);
  return put(endPoint, data, config);
};

export const deleteData = async (
  endPoint: string,
  config?: AxiosRequestConfig,
  source: APISource = 'sec'
) => {
  const { delete: del } = await LvlUpAPI(source);
  return del(endPoint, config);
};
