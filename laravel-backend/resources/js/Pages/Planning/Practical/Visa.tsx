import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Globe, Check, ExternalLink, Clock, DollarSign, FileText, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/Components/ui/accordion';
import { Badge } from '@/Components/ui/badge';

export default function Visa() {
    return (
        <MainLayout title="Visa & Entry Requirements - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-charcoal">
                    <div className="absolute inset-0 opacity-20">
                        <img src="/images/pattern-overlay.png" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative container mx-auto px-4 md:px-6 text-center z-10 pt-10">
                        <div className="w-16 h-16 rounded-2xl bg-charcoal text-sahara-gold flex items-center justify-center mx-auto mb-6 border border-sahara-gold/30">
                            <Globe className="h-8 w-8" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-headline font-bold text-white mb-4">
                            Visa & Entry Requirements
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            Comprehensive guide to navigating Tanzanian immigration, fees, and requirements.
                        </p>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-6 max-w-5xl">

                        {/* Introduction */}
                        <div className="prose prose-lg prose-headings:font-headline max-w-none mb-16">
                            <p className="text-xl text-stone-gray leading-relaxed font-medium">
                                Most international visitors require a visa to enter Tanzania. This can be obtained on arrival or through the <a href="https://eservices.immigration.go.tz/visa/" target="_blank" className="text-sahara-gold font-bold hover:underline">Official E-Visa System</a>.
                                Requirements vary by nationality, so we always recommend checking specific regulations for your country.
                            </p>
                            <p className="text-stone-600">
                                <strong>Pro Tip:</strong> While visas on arrival are available at major ports (JRO, DAR, ZNZ, Namanga), applying online significantly reduces waiting time at the airport after a long flight.
                            </p>
                        </div>

                        {/* Visa Types Grid */}
                        <h2 className="text-3xl font-headline font-bold text-charcoal mb-8">Types of Tanzanian Visas</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                            <Card className="border-t-4 border-t-sahara-gold shadow-md hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <CardTitle className="text-xl font-bold text-charcoal">Ordinary (Tourist) Visa</CardTitle>
                                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Most Common</Badge>
                                    </div>
                                    <CardDescription className="text-stone-500 mt-2">
                                        For tourism, holidays, and visiting friends.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center justify-between text-sm py-2 border-b border-gray-100">
                                        <span className="text-stone-500">Validity</span>
                                        <span className="font-bold text-charcoal">90 Days</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm py-2 border-b border-gray-100">
                                        <span className="text-stone-500">Entry Type</span>
                                        <span className="font-bold text-charcoal">Single Entry</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm pt-2">
                                        <span className="text-stone-500">Cost</span>
                                        <span className="font-bold text-charcoal text-lg">$50 USD</span>
                                    </div>
                                    <p className="text-xs text-stone-400 italic mt-2">*US Citizens are required to obtain a Multiple Entry Visa ($100).</p>
                                </CardContent>
                            </Card>

                            <Card className="border-t-4 border-t-blue-500 shadow-md hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-charcoal">Multiple Entry Visa</CardTitle>
                                    <CardDescription className="text-stone-500 mt-2">
                                        For frequent visitors (and US Citizens).
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center justify-between text-sm py-2 border-b border-gray-100">
                                        <span className="text-stone-500">Validity</span>
                                        <span className="font-bold text-charcoal">12 Months</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm py-2 border-b border-gray-100">
                                        <span className="text-stone-500">Stay Duration</span>
                                        <span className="font-bold text-charcoal">Max 90 days/visit</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm pt-2">
                                        <span className="text-stone-500">Cost</span>
                                        <span className="font-bold text-charcoal text-lg">$100 USD</span>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-t-4 border-t-stone-400 shadow-md hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-charcoal">Transit Visa</CardTitle>
                                    <CardDescription className="text-stone-500 mt-2">
                                        Passing through to another destination.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center justify-between text-sm py-2 border-b border-gray-100">
                                        <span className="text-stone-500">Validity</span>
                                        <span className="font-bold text-charcoal">7 Days</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm py-2 border-b border-gray-100">
                                        <span className="text-stone-500">Requirement</span>
                                        <span className="font-bold text-charcoal">Onward Ticket</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm pt-2">
                                        <span className="text-stone-500">Cost</span>
                                        <span className="font-bold text-charcoal text-lg">$30 USD</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Requirements Section */}
                        <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
                            <div className="flex-1">
                                <h2 className="text-3xl font-headline font-bold text-charcoal mb-6">General Requirements</h2>
                                <div className="mb-8 rounded-2xl overflow-hidden shadow-lg transform -rotate-1">
                                    <img src="/images/visa_planning.png" alt="Passport and Visa Planning" className="w-full h-64 object-cover" />
                                </div>
                                <p className="text-stone-600 mb-8">
                                    To ensure a smooth entry, please have the following documents ready for inspection by immigration officers.
                                </p>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <div className="bg-sahara-gold/10 p-2 rounded-lg text-sahara-gold"><FileText className="h-6 w-6" /></div>
                                        <div>
                                            <h4 className="font-bold text-charcoal text-lg">Valid Passport</h4>
                                            <p className="text-sm text-stone-600">Must have at least 6 months of validity remaining beyond your entry date and 2 blank visa pages.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="bg-sahara-gold/10 p-2 rounded-lg text-sahara-gold"><Clock className="h-6 w-6" /></div>
                                        <div>
                                            <h4 className="font-bold text-charcoal text-lg">Return/Onward Ticket</h4>
                                            <p className="text-sm text-stone-600">Proof that you intend to leave Tanzania within the visa validity period.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="bg-sahara-gold/10 p-2 rounded-lg text-sahara-gold"><DollarSign className="h-6 w-6" /></div>
                                        <div>
                                            <h4 className="font-bold text-charcoal text-lg">Proof of Funds & Accommodation</h4>
                                            <p className="text-sm text-stone-600">You may be asked for confirmed hotel bookings or proof of ability to support yourself (rare for package tourists).</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="bg-sahara-gold/10 p-2 rounded-lg text-sahara-gold"><AlertTriangle className="h-6 w-6" /></div>
                                        <div>
                                            <h4 className="font-bold text-charcoal text-lg">Yellow Fever Certificate</h4>
                                            <p className="text-sm text-stone-600">Mandatory only if arriving from a Yellow Fever endemic country (details in <a href={route('planning.health')} className="text-sahara-gold underline">Health Section</a>).</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/3 bg-ivory p-8 rounded-3xl border border-stone-100">
                                <h3 className="font-bold text-xl text-charcoal mb-6">The E-Visa Process</h3>
                                <div className="space-y-8 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-stone-200">
                                    <div className="relative pl-12">
                                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-sahara-gold text-white flex items-center justify-center font-bold text-sm">1</div>
                                        <h4 className="font-bold text-charcoal">Create Account</h4>
                                        <p className="text-xs text-stone-500 mt-1">Register on the Immigration Portal.</p>
                                    </div>
                                    <div className="relative pl-12">
                                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-sahara-gold text-white flex items-center justify-center font-bold text-sm">2</div>
                                        <h4 className="font-bold text-charcoal">Apply</h4>
                                        <p className="text-xs text-stone-500 mt-1">Fill personal details & upload passport/photo.</p>
                                    </div>
                                    <div className="relative pl-12">
                                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-sahara-gold text-white flex items-center justify-center font-bold text-sm">3</div>
                                        <h4 className="font-bold text-charcoal">Pay Fee</h4>
                                        <p className="text-xs text-stone-500 mt-1">Use Visa/Mastercard (Debit/Credit). Processing takes 10-14 days.</p>
                                    </div>
                                    <div className="relative pl-12">
                                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm"><Check className="h-4 w-4" /></div>
                                        <h4 className="font-bold text-charcoal">Travel</h4>
                                        <p className="text-xs text-stone-500 mt-1">Print the grant notice and present at the border.</p>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-stone-200">
                                    <a href="https://eservices.immigration.go.tz/visa/" target="_blank" className="w-full flex items-center justify-center gap-2 py-3 bg-charcoal text-white rounded-lg font-bold hover:bg-black transition-colors">
                                        Start Application <ExternalLink className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* FAQs */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-headline font-bold text-charcoal mb-8">Frequently Asked Questions</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left font-bold text-lg text-charcoal">How long does it take to get a visa?</AccordionTrigger>
                                    <AccordionContent className="text-stone-600 leading-relaxed">
                                        E-Visas typically take <strong>10-14 days</strong> to process. It is not an instant system, so please apply at least 2 weeks before travel. Visas on arrival are issued immediately upon payment at the immigration counter, though queues can be long.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left font-bold text-lg text-charcoal">Are children exempt from visas?</AccordionTrigger>
                                    <AccordionContent className="text-stone-600 leading-relaxed">
                                        No. <strong>All travelers regardless of age</strong> require a visa to enter Tanzania. This includes infants.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left font-bold text-lg text-charcoal">Does the 'East Africa Tourist Visa' work in Tanzania?</AccordionTrigger>
                                    <AccordionContent className="text-stone-600 leading-relaxed">
                                        <strong>No.</strong> The East Africa Tourist Visa covers Kenya, Uganda, and Rwanda only. Tanzania is NOT part of this agreement. You must obtain a separate Tanzanian visa.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-left font-bold text-lg text-charcoal">Can I get a visa at land borders?</AccordionTrigger>
                                    <AccordionContent className="text-stone-600 leading-relaxed">
                                        Yes, if you are crossing from Kenya (Namanga/Isebania), Zambia (Tunduma), or Rwanda (Rusumo), you can obtain a visa at the border post. Please have <strong>exact USD cash</strong> (printed after 2009) as card machines at remote borders can be unreliable.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
