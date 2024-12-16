'use client';

import { browserStorage } from '@/utils/browserStorage';

const API_VERSION = 'v1';

export const fetcher = async <T>(resource: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(`https://api.linkt.one/api/${API_VERSION}/${resource}`, options);

  if (!response.ok) {
    return Promise.reject(response.statusText);
  }

  return (await response.json()) as T;
};

export const authorizedFetcher = async <T>(resource: string, options?: RequestInit): Promise<T> => {
  return fetcher(`https://api.linkt.one/api/${API_VERSION}/${resource}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${browserStorage.getData('accessToken')}`,
    },
  });
};
