import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function PrivateSafari() {
    return (
        <MainLayout title="Private Safaris - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl prose prose-lg">
                        <h1 className="text-5xl font-headline font-bold text-charcoal mb-8">Private Safari Experiences</h1>

                        <p className="lead">Enjoy the ultimate flexibility and privacy with a custom safari designed exclusively for you and your travel companions.</p>

                        <h2>Why Choose Private?</h2>
                        <ul>
                            <li>Complete flexibility with itinerary and schedule</li>
                            <li>Private vehicle and dedicated guide</li>
                            <li>Depart any day that suits you</li>
                            <li>Customize activities and accommodation</li>
                            <li>Perfect for families, couples, or special occasions</li>
                            <li>Photography-focused options available</li>
                        </ul>

                        <h2>Ideal For</h2>
                        <p>Honeymooners seeking romance, families with children, photographers wanting flexibility, or anyone desiring exclusive experiences without other travelers.</p>

                        <h2>Customization Options</h2>
                        <p>Choose your accommodation level, activity pace, special experiences (walking safaris, cultural visits, hot air balloons), and dietary preferences. We tailor everything to your interests.</p>

                        <h2>Pricing</h2>
                        <p>Private safaris start from $300 per person per day (based on 4 people) to $1,500+ for ultra-luxury options. Price varies by group size and accommodation choice.</p>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
