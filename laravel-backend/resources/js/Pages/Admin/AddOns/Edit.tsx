import { Head, Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Textarea } from '@/Components/ui/textarea';
import { Switch } from '@/Components/ui/switch';
import { Card, CardContent } from '@/Components/ui/card';
import { ArrowLeft } from 'lucide-react';

interface EditProps {
    addOn: {
        id: number;
        name: string;
        description: string | null;
        price: number;
        is_active: boolean;
    };
}

export default function Edit({ addOn }: EditProps) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'PUT',
        name: addOn.name,
        description: addOn.description || '',
        price: addOn.price.toString(),
        is_active: Boolean(addOn.is_active),
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.add-ons.update', addOn.id));
    };

    return (
        <AdminLayout>
            <Head title={`Edit ${addOn.name}`} />

            <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                    <Button asChild variant="ghost" className="pl-0 hover:bg-transparent hover:text-sahara-gold">
                        <Link href={route('admin.add-ons.index')} className="flex items-center">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Add-Ons
                        </Link>
                    </Button>
                    <h1 className="text-3xl font-bold tracking-tight text-charcoal mt-2">Edit Add-On</h1>
                </div>

                <Card>
                    <CardContent className="p-6">
                        <form onSubmit={submit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name *</Label>
                                <Input
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="e.g., Airport Transfer"
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="price">Price ($) *</Label>
                                <Input
                                    id="price"
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    value={data.price}
                                    onChange={(e) => setData('price', e.target.value)}
                                    placeholder="0.00"
                                />
                                {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    placeholder="Brief details about this add-on..."
                                    rows={3}
                                />
                                {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                            </div>

                            <div className="flex items-center justify-between pt-2">
                                <div className="space-y-0.5">
                                    <Label htmlFor="is_active">Active Status</Label>
                                    <p className="text-xs text-muted-foreground">Enable to allow customers to select this add-on.</p>
                                </div>
                                <Switch
                                    id="is_active"
                                    checked={data.is_active}
                                    onCheckedChange={(checked) => setData('is_active', checked)}
                                />
                            </div>

                            <div className="flex justify-end gap-4 pt-4">
                                <Button asChild variant="outline">
                                    <Link href={route('admin.add-ons.index')}>Cancel</Link>
                                </Button>
                                <Button type="submit" className="bg-sahara-gold hover:bg-sahara-gold/90 text-white" disabled={processing}>
                                    {processing ? 'Saving...' : 'Update Add-On'}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
