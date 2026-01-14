import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Briefcase, Check, Shirt, Camera, Sun, Info, AlertTriangle, Backpack, ShoppingBag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { resolveImagePath } from '@/lib/utils';

interface PackingProps {
    images?: Record<string, any>;
}

export default function Packing({ images }: PackingProps) {
    return (
        <MainLayout title="Safari Packing List - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                {/* Hero */}
                <section className="relative h-screen md:h-[40vh] flex items-center justify-center overflow-hidden bg-sand">
                    <div className="absolute inset-0 opacity-20">
                        <img src={images?.planning_packing_pattern?.image_path ? resolveImagePath(images.planning_packing_pattern.image_path) : '/images/pattern-overlay.png'} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = '/images/pattern-overlay.png'; }} />
                    </div>
                    <div className="relative container mx-auto px-4 md:px-6 text-center z-10 pt-24 md:pt-10">
                        <div className="w-16 h-16 rounded-2xl bg-charcoal text-white flex items-center justify-center mx-auto mb-6 border border-charcoal/30">
                            <Briefcase className="h-8 w-8" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-headline font-bold text-charcoal mb-4">
                            Essential Packing List
                        </h1>
                        <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                            The comprehensive guide to what to bring for the bush, the beach, and the journey in between.
                        </p>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-6 max-w-5xl">

                        {/* Luggage Warning */}
                        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-16 flex items-start gap-4">
                            <AlertTriangle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg font-bold text-orange-800 mb-1">Crucial: Soft-Sided Luggage Only</h3>
                                <p className="text-stone-700 leading-relaxed text-sm">
                                    If your itinerary includes light aircraft flights (e.g., to Serengeti or Zanzibar), you strictly limited to <strong>15kg (33lbs)</strong> in soft-sided bags. Hard-shell suitcases typically cannot fit into the cargo pods of Cessna aircraft.
                                </p>
                            </div>
                        </div>

                        {/* Luggage Types */}
                        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
                            <img src={images?.planning_packing_info?.image_path ? resolveImagePath(images.planning_packing_info.image_path) : '/images/packing_safari.png'} alt={images?.planning_packing_info?.alt_text || 'Efficient Safari Packing'} className="w-full h-[400px] object-cover" onError={(e) => { e.currentTarget.src = '/images/packing_safari.png'; }} />
                        </div>
                        <h2 className="text-3xl font-headline font-bold text-charcoal mb-8 text-center md:text-left">The Three Bags You Need</h2>
                        <div className="grid md:grid-cols-3 gap-6 mb-20">
                            <Card className="shadow-md border-t-4 border-t-charcoal">
                                <CardHeader className="text-center">
                                    <div className="mx-auto w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-3">
                                        <Briefcase className="h-6 w-6 text-charcoal" />
                                    </div>
                                    <CardTitle>Main Duffel</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center text-sm text-stone-600 space-y-2">
                                    <p><strong>Limit:</strong> 15-20kg</p>
                                    <p>Soft-sided, waterproof, durable canvas or nylon.</p>
                                    <Badge variant="secondary" className="mt-2">No Wheels/Hard Shells</Badge>
                                </CardContent>
                            </Card>
                            <Card className="shadow-md border-t-4 border-t-sahara-gold">
                                <CardHeader className="text-center">
                                    <div className="mx-auto w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-3">
                                        <Backpack className="h-6 w-6 text-sahara-gold" />
                                    </div>
                                    <CardTitle>Day Pack</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center text-sm text-stone-600 space-y-2">
                                    <p><strong>Size:</strong> 20-30 Liters</p>
                                    <p>For cameras, layers, water bottle, and sunscreen during game drives.</p>
                                </CardContent>
                            </Card>
                            <Card className="shadow-md border-t-4 border-t-blue-500">
                                <CardHeader className="text-center">
                                    <div className="mx-auto w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-3">
                                        <Camera className="h-6 w-6 text-blue-500" />
                                    </div>
                                    <CardTitle>Camera Bag</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center text-sm text-stone-600 space-y-2">
                                    <p><strong>Type:</strong> Dustproof & Padded</p>
                                    <p>Quick access design that fits inside your day pack or on your lap.</p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Checklists */}
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Clothing */}
                            <div>
                                <h3 className="font-headline font-bold text-2xl text-charcoal mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-700">
                                        <Shirt className="h-6 w-6" />
                                    </div>
                                    Clothing
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Neutral colors (Khaki, Green, Beige) - Avoid bright blue (attracts Tsetse flies)",
                                        "3-4 Lightweight long-sleeve shirts (Sun/Bug protection)",
                                        "3-4 T-shirts",
                                        "2 Pairs convertible hiking pants",
                                        "Shorts (for midday at camp)",
                                        "Lightweight fleece or jacket (Mornings are cold!)",
                                        "Waterproof windbreaker/Rain jacket",
                                        "Swimwear (Many lodges have pools)",
                                        "Comfortable walking shoes/boots",
                                        "Sandals/Flip-flops (for camp)",
                                        "Wide-brimmed safari hat"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-stone-600 text-sm leading-relaxed">
                                            <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Gear & Gadgets */}
                            <div>
                                <h3 className="font-headline font-bold text-2xl text-charcoal mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700">
                                        <Camera className="h-6 w-6" />
                                    </div>
                                    Gear & Electronics
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "DSLR/Mirrorless Camera + Telephoto lens (200-400mm+)",
                                        "Extra batteries (3-4) - Charging is limited in bush",
                                        "Large capacity memory cards",
                                        "Binoculars (8x42 recommended per person)",
                                        "Smartphone with good camera",
                                        "Power bank (10,000mAh+)",
                                        "Universal power adapter (Type G - UK Style)",
                                        "Lens cleaning kit (Dust is everywhere)",
                                        "Headlamp/Flashlight"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-stone-600 text-sm leading-relaxed">
                                            <Check className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Toiletries */}
                            <div>
                                <h3 className="font-headline font-bold text-2xl text-charcoal mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-700">
                                        <Sun className="h-6 w-6" />
                                    </div>
                                    Toiletries & Health
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Malaria Prophylaxis (Malarone/Doxycycline)",
                                        "Insect Repellent (DEET 30-50%)",
                                        "Sunscreen (High SPF) + Lip Balm",
                                        "Personal prescriptions",
                                        "Basic First Aid (Plasters, Painkillers)",
                                        "Hand Sanitizer & Wet Wipes",
                                        "Motion sickness tablets (for bumpy roads)",
                                        "Glasses/Contact lenses (+ solution)"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-stone-600 text-sm leading-relaxed">
                                            <Check className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Miscellaneous */}
                            <div>
                                <h3 className="font-headline font-bold text-2xl text-charcoal mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-700">
                                        <ShoppingBag className="h-6 w-6" />
                                    </div>
                                    Miscellaneous
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Reusable water bottle (reduce plastic!)",
                                        "Sunglasses (Polarized is best)",
                                        "Lightweight scarf/Buff (dust protection)",
                                        "Travel documents (Passport/Visa printed copies)",
                                        "US Dollars (Cash for tips/souvenirs - post 2009 bills)",
                                        "Notebook & Pen",
                                        "Travel pillow/Earplugs"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-stone-600 text-sm leading-relaxed">
                                            <Check className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
