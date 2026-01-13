import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Terms() {
    return (
        <MainLayout title="Terms & Conditions - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl prose prose-stone lg:prose-lg">
                        <h1 className="text-4xl md:text-5xl font-headline font-bold text-charcoal mb-8">Terms & Conditions</h1>
                        <p className="text-stone-500 mb-8 italic">Last updated: January 14, 2026</p>

                        <div className="space-y-12 text-stone-700">
                            <p className="lead border-l-4 border-sahara-gold pl-4 italic">
                                By making a booking with Elysora Safaris, you acknowledge that you have read, understood, and agreed to these Terms and Conditions in their entirety. These terms constitute the entire agreement between Elysora Safaris and the client.
                            </p>

                            <section>
                                <h2 className="text-2xl font-bold text-charcoal mb-4">1. Booking Terms</h2>
                                <h3 className="text-xl font-semibold text-charcoal mt-4 mb-2">1.1 Booking Process</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>All bookings must be made through our official website, email, or authorized agents.</li>
                                    <li>A booking is considered confirmed only after receiving a deposit and issuing a booking confirmation.</li>
                                    <li>Clients must provide accurate personal information and passport details for all travelers.</li>
                                    <li>Special requests (dietary, medical, etc.) must be communicated at the time of booking.</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-2">1.2 Payment Terms</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>A non-refundable deposit of 30% is required to confirm your booking.</li>
                                    <li>Full payment is due 60 days prior to departure for scheduled tours, 90 days for peak season (July-October).</li>
                                    <li>Bookings made within 60 days of departure require full payment immediately.</li>
                                    <li>We accept bank transfers, credit cards (Visa/Mastercard), and PayPal (3% processing fee applies).</li>
                                </ul>
                                <p className="mt-4 font-semibold text-red-600">Important: Failure to make payments by the due dates may result in automatic cancellation of your booking and forfeiture of any deposits paid.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-charcoal mb-4">2. Cancellation Policy</h2>
                                <h3 className="text-xl font-semibold text-charcoal mt-4 mb-2">2.1 Client Cancellations</h3>
                                <p>All cancellation notices must be received in writing. The following cancellation fees apply:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-2">
                                    <li><strong>More than 60 days prior to departure:</strong> Loss of deposit (30%).</li>
                                    <li><strong>60 - 31 days prior to departure:</strong> 50% of total tour cost.</li>
                                    <li><strong>30 days or less prior to departure:</strong> 100% of total tour cost.</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-2">2.2 Our Cancellations</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>We reserve the right to cancel tours due to insufficient bookings, with a full refund or alternative dates offered.</li>
                                    <li>In cases of force majeure (natural disasters, political unrest, etc.), we will offer alternative arrangements or credit vouchers.</li>
                                    <li>No refunds will be given for unused services due to late arrival or early departure.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-charcoal mb-4">3. Travel Documents & Health</h2>
                                <h3 className="text-xl font-semibold text-charcoal mt-4 mb-2">3.1 Travel Documents</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Clients are responsible for ensuring they have valid passports (minimum 6 months validity), visas, and required vaccinations.</li>
                                    <li>We provide visa assistance but cannot be held responsible for visa denials or delays.</li>
                                    <li>Travel insurance covering medical expenses and evacuation is mandatory for all clients.</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-2">3.2 Health Requirements</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Yellow fever vaccination is required for entry into Tanzania from certain countries.</li>
                                    <li>Malaria prophylaxis is strongly recommended for all travelers.</li>
                                    <li>Clients with pre-existing medical conditions must inform us at the time of booking.</li>
                                </ul>
                                <p className="mt-2 text-sm italic">Note: Elysora Safaris is not liable for any health issues arising during travel. Clients should consult their physician before traveling.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-charcoal mb-4">4. Changes to Bookings</h2>
                                <h3 className="text-xl font-semibold text-charcoal mt-4 mb-2">4.1 Client-Requested Changes</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Date changes requested more than 60 days before departure may be accommodated subject to availability.</li>
                                    <li>Name changes are permitted up to 30 days before departure with a $100 administration fee.</li>
                                    <li>Changes to itinerary or accommodation may incur additional costs and administration fees.</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-2">4.2 Operator-Initiated Changes</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>We reserve the right to modify itineraries due to weather, road conditions, or other operational requirements.</li>
                                    <li>Alternative accommodation of equal standard will be provided if original properties become unavailable.</li>
                                    <li>Significant changes will be communicated immediately with options offered.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-charcoal mb-4">5. Responsibilities & Liabilities</h2>
                                <h3 className="text-xl font-semibold text-charcoal mt-4 mb-2">5.1 Our Responsibilities</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>We provide services as described in confirmed itineraries using reputable suppliers.</li>
                                    <li>We maintain appropriate insurance for vehicles and operations.</li>
                                    <li>Our guides are trained in first aid and emergency procedures.</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-2">5.2 Client Responsibilities</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Clients must follow guide instructions and safety protocols during activities.</li>
                                    <li>Clients are responsible for their personal belongings at all times.</li>
                                    <li>Any damage to property caused by clients will be charged accordingly.</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-2">5.3 Limitations of Liability</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>We are not liable for events beyond our control including flight delays, natural disasters, or political unrest.</li>
                                    <li>Our liability for any claim is limited to the amount paid for the affected service.</li>
                                    <li>We are not responsible for third-party services (flights, hotels not booked through us).</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-charcoal mb-4">6. Safari Operations</h2>
                                <h3 className="text-xl font-semibold text-charcoal mt-4 mb-2">6.1 General Safari Conditions</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Game viewing success cannot be guaranteed as we operate in natural environments.</li>
                                    <li>Park fees are subject to change by Tanzanian authorities without notice.</li>
                                    <li>Children under 5 are generally not permitted on game drives (exceptions may apply).</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-2">6.2 Vehicle Use</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Our 4x4 vehicles are maintained to high standards but may experience mechanical issues in remote areas.</li>
                                    <li>Clients must wear seatbelts when vehicles are in motion.</li>
                                    <li>Smoking is prohibited in all safari vehicles.</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-2">6.3 Accommodation Standards</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Lodges and camps in remote areas may have limited electricity and internet access.</li>
                                    <li>Room allocations (twin/double) are subject to availability at time of check-in.</li>
                                    <li>Special room requests will be communicated but cannot be guaranteed.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-charcoal mb-4">7. Complaints & Disputes</h2>
                                <h3 className="text-xl font-semibold text-charcoal mt-4 mb-2">7.1 Complaint Procedure</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Any issues during your safari should be reported immediately to your guide or our office.</li>
                                    <li>Unresolved complaints should be submitted in writing within 30 days of trip completion.</li>
                                    <li>We will acknowledge complaints within 7 days and aim to resolve within 30 days.</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-2">7.2 Dispute Resolution</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>We prefer to resolve disputes through negotiation and mediation.</li>
                                    <li>Any legal claims must be filed in Tanzanian courts under Tanzanian law.</li>
                                    <li>The maximum liability for any claim is limited to the cost of the disputed service.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-charcoal mb-4">8. General Provisions</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-semibold text-charcoal mb-2">8.1 Pricing</h3>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Prices are subject to change due to currency fluctuations, tax changes, or park fee adjustments.</li>
                                            <li>Once full payment is received, your price is guaranteed except for government-imposed changes.</li>
                                            <li>All prices are in USD unless otherwise specified.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-charcoal mb-2">8.2 Force Majeure</h3>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>We are not liable for failure to perform due to events beyond our control including natural disasters, war, or pandemics.</li>
                                            <li>In such cases, we will offer alternative arrangements or credit vouchers valid for 24 months.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-charcoal mb-2">8.3 Privacy Policy</h3>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Personal information is collected solely for booking purposes and will not be shared with third parties without consent.</li>
                                            <li>We may use trip photos for promotional purposes unless clients specifically opt out.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-charcoal mb-2">8.4 Governing Law</h3>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>These terms are governed by Tanzanian law.</li>
                                            <li>The English language version of these terms takes precedence over any translations.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-charcoal mb-4">Contact Us</h2>
                                <p>For any questions regarding these Terms & Conditions, please contact us at:</p>
                                <div className="mt-4 bg-stone-50 p-6 rounded-lg border border-stone-100">
                                    <p className="font-bold text-charcoal">Elysora Safaris</p>
                                    <p>Sokoine Road, Arusha, Tanzania</p>
                                    <p>Phone: +255 754 000 000</p>
                                    <p>Email: <a href="mailto:info@elysora.com" className="text-sahara-gold hover:underline">info@elysora.com</a></p>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
