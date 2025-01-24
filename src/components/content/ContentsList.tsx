import { ContentItem } from '@/api/content';
import { Stack } from '@chakra-ui/react';
import LinkCard from '../ui/link-card';

const ContentsList = ({ contents }: { contents: ContentItem[] }) => {
  return (
    <Stack>
      {contents.map((content, index) => {
        return <LinkCard {...content} key={index} />;
      })}
    </Stack>
  );
};

export default ContentsList;
