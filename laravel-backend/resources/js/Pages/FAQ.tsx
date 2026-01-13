import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/Components/ui/accordion';

export default function FAQ({ faqs }: { faqs: Record<string, any[]> }) {
    return (
        <MainLayout title="FAQ - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                {/* Hero */}
                <section className="relative py-32 md:py-40 bg-gradient-to-br from-charcoal to-safari-green">
                    <div className="relative container mx-auto px-4 md:px-6 text-center text-white">
                        <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
                            Everything you need to know about planning your safari
                        </p>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        {Object.entries(faqs).map(([category, questions]) => (
                            <div key={category} className="mb-12">
                                <h2 className="text-3xl font-headline font-bold text-charcoal mb-6">{category}</h2>
                                <Accordion type="single" collapsible className="space-y-4">
                                    {questions.map((faq: any, index: number) => (
                                        <AccordionItem
                                            key={index}
                                            value={`${category}-${index}`}
                                            className="bg-ivory rounded-lg px-6 border-none"
                                        >
                                            <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-sahara-gold">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-stone-gray leading-relaxed">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
