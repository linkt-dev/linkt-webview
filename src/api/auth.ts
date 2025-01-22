import { authorizedApiRequester } from './requester';

interface AuthResponse {
  accessToken: string;
}

export const checkAuth = async (userId: string): Promise<AuthResponse> => {
  const { data } = await authorizedApiRequester.post<AuthResponse>('/auth', {
    userId: userId,
  });

  return data;
};
