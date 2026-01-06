
import PageHeader from "@/components/shared/PageHeader";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Star, Plane, Utensils } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SafariCard from "@/components/shared/SafariCard";
import { safariPackages } from "@/lib/data";

export default function LuxurySafariPage() {
  const relatedSafaris = safariPackages.filter(p => p.price > 4000);

  return (
    <div>
      <PageHeader
        title="Luxury & Fly-In Safaris"
        subtitle="Experience Tanzania in ultimate comfort, style, and convenience."
        imageId="luxury-safari-hero"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1607712617949-8c993d290809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxzYWZhcmklMjBsb2RnZXxlbnwwfHx8fDE3Njc3MDQ3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="A luxury safari lodge with a private pool overlooking the savanna"
                    fill
                    className="object-cover"
                    data-ai-hint="luxury lodge"
                />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Uncompromising Comfort in the Wild</h2>
              <p className="text-muted-foreground mb-6">
                A luxury safari isn't just about premium accommodation; it's about seamless service, exclusive experiences, and maximizing your time. Fly-in safaris whisk you between remote parks in small aircraft, offering breathtaking aerial views and saving you long hours on bumpy roads. Stay in world-class lodges and tented camps where every detail is taken care of.
              </p>
              <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <Plane className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Fly-In Convenience</h4>
                      <p className="text-muted-foreground text-sm">More time for game drives and relaxation, less time traveling between locations.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Star className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Exclusive Lodges</h4>
                       <p className="text-muted-foreground text-sm">Stay at premier properties in prime locations, often with private plunge pools and butler service.</p>
                    </div>
                  </li>
                   <li className="flex items-start gap-4">
                    <Utensils className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Gourmet Dining</h4>
                      <p className="text-muted-foreground text-sm">Enjoy a la carte menus, fine wines, and exceptional service in stunning settings.</p>
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
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600"/>Travelers seeking maximum comfort</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600"/>Honeymooners and special occasions</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600"/>Those on a limited timeframe</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600"/>Discerning travelers who value privacy</li>
                    </ul>
                </CardContent>
            </Card>
             <div className="bg-ivory p-8 rounded-2xl flex flex-col justify-center items-center text-center">
                 <h3 className="text-2xl font-headline font-bold mb-4">Indulge in the Extraordinary</h3>
                 <p className="text-muted-foreground mb-6">Explore our most exclusive safari experiences.</p>
                 <Button asChild size="lg">
                    <Link href="/safaris">View Luxury Safaris</Link>
                 </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-center text-4xl font-headline font-bold mb-12">Our Premier Luxury Safaris</h2>
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
