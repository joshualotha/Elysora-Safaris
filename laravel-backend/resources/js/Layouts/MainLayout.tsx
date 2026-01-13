import { PropsWithChildren } from 'react';
import { Head } from '@inertiajs/react';
import Header from '@/Components/Layout/Header';
import Footer from '@/Components/Layout/Footer';
import WhatsAppButton from '@/Components/Layout/WhatsAppButton';
import { Toaster } from '@/Components/ui/toaster';

export default function MainLayout({
    children,
    title = 'Elysora Digital Safari | Discover the Magic of Tanzania'
}: PropsWithChildren<{ title?: string }>) {
    return (
        <>
            <Head title={title} />
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">{children}</main>
                <Footer />
                <WhatsAppButton />
                <Toaster />
            </div>
        </>
    );
}
