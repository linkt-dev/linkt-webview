'use client';
import { Provider } from '@/components/ui/provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <Provider>
        <body>{children}</body>
      </Provider>
    </html>
  );
}
