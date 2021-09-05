import { postData } from './api';

export const forgotPasswordSendEmail = async (data: any) => {
  const promise = await postData(
    `/api/auth/password/forgot/?email=${data.email}`
  );
  return promise.data;
};
