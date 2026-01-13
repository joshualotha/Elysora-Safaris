import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { Plus, Pencil, Trash2, Eye } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import { router } from '@inertiajs/react';

interface Destination {
    id: number;
    name: string;
    slug: string;
    description: string;
    image: string;
}

export default function Index({ destinations }: { destinations: Destination[] }) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this destination?')) {
            router.delete(route('admin.destinations.destroy', id));
        }
    };

    return (
        <AdminLayout>
            <Head title="Manage Destinations" />

            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-charcoal">Destinations</h1>
                <Button asChild className="bg-sahara-gold text-charcoal hover:bg-sahara-gold/90 border-none">
                    <Link href={route('admin.destinations.create')}>
                        <Plus className="h-4 w-4 mr-2" /> Add New
                    </Link>
                </Button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-stone-50 border-b border-stone-200">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-stone-600 text-sm">Image</th>
                            <th className="px-6 py-4 font-semibold text-stone-600 text-sm">Name</th>
                            <th className="px-6 py-4 font-semibold text-stone-600 text-sm">Slug</th>
                            <th className="px-6 py-4 font-semibold text-stone-600 text-sm text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                        {destinations.map((destination) => (
                            <tr key={destination.id} className="hover:bg-stone-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="h-12 w-20 rounded-md overflow-hidden bg-stone-200">
                                        <img
                                            src={destination.image.startsWith('uploads/') ? `/storage/${destination.image}` : `/images/${destination.image}.jpg`}
                                            alt={destination.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => { e.currentTarget.src = 'https://placehold.co/80x48?text=No+Img' }}
                                        />
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium text-charcoal">{destination.name}</td>
                                <td className="px-6 py-4 text-stone-500 font-mono text-xs">{destination.slug}</td>
                                <td className="px-6 py-4 text-right space-x-2">
                                    <Link
                                        href={route('destinations.show', destination.slug)}
                                        className="inline-flex p-2 text-stone-400 hover:text-blue-500 transition-colors"
                                        title="View"
                                        target="_blank"
                                    >
                                        <Eye className="h-4 w-4" />
                                    </Link>
                                    <Link
                                        href={route('admin.destinations.edit', destination.id)}
                                        className="inline-flex p-2 text-stone-400 hover:text-sahara-gold transition-colors"
                                        title="Edit"
                                    >
                                        <Pencil className="h-4 w-4" />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(destination.id)}
                                        className="inline-flex p-2 text-stone-400 hover:text-red-500 transition-colors"
                                        title="Delete"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {destinations.length === 0 && (
                            <tr>
                                <td colSpan={4} className="px-6 py-12 text-center text-stone-500">
                                    No destinations found. Create one to get started.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
