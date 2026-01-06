
import PageHeader from "@/components/shared/PageHeader";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Flame, Star, DollarSign } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SafariCard from "@/components/shared/SafariCard";
import { safariPackages } from "@/lib/data";

export default function CampingSafariPage() {
  const relatedSafaris = safariPackages.filter(p => p.slug.includes('camping'));

  return (
    <div>
      <PageHeader
        title="Budget Camping Safaris"
        subtitle="A raw, authentic adventure sleeping under the African stars."
        imageId="camping-safari-hero"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop"
                    alt="A campsite with dome tents under a starry night sky"
                    fill
                    className="object-cover"
                    data-ai-hint="safari camping"
                />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Your Authentic Bush Experience</h2>
              <p className="text-muted-foreground mb-6">
                Budget camping is the most adventurous way to experience the Tanzanian wilderness. You'll sleep in two-person dome tents on comfortable mattresses at public campsites inside or near the national parks. Bathroom facilities are shared. This is a hands-on experience, and you'll fall asleep to the sounds of the wild just outside your tent.
              </p>
              <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <DollarSign className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Most Affordable Option</h4>
                      <p className="text-muted-foreground text-sm">The best way to experience a world-class safari on a tight budget.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Flame className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Private Cook Included</h4>
                       <p className="text-muted-foreground text-sm">A dedicated cook travels with your group, preparing fresh and delicious meals for you daily.</p>
                    </div>
                  </li>
                   <li className="flex items-start gap-4">
                    <Star className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Close to Nature</h4>
                      <p className="text-muted-foreground text-sm">Hear the sounds of the savanna at night for a truly immersive and unforgettable experience.</p>
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
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600"/>Adventurous travelers</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600"/>Budget backpackers & students</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600"/>Those who love the outdoors</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600"/>Travelers looking for an authentic feel</li>
                    </ul>
                </CardContent>
            </Card>
             <div className="bg-ivory p-8 rounded-2xl flex flex-col justify-center items-center text-center">
                 <h3 className="text-2xl font-headline font-bold mb-4">Ready for an Adventure?</h3>
                 <p className="text-muted-foreground mb-6">Our camping safaris offer incredible value and an unforgettable experience.</p>
                 <Button asChild size="lg">
                    <Link href="/safaris">See Camping Safaris</Link>
                 </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-center text-4xl font-headline font-bold mb-12">Our Camping Adventures</h2>
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
