import axios from 'axios';

const API_VERSION = 'v1';

const apiRequester = axios.create({
  baseURL: `https://dev-api.linkt.one/api/${API_VERSION}`,
});

export const authorizedApiRequester = axios.create({
  baseURL: `https://dev-api.linkt.one/api/${API_VERSION}`,
  withCredentials: true,
});

export default apiRequester;
