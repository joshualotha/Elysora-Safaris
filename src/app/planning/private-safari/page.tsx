
import PageHeader from "@/components/shared/PageHeader";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Users, Camera, Clock } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SafariCard from "@/components/shared/SafariCard";
import { safariPackages } from "@/lib/data";

export default function PrivateSafariPage() {
  const relatedSafaris = safariPackages.filter(p => p.price > 3000);
  
  return (
    <div>
      <PageHeader
        title="Private Safaris"
        subtitle="Your adventure, your rules. Unparalleled flexibility and exclusivity."
        imageId="private-safari-hero"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1535940587896-3a4e0ce292f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjB2ZWhpY2xlfGVufDB8fHx8MTc2NTk3ODYzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Private safari vehicle overlooking the savanna"
                    fill
                    className="object-cover"
                    data-ai-hint="private safari"
                />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">The Ultimate Freedom to Explore</h2>
              <p className="text-muted-foreground mb-6">
                A private safari offers the ultimate in flexibility and personalization. It means the safari vehicle, guide, and itinerary are exclusively yours. You decide when to start your day, how long to spend watching a pride of lions, and when to head back to the lodge. It’s your adventure, crafted to your rhythm.
              </p>
              <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Customized Pace</h4>
                      <p className="text-muted-foreground text-sm">Spend as much or as little time at sightings as you wish. No compromises.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Camera className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Photographer's Dream</h4>
                       <p className="text-muted-foreground text-sm">Get the best angles and wait for the perfect light without pressure from a group.</p>
                    </div>
                  </li>
                   <li className="flex items-start gap-4">
                    <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Perfect for Families</h4>
                      <p className="text-muted-foreground text-sm">An itinerary designed around your family's needs, interests, and energy levels.</p>
                    </div>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-sand">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle>Who is this for?</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600"/>Photographers & videographers</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600"/>Families with young children</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600"/>Honeymooners & couples</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600"/>Travelers with specific interests</li>
                    </ul>
                </CardContent>
            </Card>
             <div className="bg-ivory p-8 rounded-2xl flex flex-col justify-center items-center text-center">
                 <h3 className="text-2xl font-headline font-bold mb-4">Ready to Craft Your Private Journey?</h3>
                 <p className="text-muted-foreground mb-6">Let's design a safari that is uniquely yours.</p>
                 <Button asChild size="lg">
                    <Link href="/custom-safari">Start Planning</Link>
                 </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-center text-4xl font-headline font-bold mb-12">Recommended Private Safaris</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedSafaris.map(p => (
                <SafariCard key={p.slug} safari={p} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
