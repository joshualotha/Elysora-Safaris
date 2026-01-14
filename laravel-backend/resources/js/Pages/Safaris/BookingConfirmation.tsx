import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Button } from '@/Components/ui/button';
import { CheckCircle, Calendar, Users, Hotel, Mail, Phone } from 'lucide-react';

interface BookingConfirmationProps {
    booking: {
        id: number;
        safari_package: {
            name: string;
            slug: string;
        };
        travel_date: string;
        number_of_travelers: number;
        number_of_children: number;
        accommodation_type: string;
        add_ons: string[];
        name: string;
        email: string;
        phone: string;
    };
}

export default function BookingConfirmation({ booking }: BookingConfirmationProps) {
    return (
        <MainLayout title="Booking Confirmed">
            <div className="min-h-screen bg-ivory py-16">
                <div className="container mx-auto px-4 md:px-6 max-w-2xl">
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm text-center">
                        <div className="flex justify-center mb-6">
                            <CheckCircle className="h-20 w-20 text-safari-green" />
                        </div>

                        <h1 className="text-3xl md:text-4xl font-headline font-bold text-charcoal mb-4">
                            Booking Request Received!
                        </h1>

                        <p className="text-lg text-stone-gray mb-8">
                            Thank you for choosing Elysora Safaris. We've received your booking request and will get back to you within 24 hours.
                        </p>

                        <div className="bg-ivory p-6 rounded-xl mb-8 text-left">
                            <h2 className="font-bold text-lg text-charcoal mb-4">Booking Details</h2>

                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <Calendar className="h-5 w-5 text-sahara-gold mt-0.5" />
                                    <div>
                                        <p className="text-sm text-stone-gray">Safari Package</p>
                                        <p className="font-semibold text-charcoal">{booking.safari_package.name}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Calendar className="h-5 w-5 text-sahara-gold mt-0.5" />
                                    <div>
                                        <p className="text-sm text-stone-gray">Travel Date</p>
                                        <p className="font-semibold text-charcoal">{booking.travel_date}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Users className="h-5 w-5 text-sahara-gold mt-0.5" />
                                    <div>
                                        <p className="text-sm text-stone-gray">Travelers</p>
                                        <p className="font-semibold text-charcoal">
                                            {booking.number_of_travelers} Adults
                                            {booking.number_of_children > 0 && `, ${booking.number_of_children} Children`}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Hotel className="h-5 w-5 text-sahara-gold mt-0.5" />
                                    <div>
                                        <p className="text-sm text-stone-gray">Accommodation</p>
                                        <p className="font-semibold text-charcoal capitalize">{booking.accommodation_type}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-safari-green/10 p-6 rounded-xl mb-8">
                            <h3 className="font-bold text-charcoal mb-2">What happens next?</h3>
                            <p className="text-sm text-stone-gray">
                                Our safari experts will review your request and send you a detailed quote along with availability confirmation to <strong>{booking.email}</strong>.
                                If you have any questions in the meantime, feel free to contact us at <strong>{booking.phone}</strong>.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild className="bg-sahara-gold text-charcoal hover:bg-charcoal hover:text-white">
                                <Link href={route('home')}>Back to Home</Link>
                            </Button>
                            <Button asChild variant="outline">
                                <Link href={route('safaris.index')}>Explore More Safaris</Link>
                            </Button>
                        </div>

                        <div className="mt-8 pt-8 border-t">
                            <p className="text-sm text-stone-gray">
                                Booking Reference: <span className="font-mono font-bold text-charcoal">#{booking.id.toString().padStart(6, '0')}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
