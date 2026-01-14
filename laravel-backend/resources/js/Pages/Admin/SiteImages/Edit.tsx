import { useState } from 'react';
import { Head, Link, useForm, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Textarea } from '@/Components/ui/textarea';
import { Switch } from '@/Components/ui/switch';
import { Card, CardContent } from '@/Components/ui/card';
import { ArrowLeft, ImageIcon } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';

interface EditProps {
    image: {
        id: number;
        key: string;
        page: string;
        section: string;
        title: string;
        description: string;
        image_path: string;
        alt_text: string;
        is_active: boolean;
        display_order: number;
    };
}

export default function Edit({ image }: EditProps) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'PUT',
        key: image.key,
        page: image.page,
        section: image.section,
        title: image.title,
        description: image.description || '',
        image: null as File | null,
        alt_text: image.alt_text || '',
        is_active: Boolean(image.is_active),
        display_order: image.display_order,
    });

    const [preview, setPreview] = useState<string | null>(image.image_path ? `/storage/${image.image_path}` : null);

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
        post(route('admin.site-images.update', image.id));
    };

    const PAGES = [
        'home',
        'about',
        'contact',
        'conservation',
        'gallery',
        'blog',
        'destinations',
        'safaris',
        'navigation',
        'services_cultural',
        'services_group',
        'services_luxury',
        'services_mountain',
        'services_tailor_made',
        'services_zanzibar',
        'planning_camping',
        'reviews',
        'faq',
        'privacy',
        'terms',
    ];

    const SECTIONS = [
        'hero',
        'intro',
        'content',
        'cta',
        'featured',
        'background',
    ];

    return (
        <AdminLayout>
            <Head title={`Edit Image: ${image.title}`} />

            <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                    <Button asChild variant="ghost" className="pl-0 hover:bg-transparent hover:text-sahara-gold">
                        <Link href={route('admin.site-images.index')} className="flex items-center">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Images
                        </Link>
                    </Button>
                    <h1 className="text-3xl font-bold tracking-tight text-charcoal mt-2">Edit Site Image</h1>
                </div>

                <form onSubmit={submit} className="space-y-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Left Column - Image Upload */}
                        <div className="md:col-span-1 space-y-6">
                            <Card>
                                <CardContent className="p-6">
                                    <Label className="block mb-4">Image Preview</Label>
                                    <div className="aspect-[4/3] rounded-lg border-2 border-dashed border-gray-200 bg-stone-50 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden group hover:border-sahara-gold/50 transition-colors">
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
                                        <Label htmlFor="image" className="sr-only">Change Image</Label>
                                        <Input
                                            id="image"
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="cursor-pointer"
                                        />
                                        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
                                        <p className="text-xs text-stone-500 mt-2">Recommended: 1920x1080px for hero images, Max 2MB.</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-0.5">
                                            <Label htmlFor="is_active">Active Status</Label>
                                            <p className="text-xs text-muted-foreground">Enable to show on website</p>
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
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Right Column - Details */}
                        <div className="md:col-span-2 space-y-6">
                            <Card>
                                <CardContent className="p-6 space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="page">Page *</Label>
                                            <Select value={data.page} onValueChange={(value) => setData('page', value)}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a page" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {PAGES.map(page => (
                                                        <SelectItem key={page} value={page} className="capitalize">{page.replace('_', ' ')}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            {errors.page && <p className="text-red-500 text-sm">{errors.page}</p>}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="section">Section *</Label>
                                            <Select value={data.section} onValueChange={(value) => setData('section', value)}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select section" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {SECTIONS.map(section => (
                                                        <SelectItem key={section} value={section} className="capitalize">{section}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            {errors.section && <p className="text-red-500 text-sm">{errors.section}</p>}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="key">Unique Key * <span className="text-xs font-normal text-muted-foreground">(e.g., about_hero)</span></Label>
                                        <Input
                                            id="key"
                                            value={data.key}
                                            onChange={(e) => setData('key', e.target.value)}
                                            placeholder="page_section_identifier"
                                        />
                                        {errors.key && <p className="text-red-500 text-sm">{errors.key}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="title">Title / Name *</Label>
                                        <Input
                                            id="title"
                                            value={data.title}
                                            onChange={(e) => setData('title', e.target.value)}
                                            placeholder="e.g., About Page Hero Image"
                                        />
                                        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="alt_text">Alt Text <span className="text-xs font-normal text-muted-foreground">(Important for SEO)</span></Label>
                                        <Input
                                            id="alt_text"
                                            value={data.alt_text}
                                            onChange={(e) => setData('alt_text', e.target.value)}
                                            placeholder="Describe the image..."
                                        />
                                        {errors.alt_text && <p className="text-red-500 text-sm">{errors.alt_text}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="description">Description (Optional)</Label>
                                        <Textarea
                                            id="description"
                                            value={data.description}
                                            onChange={(e) => setData('description', e.target.value)}
                                            rows={3}
                                            placeholder="Internal description of where this image is used."
                                        />
                                        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="flex justify-end gap-4">
                                <Button asChild variant="outline">
                                    <Link href={route('admin.site-images.index')}>Cancel</Link>
                                </Button>
                                <Button type="submit" className="bg-sahara-gold hover:bg-sahara-gold/90 text-white" disabled={processing}>
                                    {processing ? 'Saving...' : 'Update Image'}
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
