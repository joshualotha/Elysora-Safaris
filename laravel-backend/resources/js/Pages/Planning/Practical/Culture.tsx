import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { MapPin, Camera, HandHeart } from 'lucide-react';

export default function Culture() {
    return (
        <MainLayout title="Cultural Etiquette - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                <section className="relative h-screen md:h-[50vh] flex items-center justify-center overflow-hidden bg-charcoal">
                    <div className="absolute inset-0 opacity-20">
                        <img src="/images/pattern-overlay.png" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative container mx-auto px-4 md:px-6 text-center z-10 pt-24 md:pt-10">
                        <div className="w-16 h-16 rounded-2xl bg-sahara-gold text-charcoal flex items-center justify-center mx-auto mb-6">
                            <HandHeart className="h-8 w-8" />
                        </div>
                        <span className="text-sahara-gold font-bold tracking-wider uppercase text-sm block mb-4">Respect & Connection</span>
                        <div className="relative inline-block">
                            <span className="accent-script text-6xl md:text-8xl absolute -top-12 -left-10 text-white/20 transform -rotate-12 select-none pointer-events-none z-0">Traditions</span>
                            <h1 className="relative z-10 text-4xl md:text-5xl font-headline font-bold text-white mb-4">
                                Local Customs & Etiquette
                            </h1>
                        </div>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto mt-6">
                            Tanzania is a culturally rich nation with over 120 ethnic groups. Understanding local customs will enrich your experience and help you connect with people respectfully.
                        </p>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-6 max-w-5xl">

                        {/* Greetings Section */}
                        <div className="mb-20">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-sahara-gold/10 rounded-full text-sahara-gold">
                                    <HandHeart className="h-6 w-6" />
                                </div>
                                <h2 className="text-3xl font-headline font-bold text-charcoal">The Art of Greeting</h2>
                            </div>
                            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
                                <img src="/images/cultural_greeting.png" alt="Respectful Greeting in Tanzania" className="w-full h-[300px] object-cover" />
                            </div>
                            <div className="bg-ivory rounded-3xl p-8 md:p-10 shadow-sm border border-stone-100">
                                <p className="text-stone-gray text-lg mb-6 leading-relaxed">
                                    Greetings are extremely important in Tanzanian culture. Skipping a greeting is considered rude. Always greet people before asking questions or starting conversations.
                                </p>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-sahara-gold"></span>
                                            Standard Greeting
                                        </h3>
                                        <div className="space-y-3 text-stone-600 bg-white p-4 rounded-xl">
                                            <p><span className="font-semibold text-charcoal">You:</span> "Habari za asubuhi?" (Good morning - how are you?)</p>
                                            <p><span className="font-semibold text-charcoal">Response:</span> "Nzuri, asante. Na wewe?" (Fine, thank you. And you?)</p>
                                        </div>
                                        <p className="mt-3 text-sm text-stone-500 italic">Casual: "Jambo" (Hello) or "Mambo" (What's up?)</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-sahara-gold"></span>
                                            Respectful Greeting (Elders)
                                        </h3>
                                        <div className="space-y-3 text-stone-600 bg-white p-4 rounded-xl">
                                            <p><span className="font-semibold text-charcoal">You:</span> "Shikamoo" (I hold your feet)</p>
                                            <p><span className="font-semibold text-charcoal">Response:</span> "Marahaba" (I accept your respect)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 mb-20">
                            {/* Dress Code */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-ivory rounded-full">
                                        <MapPin className="h-6 w-6 text-charcoal" />
                                    </div>
                                    <h2 className="text-2xl font-headline font-bold text-charcoal">Appropriate Dress</h2>
                                </div>
                                <div className="prose prose-stone">
                                    <p>Tanzania is generally conservative. Follow these guidelines to dress respectfully:</p>
                                    <ul className="space-y-2 marker:text-sahara-gold">
                                        <li><strong>Men:</strong> Shorts are acceptable in tourist areas, but long pants are preferred when visiting villages. Remove hats when entering homes.</li>
                                        <li><strong>Women:</strong> Shoulders and knees should be covered in public areas. Loose, breathable clothing is best.</li>
                                        <li><strong>Religious Sites:</strong> Women should carry a scarf to cover their head when visiting mosques.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Photography */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-ivory rounded-full">
                                        <Camera className="h-6 w-6 text-charcoal" />
                                    </div>
                                    <h2 className="text-2xl font-headline font-bold text-charcoal">Photography Etiquette</h2>
                                </div>
                                <div className="prose prose-stone">
                                    <p>Always ask for permission before taking a photo. It is considered very rude to snap shots without asking <em>"Naomba picha?"</em> (May I take a photo?).</p>
                                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-4 rounded-r-xl">
                                        <p className="text-red-800 text-sm font-bold m-0">
                                            STRICTLY PROHIBITED: Never photograph military personnel, police, border officials, or government buildings.
                                        </p>
                                    </div>
                                    <p className="text-sm mt-4 text-stone-500">Note: Some tribes, like the Maasai, may expect a small tip in exchange for photos.</p>
                                </div>
                            </div>
                        </div>

                        {/* Zanzibar Special Section */}
                        <div className="bg-safari-green text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                                <HandHeart className="w-64 h-64 -mr-16 -mt-16" />
                            </div>
                            <div className="relative z-10">
                                <h2 className="text-3xl font-headline font-bold mb-6">Zanzibar Cultural Notes</h2>
                                <p className="text-white/80 text-lg mb-8 max-w-2xl">
                                    As a predominantly Muslim society, Zanzibar has more conservative customs than mainland Tanzania.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                                        <h3 className="font-bold text-sahara-gold mb-3">Dress Code</h3>
                                        <p className="text-sm text-white/90">Beachwear is for the beach ONLY. Cover shoulders and knees in Stone Town. Women may want to carry a light scarf.</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                                        <h3 className="font-bold text-sahara-gold mb-3">Ramadan</h3>
                                        <p className="text-sm text-white/90">Avoid eating, drinking, or smoking in public during daylight hours. Many restaurants close until evening.</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                                        <h3 className="font-bold text-sahara-gold mb-3">Mosques</h3>
                                        <p className="text-sm text-white/90">Non-Muslims can only enter certain mosques. Women must cover hair and wear long sleeves/pants.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div >
        </MainLayout >
    );
}
