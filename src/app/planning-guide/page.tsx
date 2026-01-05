
"use client";

import PageHeader from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, CloudSun, DollarSign, FerrisWheel, HeartPulse, Luggage, Plane, ShieldCheck, Sun, Cloud, Briefcase, Camera, FirstAidKit, Map } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const planningSections = [
    { value: "best-time", label: "Best Time to Visit", icon: Calendar },
    { value: "what-to-pack", label: "What to Pack", icon: Luggage },
    { value: "health-safety", label: "Health & Safety", icon: HeartPulse },
    { value: "visa-entry", label: "Visa & Entry", icon: Plane },
    { value: "money-matters", label: "Money Matters", icon: DollarSign },
];

const TabContentWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
    >
        {children}
    </motion.div>
);

export default function PlanningGuidePage() {
  return (
    <div>
      <PageHeader
        title="Plan Your Perfect Safari"
        subtitle="Everything you need to know before you embark on your Tanzanian adventure."
        imageId="planning-hero"
      />

        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                 <Tabs defaultValue="best-time" orientation="vertical" className="grid md:grid-cols-4 gap-12">
                    <TabsList className="flex-col h-auto justify-start p-2 bg-sand rounded-xl w-full">
                        {planningSections.map(section => (
                            <TabsTrigger key={section.value} value={section.value} className="w-full justify-start text-left !py-3 !px-4 data-[state=active]:bg-ivory data-[state=active]:shadow-md">
                                <section.icon className="h-5 w-5 mr-3 text-primary" />
                                {section.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <div className="md:col-span-3">
                        <TabsContent value="best-time">
                            <TabContentWrapper>
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
                            </TabContentWrapper>
                        </TabsContent>
                         <TabsContent value="what-to-pack">
                            <TabContentWrapper>
                                <Card>
                                     <CardHeader>
                                        <CardTitle className="text-3xl font-headline font-bold">Essential Safari Packing List</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-lg text-muted-foreground mb-8">Packing for a safari is all about comfort, practicality, and layers. Neutral colors are best. Avoid bright colors, white, and camouflage patterns.</p>
                                        <div className="space-y-12">
                                            <div className="flex items-center gap-8">
                                                <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center rounded-lg bg-sand">
                                                    <Briefcase className="w-16 h-16 text-sahara-gold"/>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-xl mb-2">Clothing</h3>
                                                    <ul className="list-disc list-inside text-muted-foreground">
                                                        <li>Lightweight, neutral-colored shirts (long and short-sleeved)</li>
                                                        <li>Comfortable trousers and shorts</li>
                                                        <li>A warm fleece or jacket for cool mornings and evenings</li>
                                                        <li>Waterproof/windproof jacket</li>
                                                        <li>Swimsuit for lodges with pools</li>
                                                        <li>Comfortable, broken-in walking shoes or boots</li>
                                                    </ul>
                                                </div>
                                            </div>
                                             <div className="flex items-center gap-8">
                                                <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center rounded-lg bg-sand">
                                                    <Camera className="w-16 h-16 text-sahara-gold"/>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-xl mb-2">Gear & Electronics</h3>
                                                    <ul className="list-disc list-inside text-muted-foreground">
                                                        <li>Binoculars (essential!)</li>
                                                        <li>Camera with extra batteries and memory cards</li>
                                                        <li>Portable power bank</li>
                                                        <li>Universal travel adapter</li>
                                                        <li>Headlamp or small flashlight</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-8">
                                                <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center rounded-lg bg-sand">
                                                    <FirstAidKit className="w-16 h-16 text-sahara-gold"/>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-xl mb-2">Health & Documents</h3>
                                                    <ul className="list-disc list-inside text-muted-foreground">
                                                        <li>Personal first-aid kit (painkillers, plasters, antihistamines)</li>
                                                        <li>Insect repellent with DEET</li>
                                                        <li>High-SPF sunscreen and after-sun lotion</li>
                                                        <li>Passport, visa, and travel insurance documents</li>
                                                        <li>Copy of flight tickets and itinerary</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabContentWrapper>
                        </TabsContent>
                        <TabsContent value="health-safety">
                            <TabContentWrapper>
                                 <Card>
                                    <CardHeader>
                                        <CardTitle className="text-3xl font-headline font-bold">Health & Safety on Safari</CardTitle>
                                    </CardHeader>
                                    <CardContent className="prose max-w-none text-muted-foreground">
                                        <p className="text-lg">Your health and safety are our top priorities. Tanzania is a safe country to travel in, and by following some simple guidelines, you can ensure a worry-free adventure.</p>
                                        
                                        <h3 className="flex items-center gap-2"><ShieldCheck className="text-primary"/> Medical Preparations</h3>
                                        <p>We strongly recommend you consult your doctor or a specialized travel clinic 4-6 weeks before your trip to discuss vaccinations and preventative measures.</p>
                                        <ul>
                                            <li><strong>Vaccinations:</strong> Your doctor can advise on necessary immunizations. A Yellow Fever certificate is required if you are arriving from a country with risk of yellow fever transmission.</li>
                                            <li><strong>Malaria:</strong> Malaria is present in Tanzania. Prophylactic medication is highly recommended. Your doctor will prescribe the best option for you.</li>
                                            <li><strong>Travel Insurance:</strong> Comprehensive travel insurance is mandatory for all our guests. It must cover medical emergencies, evacuation, and trip cancellation.</li>
                                        </ul>
                                        
                                        <div className="relative h-64 rounded-lg overflow-hidden my-8">
                                            <Image src="https://picsum.photos/seed/guide/800/400" alt="Safari guide pointing something out to guests in a vehicle" fill className="object-cover" data-ai-hint="safari guide"/>
                                        </div>

                                        <h3 className="flex items-center gap-2"><ShieldCheck className="text-primary"/> On-Safari Safety</h3>
                                        <ul>
                                            <li><strong>Listen to Your Guide:</strong> Your professional guide is an expert in animal behavior and safety protocols. Their instructions are for your protection.</li>
                                            <li><strong>Stay in the Vehicle:</strong> Do not exit the safari vehicle during game drives, except in designated picnic or restroom areas.</li>
                                            <li><strong>Respect Wildlife:</strong> Maintain a safe distance from animals and avoid making loud noises that could startle them. Never attempt to feed any wildlife.</li>
                                            <li><strong>At Camp/Lodge:</strong> Wildlife can and does wander through unfenced camps. Do not walk alone at night; always request an escort from a staff member.</li>
                                            <li><strong>Hydration:</strong> Drink plenty of bottled water to stay hydrated in the African sun. We provide unlimited water in our vehicles.</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </TabContentWrapper>
                        </TabsContent>
                        <TabsContent value="visa-entry">
                             <TabContentWrapper>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-3xl font-headline font-bold">Visa & Entry Requirements</CardTitle>
                                    </CardHeader>
                                    <CardContent className="prose max-w-none text-muted-foreground">
                                        <div className="grid md:grid-cols-2 gap-8 items-center">
                                            <div>
                                                <p>Most travelers require a tourist visa to enter Tanzania. The process is straightforward, but it's essential to prepare in advance.</p>
                                                <ul>
                                                    <li><strong>Passport Validity:</strong> Your passport must be valid for at least six months from your intended date of entry into Tanzania. It must also have at least two blank pages.</li>
                                                    <li><strong>E-Visa Recommended:</strong> To streamline your arrival, we highly recommend applying for an e-visa online through the official Tanzania Immigration Services website before you travel.</li>
                                                    <li><strong>Visa on Arrival:</strong> While possible for some nationalities, getting a visa on arrival can involve long queues. The e-visa is the preferred method.</li>
                                                    <li><strong>Cost:</strong> A standard single-entry tourist visa typically costs $50 USD for most nationalities, or $100 USD for US citizens.</li>
                                                </ul>
                                            </div>
                                            <div className="relative h-80 rounded-lg overflow-hidden">
                                                <Image src="https://picsum.photos/seed/passport/600/800" alt="Passport and flight tickets" fill className="object-cover" data-ai-hint="passport tickets"/>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabContentWrapper>
                        </TabsContent>
                        <TabsContent value="money-matters">
                            <TabContentWrapper>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-3xl font-headline font-bold">Money Matters in Tanzania</CardTitle>
                                    </CardHeader>
                                    <CardContent className="prose max-w-none text-muted-foreground">
                                        <h3 className="flex items-center gap-2"><DollarSign className="text-primary"/> Currency</h3>
                                        <p>The official currency is the <strong>Tanzanian Shilling (TZS)</strong>. However, <strong>US Dollars (USD)</strong> are widely accepted in all tourist areas, lodges, and for park fees. It's best to carry USD notes that are printed in 2009 or later, as older bills are often not accepted.</p>
                                        
                                        <h3 className="flex items-center gap-2"><HeartPulse className="text-primary"/> Tipping</h3>
                                        <p>Tipping is not mandatory but is a customary way to show appreciation for good service. It is a significant part of the income for many in the service industry. Here are some general guidelines:</p>
                                        <ul>
                                            <li><strong>Safari Guide/Driver:</strong> $10 - $15 USD per person, per day.</li>
                                            <li><strong>Lodge/Camp Staff:</strong> Use the communal "tip box" often found at reception. We recommend $10 - $20 USD per group, per day.</li>
                                            <li><strong>Porters & Hotel Staff:</strong> $1 - $2 USD for carrying luggage.</li>
                                        </ul>

                                         <div className="relative h-64 rounded-lg overflow-hidden my-8">
                                            <Image src="https://picsum.photos/seed/money/800/400" alt="Tanzanian Shillings and US Dollars" fill className="object-cover" data-ai-hint="tanzania money"/>
                                        </div>

                                        <h3 className="flex items-center gap-2"><Map className="text-primary"/> Credit Cards & ATMs</h3>
                                        <p>ATMs are available in major cities and towns like Arusha, Dar es Salaam, and Stone Town, but they are scarce in remote areas and inside national parks. They dispense Tanzanian Shillings. Visa and MasterCard are the most widely accepted credit cards at larger hotels, lodges, and souvenir shops, but they often come with a 5-10% surcharge. It's best to have enough cash (primarily USD) for tips, smaller purchases, and as a backup.</p>
                                    </CardContent>
                                </Card>
                            </TabContentWrapper>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </section>

    </div>
  );
}


    