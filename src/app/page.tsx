'use client';

import BaseButton from '@/components/ui/button/base-button';
import LinkCard from '@/components/ui/link-card';
import { mockData } from '@/mockData';
import { Flex, Stack } from '@chakra-ui/react';

export default function App() {
  return (
    <Stack>
      <Flex columnGap="8px">
        <BaseButton>7/1</BaseButton>
        <BaseButton>7/2</BaseButton>
        <BaseButton>7/3</BaseButton>
      </Flex>
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
