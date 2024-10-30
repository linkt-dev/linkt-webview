'use client';
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
          <Container maxW="breakpoint-md">{children}</Container>
        </body>
      </Provider>
    </html>
  );
}
