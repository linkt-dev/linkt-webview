'use client';

import ContentDateFilterButtons from '@/components/content/ContentDateFilterButtons';
import LinkCard from '@/components/ui/link-card';
import useContents from '@/hooks/content/useContents';
import { Stack } from '@chakra-ui/react';
import { useState } from 'react';

export default function App() {
  const { contentDates, filteredContents } = useContents();
  const [targetDate, setTargetDate] = useState<string>('');

  return (
    <Stack>
      <ContentDateFilterButtons dates={contentDates} setTargetDate={setTargetDate} />
      <Stack>
        {filteredContents(targetDate).map(({ id, updatedAt, title }, index) => {
          return <LinkCard id={id} index={index} key={`link-card-${index}`} title={title} date={updatedAt} />;
        })}
      </Stack>
    </Stack>
  );
}
