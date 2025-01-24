import { Box, Card, Center } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export interface ILinkCard {
  id: number;
  updatedAt?: string;
  title: string;
  icon?: string;
  link: string;
}

export default function LinkCard(linkCardProps: ILinkCard) {
  const { title, icon, link } = linkCardProps;
  return (
    <Link href={link} target="_blank">
      <Card.Root
        borderRadius="md"
        border="none"
        bg={{ _light: 'card.light', _dark: 'card.dark' }}
        color={{ _light: 'text.light', _dark: 'text.dark' }}
        p="8px 8px 8px 8px"
        flexDir="row"
        gap="2"
      >
        <Box w="55px" h="55px">
          {icon ? (
            <Image width={30} height={30} src={icon} alt="link-type-icon" />
          ) : (
            <Center w="full" h="full" borderRadius="8px" bg="grey.200" fontSize="xl">
              {title.charAt(0)}
            </Center>
          )}
        </Box>

        <Card.Body w="80%" p={0} h="55px">
          <Card.Title
            fontSize="sm"
            lineHeight="1.2"
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            lineClamp={2}
            minH="33.59px"
          >
            {title}
          </Card.Title>
          <Card.Description overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" w="100%">
            {link}
          </Card.Description>
        </Card.Body>
      </Card.Root>
    </Link>
  );
}
