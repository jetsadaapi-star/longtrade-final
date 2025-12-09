'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PopupManager from '@/components/PopupManager';
import ClientSupportWidget from '@/components/ClientSupportWidget';
import { AuthProvider } from '@/contexts/AuthContext';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdminRoute = pathname?.startsWith('/admin');

    // Admin routes use their own layout, don't show main site navigation
    if (isAdminRoute) {
        return (
            <AuthProvider>
                {children}
            </AuthProvider>
        );
    }

    // Regular site with Navbar, Footer, etc.
    return (
        <AuthProvider>
            <Navbar />
            <main className="pt-32">{children}</main>
            <Footer />
            <PopupManager />
            <ClientSupportWidget />
        </AuthProvider>
    );
}
