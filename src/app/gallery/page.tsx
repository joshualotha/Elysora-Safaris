import PageHeader from "@/components/shared/PageHeader";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const galleryCategories = ["All", "Wildlife", "Landscapes", "People & Culture", "Accommodations"];

const allImages = PlaceHolderImages.filter(img => 
    img.id.includes('safari-card') || 
    img.id.includes('destination') || 
    img.id.includes('gallery') ||
    img.id.includes('community')
);

const wildlifeImages = allImages.filter(img => img.imageHint.includes('wildlife') || img.imageHint.includes('lion') || img.imageHint.includes('zebra') || img.imageHint.includes('giraffe') || img.imageHint.includes('cheetah') || img.imageHint.includes('hippo') || img.imageHint.includes('elephant') );
const landscapeImages = allImages.filter(img => img.imageHint.includes('landscape') || img.imageHint.includes('plains') || img.imageHint.includes('crater') || img.imageHint.includes('kilimanjaro'));
const peopleImages = allImages.filter(img => img.imageHint.includes('people') || img.imageHint.includes('maasai') || img.imageHint.includes('guides'));
const accommodationImages = allImages.filter(img => img.imageHint.includes('camp'));


const imagesByCategory: { [key: string]: typeof allImages } = {
    "All": allImages,
    "Wildlife": wildlifeImages,
    "Landscapes": landscapeImages,
    "People & Culture": peopleImages,
    "Accommodations": accommodationImages,
};

const MasonryGrid = ({ images }: { images: typeof allImages }) => (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((image, index) => (
            <div key={index} className="break-inside-avoid">
                <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={500}
                    height={Math.random() * (800 - 400) + 400}
                    className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                    data-ai-hint={image.imageHint}
                />
            </div>
        ))}
    </div>
);


export default function GalleryPage() {
  return (
    <div>
      <PageHeader
        title="Experience Tanzania Through Our Lens"
        subtitle="A collection of moments captured on our unforgettable safaris."
        imageId="gallery-hero"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="All" className="w-full">
            <div className="flex justify-center mb-8">
                <TabsList>
                    {galleryCategories.map(category => (
                         <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                    ))}
                </TabsList>
            </div>
            {galleryCategories.map(category => (
                <TabsContent key={category} value={category}>
                    <MasonryGrid images={imagesByCategory[category]} />
                </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}
