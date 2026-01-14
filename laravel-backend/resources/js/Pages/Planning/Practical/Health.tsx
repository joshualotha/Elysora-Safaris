import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { ShieldCheck, ExternalLink, HeartPulse, Cross, Phone, Stethoscope, Syringe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';

export default function Health() {
    return (
        <MainLayout title="Health & Safety Advice - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                <section className="relative h-screen md:h-[40vh] flex items-center justify-center overflow-hidden bg-safari-green">
                    <div className="absolute inset-0 opacity-20">
                        <img src="/images/pattern-overlay.png" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative container mx-auto px-4 md:px-6 text-center z-10 pt-24 md:pt-10">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center mx-auto mb-6 border border-white/30">
                            <ShieldCheck className="h-8 w-8" />
                        </div>
                        <div className="text-center relative inline-block">
                            <div className="relative inline-block">
                                <span className="accent-script text-6xl md:text-8xl absolute -top-12 -left-12 text-white/20 transform -rotate-12 select-none pointer-events-none z-0">Your</span>
                                <h1 className="relative z-10 text-4xl md:text-5xl font-headline font-bold text-white mb-4">
                                    Health & Safety Advice
                                </h1>
                            </div>
                        </div>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            Your wellbeing is our priority. Expert guidance on staying healthy and safe in the wild.
                        </p>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                        <div className="prose prose-lg prose-headings:font-headline max-w-none mb-16">
                            <p className="text-xl text-stone-gray leading-relaxed font-medium">
                                Tanzania is generally a safe destination, but preparation is key. We advise consulting a travel doctor 6-8 weeks prior to departure to discuss vaccinations and prescriptions based on your personal health history.
                            </p>
                            <p className="text-stone-600">
                                <strong>Safety Policy:</strong> Our guides undergo rigorous training in wilderness first aid, emergency response, and wildlife behavior. All vehicles are equipped with first aid kits and radio communication.
                            </p>
                        </div>

                        {/* Major Vaccinations Grid */}
                        <div className="grid md:grid-cols-2 gap-8 mb-20 not-prose">
                            <Card className="border-l-4 border-l-yellow-500 shadow-lg group hover:-translate-y-1 transition-transform duration-300">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                                        <Syringe className="h-6 w-6 text-yellow-600" />
                                    </div>
                                    <CardTitle className="font-headline font-bold text-charcoal text-2xl">Yellow Fever</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-stone-600 mb-4 leading-relaxed">
                                        <strong>Mandatory ONLY if driving/traveling from a country with risk of transmission</strong> (e.g., Kenya, Ethiopia, Uganda).
                                    </p>
                                    <p className="text-stone-600 mb-4 leading-relaxed text-sm">
                                        If you fly directly from Europe or the USA into Tanzania, it is technically not required, but border officials may still ask. We recommend having the certificate if you are transiting through Nairobi or Addis Ababa for &gt;12 hours.
                                    </p>
                                    <a href="https://wwwnc.cdc.gov/travel/destinations/traveler/none/tanzania" target="_blank" className="text-yellow-600 hover:text-yellow-800 font-bold hover:underline inline-flex items-center gap-1 text-sm uppercase tracking-wide">
                                        CDC Guidelines <ExternalLink className="h-4 w-4" />
                                    </a>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-l-red-500 shadow-lg group hover:-translate-y-1 transition-transform duration-300">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                                        <HeartPulse className="h-6 w-6 text-red-600" />
                                    </div>
                                    <CardTitle className="font-headline font-bold text-charcoal text-2xl">Malaria Prevention</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-stone-600 leading-relaxed mb-4">
                                        Malaria is present in most safari areas (except high altitudes like Ngorongoro Crater rim). Prevention is three-fold:
                                    </p>
                                    <ul className="space-y-2 mb-4 text-stone-600 text-sm">
                                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" /> <strong>Medication:</strong> Take Malarone, Doxycycline, or Lariam as prescribed.</li>
                                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" /> <strong>Repellent:</strong> Use DEET-based spray (30-50%) at dawn and dusk.</li>
                                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" /> <strong>Clothing:</strong> Wear long trousers and sleeves in the evenings.</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Medical Kit & Other Vaccines */}
                        <div className="flex flex-col md:flex-row gap-12 bg-ivory rounded-3xl p-8 border border-stone-100 mb-20">
                            <div className="flex-1">
                                <h3 className="font-headline font-bold text-2xl text-charcoal mb-6 flex items-center gap-3">
                                    <Cross className="h-6 w-6 text-red-500" />
                                    Recommended Medical Kit
                                </h3>
                                <div className="mb-6 rounded-2xl overflow-hidden shadow-md">
                                    <img src="/images/health_safety.png" alt="Safari Medical Kit" className="w-full h-48 object-cover" />
                                </div>
                                <p className="text-stone-600 mb-6">While we carry first aid supplies, we recommend bringing a personal kit containing:</p>
                                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-stone-700">
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-stone-400 rounded-full" /> Prescription medications (original labels)</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-stone-400 rounded-full" /> Antimalarial medication</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-stone-400 rounded-full" /> Antihistamines (for allergies)</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-stone-400 rounded-full" /> Painkillers (Paracetamol/Ibuprofen)</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-stone-400 rounded-full" /> Diarrhea treatment (Imodium/Rehydration)</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-stone-400 rounded-full" /> Antibacterial liquid/ointment</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-stone-400 rounded-full" /> Motion sickness tablets</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-stone-400 rounded-full" /> Blister plasters/Band-aids</li>
                                </ul>
                            </div>
                            <div className="flex-1 border-t md:border-t-0 md:border-l border-stone-200 pt-8 md:pt-0 md:pl-12">
                                <h3 className="font-headline font-bold text-2xl text-charcoal mb-6">Other Routine Vaccines</h3>
                                <p className="text-stone-600 mb-4 text-sm">Ensure you are up-to-date with routine vaccinations:</p>
                                <ul className="space-y-3 text-stone-700">
                                    <li className="flex items-center justify-between border-b border-stone-100 pb-2">
                                        <span>Hepatitis A & B</span>
                                        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Recommended</span>
                                    </li>
                                    <li className="flex items-center justify-between border-b border-stone-100 pb-2">
                                        <span>Typhoid</span>
                                        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Recommended</span>
                                    </li>
                                    <li className="flex items-center justify-between border-b border-stone-100 pb-2">
                                        <span>Tetanus</span>
                                        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Booster if &gt;10 yrs</span>
                                    </li>
                                    <li className="flex items-center justify-between border-b border-stone-100 pb-2">
                                        <span>Rabies</span>
                                        <span className="text-xs font-bold text-stone-500 bg-stone-100 px-2 py-1 rounded">Long Stays Only</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Emergency Info */}
                        <div className="bg-charcoal text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10">
                                <img src="/images/pattern-overlay.png" className="w-full h-full object-cover" />
                            </div>
                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold font-headline mb-8 text-center text-sahara-gold">Emergency Information</h2>
                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                                        <Phone className="h-8 w-8 mx-auto mb-4 text-sahara-gold" />
                                        <h4 className="font-bold mb-2">General Emergency</h4>
                                        <p className="text-2xl font-bold tracking-widest">112</p>
                                        <p className="text-xs text-white/50 mt-1">Police / Ambulance / Fire</p>
                                    </div>
                                    <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                                        <Stethoscope className="h-8 w-8 mx-auto mb-4 text-red-500" />
                                        <h4 className="font-bold mb-2">Medical Facilities</h4>
                                        <p className="text-sm">Arusha Lutheran Medical Centre</p>
                                        <a href="tel:+255766909113" className="block text-lg font-bold mt-1 hover:text-sahara-gold">+255 766 909 113</a>
                                    </div>
                                    <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                                        <div className="h-8 w-8 mx-auto mb-4 bg-sahara-gold text-charcoal rounded-full flex items-center justify-center font-bold">E</div>
                                        <h4 className="font-bold mb-2">Elysora 24/7 Support</h4>
                                        <p className="text-sm">Duty Manager</p>
                                        <a href="tel:+255681838482" className="block text-lg font-bold mt-1 hover:text-sahara-gold">+255 681 838 482</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
