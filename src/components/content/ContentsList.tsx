import { ContentItem } from '@/api/content';
import { Stack } from '@chakra-ui/react';
import LinkCard from '../ui/link-card';

const ContentsList = ({ contents }: { contents: ContentItem[] }) => {
  return (
    <Stack>
      {contents.map(({ id, updatedAt, title }, index) => {
        return <LinkCard id={id} index={index} key={`link-card-${index}`} title={title} date={updatedAt} />;
      })}
    </Stack>
  );
};

export default ContentsList;
