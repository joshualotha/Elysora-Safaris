import { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { ArrowLeft, Calendar, Mail, Phone, Users, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { Textarea } from '@/Components/ui/textarea';
import { Label } from '@/Components/ui/label';

interface Booking {
    id: number;
    reference: string;
    name: string;
    email: string;
    phone: string | null;
    adults: number;
    children: number;
    travel_dates: string;
    message: string | null;
    status: 'pending' | 'confirmed' | 'cancelled';
    admin_notes: string | null;
    safari_package?: {
        title: string;
        price: number;
    };
    created_at: string;
}

interface ShowProps {
    booking: Booking;
}

export default function BookingShow({ booking }: ShowProps) {
    const [status, setStatus] = useState(booking.status);
    const [notes, setNotes] = useState(booking.admin_notes || '');
    const [saving, setSaving] = useState(false);

    const handleUpdate = () => {
        setSaving(true);
        router.patch(route('admin.bookings.updateStatus', booking.id), {
            status,
            admin_notes: notes
        }, {
            onFinish: () => setSaving(false),
            preserveScroll: true
        });
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'confirmed': return 'bg-green-500 text-white';
            case 'cancelled': return 'bg-red-500 text-white';
            default: return 'bg-yellow-500 text-white';
        }
    };

    return (
        <AdminLayout>
            <Head title={`Booking #${booking.reference}`} />

            <div className="max-w-5xl mx-auto">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <Button asChild variant="ghost" className="pl-0 hover:bg-transparent hover:text-sahara-gold">
                            <Link href={route('admin.bookings.index')} className="flex items-center">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Bookings
                            </Link>
                        </Button>
                        <div className="flex items-center gap-3 mt-2">
                            <h1 className="text-3xl font-bold tracking-tight text-charcoal">Booking #{booking.reference}</h1>
                            <Badge className={`${getStatusColor(booking.status)} uppercase`}>
                                {booking.status}
                            </Badge>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Left Column: Booking Details */}
                    <div className="md:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="h-5 w-5 text-sahara-gold" />
                                    Customer Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <Label className="text-stone-500">Full Name</Label>
                                    <div className="font-medium text-lg">{booking.name}</div>
                                </div>
                                <div>
                                    <Label className="text-stone-500">Email Address</Label>
                                    <div className="font-medium flex items-center gap-2">
                                        <Mail className="h-4 w-4 text-muted-foreground" />
                                        <a href={`mailto:${booking.email}`} className="hover:text-sahara-gold transition-colors">{booking.email}</a>
                                    </div>
                                </div>
                                <div>
                                    <Label className="text-stone-500">Phone Number</Label>
                                    <div className="font-medium flex items-center gap-2">
                                        <Phone className="h-4 w-4 text-muted-foreground" />
                                        {booking.phone || 'N/A'}
                                    </div>
                                </div>
                                <div>
                                    <Label className="text-stone-500">Party Size</Label>
                                    <div className="font-medium">
                                        {booking.adults} Adults, {booking.children} Children
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Calendar className="h-5 w-5 text-sahara-gold" />
                                    Trip Details
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                                    <Label className="text-stone-500 mb-1 block">Selected Safari Package</Label>
                                    <div className="text-xl font-bold text-charcoal">
                                        {booking.safari_package?.title || 'Custom / Unknown Package'}
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <Label className="text-stone-500">Travel Date</Label>
                                        <div className="font-medium text-lg">
                                            {new Date(booking.travel_dates).toLocaleDateString(undefined, {
                                                weekday: 'long',
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </div>
                                    </div>
                                    <div>
                                        <Label className="text-stone-500">Booking Date</Label>
                                        <div className="font-medium">
                                            {new Date(booking.created_at).toLocaleString()}
                                        </div>
                                    </div>
                                </div>

                                {booking.message && (
                                    <div className="mt-4">
                                        <Label className="text-stone-500 mb-2 block">Customer Message / Special Requests</Label>
                                        <div className="p-4 bg-stone-50 rounded-lg text-sm italic text-stone-700 leading-relaxed border border-stone-100">
                                            "{booking.message}"
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column: Admin Actions */}
                    <div className="space-y-6">
                        <Card className="border-sahara-gold/20 shadow-md">
                            <CardHeader className="bg-sahara-gold/5 pb-4">
                                <CardTitle className="text-lg">Booking Management</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 space-y-6">
                                <div className="space-y-3">
                                    <Label>Booking Status</Label>
                                    <Select value={status} onValueChange={(val: any) => setStatus(val)}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="pending">
                                                <div className="flex items-center text-yellow-600"><AlertCircle className="w-4 h-4 mr-2" /> Pending</div>
                                            </SelectItem>
                                            <SelectItem value="confirmed">
                                                <div className="flex items-center text-green-600"><CheckCircle className="w-4 h-4 mr-2" /> Confirmed</div>
                                            </SelectItem>
                                            <SelectItem value="cancelled">
                                                <div className="flex items-center text-red-600"><XCircle className="w-4 h-4 mr-2" /> Cancelled</div>
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-3">
                                    <Label>Admin Notes</Label>
                                    <Textarea
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                        placeholder="Internal notes about this booking..."
                                        rows={6}
                                        className="resize-none"
                                    />
                                    <p className="text-xs text-stone-500">These notes are visible only to admins.</p>
                                </div>

                                <Button
                                    onClick={handleUpdate}
                                    disabled={saving}
                                    className="w-full bg-sahara-gold hover:bg-sahara-gold/90 text-white"
                                >
                                    {saving ? 'Saving...' : 'Update Booking'}
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
