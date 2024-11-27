import { Box, Card, Center, Text } from '@chakra-ui/react';
import Image from 'next/image';

export interface ILinkCard {
  id: number;
  date: string;
  title: string;
  icon: string;
}

export default function LinkCard(linkCardProps: ILinkCard) {
  const { date, title, icon } = linkCardProps;
  return (
    <>
      <Text color="gray.700" mb="2px">
        {date}
      </Text>
      <Card.Root
        borderRadius="md"
        border="none"
        bg={{ _light: 'card.light', _dark: 'card.dark' }}
        color={{ _light: 'text.light', _dark: 'text.dark' }}
        p="8px 8px 8px 4px"
        flexDir="row"
      >
        <Center w={{ sm: '60px', base: '50px' }}>
          <Image width={30} height={30} src={icon} alt="link-type-icon" />
        </Center>

        <Box w={{ sm: '80%', base: '80%' }} alignSelf={'center'}>
          <Card.Title
            fontSize="sm"
            lineHeight="1.2"
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            lineClamp={2}
          >
            {title}
          </Card.Title>
        </Box>
      </Card.Root>
    </>
  );
}
