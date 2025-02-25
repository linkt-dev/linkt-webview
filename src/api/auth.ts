import apiRequester, { authorizedApiRequester } from './requester';

interface AuthResponse {
  accessToken: string;
}

export const checkAuth = async (userId: string): Promise<AuthResponse> => {
  const { data } = await authorizedApiRequester.post<AuthResponse>('/auth', {
    userId: userId,
  });

  return data;
};

export const refreshToken = async (userId: string): Promise<AuthResponse> => {
  const { data } = await apiRequester.post<AuthResponse>('/auth/refresh', {
    userId: userId,
  });

  return data;
};
