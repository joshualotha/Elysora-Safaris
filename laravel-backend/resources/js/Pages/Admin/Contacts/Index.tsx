import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { Mail, Phone, Calendar, Trash2 } from 'lucide-react';

interface ContactSubmission {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    message: string;
    status: 'new' | 'read' | 'replied';
    created_at: string;
}

export default function Index({ submissions }: { submissions: ContactSubmission[] }) {
    const handleStatusChange = (id: number, status: string) => {
        router.patch(route('admin.contacts.update', id), { status });
    };

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this submission?')) {
            router.delete(route('admin.contacts.destroy', id));
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'new': return 'bg-blue-100 text-blue-800';
            case 'read': return 'bg-yellow-100 text-yellow-800';
            case 'replied': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <AdminLayout>
            <Head title="Contact Submissions" />

            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-charcoal">Contact Submissions</h1>
                    <div className="text-sm text-stone-500">
                        {submissions.filter(s => s.status === 'new').length} new inquiries
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-stone-50 border-b border-stone-200">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase">Contact</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase">Message</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase">Status</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-stone-500 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200">
                                {submissions.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-8 text-center text-stone-500">
                                            No contact submissions yet.
                                        </td>
                                    </tr>
                                ) : (
                                    submissions.map((submission) => (
                                        <tr key={submission.id} className={`hover:bg-stone-50 ${submission.status === 'new' ? 'bg-blue-50/30' : ''}`}>
                                            <td className="px-6 py-4 text-sm font-medium text-charcoal">{submission.name}</td>
                                            <td className="px-6 py-4 text-sm text-stone-600">
                                                <div className="flex flex-col gap-1">
                                                    <div className="flex items-center gap-1">
                                                        <Mail className="h-3 w-3" />
                                                        <span className="text-xs">{submission.email}</span>
                                                    </div>
                                                    {submission.phone && (
                                                        <div className="flex items-center gap-1">
                                                            <Phone className="h-3 w-3" />
                                                            <span className="text-xs">{submission.phone}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-stone-600 max-w-xs truncate">{submission.message}</td>
                                            <td className="px-6 py-4 text-sm text-stone-600">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" />
                                                    {new Date(submission.created_at).toLocaleDateString()}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <Select
                                                    value={submission.status}
                                                    onValueChange={(value) => handleStatusChange(submission.id, value)}
                                                >
                                                    <SelectTrigger className={`w-32 h-8 text-xs ${getStatusColor(submission.status)}`}>
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="new">New</SelectItem>
                                                        <SelectItem value="read">Read</SelectItem>
                                                        <SelectItem value="replied">Replied</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleDelete(submission.id)}
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
