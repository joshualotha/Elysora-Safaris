
import PageHeader from "@/components/shared/PageHeader";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, DollarSign, Users, Calendar } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SafariCard from "@/components/shared/SafariCard";
import { safariPackages } from "@/lib/data";

export default function GroupSafariPage() {
  const relatedSafaris = safariPackages.filter(p => p.price < 3000);
  
  return (
    <div>
      <PageHeader
        title="Group Joining Safaris"
        subtitle="Share the adventure, share the cost. An affordable way to experience Tanzania."
        imageId="group-safari-hero"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1631121592926-b7642af441c5?q=80&w=2070&auto=format&fit=crop"
                    alt="A group of happy travelers on a safari vehicle"
                    fill
                    className="object-cover"
                    data-ai-hint="safari group"
                />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Adventure with New Friends</h2>
              <p className="text-muted-foreground mb-6">
                Group joining safaris are perfect for solo travelers, couples, or small groups looking for a more sociable and budget-friendly experience. You'll share the safari vehicle (and the excitement!) with a small group of like-minded travelers from around the world. Our groups are small, typically with a maximum of 6 people, ensuring everyone gets a window seat.
              </p>
              <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <DollarSign className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Cost-Effective</h4>
                      <p className="text-muted-foreground text-sm">By sharing costs for the vehicle and guide, you get an incredible safari experience at a lower price point.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Meet New People</h4>
                       <p className="text-muted-foreground text-sm">Share stories and sightings with fellow adventurers from diverse backgrounds.</p>
                    </div>
                  </li>
                   <li className="flex items-start gap-4">
                    <Calendar className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Fixed Departures</h4>
                      <p className="text-muted-foreground text-sm">Our group safaris run on scheduled dates, making it easy to plan your trip.</p>
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
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600"/>Solo travelers</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600"/>Couples and duos</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600"/>Budget-conscious adventurers</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600"/>Sociable travelers</li>
                    </ul>
                </CardContent>
            </Card>
             <div className="bg-ivory p-8 rounded-2xl flex flex-col justify-center items-center text-center">
                 <h3 className="text-2xl font-headline font-bold mb-4">Ready to Join an Adventure?</h3>
                 <p className="text-muted-foreground mb-6">Find a date that works for you and book your spot!</p>
                 <Button asChild size="lg">
                    <Link href="/safaris">See Group Safaris</Link>
                 </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-center text-4xl font-headline font-bold mb-12">Popular Group Safaris</h2>
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
