import PageHeader from "@/components/shared/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, CloudSun, DollarSign, FerrisWheel, HeartPulse, Luggage, Plane, ShieldCheck } from "lucide-react";
import Image from "next/image";

const planningSections = [
    { value: "best-time", label: "Best Time to Visit", icon: Calendar },
    { value: "what-to-pack", label: "What to Pack", icon: Luggage },
    { value: "health-safety", label: "Health & Safety", icon: HeartPulse },
    { value: "visa-entry", label: "Visa & Entry", icon: Plane },
    { value: "money-matters", label: "Money Matters", icon: DollarSign },
];

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
                            <Card className="p-8">
                                <h2 className="text-3xl font-headline font-bold mb-4">Best Time to Visit Tanzania</h2>
                                <div className="prose max-w-none text-muted-foreground">
                                    <p>The best time to visit Tanzania depends on what you want to see. The country offers incredible wildlife viewing year-round, but there are distinct seasons.</p>
                                    
                                    <h3 className="flex items-center gap-2"><CloudSun className="text-primary"/> Dry Season (June to October)</h3>
                                    <p>This is the peak season for safaris. The weather is pleasant, and the vegetation is sparse, making wildlife easier to spot as they congregate around rivers and waterholes.</p>
                                    <ul>
                                        <li><strong>Great for:</strong> General wildlife viewing, seeing the Great Migration river crossings in the Serengeti (June-July).</li>
                                        <li><strong>Weather:</strong> Sunny, clear skies, and cooler temperatures.</li>
                                    </ul>
                                    
                                    <h3 className="flex items-center gap-2"><FerrisWheel className="text-primary"/> Green Season (November to May)</h3>
                                    <p>This season offers lush, green landscapes, fewer crowds, and lower prices. It's a fantastic time for birdwatching and seeing newborn animals.</p>
                                    <ul>
                                        <li><strong>Great for:</strong> Birdwatching, photography of vibrant landscapes, seeing the wildebeest calving season in the Southern Serengeti (January-March).</li>
                                        <li><strong>Weather:</strong> Short rains in Nov/Dec, long rains in April/May. Often sunny periods between showers.</li>
                                    </ul>
                                </div>
                            </Card>
                        </TabsContent>
                         <TabsContent value="what-to-pack">
                            <Card className="p-8">
                                <h2 className="text-3xl font-headline font-bold mb-4">Essential Safari Packing List</h2>
                                <div className="prose max-w-none text-muted-foreground">
                                    <p>Packing for a safari is all about comfortable, lightweight, and neutral-colored clothing. Layers are key as early mornings can be cool and afternoons warm.</p>
                                    <h4>Clothing</h4>
                                    <ul>
                                        <li>Neutral-colored clothing (khaki, tan, olive green). Avoid bright colors and camouflage.</li>
                                        <li>Long-sleeved shirts and trousers for sun and insect protection.</li>
                                        <li>A warm fleece or jacket for early morning and evening game drives.</li>
                                        <li>Comfortable walking shoes.</li>
                                        <li>A hat with a wide brim and sunglasses.</li>
                                    </ul>
                                    <h4>Gear & Essentials</h4>
                                    <ul>
                                        <li>Binoculars (very important!).</li>
                                        <li>Camera with extra batteries and memory cards.</li>
                                        <li>A good insect repellent containing DEET.</li>
                                        <li>Sunscreen (SPF 30+).</li>
                                        <li>Personal first-aid kit.</li>
                                    </ul>
                                </div>
                            </Card>
                        </TabsContent>
                        <TabsContent value="health-safety">
                            <Card className="p-8">
                                <h2 className="text-3xl font-headline font-bold mb-4">Health & Safety on Safari</h2>
                                <div className="prose max-w-none text-muted-foreground">
                                    <h3 className="flex items-center gap-2"><ShieldCheck className="text-primary"/> Vaccinations & Health</h3>
                                    <p>Consult your doctor or a travel clinic 4-6 weeks before your departure. Recommended vaccinations often include Yellow Fever (required if coming from a risk area), Tetanus, Diphtheria, and Hepatitis A.</p>
                                    <p>Malaria is present in many parts of Tanzania. Your doctor will advise on the best anti-malarial medication for you.</p>

                                    <h3 className="flex items-center gap-2"><ShieldCheck className="text-primary"/> Safety</h3>
                                    <p>Tanzania is a safe country for tourists. On safari, your most important guide is your guide! Always listen to their instructions, especially regarding wildlife. Do not leave your vehicle on game drives except in designated areas, and don't walk around unescorted at your lodge at night.</p>
                                </div>
                            </Card>
                        </TabsContent>
                        <TabsContent value="visa-entry">
                            <Card className="p-8">
                                <h2 className="text-3xl font-headline font-bold mb-4">Visa & Entry Requirements</h2>
                                <div className="prose max-w-none text-muted-foreground">
                                    <p>Most nationalities require a tourist visa to enter Tanzania. It's recommended to apply for an e-visa online in advance to save time at the airport.</p>
                                    <ul>
                                        <li>Your passport must be valid for at least six months from your date of entry.</li>
                                        <li>The standard tourist visa is typically valid for 90 days.</li>
                                        <li>Check the official Tanzania Immigration website for the most up-to-date information and to apply for your e-visa.</li>
                                    </ul>
                                </div>
                            </Card>
                        </TabsContent>
                        <TabsContent value="money-matters">
                            <Card className="p-8">
                                <h2 className="text-3xl font-headline font-bold mb-4">Money Matters in Tanzania</h2>
                                <div className="prose max-w-none text-muted-foreground">
                                    <p>The official currency is the Tanzanian Shilling (TZS), but US Dollars (USD) are widely accepted, especially in tourist areas and for safari payments. Bills should be printed in 2009 or later.</p>
                                    <h4>Tipping</h4>
                                    <p>Tipping is customary and greatly appreciated. A general guideline is:</p>
                                    <ul>
                                        <li><strong>Safari Guide:</strong> $10-15 per person, per day.</li>
                                        <li><strong>Lodge/Camp Staff:</strong> $10-15 per group, per day (usually placed in a communal tip box).</li>
                                    </ul>
                                     <h4>Credit Cards & ATMs</h4>
                                    <p>Credit cards are accepted at larger hotels and lodges but often incur a surcharge. ATMs are available in major cities like Arusha and Stone Town, but can be unreliable. It's best to carry a mix of USD cash and have a credit/debit card for backup.</p>
                                </div>
                            </Card>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </section>

    </div>
  );
}
