import PageHeader from "@/components/shared/PageHeader";
import SafariCard from "@/components/shared/SafariCard";
import { safariPackages, destinations } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

export default function SafarisPage() {
  return (
    <div>
      <PageHeader
        title="Safari Packages"
        subtitle="Find your perfect adventure among our curated selection of Tanzanian safaris."
        imageId="safari-card-4"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Filter Safaris</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="price-range">Price Range</Label>
                    <Slider id="price-range" defaultValue={[2500]} max={10000} step={500} />
                    <div className="flex justify-between text-sm text-muted-foreground">
                        <span>$500</span>
                        <span>$10,000+</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Safari Style</Label>
                    <RadioGroup defaultValue="all">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="all" id="r-all"/>
                            <Label htmlFor="r-all">All</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="budget" id="r-budget"/>
                            <Label htmlFor="r-budget">Budget</Label>
                        </div>
                         <div className="flex items-center space-x-2">
                            <RadioGroupItem value="mid-range" id="r-mid"/>
                            <Label htmlFor="r-mid">Mid-range</Label>
                        </div>
                         <div className="flex items-center space-x-2">
                            <RadioGroupItem value="luxury" id="r-luxury"/>
                            <Label htmlFor="r-luxury">Luxury</Label>
                        </div>
                    </RadioGroup>
                  </div>
                   <div className="space-y-2">
                    <Label>Destinations</Label>
                    <div className="space-y-2">
                        {destinations.map(dest => (
                             <div key={dest.slug} className="flex items-center space-x-2">
                                <Checkbox id={`dest-${dest.slug}`}/>
                                <Label htmlFor={`dest-${dest.slug}`} className="font-normal">{dest.name}</Label>
                            </div>
                        ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>

            <main className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {safariPackages.map((pkg) => (
                  <SafariCard key={pkg.slug} safari={pkg} />
                ))}
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
