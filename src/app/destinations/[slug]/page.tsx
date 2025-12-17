import { notFound } from "next/navigation";
import Image from "next/image";
import { destinations, safariPackages } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import PageHeader from "@/components/shared/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Sun, Cloud, Calendar } from "lucide-react";
import SafariCard from "@/components/shared/SafariCard";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return destinations.map((dest) => ({
    slug: dest.slug,
  }));
}

export default function DestinationDetailPage({ params }: Props) {
  const destination = destinations.find((dest) => dest.slug === params.slug);

  if (!destination) {
    notFound();
  }

  const relatedSafaris = safariPackages.filter(pkg => pkg.destinations.includes(destination.name));

  const galleryImages = [
    PlaceHolderImages.find(p => p.id === 'safari-gallery-1'),
    PlaceHolderImages.find(p => p.id === 'safari-gallery-2'),
    PlaceHolderImages.find(p => p.id === 'safari-gallery-3'),
    PlaceHolderImages.find(p => p.id === 'destination-tarangire')
  ].filter(Boolean);

  return (
    <div>
      <PageHeader
        title={destination.name}
        subtitle={`Discover what makes ${destination.name} a must-visit destination.`}
        imageId={destination.image}
      />

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12">
            <main className="lg:col-span-2 space-y-16">
                {/* Overview */}
                <section>
                    <h2 className="text-3xl font-headline font-bold mb-4">Overview</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        {destination.description}
                    </p>
                    <p className="text-muted-foreground mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                    </p>
                </section>

                 {/* Wildlife Section */}
                <section>
                    <h2 className="text-3xl font-headline font-bold mb-6">Wildlife to Spot</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {destination.attractions.map(animal => (
                            <div key={animal}>
                                <div className="relative h-32 w-32 mx-auto rounded-full overflow-hidden border-4 border-sand">
                                    <Image src={`https://picsum.photos/seed/${animal}/200`} alt={animal} fill className="object-cover" />
                                </div>
                                <h3 className="font-bold mt-4">{animal}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Photo Gallery */}
                <section>
                    <h2 className="text-3xl font-headline font-bold mb-6">Photo Gallery</h2>
                     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryImages.map((img, index) => img && (
                            <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                                <Image
                                    src={img.imageUrl}
                                    alt={img.description}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-110"
                                    data-ai-hint={img.imageHint}
                                />
                            </div>
                        ))}
                    </div>
                </section>

                 {/* Safaris including this destination */}
                {relatedSafaris.length > 0 && (
                    <section>
                         <h2 className="text-3xl font-headline font-bold mb-6">Safaris in {destination.name}</h2>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             {relatedSafaris.map(safari => (
                                 <SafariCard key={safari.slug} safari={safari} />
                             ))}
                         </div>
                    </section>
                )}

            </main>
            <aside className="lg:col-span-1">
                 <div className="sticky top-24 space-y-8">
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="font-headline text-xl font-bold mb-4">Quick Facts</h3>
                            <ul className="space-y-3 text-muted-foreground text-sm">
                                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-safari-green" /> <strong>Best known for:</strong> {destination.attractions.join(', ')}</li>
                                <li className="flex items-center gap-3"><Sun className="h-5 w-5 text-sahara-gold" /> <strong>Dry Season:</strong> June - October</li>
                                <li className="flex items-center gap-3"><Cloud className="h-5 w-5 text-stone-gray" /> <strong>Wet Season:</strong> November - May</li>
                            </ul>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardContent className="p-6">
                            <h3 className="font-headline text-xl font-bold mb-4">Best Time to Visit</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-bold flex items-center gap-2"><Sun className="text-sahara-gold" /> Peak Season</h4>
                                    <p className="text-sm text-muted-foreground mt-1">June to October is the best time for wildlife viewing as animals gather around water sources.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold flex items-center gap-2"><Calendar className="text-safari-green" /> Calving Season</h4>
                                    <p className="text-sm text-muted-foreground mt-1">For Serengeti, January to March is incredible for seeing newborn wildebeest.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                 </div>
            </aside>
        </div>
      </div>
    </div>
  );
}
