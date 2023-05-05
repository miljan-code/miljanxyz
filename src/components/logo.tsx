import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo.png"
        alt="Miljan web developer"
        width={500}
        height={500}
        className="h-12 w-12 cursor-pointer"
      />
    </Link>
  );
};
