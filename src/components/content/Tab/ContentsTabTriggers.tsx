import { Tabs } from '@chakra-ui/react';

const ContentsTabTriggers = ({ contentDates }: { contentDates: string[] }) => {
  return (
    <Tabs.List>
      {contentDates.map((date) => (
        <Tabs.Trigger key={date} value={date}>
          {date}
        </Tabs.Trigger>
      ))}
    </Tabs.List>
  );
};

export default ContentsTabTriggers;
