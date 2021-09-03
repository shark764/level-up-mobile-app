import { postData } from './api';

export const signUp = async (data: any) => {
  const promise = await postData('/api/auth/register', data);
  return promise.data;
};
