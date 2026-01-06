import PageHeader from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Camera, FirstAidKit, ShieldCheck, Plane, DollarSign } from "lucide-react";
import Image from "next/image";

export default function PracticalInformationPage() {
  return (
    <div>
      <PageHeader
        title="Practical Information"
        subtitle="Essential tips for a safe, healthy, and seamless Tanzanian adventure."
        imageId="practical-info-hero"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                
                {/* What to Pack */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-headline text-3xl">
                            <Briefcase className="h-8 w-8 text-primary"/>
                            What to Pack
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="prose max-w-none text-muted-foreground">
                        <p>Packing for a safari is about layers and practicality. Neutral colors (khaki, green, brown) are best. Avoid blue and black as they can attract tsetse flies, and bright colors which can scare animals.</p>
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div>
                                <h4>Clothing Essentials</h4>
                                <ul>
                                    <li>Lightweight, neutral-colored shirts (long and short-sleeved)</li>
                                    <li>Comfortable trousers and shorts</li>
                                    <li>A warm fleece or jacket for cool mornings and evenings</li>
                                    <li>Waterproof/windproof jacket</li>
                                    <li>Swimsuit for lodges with pools</li>
                                    <li>Comfortable, broken-in walking shoes or boots</li>
                                </ul>
                            </div>
                             <div>
                                <h4>Gear & Documents</h4>
                                <ul>
                                    <li>Binoculars (very important!)</li>
                                    <li>Camera with extra batteries and memory cards</li>
                                    <li>Portable power bank & universal travel adapter</li>
                                    <li>Passport, visa, and travel insurance documents</li>
                                    <li>Copy of flight tickets and itinerary</li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Health & Safety */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-headline text-3xl">
                            <ShieldCheck className="h-8 w-8 text-primary"/>
                            Health & Safety
                        </CardTitle>
                    </CardHeader>
                     <CardContent className="prose max-w-none text-muted-foreground">
                        <p>Your well-being is our top priority. Tanzania is a safe country, but it's important to take precautions.</p>
                        <h4>Medical Preparations</h4>
                        <ul>
                            <li><strong>Consult Your Doctor:</strong> Visit a travel clinic 4-6 weeks before your trip to discuss vaccinations (like Yellow Fever) and malaria prophylactics.</li>
                            <li><strong>Travel Insurance:</strong> Comprehensive travel and medical insurance is mandatory. It must cover emergency evacuation.</li>
                            <li><strong>Personal First-Aid:</strong> Bring a small kit with essentials like painkillers, plasters, antihistamines, and any personal medication.</li>
                        </ul>
                        <h4>On-Safari Safety</h4>
                         <ul>
                            <li><strong>Listen to Your Guide:</strong> Their expertise is your greatest safety asset. Always follow their instructions.</li>
                            <li><strong>Respect Wildlife:</strong> Stay in the vehicle during game drives (unless in a designated area) and never feed the animals.</li>
                            <li><strong>Stay Hydrated:</strong> Drink plenty of bottled water, which we provide in our vehicles.</li>
                        </ul>
                    </CardContent>
                </Card>

                 {/* Visa & Entry */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-headline text-3xl">
                            <Plane className="h-8 w-8 text-primary"/>
                            Visa & Entry Requirements
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="prose max-w-none text-muted-foreground">
                        <p>Most travelers require a tourist visa for Tanzania. We strongly recommend applying for an e-visa online before you travel to save time upon arrival.</p>
                        <ul>
                            <li><strong>Passport:</strong> Must be valid for at least six months from your entry date and have two blank pages.</li>
                            <li><strong>E-Visa:</strong> Apply via the official Tanzania Immigration Services website.</li>
                            <li><strong>Cost:</strong> Typically $50 USD for most nationalities, and $100 USD for US citizens.</li>
                        </ul>
                    </CardContent>
                </Card>

                 {/* Money Matters */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-headline text-3xl">
                            <DollarSign className="h-8 w-8 text-primary"/>
                            Money Matters
                        </CardTitle>
                    </CardHeader>
                     <CardContent className="prose max-w-none text-muted-foreground">
                        <h4>Currency</h4>
                        <p>The local currency is the Tanzanian Shilling (TZS), but US Dollars (USD) are widely accepted in tourist areas. Carry USD notes printed in 2009 or later.</p>
                        <h4>Tipping</h4>
                        <p>Tipping is customary and greatly appreciated as it forms a significant part of service staff's income. Guidelines:</p>
                        <ul>
                            <li><strong>Safari Guide:</strong> $10 - $15 USD per person, per day.</li>
                            <li><strong>Lodge/Camp Staff:</strong> Use the communal tip box; $10 - $20 USD per group, per day.</li>
                        </ul>
                        <h4>Credit Cards & ATMs</h4>
                        <p>ATMs are found in major towns but are rare in the bush. Credit cards (Visa/MasterCard) are accepted at larger hotels but may incur a 5-10% surcharge. It's best to carry sufficient cash (USD) for tips and small purchases.</p>
                    </CardContent>
                </Card>

            </div>
        </div>
      </section>
    </div>
  );
}
