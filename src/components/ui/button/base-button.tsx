import { Button, ButtonProps } from '@chakra-ui/react';
import { RefAttributes } from 'react';

export default function BaseButton(props: ButtonProps & RefAttributes<HTMLButtonElement>) {
  return (
    <Button
      {...props}
      bg={{ _light: 'button.light', _dark: 'button.dark' }}
      color={{ _light: 'buttonText.light', _dark: 'buttonText.dark' }}
      _active={{ bg: { _light: 'button.light.active', _dark: 'button.dark.active' } }}
      borderRadius="8px"
    >
      {props.children}
    </Button>
  );
}
