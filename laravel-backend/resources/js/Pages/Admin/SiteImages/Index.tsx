import { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Button } from '@/Components/ui/button';
import { Card, CardContent } from '@/Components/ui/card';
import { Plus, Pencil, Trash, ImageIcon, ChevronDown, ChevronRight, Filter, Search } from 'lucide-react';
import { Badge } from '@/Components/ui/badge';
import { Input } from '@/Components/ui/input';

interface SiteImage {
    id: number;
    key: string;
    page: string;
    section: string;
    title: string;
    description: string | null;
    image_path: string;
    alt_text: string | null;
    is_active: boolean;
    display_order: number;
}

interface SiteImageIndexProps {
    groupedImages: Record<string, SiteImage[]>;
}

const PAGE_CATEGORIES = {
    'Services': ['services_cultural', 'services_luxury', 'services_group', 'services_tailor_made', 'services_mountain', 'services_zanzibar'],
    'Planning': ['planning_safari_guide', 'planning_camping', 'planning_accommodation', 'planning_practical', 'planning_visa', 'planning_health', 'planning_money', 'planning_packing', 'planning_culture', 'planning_connectivity'],
    'Navigation': ['navigation'],
    'Main Pages': ['home', 'about', 'contact', 'conservation'],
    'Listings': ['destinations', 'safaris', 'gallery', 'blog'],
};

export default function SiteImageIndex({ groupedImages }: SiteImageIndexProps) {
    const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
        'Services': true,
        'Planning': false,
        'Navigation': false,
        'Main Pages': false,
        'Listings': false,
    });
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState<string>('all');

    const toggleCategory = (category: string) => {
        setExpandedCategories(prev => ({ ...prev, [category]: !prev[category] }));
    };

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this image?')) {
            router.delete(route('admin.site-images.destroy', id), {
                preserveScroll: true,
            });
        }
    };

    const filterImages = (images: SiteImage[]) => {
        return images.filter(image => {
            const matchesSearch = searchTerm === '' ||
                image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                image.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
                image.section.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesFilter = activeFilter === 'all' ||
                (activeFilter === 'active' && image.is_active) ||
                (activeFilter === 'inactive' && !image.is_active);

            return matchesSearch && matchesFilter;
        });
    };

    const getCategoryPages = (category: string) => {
        return PAGE_CATEGORIES[category as keyof typeof PAGE_CATEGORIES] || [];
    };

    const getCategoryImageCount = (category: string) => {
        const pages = getCategoryPages(category);
        return pages.reduce((count, page) => {
            const images = groupedImages[page] || [];
            return count + filterImages(images).length;
        }, 0);
    };

    const totalImages = Object.values(groupedImages).flat().length;
    const filteredTotalImages = Object.values(groupedImages).flat().filter(img => {
        const matchesSearch = searchTerm === '' ||
            img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            img.key.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = activeFilter === 'all' ||
            (activeFilter === 'active' && img.is_active) ||
            (activeFilter === 'inactive' && !img.is_active);
        return matchesSearch && matchesFilter;
    }).length;

    return (
        <AdminLayout>
            <Head title="Site Images Management" />

            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-charcoal">Site Images</h1>
                    <p className="text-muted-foreground mt-1">
                        Manage static images across the website. {totalImages} total images.
                    </p>
                </div>
                <Button asChild className="bg-sahara-gold hover:bg-sahara-gold/90 text-white">
                    <Link href={route('admin.site-images.create')}>
                        <Plus className="mr-2 h-4 w-4" /> Add Image
                    </Link>
                </Button>
            </div>

            {/* Filters & Search */}
            <div className="bg-white rounded-lg border border-stone-200 p-4 mb-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                    <Button
                        variant={activeFilter === 'all' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setActiveFilter('all')}
                        className={activeFilter === 'all' ? 'bg-charcoal' : ''}
                    >
                        All <Badge variant="secondary" className="ml-2">{totalImages}</Badge>
                    </Button>
                    <Button
                        variant={activeFilter === 'active' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setActiveFilter('active')}
                        className={activeFilter === 'active' ? 'bg-green-600 hover:bg-green-700' : ''}
                    >
                        Active
                    </Button>
                    <Button
                        variant={activeFilter === 'inactive' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setActiveFilter('inactive')}
                        className={activeFilter === 'inactive' ? 'bg-gray-600 hover:bg-gray-700' : ''}
                    >
                        Inactive
                    </Button>
                </div>
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
                    <Input
                        type="text"
                        placeholder="Search by title, key, or section..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                    />
                </div>
            </div>

            {filteredTotalImages > 0 && filteredTotalImages !== totalImages && (
                <div className="mb-4 text-sm text-muted-foreground">
                    Showing {filteredTotalImages} of {totalImages} images
                </div>
            )}

            {/* Categorized Image Groups */}
            <div className="space-y-6">
                {Object.entries(PAGE_CATEGORIES).map(([category, pages]) => {
                    const categoryCount = getCategoryImageCount(category);
                    if (categoryCount === 0) return null;

                    return (
                        <div key={category} className="bg-white rounded-lg border border-stone-200 overflow-hidden">
                            {/* Category Header */}
                            <button
                                onClick={() => toggleCategory(category)}
                                className="w-full flex items-center justify-between p-4 hover:bg-stone-50 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    {expandedCategories[category] ? (
                                        <ChevronDown className="h-5 w-5 text-charcoal" />
                                    ) : (
                                        <ChevronRight className="h-5 w-5 text-charcoal" />
                                    )}
                                    <h2 className="text-xl font-bold text-charcoal">{category}</h2>
                                    <Badge variant="outline">{categoryCount} images</Badge>
                                </div>
                            </button>

                            {/* Category Content */}
                            {expandedCategories[category] && (
                                <div className="p-6 border-t border-stone-100 space-y-6">
                                    {pages.map((page) => {
                                        const pageImages = groupedImages[page] || [];
                                        const filteredPageImages = filterImages(pageImages);

                                        if (filteredPageImages.length === 0) return null;

                                        return (
                                            <div key={page} className="space-y-3">
                                                <div className="flex items-center gap-2 border-l-4 border-sahara-gold pl-3">
                                                    <h3 className="text-lg font-semibold capitalize text-charcoal">
                                                        {page.replace(/_/g, ' ')}
                                                    </h3>
                                                    <Badge variant="secondary" className="text-xs">
                                                        {filteredPageImages.length}
                                                    </Badge>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                                    {filteredPageImages.map((image) => (
                                                        <Card key={image.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-stone-100">
                                                            <div className="aspect-video relative bg-stone-100">
                                                                {image.image_path ? (
                                                                    <img
                                                                        src={`/storage/${image.image_path}`}
                                                                        alt={image.alt_text || image.title}
                                                                        className="w-full h-full object-cover"
                                                                        onError={(e) => { e.currentTarget.src = '/images/placeholder.jpg'; }}
                                                                    />
                                                                ) : (
                                                                    <div className="w-full h-full flex items-center justify-center text-stone-300">
                                                                        <ImageIcon className="h-10 w-10" />
                                                                    </div>
                                                                )}
                                                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                                                    <Button asChild size="sm" variant="secondary" className="bg-white/90 hover:bg-white text-charcoal">
                                                                        <Link href={route('admin.site-images.edit', image.id)}>
                                                                            <Pencil className="h-4 w-4 mr-1" /> Edit
                                                                        </Link>
                                                                    </Button>
                                                                    <Button
                                                                        size="sm"
                                                                        variant="destructive"
                                                                        onClick={() => handleDelete(image.id)}
                                                                        className="bg-red-500/90 hover:bg-red-600"
                                                                    >
                                                                        <Trash className="h-4 w-4" />
                                                                    </Button>
                                                                </div>
                                                                <div className="absolute top-2 right-2">
                                                                    <Badge variant={image.is_active ? 'default' : 'secondary'} className={image.is_active ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400'}>
                                                                        {image.is_active ? 'Active' : 'Inactive'}
                                                                    </Badge>
                                                                </div>
                                                            </div>
                                                            <CardContent className="p-3">
                                                                <h4 className="font-bold text-sm text-charcoal truncate mb-1" title={image.title}>
                                                                    {image.title}
                                                                </h4>
                                                                <div className="text-xs text-muted-foreground bg-stone-50 px-2 py-1 rounded inline-block mb-2">
                                                                    <span className="font-mono">{image.key}</span>
                                                                </div>
                                                                <div className="flex justify-between items-center text-xs text-muted-foreground">
                                                                    <span className="capitalize">{image.section}</span>
                                                                    <span>Order: {image.display_order}</span>
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Empty State */}
            {filteredTotalImages === 0 && (
                <div className="text-center py-20 bg-stone-50 rounded-xl border-dashed border-2 border-stone-200">
                    <ImageIcon className="h-12 w-12 mx-auto text-stone-300 mb-4" />
                    <h3 className="text-lg font-medium text-charcoal">
                        {searchTerm || activeFilter !== 'all' ? 'No images match your filters' : 'No images found'}
                    </h3>
                    <p className="text-stone-500 mb-6">
                        {searchTerm || activeFilter !== 'all'
                            ? 'Try adjusting your search or filters.'
                            : 'Start by adding your first site image.'}
                    </p>
                    {(!searchTerm && activeFilter === 'all') && (
                        <Button asChild className="bg-sahara-gold hover:bg-sahara-gold/90 text-white">
                            <Link href={route('admin.site-images.create')}>
                                <Plus className="mr-2 h-4 w-4" /> Add Image
                            </Link>
                        </Button>
                    )}
                </div>
            )}
        </AdminLayout>
    );
}
