import { Input, InputProps } from '@chakra-ui/react';
import { RefAttributes } from 'react';

export default function BaseInput(props: InputProps & RefAttributes<HTMLInputElement>) {
  return (
    <Input
      {...props}
      bg={{ _light: 'card.light', _dark: 'card.dark' }}
      border="1px solid primary.main"
      color={{ _light: 'text.light', _dark: 'text.dark' }}
    />
  );
}
