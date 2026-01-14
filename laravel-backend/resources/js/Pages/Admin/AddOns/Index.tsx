import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Plus, Pencil, Trash, Package, Check, X } from 'lucide-react';
import { Badge } from '@/Components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';

interface AddOn {
    id: number;
    name: string;
    description: string | null;
    price: number;
    is_active: boolean;
}

interface AddOnIndexProps {
    addOns: AddOn[];
}

export default function AddOnIndex({ addOns }: AddOnIndexProps) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this add-on?')) {
            router.delete(route('admin.add-ons.destroy', id));
        }
    };

    return (
        <AdminLayout>
            <Head title="Manage Add-Ons" />

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-charcoal">Add-Ons</h1>
                    <p className="text-muted-foreground mt-1">Manage bookable extras for safaris.</p>
                </div>
                <Button asChild className="bg-sahara-gold hover:bg-sahara-gold/90 text-white">
                    <Link href={route('admin.add-ons.create')}>
                        <Plus className="mr-2 h-4 w-4" /> New Add-On
                    </Link>
                </Button>
            </div>

            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {addOns.length > 0 ? (
                                addOns.map((addOn) => (
                                    <TableRow key={addOn.id}>
                                        <TableCell>
                                            <div className="font-medium text-charcoal">{addOn.name}</div>
                                            {addOn.description && (
                                                <div className="text-xs text-muted-foreground truncate max-w-md">{addOn.description}</div>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            ${Number(addOn.price).toFixed(2)}
                                        </TableCell>
                                        <TableCell>
                                            {addOn.is_active ? (
                                                <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
                                            ) : (
                                                <Badge variant="secondary">Inactive</Badge>
                                            )}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button asChild size="sm" variant="outline">
                                                    <Link href={route('admin.add-ons.edit', addOn.id)}>
                                                        <Pencil className="h-4 w-4 mr-2" /> Edit
                                                    </Link>
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="destructive"
                                                    onClick={() => handleDelete(addOn.id)}
                                                >
                                                    <Trash className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={4} className="h-24 text-center">
                                        No add-ons found.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </AdminLayout>
    );
}
