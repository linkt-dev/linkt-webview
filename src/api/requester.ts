import axios from 'axios';
import { refreshToken } from './auth';
import { browserStorage } from '@/utils/browserStorage';
import { USER } from '@/constants/StorageData';

const API_VERSION = 'v1';
const baseApiUrl =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_DEV_API_URL
    : process.env.NEXT_PUBLIC_PRODUCTION_API_URL;

const apiRequester = axios.create({
  baseURL: `${baseApiUrl}/${API_VERSION}`,
  withCredentials: true,
});

export const authorizedApiRequester = axios.create({
  baseURL: `${baseApiUrl}/${API_VERSION}`,
  withCredentials: true,
});

authorizedApiRequester.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;

    if (error?.response?.status === 401 && !config?.sent) {
      await refreshToken(browserStorage.getData(USER)!);

      return axios(config);
    }

    return Promise.reject(error);
  },
);

export default apiRequester;
