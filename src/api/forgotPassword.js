import { postData } from './api.js';

export const forgotPasswordSendEmail = async (data) => {
  const promise = await postData(
    `/api/auth/password/forgot/?email=${data.email}`
  );
  return promise.data;
};
