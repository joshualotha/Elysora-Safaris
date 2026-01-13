import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Textarea } from '@/Components/ui/textarea';
import { Label } from '@/Components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { ArrowLeft, Plus } from 'lucide-react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        author: '',
        country: '',
        rating: 5,
        comment: '',
        safari_taken: '',
        author_image: null as File | null,
        order: 0,
        is_approved: false,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.testimonials.store'));
    };

    return (
        <AdminLayout>
            <Head title="Add Testimonial" />

            <div className="max-w-3xl mx-auto">
                <div className="mb-6 flex items-center gap-4">
                    <Button variant="ghost" asChild size="icon">
                        <Link href={route('admin.testimonials.index')}>
                            <ArrowLeft className="h-5 w-5" />
                        </Link>
                    </Button>
                    <h1 className="text-2xl font-bold text-charcoal">Add Testimonial</h1>
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
                                placeholder="John Doe"
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
                                placeholder="USA"
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
                                    <SelectItem value="5">5 Stars - Excellent</SelectItem>
                                    <SelectItem value="4">4 Stars - Very Good</SelectItem>
                                    <SelectItem value="3">3 Stars - Good</SelectItem>
                                    <SelectItem value="2">2 Stars - Fair</SelectItem>
                                    <SelectItem value="1">1 Star - Poor</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="order">Display Order</Label>
                            <Input
                                id="order"
                                type="number"
                                value={data.order}
                                onChange={e => setData('order', parseInt(e.target.value))}
                                placeholder="0"
                            />
                            <p className="text-xs text-stone-500">Lower numbers appear first</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="safari_taken">Safari Package Taken</Label>
                        <Input
                            id="safari_taken"
                            value={data.safari_taken}
                            onChange={e => setData('safari_taken', e.target.value)}
                            required
                            placeholder="7-Day Migration Safari"
                        />
                        {errors.safari_taken && <p className="text-red-500 text-sm">{errors.safari_taken}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="comment">Review/Comment</Label>
                        <Textarea
                            id="comment"
                            value={data.comment}
                            onChange={e => setData('comment', e.target.value)}
                            required
                            className="h-32"
                            placeholder="Share your experience..."
                        />
                        {errors.comment && <p className="text-red-500 text-sm">{errors.comment}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="author_image">Author Photo (Optional)</Label>
                        <Input
                            id="author_image"
                            type="file"
                            onChange={e => setData('author_image', e.target.files ? e.target.files[0] : null)}
                            accept="image/*"
                        />
                        <p className="text-xs text-stone-500">Upload author's photo</p>
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
                            {processing ? 'Adding...' : <><Plus className="h-4 w-4 mr-2" /> Add Testimonial</>}
                        </Button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
