import { ContentItem } from '@/api/content';

export const filterByDate = (contents: ContentItem[], targetDate: string) => {
  if (targetDate === '') {
    return [...contents];
  }
  return [...contents].filter(({ createdAt }) => createdAt === targetDate);
};
