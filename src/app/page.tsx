'use client';

import { ContentItem, fetchContents } from '@/api/content';
import BaseButton from '@/components/ui/button/base-button';
import LinkCard from '@/components/ui/link-card';
import { Flex, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function App() {
  const [links, setLinks] = useState<ContentItem[]>([]);
  const linkDates = links.map((link) => link.createdAt);

  useEffect(() => {
    (async () => {
      const result = await fetchContents();
      setLinks(result.data);
    })();
  }, []);
  return (
    <Stack>
      <Flex columnGap="8px">
        {linkDates.map((date, index) => (
          <BaseButton key={`date-button-${index}`}>{new Date(date).toLocaleDateString()}</BaseButton>
        ))}
      </Flex>
      <Stack>
        {links.map(({ id, updatedAt, title }, index) => {
          return <LinkCard id={id} index={index} key={`link-card-${index}`} title={title} date={updatedAt} />;
        })}
      </Stack>
    </Stack>
  );
}
