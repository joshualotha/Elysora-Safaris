import { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Textarea } from '@/Components/ui/textarea';
import { Switch } from '@/Components/ui/switch';
import { Card, CardContent } from '@/Components/ui/card';
import { ArrowLeft, Upload, ImageIcon } from 'lucide-react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        subtitle: '',
        image: null as File | null,
        link_url: '',
        is_active: true,
        display_order: 0,
    });

    const [preview, setPreview] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('image', file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.carousel-slides.store'));
    };

    return (
        <AdminLayout>
            <Head title="Add Carousel Slide" />

            <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                    <Button asChild variant="ghost" className="pl-0 hover:bg-transparent hover:text-sahara-gold">
                        <Link href={route('admin.carousel-slides.index')} className="flex items-center">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Slides
                        </Link>
                    </Button>
                    <h1 className="text-3xl font-bold tracking-tight text-charcoal mt-2">Add New Slide</h1>
                </div>

                <form onSubmit={submit} className="space-y-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Left Column - Image Upload */}
                        <div className="md:col-span-1 space-y-6">
                            <Card>
                                <CardContent className="p-6">
                                    <Label className="block mb-4">Slide Image</Label>
                                    <div className="aspect-[16/9] rounded-lg border-2 border-dashed border-gray-200 bg-stone-50 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden group hover:border-sahara-gold/50 transition-colors">
                                        {preview ? (
                                            <img
                                                src={preview}
                                                alt="Preview"
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="text-stone-400">
                                                <ImageIcon className="h-10 w-10 mx-auto mb-2" />
                                                <span className="text-sm">No image selected</span>
                                            </div>
                                        )}

                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
                                    </div>
                                    <div className="mt-4">
                                        <Label htmlFor="image" className="sr-only">Upload Image</Label>
                                        <Input
                                            id="image"
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="cursor-pointer"
                                        />
                                        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
                                        <p className="text-xs text-stone-500 mt-2">Recommended: 1920x1080px (16:9 aspect ratio), Max 2MB.</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-0.5">
                                            <Label htmlFor="is_active">Active Status</Label>
                                            <p className="text-xs text-muted-foreground">Enable to show on homepage</p>
                                        </div>
                                        <Switch
                                            id="is_active"
                                            checked={data.is_active}
                                            onCheckedChange={(checked) => setData('is_active', checked)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="display_order">Display Order</Label>
                                        <Input
                                            id="display_order"
                                            type="number"
                                            min="0"
                                            value={data.display_order}
                                            onChange={(e) => setData('display_order', parseInt(e.target.value) || 0)}
                                        />
                                        <p className="text-xs text-stone-500">Lower numbers appear first.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Right Column - Details */}
                        <div className="md:col-span-2 space-y-6">
                            <Card>
                                <CardContent className="p-6 space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="title">Headline Title *</Label>
                                        <Input
                                            id="title"
                                            value={data.title}
                                            onChange={(e) => setData('title', e.target.value)}
                                            placeholder="e.g., Experience the Wild"
                                        />
                                        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subtitle">Subtitle / Caption</Label>
                                        <Input
                                            id="subtitle"
                                            value={data.subtitle}
                                            onChange={(e) => setData('subtitle', e.target.value)}
                                            placeholder="e.g., Unforgettable Journeys in Tanzania"
                                        />
                                        {errors.subtitle && <p className="text-red-500 text-sm">{errors.subtitle}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="link_url">Button Link URL (Optional)</Label>
                                        <Input
                                            id="link_url"
                                            value={data.link_url}
                                            onChange={(e) => setData('link_url', e.target.value)}
                                            placeholder="e.g., /safaris/classic-safari or https://google.com"
                                        />
                                        <p className="text-xs text-stone-500">Leaving this blank creates a slide without a call-to-action button.</p>
                                        {errors.link_url && <p className="text-red-500 text-sm">{errors.link_url}</p>}
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="flex justify-end gap-4">
                                <Button asChild variant="outline">
                                    <Link href={route('admin.carousel-slides.index')}>Cancel</Link>
                                </Button>
                                <Button type="submit" className="bg-sahara-gold hover:bg-sahara-gold/90 text-white" disabled={processing}>
                                    {processing ? 'Saving...' : 'Create Slide'}
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
