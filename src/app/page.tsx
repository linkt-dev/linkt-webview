'use client';

import ContentDateFilterButtons from '@/components/content/ContentDateFilterButtons';
import ContentsList from '@/components/content/ContentsList';
import NoData from '@/components/content/NoData';
import useContents from '@/hooks/content/useContents';
import { Stack } from '@chakra-ui/react';
import { useState } from 'react';

export default function App() {
  const { contentDates, filteredContents, isContents } = useContents();
  const [targetDate, setTargetDate] = useState<string>('');

  return (
    <Stack>
      <ContentDateFilterButtons dates={contentDates} setTargetDate={setTargetDate} />
      {isContents ? <ContentsList contents={filteredContents(targetDate)} /> : <NoData />}
    </Stack>
  );
}
