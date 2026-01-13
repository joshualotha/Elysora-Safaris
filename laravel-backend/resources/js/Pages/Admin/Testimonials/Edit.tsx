import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Textarea } from '@/Components/ui/textarea';
import { Label } from '@/Components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { ArrowLeft, Save } from 'lucide-react';

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

export default function Edit({ testimonial }: { testimonial: Testimonial }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'put',
        author: testimonial.author,
        country: testimonial.country,
        rating: testimonial.rating,
        comment: testimonial.comment,
        safari_taken: testimonial.safari_taken,
        author_image: null as File | null,
        order: testimonial.order,
        is_approved: testimonial.is_approved,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.testimonials.update', testimonial.id));
    };

    return (
        <AdminLayout>
            <Head title="Edit Testimonial" />

            <div className="max-w-3xl mx-auto">
                <div className="mb-6 flex items-center gap-4">
                    <Button variant="ghost" asChild size="icon">
                        <Link href={route('admin.testimonials.index')}>
                            <ArrowLeft className="h-5 w-5" />
                        </Link>
                    </Button>
                    <h1 className="text-2xl font-bold text-charcoal">Edit Testimonial</h1>
                </div>

                <form onSubmit={submit} className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="author">Author Name</Label>
                            <Input
                                id="author"
                                value={data.author}
                                onChange={e => setData('author', e.target.value)}
                                required
                            />
                            {errors.author && <p className="text-red-500 text-sm">{errors.author}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="country">Country</Label>
                            <Input
                                id="country"
                                value={data.country}
                                onChange={e => setData('country', e.target.value)}
                                required
                            />
                            {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="rating">Rating</Label>
                            <Select value={String(data.rating)} onValueChange={(value) => setData('rating', parseInt(value))}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="5">5 Stars</SelectItem>
                                    <SelectItem value="4">4 Stars</SelectItem>
                                    <SelectItem value="3">3 Stars</SelectItem>
                                    <SelectItem value="2">2 Stars</SelectItem>
                                    <SelectItem value="1">1 Star</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="order">Display Order</Label>
                            <Input
                                id="order"
                                type="number"
                                value={data.order}
                                onChange={e => setData('order', parseInt(e.target.value))}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="safari_taken">Safari Package Taken</Label>
                        <Input
                            id="safari_taken"
                            value={data.safari_taken}
                            onChange={e => setData('safari_taken', e.target.value)}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="comment">Review/Comment</Label>
                        <Textarea
                            id="comment"
                            value={data.comment}
                            onChange={e => setData('comment', e.target.value)}
                            required
                            className="h-32"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="author_image">Update Photo (Optional)</Label>
                        <Input
                            id="author_image"
                            type="file"
                            onChange={e => setData('author_image', e.target.files ? e.target.files[0] : null)}
                            accept="image/*"
                        />
                        {testimonial.author_image && !data.author_image && (
                            <p className="text-xs text-stone-500">Current: {testimonial.author_image}</p>
                        )}
                    </div>

                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="is_approved"
                            checked={data.is_approved}
                            onChange={e => setData('is_approved', e.target.checked)}
                            className="rounded border-stone-300"
                        />
                        <Label htmlFor="is_approved" className="font-normal">Approve and publish this testimonial</Label>
                    </div>

                    <div className="pt-4 flex justify-end">
                        <Button type="submit" disabled={processing} className="bg-sahara-gold text-charcoal hover:bg-sahara-gold/90 font-bold min-w-[150px]">
                            {processing ? 'Saving...' : <><Save className="h-4 w-4 mr-2" /> Save Changes</>}
                        </Button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
