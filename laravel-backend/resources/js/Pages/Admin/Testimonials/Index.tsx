import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Plus, Pencil, Trash2, Star, CheckCircle, XCircle } from 'lucide-react';

interface Testimonial {
    id: number;
    author: string;
    country: string;
    rating: number;
    comment: string;
    safari_taken: string;
    author_image: string | null;
    is_approved: boolean;
    order: number;
}

export default function Index({ testimonials }: { testimonials: Testimonial[] }) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this testimonial?')) {
            router.delete(route('admin.testimonials.destroy', id));
        }
    };

    return (
        <AdminLayout>
            <Head title="Testimonials Management" />

            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-charcoal">Testimonials Management</h1>
                    <Button asChild className="bg-sahara-gold text-charcoal hover:bg-sahara-gold/90 font-bold">
                        <Link href={route('admin.testimonials.create')}>
                            <Plus className="h-4 w-4 mr-2" /> Add Testimonial
                        </Link>
                    </Button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-stone-50 border-b border-stone-200">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase">Author</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase">Rating</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase">Safari</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase">Order</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-stone-500 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200">
                                {testimonials.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-8 text-center text-stone-500">
                                            No testimonials yet. Add your first one!
                                        </td>
                                    </tr>
                                ) : (
                                    testimonials.map((testimonial) => (
                                        <tr key={testimonial.id} className="hover:bg-stone-50">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    {testimonial.author_image && (
                                                        <img
                                                            src={testimonial.author_image.startsWith('uploads/') ? `/storage/${testimonial.author_image}` : `/images/${testimonial.author_image}.jpg`}
                                                            alt={testimonial.author}
                                                            className="h-10 w-10 rounded-full object-cover"
                                                        />
                                                    )}
                                                    <div>
                                                        <div className="font-medium text-charcoal">{testimonial.author}</div>
                                                        <div className="text-sm text-stone-500">{testimonial.country}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex gap-1">
                                                    {Array.from({ length: 5 }).map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`h-4 w-4 ${i < testimonial.rating ? 'fill-sahara-gold text-sahara-gold' : 'text-gray-300'}`}
                                                        />
                                                    ))}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-stone-600">{testimonial.safari_taken}</td>
                                            <td className="px-6 py-4">
                                                {testimonial.is_approved ? (
                                                    <span className="flex items-center gap-1 text-green-600 text-sm">
                                                        <CheckCircle className="h-4 w-4" /> Approved
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center gap-1 text-orange-600 text-sm">
                                                        <XCircle className="h-4 w-4" /> Pending
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-stone-600">{testimonial.order}</td>
                                            <td className="px-6 py-4 text-right space-x-2">
                                                <Button variant="ghost" size="sm" asChild>
                                                    <Link href={route('admin.testimonials.edit', testimonial.id)}>
                                                        <Pencil className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleDelete(testimonial.id)}
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
