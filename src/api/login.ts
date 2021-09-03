import { postData } from './api';

export const login = async (data: any) => {
  const promise = await postData('/api/auth/login', data);
  return promise.data;
};
