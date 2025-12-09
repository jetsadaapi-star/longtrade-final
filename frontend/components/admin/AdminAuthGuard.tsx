'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { isAdminAuthenticated } from '@/lib/admin-api';

interface AdminAuthGuardProps {
    children: React.ReactNode;
}

export default function AdminAuthGuard({ children }: AdminAuthGuardProps) {
    const router = useRouter();
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Skip auth check for login page
        if (pathname === '/admin/login') {
            setIsLoading(false);
            setIsAuthenticated(true);
            return;
        }

        // Check if authenticated
        const authenticated = isAdminAuthenticated();

        if (!authenticated) {
            router.push('/admin/login');
        } else {
            setIsAuthenticated(true);
        }

        setIsLoading(false);
    }, [pathname, router]);

    // Show loading spinner
    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-500">กำลังตรวจสอบสิทธิ์...</p>
                </div>
            </div>
        );
    }

    // Not authenticated and not login page
    if (!isAuthenticated && pathname !== '/admin/login') {
        return null;
    }

    return <>{children}</>;
}
