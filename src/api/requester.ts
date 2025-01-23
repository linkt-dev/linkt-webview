import axios from 'axios';

const API_VERSION = 'v1';
const baseApiUrl =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_DEV_API_URL
    : process.env.NEXT_PUBLIC_PRODUCTION_API_URL;

const apiRequester = axios.create({
  baseURL: `${baseApiUrl}/${API_VERSION}`,
});

export const authorizedApiRequester = axios.create({
  baseURL: `${baseApiUrl}/${API_VERSION}`,
  withCredentials: true,
});

export default apiRequester;
