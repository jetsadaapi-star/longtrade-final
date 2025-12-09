"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function AuthCallbackPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { login } = useAuth();

    useEffect(() => {
        // Get token and provider from URL params
        const token = searchParams.get('token');
        const provider = searchParams.get('provider');
        const error = searchParams.get('error');

        if (error) {
            console.error('Social login error:', error);
            router.push('/login?error=' + encodeURIComponent(error));
            return;
        }

        if (token) {
            // Fetch user data with token
            const fetchUser = async () => {
                try {
                    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";
                    const res = await fetch(`${API_URL}/auth/user`, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Accept': 'application/json',
                        },
                    });

                    if (res.ok) {
                        const data = await res.json();
                        // Login with token and user data
                        login(token, data.user || data);

                        // Redirect to intended page or home
                        const redirect = searchParams.get('redirect') || '/';
                        router.push(redirect);
                    } else {
                        throw new Error('Failed to fetch user data');
                    }
                } catch (err) {
                    console.error('Error fetching user:', err);
                    router.push('/login?error=authentication_failed');
                }
            };

            fetchUser();
        } else {
            // No token, redirect to login
            router.push('/login');
        }
    }, [searchParams, router, login]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-white/20 border-t-red-500 mx-auto mb-4"></div>
                <p className="text-white/80 text-lg">กำลังเข้าสู่ระบบ...</p>
                <p className="text-white/40 text-sm mt-2">กรุณารอสักครู่</p>
            </div>
        </div>
    );
}
