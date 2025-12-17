import PageHeader from "@/components/shared/PageHeader";
import IconText from "@/components/shared/IconText";
import { Leaf, Heart, Users } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

const partners = [
    { name: "Tanzania National Parks Authority", logoId: "partner-tanapa" },
    { name: "World Wildlife Fund", logoId: "partner-wwf" },
    { name: "The Nature Conservancy", logoId: "partner-tnc" },
    { name: "African Wildlife Foundation", logoId: "partner-awf" },
]

export default function ConservationPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'conservation-hero');
    const communityImage = PlaceHolderImages.find(p => p.id === 'community-project');

    return (
        <div>
            <PageHeader
                title="Our Commitment to Conservation"
                subtitle="Preserving Tanzania's natural heritage for generations to come."
                imageId="conservation-hero"
            />

            <section className="py-16 md:py-24 bg-ivory">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl font-headline font-bold mb-4">More Than a Safari</h2>
                        <p className="text-lg text-muted-foreground">
                            We believe that tourism, when done right, can be a powerful force for good. Our philosophy is built on the principle that the well-being of local communities and the conservation of wildlife and habitats are intrinsically linked. Every journey with Elysora Safaris contributes directly to the preservation of the beautiful landscapes you explore.
                        </p>
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-96 rounded-2xl overflow-hidden">
                            {communityImage && (
                                <Image
                                    src={communityImage.imageUrl}
                                    alt={communityImage.description}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={communityImage.imageHint}
                                />
                            )}
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Empowering Local Communities</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    Our roots are deeply embedded in Tanzania. We are committed to ensuring local communities benefit from tourism. We prioritize hiring local guides and staff, sourcing supplies from local businesses, and supporting community-led projects.
                                </p>
                                <p>
                                    A percentage of every safari booking is dedicated to funding education and health initiatives in villages near the national parks. By traveling with us, you are not just a tourist; you are a partner in sustainable development.
                                </p>
                                 <Button className="mt-4">Learn About Our Projects</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24 bg-sand">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Our Pillars of Responsibility</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <IconText
                            icon={Leaf}
                            title="Ecological Conservation"
                            description="We support anti-poaching units, contribute to habitat restoration projects, and adhere to strict 'Leave No Trace' principles on all our safaris."
                        />
                        <IconText
                            icon={Users}
                            title="Community Partnership"
                            description="We invest in local schools, support women's cooperatives, and ensure fair wages to empower the communities that host us."
                        />
                        <IconText
                            icon={Heart}
                            title="Cultural Preservation"
                            description="We facilitate respectful and authentic cultural exchanges that honor local traditions and provide a genuine learning experience for our guests."
                        />
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Our Conservation Partners</h2>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        {partners.map(partner => {
                            const logo = PlaceHolderImages.find(p => p.id === partner.logoId);
                            return logo ? (
                                <div key={partner.name} className="relative h-16 w-32 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                   <Image 
                                        src={logo.imageUrl}
                                        alt={partner.name}
                                        fill
                                        className="object-contain"
                                        data-ai-hint={logo.imageHint}
                                   />
                                </div>
                            ) : null;
                        })}
                    </div>
                </div>
            </section>

        </div>
    );
}
