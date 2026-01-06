import PageHeader from "@/components/shared/PageHeader";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import {
  Sun,
  CloudRain,
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

export default function SafariGuidePage() {
  return (
    <div>
      <PageHeader
        title="Planning Your Ultimate Tanzanian Safari"
        subtitle="Everything you need to know about seasons, wildlife, and packing."
        imageId="hero-serengeti"
      />

      {/* Best Time to Visit Section */}
      <section className="py-16 md:py-24 bg-sand">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-headline font-bold mb-4">
              Best Time to Visit
            </h2>
            <p className="text-lg text-muted-foreground">
              Tanzania offers incredible wildlife viewing year-round, but the
              experience changes with the seasons. Use our guide to find the
              perfect time for your adventure.
            </p>
          </div>
          <Tabs defaultValue="dry-season" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="dry-season">
                <Sun className="mr-2 h-4 w-4" /> Dry Season (June - Oct)
              </TabsTrigger>
              <TabsTrigger value="green-season">
                <CloudRain className="mr-2 h-4 w-4" /> Green Season (Nov - May)
              </TabsTrigger>
            </TabsList>
            <TabsContent value="dry-season">
              <Card>
                <div className="grid md:grid-cols-2">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="font-headline text-2xl font-bold mb-4">
                      The Dry Season
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      This is the most popular time for a safari for a reason.
                      Animals are easier to spot as they congregate around
                      dwindling water sources and the vegetation thins out.
                    </p>
                    <div className="space-y-4 text-sm">
                      <div>
                        <h4 className="font-bold text-lg text-primary">Highlight</h4>
                        <p className="text-muted-foreground">
                          The Great Migration's dramatic river crossings in the
                          Northern Serengeti (July to August).
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-green-700">Pros</h4>
                        <ul className="list-disc list-inside text-muted-foreground">
                          <li>Peak wildlife viewing conditions.</li>
                          <li>Sunny, clear skies and pleasant weather.</li>
                          <li>Less mud, more accessible roads.</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-red-700">Cons</h4>
                        <ul className="list-disc list-inside text-muted-foreground">
                          <li>Parks can be more crowded.</li>
                          <li>Higher prices for accommodation and tours.</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <div className="relative min-h-[300px] md:min-h-0">
                    <Image
                      src="https://picsum.photos/seed/river-crossing/800/600"
                      alt="Wildebeest crossing the Mara River"
                      fill
                      className="object-cover md:rounded-r-2xl"
                      data-ai-hint="wildebeest river"
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="green-season">
              <Card>
                <div className="grid md:grid-cols-2">
                  <div className="relative min-h-[300px] md:min-h-0 order-last md:order-first">
                    <Image
                      src="https://picsum.photos/seed/green-season/800/600"
                      alt="Zebra with a newborn foal in lush green grass"
                      fill
                      className="object-cover md:rounded-l-2xl"
                      data-ai-hint="zebra foal"
                    />
                  </div>
                   <CardContent className="p-6 md:p-8">
                    <h3 className="font-headline text-2xl font-bold mb-4">
                      The Green Season
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Also known as the "emerald season," this period sees the landscape transform into a vibrant, green paradise, offering unique safari experiences.
                    </p>
                    <div className="space-y-4 text-sm">
                      <div>
                        <h4 className="font-bold text-lg text-primary">Highlight</h4>
                        <p className="text-muted-foreground">
                          Wildebeest calving season in the Southern Serengeti (Ndutu region) from January to March.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-green-700">Pros</h4>
                        <ul className="list-disc list-inside text-muted-foreground">
                          <li>Fewer tourists and lower prices.</li>
                          <li>Stunning, lush landscapes perfect for photography.</li>
                          <li>See migratory birds and lots of baby animals.</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-red-700">Cons</h4>
                        <ul className="list-disc list-inside text-muted-foreground">
                          <li>Occasional heavy rains (especially March-May).</li>
                          <li>Some roads may become impassable.</li>
                           <li>Thicker vegetation can make wildlife spotting harder.</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Safari Types Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-headline font-bold mb-4">
              Safari Types Explained
            </h2>
            <p className="text-lg text-muted-foreground">
              Every traveler is different. Find the safari style that best
              suits your dreams and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <Car className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="font-headline">Private Safari</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Your own vehicle and guide. Total flexibility to start and
                  stop when you want. Ideal for photographers and families.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="font-headline">
                  Group Joining Safari
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Share the vehicle with other travelers. Fixed departure
                  dates. A budget-friendly way to meet new people.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Plane className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="font-headline">Luxury / Fly-In</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Maximize your time by flying between parks. Stay in top-tier
                  lodges with premium amenities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Tent className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="font-headline">Budget Camping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Sleep under the stars in dome tents. A raw, authentic
                  adventure close to nature.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Photography & Packing Section */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12">
                 {/* Photography Tips */}
                <div>
                     <h2 className="text-3xl font-headline font-bold mb-6">Photography Tips</h2>
                     <div className="space-y-6">
                         <div className="flex items-start gap-4">
                            <ZoomIn className="h-8 w-8 text-primary flex-shrink-0 mt-1"/>
                            <div>
                                <h4 className="font-bold text-lg">Bring a Zoom Lens</h4>
                                <p className="text-muted-foreground text-sm">A lens with at least a 300mm reach is recommended to get close-up shots of wildlife without disturbing them.</p>
                            </div>
                         </div>
                          <div className="flex items-start gap-4">
                            <Car className="h-8 w-8 text-primary flex-shrink-0 mt-1"/>
                            <div>
                                <h4 className="font-bold text-lg">Use a Bean Bag</h4>
                                <p className="text-muted-foreground text-sm">Bean bags are more stable and practical than tripods for resting your camera on the vehicle's window sills or roof.</p>
                            </div>
                         </div>
                          <div className="flex items-start gap-4">
                            <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1"/>
                            <div>
                                <h4 className="font-bold text-lg">Protect from Dust</h4>
                                <p className="text-muted-foreground text-sm">Safari roads can be very dusty. Bring a dust cover, or even a simple pillowcase, to protect your gear between shots.</p>
                            </div>
                         </div>
                         <div className="flex items-start gap-4">
                            <BookUser className="h-8 w-8 text-primary flex-shrink-0 mt-1"/>
                            <div>
                                <h4 className="font-bold text-lg">Cultural Etiquette</h4>
                                <p className="text-muted-foreground text-sm">Always ask your guide for permission before photographing local people, such as the Maasai. It's a matter of respect.</p>
                            </div>
                         </div>
                     </div>
                </div>

                {/* Packing List */}
                <div>
                     <h2 className="text-3xl font-headline font-bold mb-6">Packing List Essentials</h2>
                     <Accordion type="single" collapsible defaultValue="item-1">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="font-bold text-lg"><Shirt className="mr-2 h-5 w-5"/>Clothing</AccordionTrigger>
                            <AccordionContent>
                                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                    <li>Neutral colors (khaki, green, brown).</li>
                                    <li>Avoid dark blue/black (attracts tsetse flies).</li>
                                    <li>Light fleece or jacket for cool mornings/evenings.</li>
                                    <li>Comfortable walking shoes.</li>
                                    <li>Hat, sunglasses, and swimsuit.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="font-bold text-lg"><Camera className="mr-2 h-5 w-5"/>Gadgets</AccordionTrigger>
                            <AccordionContent>
                                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                    <li>Binoculars are essential!</li>
                                    <li>Camera with extra batteries and memory cards.</li>
                                    <li>Portable power bank.</li>
                                    <li>Universal travel adapter.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="font-bold text-lg"><HeartPulse className="mr-2 h-5 w-5"/>Health & Toiletries</AccordionTrigger>
                             <AccordionContent>
                                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                    <li>High-SPF sunscreen.</li>
                                    <li>Strong insect repellent (with DEET).</li>
                                    <li>Personal medications and a small first-aid kit.</li>
                                    <li>Hand sanitizer.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="font-bold text-lg"><FileText className="mr-2 h-5 w-5"/>Documents</AccordionTrigger>
                             <AccordionContent>
                                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                    <li>Passport (valid for at least 6 months).</li>
                                    <li>Printed copy of your Tanzanian e-visa.</li>
                                    <li>Yellow Fever vaccination card (if required).</li>
                                    <li>Travel insurance details.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                     </Accordion>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
