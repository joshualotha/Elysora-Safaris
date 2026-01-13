import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { LayoutDashboard, MapPin, Tent, Newspaper, Users, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';

interface DashboardProps {
    stats: {
        safaris: number;
        destinations: number;
        posts: number;
    }
}

export default function Dashboard({ stats }: DashboardProps) {
    return (
        <AdminLayout>
            <Head title="Admin Dashboard" />

            <div className="mb-8">
                <h1 className="text-3xl font-headline font-bold text-charcoal">Dashboard</h1>
                <p className="text-stone-500">Overview of your website content.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="border-t-4 border-t-sahara-gold">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Safaris</CardTitle>
                        <Tent className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.safaris}</div>
                        <p className="text-xs text-muted-foreground">Active packages</p>
                    </CardContent>
                </Card>
                <Card className="border-t-4 border-t-blue-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Destinations</CardTitle>
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.destinations}</div>
                        <p className="text-xs text-muted-foreground">Detailed locations</p>
                    </CardContent>
                </Card>
                <Card className="border-t-4 border-t-green-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
                        <Newspaper className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.posts}</div>
                        <p className="text-xs text-muted-foreground">Published articles</p>
                    </CardContent>
                </Card>
            </div>

            {/* Quick Actions */}
            <h2 className="text-xl font-bold text-charcoal mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <button className="p-4 bg-white border border-stone-200 rounded-xl hover:shadow-md transition-shadow text-left group">
                    <span className="flex items-center gap-2 font-bold text-charcoal mb-2">
                        <Tent className="h-5 w-5 text-sahara-gold" /> Add New Safari
                    </span>
                    <p className="text-sm text-stone-500">Create a new itinerary package.</p>
                </button>
                <button className="p-4 bg-white border border-stone-200 rounded-xl hover:shadow-md transition-shadow text-left group">
                    <span className="flex items-center gap-2 font-bold text-charcoal mb-2">
                        <MapPin className="h-5 w-5 text-blue-500" /> Add Destination
                    </span>
                    <p className="text-sm text-stone-500">Create a new location page.</p>
                </button>
                <button className="p-4 bg-white border border-stone-200 rounded-xl hover:shadow-md transition-shadow text-left group">
                    <span className="flex items-center gap-2 font-bold text-charcoal mb-2">
                        <Newspaper className="h-5 w-5 text-green-500" /> Write Blog Post
                    </span>
                    <p className="text-sm text-stone-500">Publish a new article.</p>
                </button>
            </div>
        </AdminLayout>
    );
}
