import type { Metadata } from 'next';
import localFont from 'next/font/local';
import HomeLayout from './components/layouts';
import './globals.css';

const afacadVariable = localFont({
  src: './fonts/Afacad-Medium.ttf',
  variable: '--font-afacad-variable',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Deca Swap',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${afacadVariable.className} antialiased`}>
        <HomeLayout>{children}</HomeLayout>
      </body>
    </html>
  );
}
