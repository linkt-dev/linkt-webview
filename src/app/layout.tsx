'use client';

import AddLinkButton from '@/components/ui/button/add-link-button';
import { ColorModeButton } from '@/components/ui/color-mode';
import { Provider } from '@/components/ui/provider';
import useAuth from '@/hooks/useAuth';
import { Container } from '@chakra-ui/react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isUser = useAuth();

  return (
    isUser && (
      <html suppressHydrationWarning>
        <body>
          <Provider>
            <Container maxW="breakpoint-md" paddingY="16px" bg={{ _light: 'bg.light', _dark: 'bg.dark' }}>
              {children}

              <AddLinkButton />
              <ColorModeButton position="fixed" bottom="90px" right="36px" size="lg" borderRadius="25%" />
            </Container>
          </Provider>
        </body>
      </html>
    )
  );
}
