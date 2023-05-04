import Image from 'next/image';

interface DecorItem extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  size: number;
}

const DecorItem: React.FC<DecorItem> = ({ imageUrl, size, className }) => {
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

const Decor = () => {
  return (
    <div className="absolute z-0 hidden h-full w-full lg:block">
      <DecorItem
        imageUrl="/images/planet-1.png"
        size={250}
        className="absolute left-[5%] top-1/4 lg:top-[20%] xl:left-[10%] xl:top-[10%]"
      />
      <DecorItem
        imageUrl="/images/planet-2.png"
        size={250}
        className="absolute right-[15%] top-[15%]"
      />
      <DecorItem
        imageUrl="/images/planet-3.png"
        size={250}
        className="absolute bottom-0 right-[15%] xl:bottom-[5%] xl:right-1/4"
      />
    </div>
  );
};

export default Decor;
