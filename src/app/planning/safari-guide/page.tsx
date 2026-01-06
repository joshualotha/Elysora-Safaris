import PageHeader from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Cloud } from "lucide-react";
import Image from "next/image";

export default function SafariGuidePage() {
  return (
    <div>
      <PageHeader
        title="Safari Planning Guide"
        subtitle="When to go, what to see, and how to create your perfect Tanzanian adventure."
        imageId="planning-hero"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
                <CardHeader className="p-0">
                    <div className="relative h-60 w-full">
                        <Image src="https://picsum.photos/seed/season/1200/400" alt="Serengeti landscape showing changing seasons" fill className="object-cover" data-ai-hint="serengeti seasons"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8">
                            <h2 className="text-3xl font-headline font-bold text-white text-shadow">Best Time to Visit Tanzania</h2>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-8">
                    <div className="prose max-w-none text-muted-foreground">
                        <p className="text-lg">Deciding when to visit Tanzania depends entirely on what you want to see and do. The country's wildlife viewing is excellent year-round, but distinct seasons offer different experiences.</p>
                        
                        <div className="grid md:grid-cols-2 gap-8 items-center my-8">
                            <div className="relative h-64 rounded-lg overflow-hidden">
                                <Image src="https://picsum.photos/seed/dryseason/600/400" alt="Wildebeest at a waterhole during dry season" fill className="object-cover" data-ai-hint="wildebeest waterhole"/>
                            </div>
                            <div>
                                <h3 className="flex items-center gap-2 font-bold text-xl"><Sun className="text-sahara-gold"/> Dry Season (June to October)</h3>
                                <p>This is the most popular time for a safari. With less vegetation and diminishing water sources, animals congregate around rivers and waterholes, making them easier to spot. The weather is generally sunny and pleasant.</p>
                                <ul>
                                    <li><strong>Great Migration:</strong> Witness the dramatic river crossings in the Northern Serengeti (July-August).</li>
                                    <li><strong>Wildlife Viewing:</strong> Excellent in all parks, especially Tarangire and Serengeti.</li>
                                    <li><strong>Weather:</strong> Clear skies, sunny days, and cool evenings.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-center my-8">
                                <div>
                                <h3 className="flex items-center gap-2 font-bold text-xl"><Cloud className="text-safari-green"/> Green Season (November to May)</h3>
                                <p>The landscape transforms into a lush, green paradise. This season brings newborn animals, spectacular birdwatching, and fewer tourists. While there are rains, they are often short afternoon showers that clear up for sunny skies.</p>
                                <ul>
                                    <li><strong>Calving Season:</strong> See thousands of wildebeest give birth in the Southern Serengeti (January-March).</li>
                                    <li><strong>Photography:</strong> Dramatic skies and vibrant green landscapes make for stunning photos.</li>
                                    <li><strong>Value:</strong> Often lower prices and more availability at lodges.</li>
                                </ul>
                            </div>
                            <div className="relative h-64 rounded-lg overflow-hidden">
                                <Image src="https://picsum.photos/seed/greenseason/600/400" alt="Zebra with a newborn foal in lush green grass" fill className="object-cover" data-ai-hint="zebra foal"/>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
