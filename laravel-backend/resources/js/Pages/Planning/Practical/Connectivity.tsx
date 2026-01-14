import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Wifi } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';
import { resolveImagePath } from '@/lib/utils';

interface ConnectivityProps {
    images?: Record<string, any>;
}

export default function Connectivity({ images }: ConnectivityProps) {
    return (
        <MainLayout title="Internet & Connectivity - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-blue-900">
                    <div className="absolute inset-0 opacity-20">
                        <img src={images?.planning_connectivity_pattern?.image_path ? resolveImagePath(images.planning_connectivity_pattern.image_path) : '/images/pattern-overlay.png'} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = '/images/pattern-overlay.png'; }} />
                    </div>
                    <div className="relative container mx-auto px-4 md:px-6 text-center z-10 pt-10">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center mx-auto mb-6 border border-white/30">
                            <Wifi className="h-8 w-8" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-headline font-bold text-white mb-4">
                            Internet & Connectivity
                        </h1>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <div className="prose prose-lg prose-headings:font-headline max-w-none text-stone-600">
                            <p className="text-xl text-stone-gray mb-12 leading-relaxed font-medium">
                                While safari is traditionally a place to disconnect and immerse yourself in nature, we understand the need to stay in touch with loved ones or handle business.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 not-prose mb-12">
                                <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100">
                                    <div className="mb-6 rounded-xl overflow-hidden shadow-sm">
                                        <img src={images?.planning_connectivity_info?.image_path ? resolveImagePath(images.planning_connectivity_info.image_path) : '/images/connectivity_safari.png'} alt={images?.planning_connectivity_info?.alt_text || 'Connectivity in the Wild'} className="w-full h-48 object-cover" onError={(e) => { e.currentTarget.src = '/images/connectivity_safari.png'; }} />
                                    </div>
                                    <h3 className="font-bold text-2xl text-blue-900 mb-4">Wi-Fi at Lodges</h3>
                                    <p className="leading-relaxed text-blue-800">
                                        Most mid-range and luxury lodges offer free Wi-Fi. In larger lodges, it is available in rooms. In smaller tented camps, it is often restricted to the main lounge/mess tent area to preserve the peaceful atmosphere of the sleeping tents.
                                    </p>
                                    <p className="mt-4 text-sm text-blue-600 font-bold">
                                        Speeds are generally sufficient for emails and WhatsApp, but not for heavy streaming or video calls.
                                    </p>
                                </div>

                                <div className="p-8 bg-ivory rounded-2xl border border-stone-100">
                                    <h3 className="font-bold text-2xl text-charcoal mb-4">Mobile Data (Sim Cards)</h3>
                                    <p className="leading-relaxed text-stone-600">
                                        If you need reliable connection on the road, we recommend buying a tourist Sim Card at Kilimanjaro Airport (JRO) or Dar es Salaam on arrival.
                                    </p>
                                    <ul className="mt-4 space-y-2 text-stone-600">
                                        <li><strong>Best Coverage:</strong> Airtel and Vodacom have the best bush coverage.</li>
                                        <li><strong>Cost:</strong> Approx $10-$15 for 10GB of data.</li>
                                    </ul>
                                </div>
                            </div>

                            <h3>Dead Zones</h3>
                            <p>
                                Tanzania has surprisingly good 4G coverage even in remote areas like the Serengeti plains. However, dead spots exist in valleys, dense forests, and the Ngorongoro Crater floor.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
