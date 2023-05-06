import Image from 'next/image';

interface PlanetsItem extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  size: number;
}

const PlanetsItem: React.FC<PlanetsItem> = ({ imageUrl, size, className }) => {
  return (
    <div className={className}>
      <Image
        src={imageUrl}
        width={size}
        height={size}
        className="opacity-50"
        alt="Planet"
      />
    </div>
  );
};

const Planets = () => {
  return (
    <div className="absolute z-0 hidden h-full w-full lg:block">
      <PlanetsItem
        imageUrl="/images/planet-1.png"
        size={250}
        className="absolute left-[5%] top-1/4 animate-bounce-rotate-slow lg:top-[20%] xl:left-[10%] xl:top-[10%]"
      />
      <PlanetsItem
        imageUrl="/images/planet-2.png"
        size={250}
        className="absolute right-[15%] top-[15%] animate-bounce-rotate-medium"
      />
      <PlanetsItem
        imageUrl="/images/planet-3.png"
        size={250}
        className="absolute bottom-0 right-[15%] animate-bounce-rotate-fast xl:bottom-[5%] xl:right-1/4"
      />
    </div>
  );
};

const GraduateHat = () => {
  return (
    <Image
      src="/images/graduate-hat.png"
      alt="Graduate Hat"
      width={477}
      height={434}
      className="absolute right-4 hidden w-1/5 sm:top-7 sm:block md:top-14"
    />
  );
};

const PaperPlane = () => {
  return (
    <Image
      src="/images/paper-plane.png"
      alt="paper plane"
      height={409}
      width={476}
      className="mt-6 hidden h-24 w-fit sm:inline-block"
    />
  );
};

const ReactIcon = () => {
  return (
    <Image
      src="/icons/react-red.png"
      width={96}
      height={96}
      alt="Red React logo"
      className="h-auto w-12 animate-spin-slow"
    />
  );
};

export const Decor = {
  Planets,
  Graduate: GraduateHat,
  PaperPlane,
  ReactIcon,
};
