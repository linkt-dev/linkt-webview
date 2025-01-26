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

  useEffect(() => {
    (async () => {
      const result = await fetchContents();
      setContents(result.data);
    })();
  }, []);

  return { contents: formattedContents, contentDates, isContents };
};

export default useContents;
