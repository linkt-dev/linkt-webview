'use client';
import AddLinkButton from '@/components/ui/button/add-link-button';
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
          <Container maxW="breakpoint-md">
            {children}

            <AddLinkButton />
          </Container>
        </body>
      </Provider>
    </html>
  );
}
