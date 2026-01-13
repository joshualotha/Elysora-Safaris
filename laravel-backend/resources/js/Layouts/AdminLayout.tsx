import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import {
    LayoutDashboard,
    MapPin,
    Tent,
    Newspaper,
    LogOut,
    Menu,
    X,
    Settings,
    Image as ImageIcon,
    MessageSquare,
    HelpCircle,
    Mail
} from 'lucide-react';
import { Button } from '@/Components/ui/button';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { url, component } = usePage();

    const navItems = [
        { name: 'Dashboard', href: '/admin', icon: LayoutDashboard, active: component.startsWith('Admin/Dashboard') },
        { name: 'Destinations', href: '/admin/destinations', icon: MapPin, active: component.startsWith('Admin/Destinations') },
        { name: 'Safaris', href: '/admin/safaris', icon: Tent, active: component.startsWith('Admin/Safaris') },
        { name: 'Blog', href: '/admin/blog', icon: Newspaper, active: component.startsWith('Admin/Blog') },
        { name: 'Gallery', href: '/admin/gallery', icon: ImageIcon, active: component.startsWith('Admin/Gallery') },
        { name: 'Testimonials', href: '/admin/testimonials', icon: MessageSquare, active: component.startsWith('Admin/Testimonials') },
        { name: 'FAQs', href: '/admin/faqs', icon: HelpCircle, active: component.startsWith('Admin/FAQs') },
        { name: 'Contacts', href: '/admin/contacts', icon: Mail, active: component.startsWith('Admin/Contacts') },
    ];

    return (
        <div className="min-h-screen bg-stone-100 flex">
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-charcoal text-white transition-transform duration-300 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:inset-0`}>
                <div className="h-full flex flex-col">
                    {/* Logo */}
                    <div className="h-16 flex items-center px-6 bg-black/20">
                        <span className="text-xl font-headline font-bold text-sahara-gold">ELYSORA Admin</span>
                        <button onClick={() => setSidebarOpen(false)} className="md:hidden ml-auto text-stone-400 hover:text-white">
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Nav */}
                    <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${item.active
                                    ? 'bg-sahara-gold text-charcoal font-bold shadow-md'
                                    : 'text-stone-300 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                <item.icon className="h-5 w-5" />
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </nav>

                    {/* User / Logout */}
                    <div className="p-4 bg-black/20 border-t border-white/5">
                        <Link href={route('logout')} method="post" as="button" className="flex items-center gap-3 px-4 py-2 w-full text-stone-300 hover:text-red-400 transition-colors">
                            <LogOut className="h-5 w-5" />
                            <span>Sign Out</span>
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Header */}
                <header className="bg-white border-b border-stone-200 h-16 flex items-center px-4 md:px-8 justify-between">
                    <button onClick={() => setSidebarOpen(true)} className="md:hidden text-stone-500">
                        <Menu className="h-6 w-6" />
                    </button>
                    <div className="ml-auto flex items-center gap-4">
                        <span className="text-sm text-stone-500">Administrator</span>
                        <div className="h-8 w-8 bg-sahara-gold rounded-full flex items-center justify-center text-charcoal font-bold">A</div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-auto p-4 md:p-8">
                    {children}
                </main>
            </div>

            {/* Overlay for mobile sidebar */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
}
