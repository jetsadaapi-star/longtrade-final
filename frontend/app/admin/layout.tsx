'use client';

import { usePathname } from 'next/navigation';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminAuthGuard from '@/components/admin/AdminAuthGuard';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    // Login page has its own layout
    if (pathname === '/admin/login') {
        return <AdminAuthGuard>{children}</AdminAuthGuard>;
    }

    return (
        <AdminAuthGuard>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-emerald-50/30">
                <div className="flex">
                    {/* Sidebar */}
                    <AdminSidebar />

                    {/* Main content */}
                    <div className="flex-1 flex flex-col min-h-screen">
                        {/* Header */}
                        <AdminHeader />

                        {/* Page content */}
                        <main className="flex-1 p-6 lg:p-8">
                            {children}
                        </main>

                        {/* Footer */}
                        <footer className="py-4 px-6 text-center text-sm text-gray-500 border-t border-gray-100 bg-white/50 backdrop-blur-sm">
                            <span className="text-gray-500">© 2024</span>
                            <span className="mx-2 text-emerald-600 font-semibold">LongTrade</span>
                            <span className="text-gray-500">All rights reserved.</span>
                        </footer>
                    </div>
                </div>
            </div>
        </AdminAuthGuard>
    );
}
