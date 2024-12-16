import { AxiosResponse } from 'axios';
import { authorizedApiRequester } from './requester';

export interface Content {
  title: string;
  link: string;
  category: string;
}

export interface ContentItem extends Content {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export const createContent = async (newContent: Content): Promise<AxiosResponse<ContentItem>> => {
  const result = await authorizedApiRequester.post<ContentItem>('contents', newContent);

  return result;
};

export const fetchContents = async (): Promise<AxiosResponse<ContentItem[]>> => {
  const result = await authorizedApiRequester.get<ContentItem[]>('contents');

  return result;
};

export const fetchContent = async (): Promise<AxiosResponse<ContentItem>> => {
  const result = await authorizedApiRequester.get<ContentItem>('contents');

  return result;
};
