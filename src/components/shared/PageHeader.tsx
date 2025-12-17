import Image from 'next/image';
import type { FC } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  imageId: string;
}

const PageHeader: FC<PageHeaderProps> = ({ title, subtitle, imageId }) => {
  const image = PlaceHolderImages.find(p => p.id === imageId);

  return (
    <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center">
      {image && (
        <Image
          src={image.imageUrl}
          alt={image.description}
          fill
          className="object-cover object-center"
          priority
          data-ai-hint={image.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-4">
          {title}
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-200">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
