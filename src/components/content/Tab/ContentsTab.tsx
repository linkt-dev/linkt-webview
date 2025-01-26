import { Tabs } from '@chakra-ui/react';
import { ReactNode } from 'react';
import ContentsTabTriggers from './ContentsTabTriggers';
import ContentsTabContent from './ContentsTabContent';

const ContentsTabRoot = ({ defaultValue, children }: { defaultValue: string; children: ReactNode }) => {
  return (
    <Tabs.Root transitionDelay={'1200ms'} lazyMount unmountOnExit defaultValue={defaultValue} variant={'subtle'}>
      {children}
    </Tabs.Root>
  );
};

export const ContentsTab = Object.assign(
  {},
  {
    Root: ContentsTabRoot,
    Triggers: ContentsTabTriggers,
    Content: ContentsTabContent,
  },
);
