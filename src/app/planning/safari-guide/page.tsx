
import PageHeader from "@/components/shared/PageHeader";
import Image from "next/image";
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";


const monthlyGuide = [
    { month: "Jan-Feb", weather: "Hot & Dry", wildlife: "Calving season in Southern Serengeti. Excellent game viewing.", price: "High" },
    { month: "Mar", weather: "Green Season", wildlife: "Calving continues. Great birding. Rains begin.", price: "Mid" },
    { month: "Apr-May", weather: "Long Rains", wildlife: "Lush landscapes. Fewer crowds. Some lodges close.", price: "Low" },
    { month: "Jun-Jul", weather: "Cool & Dry", wildlife: "Migration moves north. River crossings begin in Grumeti.", price: "High" },
    { month: "Aug-Sep", weather: "Dry & Sunny", wildlife: "Peak of Mara River crossings in Northern Serengeti.", price: "Peak" },
    { month: "Oct", weather: "Dry & Warm", wildlife: "Good, less crowded game viewing before the rains.", price: "High" },
    { month: "Nov-Dec", weather: "Short Rains", wildlife: "Migration moves south to fresh pastures. Green landscapes return.", price: "Mid/High" },
]

const safariStyles = [
  {
    title: "Private Safari",
    description: "Your own vehicle and guide. Total flexibility to start and stop when you want. Ideal for photographers and families.",
    image: "https://images.unsplash.com/photo-1535940587896-3a4e0ce292f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjB2ZWhpY2xlfGVufDB8fHx8MTc2NTk3ODYzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "private safari",
    href: "/planning/private-safari"
  },
  {
    title: "Group Joining Safari",
    description: "Share the vehicle with other travelers on a fixed departure. A budget-friendly way to meet new people.",
    image: "https://images.unsplash.com/photo-1631121592926-b7642af441c5?q=80&w=2070&auto=format&fit=crop",
    imageHint: "safari group",
    href: "/planning/group-safari"
  },
  {
    title: "Luxury / Fly-In",
    description: "Maximize your time by flying between parks. Stay in top-tier lodges with premium amenities and exclusive access.",
    image: "https://images.unsplash.com/photo-1607712617949-8c993d290809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxzYWZhcmklMjBsb2RnZXxlbnwwfHx8fDE3Njc3MDQ3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "luxury lodge",
    href: "/planning/luxury-safari"
  },
  {
    title: "Budget Camping",
    description: "Sleep in dome tents under the stars. A raw, authentic adventure that brings you closer to nature.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop",
    imageHint: "safari camping",
    href: "/planning/camping-safari"
  }
];


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

            <div className="overflow-x-auto rounded-lg border">
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
                                     <Badge variant={item.price === 'Peak' || item.price === 'High' ? 'destructive' : item.price === 'Mid' ? 'secondary' : 'default'}>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safariStyles.map((style) => (
              <Link href={style.href} key={style.title} className="group">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
                  <Image
                    src={style.image}
                    alt={style.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={style.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="font-headline text-2xl font-bold mb-2">{style.title}</h3>
                    <p className="text-sm text-stone-200">{style.description}</p>
                  </div>
                </div>
              </Link>
            ))}
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
