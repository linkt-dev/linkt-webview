import { Input } from '@chakra-ui/react';
import SearchIcon from '@assets/search.svg';
import { InputGroup } from '../input-group';
import Image from 'next/image';

export default function SearchInput() {
  return (
    <InputGroup flex="1" startElement={<Image src={SearchIcon} alt="search-icon" width={19} height={19} />}>
      <Input placeholder="Search Links ..." bg="primary.main" border="1px solid primary.main" color="white" />
    </InputGroup>
  );
}
