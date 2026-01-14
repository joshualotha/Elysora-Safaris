import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { MapPin, Tent, Newspaper, Image, MessageSquare, HelpCircle, Mail, ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';

interface DashboardProps {
    stats: {
        destinations: number;
        safaris: number;
        blog_posts: number;
        gallery_images: number;
        testimonials: number;
        faqs: number;
    };
    recent_contacts: Array<{
        id: number;
        name: string;
        email: string;
        message: string;
        created_at: string;
    }>;
    recent_posts: Array<{
        id: number;
        title: string;
        slug: string;
        created_at: string;
    }>;
    recent_testimonials: Array<{
        id: number;
        author: string;
        comment: string;
        created_at: string;
    }>;
}

export default function Dashboard({ stats, recent_contacts, recent_posts, recent_testimonials }: DashboardProps) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <AdminLayout>
            <Head title="Admin Dashboard" />

            <div className="mb-8">
                <h1 className="text-3xl font-headline font-bold text-charcoal">Dashboard</h1>
                <p className="text-stone-500">Overview of your website content and activity.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="border-t-4 border-t-blue-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Destinations</CardTitle>
                        <MapPin className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.destinations}</div>
                        <p className="text-xs text-muted-foreground">Travel locations</p>
                    </CardContent>
                </Card>

                <Card className="border-t-4 border-t-sahara-gold">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Safari Packages</CardTitle>
                        <Tent className="h-4 w-4 text-sahara-gold" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.safaris}</div>
                        <p className="text-xs text-muted-foreground">Active packages</p>
                    </CardContent>
                </Card>

                <Card className="border-t-4 border-t-green-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
                        <Newspaper className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.blog_posts}</div>
                        <p className="text-xs text-muted-foreground">Published articles</p>
                    </CardContent>
                </Card>

                <Card className="border-t-4 border-t-purple-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Gallery Images</CardTitle>
                        <Image className="h-4 w-4 text-purple-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.gallery_images}</div>
                        <p className="text-xs text-muted-foreground">Photo collection</p>
                    </CardContent>
                </Card>

                <Card className="border-t-4 border-t-orange-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Testimonials</CardTitle>
                        <MessageSquare className="h-4 w-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.testimonials}</div>
                        <p className="text-xs text-muted-foreground">Customer reviews</p>
                    </CardContent>
                </Card>

                <Card className="border-t-4 border-t-teal-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">FAQ Articles</CardTitle>
                        <HelpCircle className="h-4 w-4 text-teal-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.faqs}</div>
                        <p className="text-xs text-muted-foreground">Help resources</p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Recent Contacts */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="flex items-center gap-2">
                                <Mail className="h-5 w-5 text-blue-500" />
                                Recent Contacts
                            </CardTitle>
                            <Link href={route('admin.contacts.index')} className="text-sm text-blue-500 hover:underline flex items-center gap-1">
                                View All <ArrowRight className="h-3 w-3" />
                            </Link>
                        </div>
                    </CardHeader>
                    <CardContent>
                        {recent_contacts.length > 0 ? (
                            <div className="space-y-3">
                                {recent_contacts.map((contact) => (
                                    <div key={contact.id} className="flex items-start gap-3 pb-3 border-b border-stone-100 last:border-0">
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-sm text-charcoal truncate">{contact.name}</p>
                                            <p className="text-xs text-stone-500 truncate">{contact.email}</p>
                                            <p className="text-sm text-stone-600 mt-1 line-clamp-2">{contact.message}</p>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-stone-400 whitespace-nowrap">
                                            <Clock className="h-3 w-3" />
                                            {formatDate(contact.created_at)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-stone-500 text-center py-8">No contact submissions yet.</p>
                        )}
                    </CardContent>
                </Card>

                {/* Recent Posts & Testimonials */}
                <div className="space-y-6">
                    {/* Recent Blog Posts */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="flex items-center gap-2">
                                    <Newspaper className="h-5 w-5 text-green-500" />
                                    Recent Blog Posts
                                </CardTitle>
                                <Link href={route('admin.blog.index')} className="text-sm text-green-500 hover:underline flex items-center gap-1">
                                    View All <ArrowRight className="h-3 w-3" />
                                </Link>
                            </div>
                        </CardHeader>
                        <CardContent>
                            {recent_posts.length > 0 ? (
                                <div className="space-y-2">
                                    {recent_posts.map((post) => (
                                        <Link
                                            key={post.id}
                                            href={route('admin.blog.edit', post.id)}
                                            className="flex items-center justify-between p-2 rounded hover:bg-stone-50 transition-colors"
                                        >
                                            <span className="text-sm text-charcoal truncate flex-1">{post.title}</span>
                                            <span className="text-xs text-stone-400 whitespace-nowrap ml-2">{formatDate(post.created_at)}</span>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-sm text-stone-500 text-center py-4">No blog posts yet.</p>
                            )}
                        </CardContent>
                    </Card>

                    {/* Recent Testimonials */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="flex items-center gap-2">
                                    <MessageSquare className="h-5 w-5 text-orange-500" />
                                    Recent Testimonials
                                </CardTitle>
                                <Link href={route('admin.testimonials.index')} className="text-sm text-orange-500 hover:underline flex items-center gap-1">
                                    View All <ArrowRight className="h-3 w-3" />
                                </Link>
                            </div>
                        </CardHeader>
                        <CardContent>
                            {recent_testimonials.length > 0 ? (
                                <div className="space-y-3">
                                    {recent_testimonials.map((testimonial) => (
                                        <div key={testimonial.id} className="pb-3 border-b border-stone-100 last:border-0">
                                            <p className="text-xs font-medium text-charcoal mb-1">{testimonial.author}</p>
                                            <p className="text-sm text-stone-600 line-clamp-2">{testimonial.comment}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-sm text-stone-500 text-center py-4">No testimonials yet.</p>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Quick Actions */}
            <h2 className="text-xl font-bold text-charcoal mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href={route('admin.safaris.create')} className="p-4 bg-white border border-stone-200 rounded-xl hover:shadow-md transition-shadow text-left group">
                    <span className="flex items-center gap-2 font-bold text-charcoal mb-2">
                        <Tent className="h-5 w-5 text-sahara-gold" /> Add New Safari
                    </span>
                    <p className="text-sm text-stone-500">Create a new safari package.</p>
                </Link>
                <Link href={route('admin.destinations.create')} className="p-4 bg-white border border-stone-200 rounded-xl hover:shadow-md transition-shadow text-left group">
                    <span className="flex items-center gap-2 font-bold text-charcoal mb-2">
                        <MapPin className="h-5 w-5 text-blue-500" /> Add Destination
                    </span>
                    <p className="text-sm text-stone-500">Create a new location page.</p>
                </Link>
                <Link href={route('admin.blog.create')} className="p-4 bg-white border border-stone-200 rounded-xl hover:shadow-md transition-shadow text-left group">
                    <span className="flex items-center gap-2 font-bold text-charcoal mb-2">
                        <Newspaper className="h-5 w-5 text-green-500" /> Write Blog Post
                    </span>
                    <p className="text-sm text-stone-500">Publish a new article.</p>
                </Link>
                <Link href={route('admin.gallery.create')} className="p-4 bg-white border border-stone-200 rounded-xl hover:shadow-md transition-shadow text-left group">
                    <span className="flex items-center gap-2 font-bold text-charcoal mb-2">
                        <Image className="h-5 w-5 text-purple-500" /> Upload Images
                    </span>
                    <p className="text-sm text-stone-500">Add photos to gallery.</p>
                </Link>
            </div>
        </AdminLayout>
    );
}
