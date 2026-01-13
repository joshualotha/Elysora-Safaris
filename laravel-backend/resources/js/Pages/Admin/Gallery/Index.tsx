import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Plus, Pencil, Trash2 } from 'lucide-react';

interface GalleryImage {
    id: number;
    title: string;
    category: string;
    image: string;
    size: string;
    order: number;
    is_active: boolean;
}

export default function Index({ images }: { images: GalleryImage[] }) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this image?')) {
            router.delete(route('admin.gallery.destroy', id));
        }
    };

    return (
        <AdminLayout>
            <Head title="Gallery Management" />

            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-charcoal">Gallery Management</h1>
                    <Button asChild className="bg-sahara-gold text-charcoal hover:bg-sahara-gold/90 font-bold">
                        <Link href={route('admin.gallery.create')}>
                            <Plus className="h-4 w-4 mr-2" /> Add Image
                        </Link>
                    </Button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-stone-50 border-b border-stone-200">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Image</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Title</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Category</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Size</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Order</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-stone-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200">
                                {images.length === 0 ? (
                                    <tr>
                                        <td colSpan={7} className="px-6 py-8 text-center text-stone-500">
                                            No images yet. Add your first gallery image!
                                        </td>
                                    </tr>
                                ) : (
                                    images.map((image) => (
                                        <tr key={image.id} className="hover:bg-stone-50">
                                            <td className="px-6 py-4">
                                                <img
                                                    src={image.image.startsWith('uploads/') ? `/storage/${image.image}` : `/images/${image.image}`}
                                                    alt={image.title}
                                                    className="h-16 w-16 object-cover rounded-lg"
                                                />
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-charcoal">{image.title}</td>
                                            <td className="px-6 py-4 text-sm text-stone-600">
                                                <span className="px-2 py-1 bg-stone-100 rounded-full text-xs">{image.category}</span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-stone-600 capitalize">{image.size}</td>
                                            <td className="px-6 py-4 text-sm text-stone-600">{image.order}</td>
                                            <td className="px-6 py-4 text-sm">
                                                {image.is_active ? (
                                                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
                                                ) : (
                                                    <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">Hidden</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-right text-sm space-x-2">
                                                <Button variant="ghost" size="sm" asChild>
                                                    <Link href={route('admin.gallery.edit', image.id)}>
                                                        <Pencil className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleDelete(image.id)}
                                                    className="text-red-600 hover:text-red-700"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
