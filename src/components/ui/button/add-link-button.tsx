import { IconButton } from '@chakra-ui/react';
import Link from 'next/link';
import Add from '@assets/add.svg';
import Image from 'next/image';

export default function AddLinkButton() {
  return (
    <Link href="/addLink">
      <IconButton
        bg="#ffbf1f"
        position="fixed"
        bottom="36px"
        right="36px"
        size="lg"
        color="black"
        borderRadius="25%"
        boxShadow="0px 0px 14px 5px #FFBF1F;"
      >
        <Image src={Add} alt="add-link-button" width={40} height={40} />
      </IconButton>
    </Link>
  );
}
