import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
// import Navbar from '@/components/ui/navbar';
import Footer from '@/components/footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: "Palli Moon's Portfolio",
  description: "Palli Moon's personal portfolio and curriculum vitae",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header>{/* <Navbar /> */}</header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
