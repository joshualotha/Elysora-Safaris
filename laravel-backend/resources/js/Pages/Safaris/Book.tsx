import { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Textarea } from '@/Components/ui/textarea';
import { ArrowLeft, ArrowRight, Check, Calendar, Users, Hotel, Sparkles, User } from 'lucide-react';

interface BookProps {
    safari: any;
    addOns: Array<{
        id: number;
        name: string;
        description: string;
        price: number;
    }>;
}

const ACCOMMODATION_TIERS = [
    { id: 'budget', name: 'Budget', description: 'Basic camping & guesthouses', priceModifier: 0 },
    { id: 'standard', name: 'Standard', description: 'Mid-range lodges', priceModifier: 500 },
    { id: 'luxury', name: 'Luxury', description: 'Premium lodges & tented camps', priceModifier: 1200 },
];

export default function Book({ safari, addOns }: BookProps) {
    const [currentStep, setCurrentStep] = useState(1);
    const { data, setData, post, processing, errors } = useForm({
        safari_package_id: safari.id,
        travel_date: '',
        number_of_travelers: 2,
        number_of_children: 0,
        accommodation_type: 'standard',
        add_ons: [] as number[],
        name: '',
        email: '',
        phone: '',
        country: '',
        special_requests: '',
    });

    const totalSteps = 4;

    const nextStep = () => {
        if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('bookings.store'));
    };

    const toggleAddon = (addonId: number) => {
        if (data.add_ons.includes(addonId)) {
            setData('add_ons', data.add_ons.filter(id => id !== addonId));
        } else {
            setData('add_ons', [...data.add_ons, addonId]);
        }
    };

    const calculateTotal = () => {
        let total = safari.price * data.number_of_travelers;
        const tier = ACCOMMODATION_TIERS.find(t => t.id === data.accommodation_type);
        if (tier) total += tier.priceModifier * data.number_of_travelers;

        data.add_ons.forEach(addonId => {
            const addon = addOns.find(a => a.id === addonId);
            if (addon) total += addon.price * data.number_of_travelers;
        });

        return total;
    };

    return (
        <MainLayout title={`Book ${safari.name}`}>
            <div className="min-h-screen bg-ivory py-12">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Header */}
                    <div className="mb-8">
                        <Link href={route('safaris.show', safari.slug)} className="inline-flex items-center text-sahara-gold hover:text-charcoal mb-4">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Safari
                        </Link>
                        <h1 className="text-3xl md:text-4xl font-headline font-bold text-charcoal">Book {safari.name}</h1>
                        <p className="text-stone-gray mt-2">{safari.duration} Days • From ${safari.price.toLocaleString()}/person</p>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between max-w-2xl mx-auto">
                            {[1, 2, 3, 4].map((step) => (
                                <div key={step} className="flex items-center flex-1">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step <= currentStep ? 'bg-sahara-gold text-white' : 'bg-gray-300 text-gray-600'
                                        }`}>
                                        {step < currentStep ? <Check className="h-5 w-5" /> : step}
                                    </div>
                                    {step < 4 && (
                                        <div className={`flex-1 h-1 mx-2 ${step < currentStep ? 'bg-sahara-gold' : 'bg-gray-300'
                                            }`} />
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between max-w-2xl mx-auto mt-2 text-xs text-stone-gray">
                            <span>Travel Details</span>
                            <span>Accommodation</span>
                            <span>Add-ons</span>
                            <span>Review</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                        <div className="bg-white rounded-2xl p-8 shadow-sm">
                            {/* Step 1: Travel Details */}
                            {currentStep === 1 && (
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Calendar className="h-6 w-6 text-sahara-gold" />
                                        <h2 className="text-2xl font-headline font-bold text-charcoal">Travel Details</h2>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="travel_date">Preferred Travel Date</Label>
                                        <Input
                                            id="travel_date"
                                            type="date"
                                            value={data.travel_date}
                                            onChange={e => setData('travel_date', e.target.value)}
                                            min={new Date().toISOString().split('T')[0]}
                                            required
                                        />
                                        {errors.travel_date && <p className="text-red-500 text-sm">{errors.travel_date}</p>}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="travelers">Number of Adults</Label>
                                            <Input
                                                id="travelers"
                                                type="number"
                                                min="1"
                                                value={data.number_of_travelers}
                                                onChange={e => setData('number_of_travelers', parseInt(e.target.value))}
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="children">Number of Children</Label>
                                            <Input
                                                id="children"
                                                type="number"
                                                min="0"
                                                value={data.number_of_children}
                                                onChange={e => setData('number_of_children', parseInt(e.target.value))}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Accommodation */}
                            {currentStep === 2 && (
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Hotel className="h-6 w-6 text-sahara-gold" />
                                        <h2 className="text-2xl font-headline font-bold text-charcoal">Choose Accommodation</h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {ACCOMMODATION_TIERS.map((tier) => (
                                            <button
                                                key={tier.id}
                                                type="button"
                                                onClick={() => setData('accommodation_type', tier.id)}
                                                className={`p-6 rounded-xl border-2 transition-all ${data.accommodation_type === tier.id
                                                    ? 'border-sahara-gold bg-sahara-gold/5'
                                                    : 'border-gray-200 hover:border-sahara-gold/50'
                                                    }`}
                                            >
                                                <h3 className="font-bold text-lg text-charcoal mb-2">{tier.name}</h3>
                                                <p className="text-sm text-stone-gray mb-3">{tier.description}</p>
                                                <p className="text-sahara-gold font-bold">
                                                    {tier.priceModifier === 0 ? 'Included' : `+$${tier.priceModifier}/person`}
                                                </p>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Add-ons */}
                            {currentStep === 3 && (
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Sparkles className="h-6 w-6 text-sahara-gold" />
                                        <h2 className="text-2xl font-headline font-bold text-charcoal">Optional Add-ons</h2>
                                    </div>

                                    <div className="space-y-4">
                                        {addOns.map((addon) => (
                                            <label
                                                key={addon.id}
                                                className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${data.add_ons.includes(addon.id)
                                                    ? 'border-sahara-gold bg-sahara-gold/5'
                                                    : 'border-gray-200 hover:border-sahara-gold/50'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <input
                                                        type="checkbox"
                                                        checked={data.add_ons.includes(addon.id)}
                                                        onChange={() => toggleAddon(addon.id)}
                                                        className="w-5 h-5 text-sahara-gold rounded"
                                                    />
                                                    <div>
                                                        <p className="font-semibold text-charcoal">{addon.name}</p>
                                                        {addon.description && (
                                                            <p className="text-sm text-stone-gray mt-1">{addon.description}</p>
                                                        )}
                                                    </div>
                                                </div>
                                                <p className="text-sahara-gold font-bold">+${addon.price}/person</p>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Step 4: Contact & Review */}
                            {currentStep === 4 && (
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <User className="h-6 w-6 text-sahara-gold" />
                                        <h2 className="text-2xl font-headline font-bold text-charcoal">Contact & Review</h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name</Label>
                                            <Input
                                                id="name"
                                                value={data.name}
                                                onChange={e => setData('name', e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={data.email}
                                                onChange={e => setData('email', e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone</Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                value={data.phone}
                                                onChange={e => setData('phone', e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="country">Country</Label>
                                            <Input
                                                id="country"
                                                value={data.country}
                                                onChange={e => setData('country', e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="special_requests">Special Requests (Optional)</Label>
                                        <Textarea
                                            id="special_requests"
                                            rows={4}
                                            value={data.special_requests}
                                            onChange={e => setData('special_requests', e.target.value)}
                                            placeholder="Dietary requirements, accessibility needs, special occasions..."
                                        />
                                    </div>

                                    {/* Booking Summary */}
                                    <div className="bg-ivory p-6 rounded-xl mt-8">
                                        <h3 className="font-bold text-lg text-charcoal mb-4">Booking Summary</h3>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-stone-gray">Safari Package</span>
                                                <span className="font-semibold">{safari.name}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-stone-gray">Travel Date</span>
                                                <span className="font-semibold">{data.travel_date}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-stone-gray">Travelers</span>
                                                <span className="font-semibold">{data.number_of_travelers} Adults{data.number_of_children > 0 && `, ${data.number_of_children} Children`}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-stone-gray">Accommodation</span>
                                                <span className="font-semibold capitalize">{data.accommodation_type}</span>
                                            </div>
                                            {data.add_ons.length > 0 && (
                                                <div className="flex justify-between">
                                                    <span className="text-stone-gray">Add-ons</span>
                                                    <span className="font-semibold">{data.add_ons.length} selected</span>
                                                </div>
                                            )}
                                            <div className="border-t border-gray-300 pt-3 mt-3 flex justify-between text-lg">
                                                <span className="font-bold text-charcoal">Estimated Total</span>
                                                <span className="font-bold text-sahara-gold">${calculateTotal().toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="flex justify-between mt-8 pt-6 border-t">
                                {currentStep > 1 && (
                                    <Button type="button" variant="outline" onClick={prevStep}>
                                        <ArrowLeft className="h-4 w-4 mr-2" />
                                        Previous
                                    </Button>
                                )}

                                <div className="ml-auto">
                                    {currentStep < totalSteps ? (
                                        <Button type="button" onClick={nextStep} className="bg-sahara-gold text-charcoal hover:bg-charcoal hover:text-white">
                                            Next
                                            <ArrowRight className="h-4 w-4 ml-2" />
                                        </Button>
                                    ) : (
                                        <Button type="submit" disabled={processing} className="bg-safari-green text-white hover:bg-safari-green/90">
                                            {processing ? 'Submitting...' : 'Submit Booking Request'}
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
}
