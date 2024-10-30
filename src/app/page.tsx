'use client';

import LinkCard from '@/components/ui/link-card';
import SearchInput from '@/components/ui/input/search-input';
import { mockData } from '@/mockData';
import { Stack } from '@chakra-ui/react';

export default function App() {
  return (
    <Stack>
      <SearchInput />
      <Stack>
        {mockData.map(({ date, title, description, icon }, index) => {
          return (
            <LinkCard key={`link-card-${index}`} title={title} date={date} description={description} icon={icon} />
          );
        })}
      </Stack>
    </Stack>
  );
}
