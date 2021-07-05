import { postData } from "./api.js";

export const login = async (data) => {
    const promise = await postData('/api/auth/login', data);
    return promise.data;
}