import { Cabin } from 'next/font/google';
import Navigation from '@/components/navigation';
import '@/styles/globals.css';

export const metadata = {
  title: 'Miljan — web developer',
  description: "Hi, I'm Miljan. A frontend web developer and React enthusiast.",
};

const cabin = Cabin({
  subsets: ['latin'],
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
        <Navigation />
        <>{children}</>
      </body>
    </html>
  );
}
