import { Cabin } from 'next/font/google';
import { Header } from '@/components/header';
import { Logo } from '@/components/logo';
import { Navigation } from '@/components/navigation';
import { MobileMenu } from '@/components/mobile-menu';
import { Socials } from '@/components/socials';
import { Footer } from '@/components/footer';
import '@/styles/globals.css';

export const metadata = {
  title: 'Miljan — web developer',
  description: "Hi, I'm Miljan. A frontend web developer and React enthusiast.",
  icons: {
    icon: '/favicon.ico',
  },
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
        <Socials />
        <Footer />
      </body>
    </html>
  );
}
