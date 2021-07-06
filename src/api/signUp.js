import { postData } from './api.js';

export const signUp = async (data) => {
  const promise = await postData('/api/auth/register', data);
  return promise.data;
};
