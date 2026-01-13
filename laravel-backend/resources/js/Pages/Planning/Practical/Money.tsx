import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { DollarSign } from 'lucide-react';

export default function Money() {
    return (
        <MainLayout title="Currency & Tipping - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-sahara-gold">
                    <div className="absolute inset-0 opacity-20">
                        <img src="/images/pattern-overlay.png" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative container mx-auto px-4 md:px-6 text-center z-10 pt-10">
                        <div className="w-16 h-16 rounded-2xl bg-charcoal text-sahara-gold flex items-center justify-center mx-auto mb-6 border border-charcoal/30">
                            <DollarSign className="h-8 w-8" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-headline font-bold text-charcoal mb-4">
                            Currency & Tipping
                        </h1>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <div className="prose prose-lg prose-headings:font-headline max-w-none">
                            <p className="text-xl text-stone-gray mb-8 leading-relaxed font-medium">
                                The local currency is the <strong>Tanzanian Shilling (TZS)</strong>. However, the <strong>US Dollar (USD)</strong> is the unofficial currency of tourism. Lodge fees, park fees, and tips are almost always quoted in USD.
                            </p>

                            <div className="bg-red-50 p-8 rounded-2xl border border-red-100 my-8 not-prose">
                                <h4 className="font-bold text-red-900 text-xl mb-4 flex items-center gap-3">
                                    <span className="w-3 h-3 rounded-full bg-red-600 animate-pulse" />
                                    Critical: US Dollar Bill Condition
                                </h4>
                                <p className="text-red-800 leading-relaxed">
                                    Banks in Tanzania <strong>reject US bills printed before 2009</strong> due to counterfeiting concerns.
                                    Bills must be crisp, clean, and free of tears, ink marks, or heavy creases. Ensure you bring "big head" dollars dated 2013 or later to be safe.
                                </p>
                            </div>

                            <h3 className="text-2xl font-bold text-charcoal mt-10 mb-6">Tipping Guidelines</h3>
                            <div className="float-right ml-8 mb-6 w-1/2 rounded-2xl overflow-hidden shadow-lg rotate-2">
                                <img src="/images/currency_money.png" alt="Tanzanian Currency and USD" className="w-full h-auto object-cover" />
                            </div>
                            <p className="text-stone-600 mb-6">
                                Tipping is not mandatory but is a deeply ingrained culture in the safari industry to support staff who spend weeks away from their families. We recommend bringing small denominations ($1, $5, $10, $20) for this purpose.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose">
                                <div className="p-6 bg-ivory rounded-xl border border-stone-100 text-center">
                                    <div className="text-sm text-stone-500 uppercase font-bold tracking-wider mb-2">Safari Guide</div>
                                    <div className="font-headline font-bold text-3xl text-sahara-gold mb-1">$20</div>
                                    <div className="text-sm text-stone-400">per person / day</div>
                                </div>
                                <div className="p-6 bg-ivory rounded-xl border border-stone-100 text-center">
                                    <div className="text-sm text-stone-500 uppercase font-bold tracking-wider mb-2">Tracker (if applicable)</div>
                                    <div className="font-headline font-bold text-3xl text-sahara-gold mb-1">$10</div>
                                    <div className="text-sm text-stone-400">per person / day</div>
                                </div>
                                <div className="p-6 bg-ivory rounded-xl border border-stone-100 text-center">
                                    <div className="text-sm text-stone-500 uppercase font-bold tracking-wider mb-2">Lodge Staff (Shared Box)</div>
                                    <div className="font-headline font-bold text-3xl text-sahara-gold mb-1">$10 - $15</div>
                                    <div className="text-sm text-stone-400">per guest / day</div>
                                </div>
                                <div className="p-6 bg-ivory rounded-xl border border-stone-100 text-center">
                                    <div className="text-sm text-stone-500 uppercase font-bold tracking-wider mb-2">Transfer Drivers</div>
                                    <div className="font-headline font-bold text-3xl text-sahara-gold mb-1">$5 - $10</div>
                                    <div className="text-sm text-stone-400">per transfer</div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-4">Cash vs. Cards</h3>
                            <p className="text-stone-600">
                                <strong>Credit Cards:</strong> Visa and MasterCard are widely accepted at larger lodges and hotels, though a surcharge of 3-5% often applies.
                            </p>
                            <p className="text-stone-600 mt-4">
                                <strong>ATMs:</strong> Available in major cities (Arusha, Dar es Salaam, Zanzibar) but non-existent in the bush. Withdraw Shillings for local purchases (beer, souvenirs) before heading on safari.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
