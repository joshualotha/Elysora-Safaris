import { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Button } from '@/Components/ui/button';
import { Card, CardContent } from '@/Components/ui/card';
import { Input } from '@/Components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import { Badge } from '@/Components/ui/badge';
import { Eye, Search, Filter } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';

interface Booking {
    id: number;
    reference: string;
    name: string;
    email: string;
    safari_package?: {
        title: string;
    };
    travel_dates: string;
    status: 'pending' | 'confirmed' | 'cancelled';
    total_amount: number;
    created_at: string;
}

interface IndexProps {
    bookings: {
        data: Booking[];
        links: any[];
    };
    filters: {
        status?: string;
        search?: string;
    };
}

export default function BookingIndex({ bookings, filters }: IndexProps) {
    const [search, setSearch] = useState(filters.search || '');
    const [status, setStatus] = useState(filters.status || 'all');

    const handleSearch = () => {
        router.get(route('admin.bookings.index'), { search, status: status === 'all' ? undefined : status }, { preserveState: true });
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'confirmed': return 'bg-green-500 hover:bg-green-600';
            case 'cancelled': return 'bg-red-500 hover:bg-red-600';
            default: return 'bg-yellow-500 hover:bg-yellow-600';
        }
    };

    return (
        <AdminLayout>
            <Head title="Manage Bookings" />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-charcoal">Bookings</h1>
                    <p className="text-muted-foreground mt-1">View and manage customer bookings.</p>
                </div>
            </div>

            <Card className="mb-6">
                <CardContent className="p-4 flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative w-full md:w-1/3">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-stone-500" />
                        <Input
                            placeholder="Search by name or email..."
                            className="pl-9"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        />
                    </div>
                    <div className="w-full md:w-1/4">
                        <Select value={status} onValueChange={(val) => { setStatus(val); router.get(route('admin.bookings.index'), { search, status: val === 'all' ? undefined : val }, { preserveState: true }); }}>
                            <SelectTrigger>
                                <SelectValue placeholder="Filter by status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Statuses</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="confirmed">Confirmed</SelectItem>
                                <SelectItem value="cancelled">Cancelled</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button onClick={handleSearch} variant="secondary">Apply Filters</Button>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Reference</TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead>Safari</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {bookings.data.length > 0 ? (
                                bookings.data.map((booking) => (
                                    <TableRow key={booking.id}>
                                        <TableCell className="font-mono text-xs">{booking.reference}</TableCell>
                                        <TableCell>
                                            <div className="font-medium text-charcoal">{booking.name}</div>
                                            <div className="text-xs text-muted-foreground">{booking.email}</div>
                                        </TableCell>
                                        <TableCell>
                                            {booking.safari_package?.title || 'Unknown Package'}
                                        </TableCell>
                                        <TableCell className="text-sm">
                                            {new Date(booking.travel_dates).toLocaleDateString()}
                                            <div className="text-xs text-muted-foreground">Created: {new Date(booking.created_at).toLocaleDateString()}</div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge className={getStatusColor(booking.status)}>
                                                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button asChild size="sm" variant="ghost">
                                                <Link href={route('admin.bookings.show', booking.id)}>
                                                    <Eye className="h-4 w-4 mr-2" /> Details
                                                </Link>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                                        No bookings found matching your criteria.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </AdminLayout>
    );
}
