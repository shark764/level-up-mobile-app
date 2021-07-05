import axios from 'axios';

const LvlUpAPI = axios.create({
  baseURL: 'https://dev-lul-sec.herokuapp.com'
});

export const getData = async (endPoint, data) => {
  const response = await LvlUpAPI.get(endPoint, data);
  return response;
};

export const postData = async (endPoint, data) => {
  const response = await LvlUpAPI.post(endPoint, data);
  return response;
};

export const patchData = async (endPoint, data) => {
  const response = await LvlUpAPI.patch(endPoint, data);
  return response;
};

export const putData = async (endPoint, data) => {
  const response = await LvlUpAPI.put(endPoint, data);
  return response;
};

export const deleteData = async (endPoint, data) => {
  const response = await LvlUpAPI.delete(endPoint, data);
  return response;
};
