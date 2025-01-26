import { Box, Tabs } from '@chakra-ui/react';
import ContentsList from '../ContentsList';
import { filterByDate } from '@/utils/filterByDate';
import { ContentItem } from '@/api/content';

const ContentsTabContent = ({ contents, contentDates }: { contents: ContentItem[]; contentDates: string[] }) => {
  const filteredContents = contentDates.map((date) => {
    return {
      date,
      contents: filterByDate(contents, date),
    };
  });

  return (
    <Box position="relative">
      {filteredContents.map(({ date, contents }: { date: string; contents: ContentItem[] }) => {
        return (
          <Tabs.Content
            key={date}
            value={date}
            position="absolute"
            inset={0}
            _open={{
              animationName: 'fade-in, scale-in',
              animationDuration: '185ms',
            }}
            _closed={{
              animationName: 'fade-out, scale-out',
              animationDuration: '60ms',
            }}
          >
            <ContentsList contents={contents} />
          </Tabs.Content>
        );
      })}
    </Box>
  );
};

export default ContentsTabContent;
