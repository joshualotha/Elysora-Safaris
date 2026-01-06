import PageHeader from "@/components/shared/PageHeader";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Car,
  Users,
  Plane,
  Tent,
  ZoomIn,
  Shield,
  Camera,
  BookUser,
  Shirt,
  HeartPulse,
  FileText,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sun, CloudRain } from "lucide-react";

export default function SafariGuidePage() {
  return (
    <div>
      <PageHeader
        title="Planning Your Ultimate Tanzanian Safari"
        subtitle="Everything you need to know about seasons, wildlife, and packing."
        imageId="hero-serengeti"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-headline font-bold mb-4">
                Best Time to Visit
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Tanzania is a year-round destination, but the experience shifts
                dramatically with the seasons. Whether you dream of vast, dry
                plains teeming with wildlife or lush, green landscapes full of
                new life, there’s a perfect time for your adventure.
              </p>
            </div>

            {/* Dry Season */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/river-crossing/800/600"
                  alt="Wildebeest crossing the Mara River"
                  fill
                  className="object-cover"
                  data-ai-hint="wildebeest river"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Sun className="h-8 w-8 text-sahara-gold" />
                  <h3 className="font-headline text-3xl font-bold">
                    The Dry Season (June - October)
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  This is the classic safari season. With less water available,
                  animals congregate around rivers and waterholes, making them
                  easier to find. The vegetation is thinner, which helps in
                  spotting elusive predators. Days are sunny and bright, with
                  cool evenings perfect for a campfire.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-safari-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Peak Wildlife Viewing</h4>
                      <p className="text-sm text-muted-foreground">
                        The highlight is the Great Migration river crossings in
                        the Northern Serengeti (July-August).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-safari-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Pleasant Weather</h4>
                      <p className="text-sm text-muted-foreground">
                        Expect clear blue skies and plenty of sunshine, though it
                        can be dusty.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Green Season */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative h-96 rounded-2xl overflow-hidden md:order-last">
                <Image
                  src="https://picsum.photos/seed/green-season/800/600"
                  alt="Zebra with a newborn foal in lush green grass"
                  fill
                  className="object-cover"
                  data-ai-hint="zebra foal"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <CloudRain className="h-8 w-8 text-safari-green" />
                  <h3 className="font-headline text-3xl font-bold">
                    The Green Season (Nov - May)
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Known as the 'emerald season', the rains transform the brown
                  plains into a vibrant, green paradise. This is the time for
                  newborns, and the landscape is alive with baby animals. It's
                  also a haven for birdwatchers, with migratory species
                  arriving in droves.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-safari-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Fewer Crowds & Lower Prices</h4>
                      <p className="text-sm text-muted-foreground">
                        Enjoy a more intimate safari experience without the peak
                        season crowds.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-safari-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Calving Season</h4>
                      <p className="text-sm text-muted-foreground">
                        Witness thousands of wildebeest giving birth in the
                        Southern Serengeti (Jan-March).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-sand">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-headline font-bold mb-4">
              Find Your Safari Style
            </h2>
            <p className="text-lg text-muted-foreground">
              From ultimate flexibility to budget-friendly adventures, we craft
              experiences that match your travel dreams.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Car className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-headline text-xl font-bold mb-2">
                Private Safari
              </h3>
              <p className="text-sm text-muted-foreground">
                Your own vehicle and guide. Total flexibility to start and stop
                when you want. Ideal for photographers and families.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-headline text-xl font-bold mb-2">
                Group Joining Safari
              </h3>
              <p className="text-sm text-muted-foreground">
                Share the vehicle with other travelers on a fixed departure. A
                budget-friendly way to meet new people.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Plane className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-headline text-xl font-bold mb-2">
                Luxury / Fly-In
              </h3>
              <p className="text-sm text-muted-foreground">
                Maximize your time by flying between parks. Stay in top-tier
                lodges with premium amenities and exclusive access.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Tent className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-headline text-xl font-bold mb-2">
                Budget Camping
              </h3>
              <p className="text-sm text-muted-foreground">
                Sleep in dome tents under the stars. A raw, authentic adventure
                that brings you closer to nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-headline font-bold mb-4">
                Be Prepared
              </h2>
              <p className="text-lg text-muted-foreground">
                A little preparation goes a long way. Here are our top tips for
                packing and photography to make your safari unforgettable.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-headline text-2xl font-bold mb-6">
                  Photography Tips
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <ZoomIn className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Bring a Zoom Lens</h4>
                      <p className="text-muted-foreground text-sm">
                        A lens with at least a 300mm reach is recommended to get
                        close-up shots of wildlife.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Car className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Use a Bean Bag</h4>
                      <p className="text-muted-foreground text-sm">
                        More stable and practical than tripods for resting your
                        camera on the vehicle's open roof.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Protect From Dust</h4>
                      <p className="text-muted-foreground text-sm">
                        African roads can be dusty. Bring a simple dust cover
                        (or even a pillowcase) for your gear.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-headline text-2xl font-bold mb-6">
                  Essential Packing List
                </h3>
                <Accordion
                  type="single"
                  collapsible
                  defaultValue="item-1"
                  className="w-full"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="font-bold text-lg">
                      <Shirt className="mr-2 h-5 w-5" />
                      Clothing
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-2">
                        <li>Neutral colors (khaki, green, brown).</li>
                        <li>Avoid dark blue/black (attracts tsetse flies).</li>
                        <li>Warm fleece or jacket for cool mornings/evenings.</li>
                        <li>Comfortable, broken-in walking shoes.</li>
                        <li>Hat and sunglasses.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="font-bold text-lg">
                      <Camera className="mr-2 h-5 w-5" />
                      Gear
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-2">
                        <li>Binoculars are essential!</li>
                        <li>Camera with extra batteries and memory cards.</li>
                        <li>Portable power bank & universal travel adapter.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="font-bold text-lg">
                      <FileText className="mr-2 h-5 w-5" />
                      Documents & Health
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-2">
                        <li>Passport (valid for at least 6 months).</li>
                        <li>Printed copy of your Tanzanian e-visa.</li>
                        <li>High-SPF sunscreen and insect repellent (with DEET).</li>
                        <li>Any personal medications needed.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
