import apiRequester from './requester';

interface AuthResponse {
  accessToken: string;
}

export const checkAuth = async (): Promise<AuthResponse> => {
  const { data } = await apiRequester.post<AuthResponse>('/auth');

  return data;
};
