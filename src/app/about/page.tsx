import Image from "next/image";
import PageHeader from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { teamMembers } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import IconText from "@/components/shared/IconText";
import { Leaf, Award, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About Elysora Safaris"
        subtitle="Our mission is to share the authentic magic of Tanzania with the world."
        imageId="about-hero"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded by a team of passionate Tanzanians with decades of combined experience in the safari industry, Elysora Safaris was born from a simple desire: to offer a more authentic, personal, and responsible way to experience our beautiful country.
                </p>
                <p>
                  We grew up with the sounds of the savanna and the shadows of the Kilimanjaro. This land is not just our workplace; it's our home. We believe that a true safari is more than just seeing animals; it's about connecting with the environment, understanding the culture, and creating memories that last a lifetime.
                </p>
                <p>
                  From our expert guides to our dedicated operations team, everyone at Elysora is committed to making your dream safari a reality.
                </p>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
                <Image 
                    src="https://picsum.photos/seed/122/800/600" 
                    alt="A smiling child from a local village" 
                    fill
                    className="object-cover"
                    data-ai-hint="maasai child"
                />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => {
                const image = PlaceHolderImages.find(p => p.id === member.image);
                return (
                    <Card key={member.name} className="text-center">
                        <CardHeader>
                            {image && (
                                <div className="relative h-32 w-32 mx-auto rounded-full overflow-hidden mb-4">
                                    <Image
                                        src={image.imageUrl}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={image.imageHint}
                                    />
                                </div>
                            )}
                            <CardTitle className="font-headline">{member.name}</CardTitle>
                            <p className="text-primary font-semibold">{member.role}</p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">{member.bio}</p>
                        </CardContent>
                    </Card>
                )
            })}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Our Commitment</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <IconText 
                    icon={Leaf}
                    title="Responsible Tourism"
                    description="We adhere to strict 'Leave No Trace' principles and use eco-friendly lodges to minimize our environmental impact."
                />
                <IconText 
                    icon={Heart}
                    title="Community Involvement"
                    description="A portion of every safari booking goes directly to supporting local schools and community projects."
                />
                <IconText 
                    icon={Award}
                    title="Conservation Efforts"
                    description="We partner with local conservation organizations to support anti-poaching and habitat preservation initiatives."
                />
            </div>
        </div>
      </section>
    </div>
  );
}
