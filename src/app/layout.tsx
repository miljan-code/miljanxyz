import { Cabin } from 'next/font/google';
import { Header } from '@/components/header';
import { Logo } from '@/components/logo';
import { Navigation } from '@/components/navigation';
import { MobileMenu } from '@/components/mobile-menu';
import { Footer } from '@/components/footer';
import '@/styles/globals.css';

export const metadata = {
  title: 'Miljan — web developer',
  description: "Hi, I'm Miljan. A frontend web developer and React enthusiast.",
};

const cabin = Cabin({
  subsets: ['latin-ext'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cabin.className}>
        <Header>
          <Logo />
          <Navigation />
          <MobileMenu />
        </Header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
