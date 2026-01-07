

import PageHeader from "@/components/shared/PageHeader";
import Image from "next/image";
import {
  Car,
  Users,
  Plane,
  Tent,
  ZoomIn,
  Camera,
  BookUser,
  Shirt,
  HeartPulse,
  FileText,
  Briefcase,
  FirstAidKit,
  CreditCard,
  ShieldCheck,
  DollarSign,
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
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { monthlyGuide, safariStyles } from "@/lib/data";


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
                                     <Badge variant={item.price === 'High' ? 'destructive' : item.price === 'Mid' || item.price === 'Mid/High' ? 'secondary' : 'default'}>
                                        {item.price}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
             <p className="text-sm text-muted-foreground mt-4 text-center">
                <strong>High Season:</strong> June-October & Jan-Feb. <strong>Low Season:</strong> April-May.
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
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-headline font-bold mb-4">
                Be Prepared: A Quick Checklist
              </h2>
              <p className="text-lg text-muted-foreground">
                A little preparation goes a long way. Here are our top tips for
                a seamless and unforgettable safari.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Camera className="h-6 w-6 text-primary" />
                    Photography
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3"><ZoomIn className="h-5 w-5 text-primary/80 mt-1 flex-shrink-0" /><span>A zoom lens (300mm+) is key for wildlife.</span></li>
                    <li className="flex items-start gap-3"><Car className="h-5 w-5 text-primary/80 mt-1 flex-shrink-0" /><span>Use a beanbag to stabilize your camera in the vehicle.</span></li>
                    <li className="flex items-start gap-3"><BookUser className="h-5 w-5 text-primary/80 mt-1 flex-shrink-0" /><span>Always ask permission before photographing local people.</span></li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FirstAidKit className="h-6 w-6 text-primary" />
                    Health & Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3"><ShieldCheck className="h-5 w-5 text-primary/80 mt-1 flex-shrink-0" /><span>Consult a doctor about malaria pills and vaccines.</span></li>
                    <li className="flex items-start gap-3"><FileText className="h-5 w-5 text-primary/80 mt-1 flex-shrink-0" /><span>Keep your passport, visa, and flight info handy.</span></li>
                    <li className="flex items-start gap-3"><HeartPulse className="h-5 w-5 text-primary/80 mt-1 flex-shrink-0" /><span>Pack sunscreen and a quality insect repellent.</span></li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Briefcase className="h-6 w-6 text-primary" />
                    Essential Gear
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3"><Shirt className="h-5 w-5 text-primary/80 mt-1 flex-shrink-0" /><span>Pack light, layered clothing in neutral colors.</span></li>
                    <li className="flex items-start gap-3"><DollarSign className="h-5 w-5 text-primary/80 mt-1 flex-shrink-0" /><span>Bring US Dollars (printed 2009 or later) for tips.</span></li>
                    <li className="flex items-start gap-3"><CreditCard className="h-5 w-5 text-primary/80 mt-1 flex-shrink-0" /><span>Have a Visa/Mastercard as a backup.</span></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
