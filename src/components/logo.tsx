'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  const handleRoute = () => router.push('/');

  return (
    <Image
      onClick={handleRoute}
      src="/images/logo.png"
      alt="Miljan web developer"
      width={500}
      height={500}
      className="h-12 w-12 cursor-pointer"
    />
  );
};

export default Logo;
