import type { Metadata } from 'next';

import { Roboto } from 'next/font/google';

import './globals.css';

import { Providers } from '@/providers';

const roboto = Roboto({ subsets: ['latin'], weight: '500' });

export const metadata: Metadata = {
  title: 'Tabela Fipe',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
