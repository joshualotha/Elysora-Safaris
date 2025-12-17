import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/shared/PageHeader";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { destinations } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

const mapPoints = [
  { name: "Serengeti", slug: "serengeti", top: "35%", left: "30%" },
  { name: "Ngorongoro", slug: "ngorongoro", top: "45%", left: "42%" },
  { name: "Tarangire", slug: "tarangire", top: "52%", left: "48%" },
  { name: "Kilimanjaro", slug: "kilimanjaro", top: "48%", left: "60%" },
  { name: "Zanzibar", slug: "zanzibar", top: "60%", left: "80%" },
];

export default function DestinationsPage() {
  const mapImage = PlaceHolderImages.find(p => p.id === 'tanzania-map');
  
  return (
    <div>
      <PageHeader
        title="Explore Tanzania's Wonders"
        subtitle="From the endless plains of the Serengeti to the turquoise waters of Zanzibar."
        imageId="destination-serengeti"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Interactive Destination Map</h2>
          <Card className="overflow-hidden">
            <div className="relative w-full aspect-[4/3]">
              {mapImage && (
                <Image
                  src={mapImage.imageUrl}
                  alt={mapImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={mapImage.imageHint}
                />
              )}
              {mapPoints.map(point => (
                <div key={point.name} className="absolute group" style={{ top: point.top, left: point.left }}>
                  <Link href={`/destinations/${point.slug}`}>
                    <div className="relative flex items-center justify-center">
                      <div className="absolute h-4 w-4 rounded-full bg-primary animate-ping"></div>
                      <div className="relative h-3 w-3 rounded-full bg-primary border-2 border-white"></div>
                    </div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-1 bg-card text-card-foreground text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {point.name}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Our Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map(destination => {
              const image = PlaceHolderImages.find(p => p.id === destination.image);
              return (
                <Card key={destination.slug} className="overflow-hidden">
                  <CardHeader className="p-0">
                    {image && (
                      <div className="relative h-60 w-full">
                        <Image
                          src={image.imageUrl}
                          alt={destination.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="font-headline text-2xl mb-2">{destination.name}</CardTitle>
                    <p className="text-muted-foreground text-sm line-clamp-3">{destination.description}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild variant="link" className="p-0 h-auto">
                      <Link href={`/destinations/${destination.slug}`}>
                        Explore <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
