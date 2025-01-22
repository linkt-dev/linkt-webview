import { ContentItem, fetchContents } from '@/api/content';
import { useEffect, useState } from 'react';

const useContents = () => {
  const [contents, setContents] = useState<ContentItem[]>([]);
  const isContents = contents.length > 0;
  const formattedContents: ContentItem[] = contents.map((content) => {
    return {
      ...content,
      createdAt: new Date(content.createdAt).toLocaleDateString(),
    };
  });
  const contentDates = Array.from(new Set(formattedContents.map((link) => link.createdAt)));

  const filteredContents = (targetDate: string) => {
    if (targetDate === '') {
      return [...formattedContents];
    }
    return [...formattedContents].filter(({ createdAt }) => createdAt === targetDate);
  };

  useEffect(() => {
    (async () => {
      const result = await fetchContents();
      setContents(result.data);
    })();
  }, []);

  return { contentDates, filteredContents, isContents };
};

export default useContents;
