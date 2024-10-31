import { Box, Card, Center, Text } from '@chakra-ui/react';
import Image from 'next/image';

export interface ILinkCard {
  date: string;
  title: string;
  description: string;
  icon: string;
}

export default function LinkCard(linkCardProps: ILinkCard) {
  const { date, title, description, icon } = linkCardProps;
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
        minH="70px"
      >
        <Center w={{ sm: '80px', base: '80px' }}>
          <Image width={30} height={30} src={icon} alt="link-type-icon" />
        </Center>

        <Box w={{ sm: '80%', base: '80%' }}>
          <Card.Title
            fontSize="sm"
            lineHeight="1.2"
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            lineClamp={2}
            mb="4px"
          >
            {title}
          </Card.Title>

          <Card.Description overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" color="gray.300">
            {description}
          </Card.Description>
        </Box>
      </Card.Root>
    </>
  );
}
