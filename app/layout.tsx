import type { Metadata } from 'next';
import localFont from 'next/font/local';
import HomeLayout from './components/layouts';
import './globals.css';
import { cookies, headers } from 'next/headers';
import WalletProvider from './lib/context/walletProvider';

const afacadVariable = localFont({
  src: './fonts/Afacad-Medium.ttf',
  variable: '--font-afacad-variable',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Deca Swap',
  description: '',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookies = (await headers()).get('cookie');
  return (
    <html lang="en">
      <body className={`${afacadVariable.className} antialiased`}>
        <HomeLayout>
          <WalletProvider cookies={cookies}>
            {children}
          </WalletProvider>
        </HomeLayout>
      </body>
    </html>
  );
}
