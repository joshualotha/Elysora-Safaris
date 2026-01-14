import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Button } from '@/Components/ui/button';
import { Card, CardContent } from '@/Components/ui/card';
import { Plus, Pencil, Trash, ImageIcon } from 'lucide-react';
import { Badge } from '@/Components/ui/badge';

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

export default function SiteImageIndex({ groupedImages }: SiteImageIndexProps) {
    const pages = Object.keys(groupedImages).sort();

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this image?')) {
            router.delete(route('admin.site-images.destroy', id), {
                preserveScroll: true,
            });
        }
    };

    return (
        <AdminLayout>
            <Head title="Site Images Management" />

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-charcoal">Site Images</h1>
                    <p className="text-muted-foreground mt-1">Manage static images across the website.</p>
                </div>
                <Button asChild className="bg-sahara-gold hover:bg-sahara-gold/90 text-white">
                    <Link href={route('admin.site-images.create')}>
                        <Plus className="mr-2 h-4 w-4" /> Add Image
                    </Link>
                </Button>
            </div>

            <div className="space-y-8">
                {pages.map((page) => (
                    <div key={page} className="space-y-4">
                        <div className="flex items-center gap-2">
                            <h2 className="text-xl font-bold capitalize text-charcoal border-l-4 border-sahara-gold pl-3">{page.replace('_', ' ')} Page</h2>
                            <Badge variant="outline" className="text-xs">{groupedImages[page].length} images</Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {groupedImages[page].map((image) => (
                                <Card key={image.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-stone-100">
                                    <div className="aspect-video relative bg-stone-100">
                                        {image.image_path ? (
                                            <img
                                                src={`/storage/${image.image_path}`}
                                                alt={image.alt_text || image.title}
                                                className="w-full h-full object-cover"
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
                                    <CardContent className="p-4">
                                        <div className="flex justify-between items-start gap-2 mb-2">
                                            <h3 className="font-bold text-charcoal truncate" title={image.title}>{image.title}</h3>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="text-xs text-muted-foreground bg-stone-50 px-2 py-1 rounded inline-block">
                                                Key: <span className="font-mono text-charcoal">{image.key}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-xs text-muted-foreground mt-2">
                                                <span className="capitalize">Section: {image.section}</span>
                                                <span>Ord: {image.display_order}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}

                {pages.length === 0 && (
                    <div className="text-center py-20 bg-stone-50 rounded-xl border-dashed border-2 border-stone-200">
                        <ImageIcon className="h-12 w-12 mx-auto text-stone-300 mb-4" />
                        <h3 className="text-lg font-medium text-charcoal">No images found</h3>
                        <p className="text-stone-500 mb-6">Start by adding your first site image.</p>
                        <Button asChild className="bg-sahara-gold hover:bg-sahara-gold/90 text-white">
                            <Link href={route('admin.site-images.create')}>
                                <Plus className="mr-2 h-4 w-4" /> Add Image
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
