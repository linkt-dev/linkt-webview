'use client';
import AddLinkButton from '@/components/ui/button/add-link-button';
import { ColorModeButton } from '@/components/ui/color-mode';
import { Provider } from '@/components/ui/provider';
import { Container } from '@chakra-ui/react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <Provider>
        <body>
          <Container maxW="breakpoint-md" marginTop="16px" bg={{ _light: 'bg.light', _dark: 'bg.dark' }}>
            {children}

            <AddLinkButton />
            <ColorModeButton position="fixed" bottom="90px" right="36px" size="lg" borderRadius="25%" />
          </Container>
        </body>
      </Provider>
    </html>
  );
}
