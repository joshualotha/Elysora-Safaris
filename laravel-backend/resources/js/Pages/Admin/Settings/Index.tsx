import { Head, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Textarea } from '@/Components/ui/textarea';
import { Label } from '@/Components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/ui/tabs';

interface Setting {
    id: number;
    key: string;
    value: string;
    type: string;
    group: string;
}

interface SettingsGroup {
    [key: string]: Setting[];
}

interface Props {
    settings: SettingsGroup;
}

export default function Index({ settings }: Props) {
    // Flatten settings for form data
    const initialData = Object.values(settings).flat().reduce((acc, setting) => {
        acc[setting.key] = setting.value || '';
        return acc;
    }, {} as Record<string, string>);

    const { data, setData, post, processing, errors, transform } = useForm(initialData);

    // Transform data before submission
    transform((data) => ({
        settings: Object.entries(data).map(([key, value]) => ({
            key,
            value
        }))
    }));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.settings.update'), {
            preserveScroll: true,
        });
    };

    const renderField = (setting: Setting) => {
        const commonProps = {
            id: setting.key,
            value: data[setting.key] || '',
            onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                setData(setting.key, e.target.value),
        };

        switch (setting.type) {
            case 'textarea':
                return <Textarea {...commonProps} rows={4} />;
            case 'email':
                return <Input {...commonProps} type="email" />;
            case 'url':
                return <Input {...commonProps} type="url" />;
            default:
                return <Input {...commonProps} type="text" />;
        }
    };

    const formatLabel = (key: string) => {
        return key
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <AdminLayout>
            <Head title="Site Settings" />

            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Site Settings</h1>
                    <p className="text-muted-foreground mt-2">
                        Manage your site configuration and global settings
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <Tabs defaultValue="contact" className="space-y-6">
                        <TabsList>
                            <TabsTrigger value="contact">Contact</TabsTrigger>
                            <TabsTrigger value="social">Social Media</TabsTrigger>
                            <TabsTrigger value="business">Business</TabsTrigger>
                            <TabsTrigger value="email">Email</TabsTrigger>
                            <TabsTrigger value="seo">SEO</TabsTrigger>
                            <TabsTrigger value="analytics">Analytics</TabsTrigger>
                        </TabsList>

                        {/* Contact Settings */}
                        <TabsContent value="contact">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Contact Information</CardTitle>
                                    <CardDescription>
                                        Update your business contact details displayed across the site
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {settings.contact?.map((setting) => (
                                        <div key={setting.key} className="space-y-2">
                                            <Label htmlFor={setting.key}>{formatLabel(setting.key)}</Label>
                                            {renderField(setting)}
                                            {errors[setting.key] && (
                                                <p className="text-sm text-red-600">{errors[setting.key]}</p>
                                            )}
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Social Media Settings */}
                        <TabsContent value="social">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Social Media Links</CardTitle>
                                    <CardDescription>
                                        Add your social media profile URLs
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {settings.social?.map((setting) => (
                                        <div key={setting.key} className="space-y-2">
                                            <Label htmlFor={setting.key}>{formatLabel(setting.key)}</Label>
                                            {renderField(setting)}
                                            {errors[setting.key] && (
                                                <p className="text-sm text-red-600">{errors[setting.key]}</p>
                                            )}
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Business Settings */}
                        <TabsContent value="business">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Business Information</CardTitle>
                                    <CardDescription>
                                        Configure your business hours and company description
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {settings.business?.map((setting) => (
                                        <div key={setting.key} className="space-y-2">
                                            <Label htmlFor={setting.key}>{formatLabel(setting.key)}</Label>
                                            {renderField(setting)}
                                            {errors[setting.key] && (
                                                <p className="text-sm text-red-600">{errors[setting.key]}</p>
                                            )}
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Email Settings */}
                        <TabsContent value="email">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Email Settings</CardTitle>
                                    <CardDescription>
                                        Configure email addresses for notifications and forms
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {settings.email?.map((setting) => (
                                        <div key={setting.key} className="space-y-2">
                                            <Label htmlFor={setting.key}>{formatLabel(setting.key)}</Label>
                                            {renderField(setting)}
                                            {errors[setting.key] && (
                                                <p className="text-sm text-red-600">{errors[setting.key]}</p>
                                            )}
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* SEO Settings */}
                        <TabsContent value="seo">
                            <Card>
                                <CardHeader>
                                    <CardTitle>SEO Configuration</CardTitle>
                                    <CardDescription>
                                        Set default meta tags for search engine optimization
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {settings.seo?.map((setting) => (
                                        <div key={setting.key} className="space-y-2">
                                            <Label htmlFor={setting.key}>{formatLabel(setting.key)}</Label>
                                            {renderField(setting)}
                                            {errors[setting.key] && (
                                                <p className="text-sm text-red-600">{errors[setting.key]}</p>
                                            )}
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Analytics Settings */}
                        <TabsContent value="analytics">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Analytics</CardTitle>
                                    <CardDescription>
                                        Configure tracking and analytics tools
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {settings.analytics?.map((setting) => (
                                        <div key={setting.key} className="space-y-2">
                                            <Label htmlFor={setting.key}>{formatLabel(setting.key)}</Label>
                                            {renderField(setting)}
                                            <p className="text-sm text-muted-foreground">
                                                Enter your Google Analytics Measurement ID (e.g., G-XXXXXXXXXX)
                                            </p>
                                            {errors[setting.key] && (
                                                <p className="text-sm text-red-600">{errors[setting.key]}</p>
                                            )}
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>

                    <div className="flex justify-end mt-6">
                        <Button type="submit" disabled={processing}>
                            {processing ? 'Saving...' : 'Save Settings'}
                        </Button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
