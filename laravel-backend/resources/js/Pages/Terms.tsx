import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Terms() {
    return (
        <MainLayout title="Terms & Conditions - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl prose prose-lg">
                        <h1 className="text-5xl font-headline font-bold text-charcoal mb-8">Terms & Conditions</h1>
                        <p className="text-stone-gray mb-6">Last updated: January 2024</p>

                        <h2>Booking Terms</h2>
                        <p>A 30% deposit is required to confirm your booking. The remaining balance is due 60 days before your safari departure date.</p>

                        <h2>Cancellation Policy</h2>
                        <p>Cancellations made more than 60 days before departure: Full refund minus 10% administration fee. Cancellations made 30-60 days before departure: 50% refund. Cancellations made less than 30 days before departure: No refund.</p>

                        <h2>Travel Insurance</h2>
                        <p>We strongly recommend purchasing comprehensive travel insurance that covers trip cancellation, medical emergencies, and evacuation.</p>

                        <h2>Health & Safety</h2>
                        <p>Participants must be in good health and physically able to participate in safari activities. Certain vaccinations may be required.</p>

                        <h2>Contact</h2>
                        <p>For questions about these terms, contact us at legal@elysorasafaris.com</p>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
