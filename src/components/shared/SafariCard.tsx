import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { SafariPackage } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Clock, MapPin, MoveRight } from 'lucide-react';

interface SafariCardProps {
  safari: SafariPackage;
}

export default function SafariCard({ safari }: SafariCardProps) {
  const image = PlaceHolderImages.find(p => p.id === safari.image);

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2 rounded-2xl border-acacia/20 bg-ivory">
      <div className="relative h-60 w-full overflow-hidden">
        <Link href={`/safaris/${safari.slug}`} className="block">
          {image && (
            <Image
              src={image.imageUrl}
              alt={safari.name}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={image.imageHint}
            />
          )}
        </Link>
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-4 text-sm text-stone-gray mb-2">
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{safari.duration} Days</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            <span>{safari.destinations[0]}</span>
          </div>
        </div>
        <h3 className="font-headline font-bold text-2xl mb-3">
          <Link href={`/safaris/${safari.slug}`} className="hover:text-sahara-gold transition-colors">
            {safari.name}
          </Link>
        </h3>
        <p className="text-stone-gray text-sm mb-4 flex-grow line-clamp-2">{safari.description}</p>
        <div className="flex items-baseline justify-between pt-4 border-t border-acacia/20">
           <div>
              <p className="text-sm text-stone-gray">From</p>
              <p className="text-2xl font-bold text-sahara-gold">${safari.price.toLocaleString()}</p>
           </div>
          <Button asChild variant="link" className="text-sahara-gold px-0 font-semibold">
            <Link href={`/safaris/${safari.slug}`}>View Details <MoveRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
