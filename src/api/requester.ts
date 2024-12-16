import { browserStorage } from '@/utils/browserStorage';
import axios from 'axios';

const API_VERSION = 'v1';

const apiRequester = axios.create({
  baseURL: `https://api.linkt.one/api/${API_VERSION}`,
});

export const authorizedApiRequester = axios.create({
  baseURL: `https://api.linkt.one/api/${API_VERSION}`,
  headers: {
    Authorization: `Bearer ${browserStorage.getData('accessToken')}`,
  },
});

export default apiRequester;
