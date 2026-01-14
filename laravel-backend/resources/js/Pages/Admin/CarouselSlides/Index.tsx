import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Plus, Edit, Trash2, Eye, EyeOff, Image as ImageIcon } from 'lucide-react';
import { Badge } from '@/Components/ui/badge';

interface Slide {
    id: number;
    title: string;
    subtitle: string;
    image_path: string;
    display_order: number;
    is_active: boolean;
    link_url: string | null;
    created_at: string;
    updated_at: string;
}

interface Props {
    slides: Slide[];
}

export default function Index({ slides }: Props) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this carousel slide?')) {
            router.delete(route('admin.carousel-slides.destroy', id));
        }
    };

    return (
        <AdminLayout>
            <Head title="Carousel Slides" />

            <div className="max-w-7xl mx-auto">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-charcoal">Hero Carousel Slides</h1>
                        <p className="text-stone-600 mt-1">Manage homepage carousel slides</p>
                    </div>
                    <Button asChild className="bg-sahara-gold text-charcoal hover:bg-sahara-gold/90">
                        <Link href={route('admin.carousel-slides.create')}>
                            <Plus className="h-4 w-4 mr-2" />
                            Add New Slide
                        </Link>
                    </Button>
                </div>

                {slides.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-12 text-center">
                        <ImageIcon className="h-16 w-16 mx-auto text-stone-300 mb-4" />
                        <h3 className="text-lg font-semibold text-charcoal mb-2">No carousel slides yet</h3>
                        <p className="text-stone-600 mb-6">Create your first carousel slide to get started</p>
                        <Button asChild className="bg-sahara-gold text-charcoal hover:bg-sahara-gold/90">
                            <Link href={route('admin.carousel-slides.create')}>
                                <Plus className="h-4 w-4 mr-2" />
                                Create Slide
                            </Link>
                        </Button>
                    </div>
                ) : (
                    <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-stone-200 bg-stone-50">
                                    <th className="text-left p-4 font-semibold text-charcoal">Order</th>
                                    <th className="text-left p-4 font-semibold text-charcoal">Preview</th>
                                    <th className="text-left p-4 font-semibold text-charcoal">Title</th>
                                    <th className="text-left p-4 font-semibold text-charcoal">Status</th>
                                    <th className="text-left p-4 font-semibold text-charcoal">Link</th>
                                    <th className="text-right p-4 font-semibold text-charcoal">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {slides.map((slide) => (
                                    <tr key={slide.id} className="border-b border-stone-100 hover:bg-stone-50 transition-colors">
                                        <td className="p-4">
                                            <Badge variant="outline" className="font-mono">
                                                {slide.display_order}
                                            </Badge>
                                        </td>
                                        <td className="p-4">
                                            <img
                                                src={`/storage/${slide.image_path}`}
                                                alt={slide.title}
                                                className="w-24 h-16 object-cover rounded border border-stone-200"
                                                onError={(e) => {
                                                    e.currentTarget.src = '/images/' + slide.image_path.split('/').pop();
                                                }}
                                            />
                                        </td>
                                        <td className="p-4">
                                            <div>
                                                <p className="font-semibold text-charcoal">{slide.title}</p>
                                                <p className="text-sm text-stone-600 line-clamp-1">{slide.subtitle}</p>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            {slide.is_active ? (
                                                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                                                    <Eye className="h-3 w-3 mr-1" />
                                                    Active
                                                </Badge>
                                            ) : (
                                                <Badge variant="secondary" className="bg-stone-200 text-stone-700">
                                                    <EyeOff className="h-3 w-3 mr-1" />
                                                    Inactive
                                                </Badge>
                                            )}
                                        </td>
                                        <td className="p-4">
                                            {slide.link_url ? (
                                                <a
                                                    href={slide.link_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm text-blue-600 hover:underline truncate block max-w-xs"
                                                >
                                                    {slide.link_url}
                                                </a>
                                            ) : (
                                                <span className="text-sm text-stone-400">No link</span>
                                            )}
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    asChild
                                                >
                                                    <Link href={route('admin.carousel-slides.edit', slide.id)}>
                                                        <Edit className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => handleDelete(slide.id)}
                                                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 className="font-semibold text-sm text-blue-900 mb-1">💡 Tip</h3>
                    <p className="text-sm text-blue-800">
                        Slides are displayed on the homepage carousel in order. Use the "Order" number to control the sequence. Only active slides will appear on the website.
                    </p>
                </div>
            </div>
        </AdminLayout>
    );
}
