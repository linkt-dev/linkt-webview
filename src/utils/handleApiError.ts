import { isAxiosError } from 'axios';

interface Error {
  status?: number;
  errorMessage: string;
}

export const handleApiError = (e: unknown): Error => {
  if (isAxiosError(e)) {
    return {
      status: e.response?.status,
      errorMessage: e.response?.data.errMsg,
    };
  }
  return { errorMessage: 'unknown error occured' };
};
