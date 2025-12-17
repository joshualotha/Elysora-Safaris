import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { SafariPackage } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Clock, MapPin, Star } from 'lucide-react';

interface SafariCardProps {
  safari: SafariPackage;
}

export default function SafariCard({ safari }: SafariCardProps) {
  const image = PlaceHolderImages.find(p => p.id === safari.image);

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <Link href={`/safaris/${safari.slug}`} className="block">
          <div className="relative h-60 w-full">
            {image && (
              <Image
                src={image.imageUrl}
                alt={safari.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                data-ai-hint={image.imageHint}
              />
            )}
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-2xl mb-2">
          <Link href={`/safaris/${safari.slug}`} className="hover:text-primary transition-colors">
            {safari.name}
          </Link>
        </CardTitle>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{safari.duration} Days</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{safari.destinations.join(', ')}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {safari.highlights.map(highlight => (
            <Badge key={highlight} variant="secondary">{highlight}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <div>
          <p className="text-sm text-muted-foreground">From</p>
          <p className="text-2xl font-bold text-primary">${safari.price.toLocaleString()}</p>
        </div>
        <Button asChild>
          <Link href={`/safaris/${safari.slug}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
