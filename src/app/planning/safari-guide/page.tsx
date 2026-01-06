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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const monthlyGuide = [
    { month: "Jan-Feb", weather: "Hot & Dry", wildlife: "Calving season in Southern Serengeti. Excellent game viewing.", price: "High" },
    { month: "Mar", weather: "Green Season", wildlife: "Calving continues. Great birding. Rains begin.", price: "Mid" },
    { month: "Apr-May", weather: "Long Rains", wildlife: "Lush landscapes. Fewer crowds. Some lodges close.", price: "Low" },
    { month: "Jun-Jul", weather: "Cool & Dry", wildlife: "Migration moves north. River crossings begin in Grumeti.", price: "High" },
    { month: "Aug-Sep", weather: "Dry & Sunny", wildlife: "Peak of Mara River crossings in Northern Serengeti.", price: "Peak" },
    { month: "Oct", weather: "Dry & Warm", wildlife: "Good, less crowded game viewing before the rains.", price: "High" },
    { month: "Nov-Dec", weather: "Short Rains", wildlife: "Migration moves south to fresh pastures. Green landscapes return.", price: "Mid/High" },
]


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
                When is the Best Time to Visit?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Tanzania is a fantastic year-round destination, but the experience changes with the seasons. The "best" time depends entirely on what you want to see and do. Use our month-by-month guide to find your perfect safari window.
              </p>
            </div>

            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-bold">Month</TableHead>
                            <TableHead className="font-bold">Weather</TableHead>
                            <TableHead className="font-bold">Wildlife Highlights</TableHead>
                            <TableHead className="font-bold text-right">Price</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {monthlyGuide.map((item) => (
                            <TableRow key={item.month}>
                                <TableCell className="font-semibold">{item.month}</TableCell>
                                <TableCell>{item.weather}</TableCell>
                                <TableCell>{item.wildlife}</TableCell>
                                <TableCell className="text-right">
                                     <Badge variant={item.price === 'Peak' || item.price === 'High' ? 'destructive' : item.price === 'Mid' ? 'secondary' : 'default'} className="bg-opacity-20 text-opacity-100">
                                        {item.price}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
             <p className="text-sm text-muted-foreground mt-4 text-center">
                <strong>Peak Season:</strong> June-October. <strong>Low Season:</strong> April-May.
            </p>
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
                Be Prepared: A Quick Checklist
              </h2>
              <p className="text-lg text-muted-foreground">
                A little preparation goes a long way. Here are our top tips for
                a seamless and unforgettable safari.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3"><Camera className="h-6 w-6 text-primary"/> Photography Tips</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <ZoomIn className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Bring a Zoom Lens</h4>
                      <p className="text-muted-foreground text-sm">
                        A lens with at least a 300mm reach is recommended to get
                        great shots of distant wildlife.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Car className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Use a Bean Bag</h4>
                      <p className="text-muted-foreground text-sm">
                        Far more stable and practical than tripods for resting your
                        camera on the vehicle's open roof.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Protect From Dust</h4>
                      <p className="text-muted-foreground text-sm">
                        African roads are dusty. Bring a simple dust cover
                        (or even a pillowcase) for your camera gear.
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
                      <HeartPulse className="mr-2 h-5 w-5" />
                      Health & Documents
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-2">
                        <li>Passport (valid for at least 6 months).</li>
                        <li>Printed copy of your Tanzanian e-visa.</li>
                        <li>High-SPF sunscreen and insect repellent (with DEET).</li>
                        <li>Any personal medications and a basic first-aid kit.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="font-bold text-lg">
                      <Camera className="mr-2 h-5 w-5" />
                      Gear & Extras
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-2">
                        <li>Binoculars are essential!</li>
                        <li>Camera with extra batteries and memory cards.</li>
                        <li>Portable power bank & universal travel adapter.</li>
                         <li>A good book for siesta time.</li>
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
