"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    avatar?: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (token: string, user: User) => void;
    logout: () => void;
    checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            setLoading(false);
            return;
        }

        try {
            const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";
            const res = await fetch(`${API_URL}/auth/user`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                },
            });

            if (res.ok) {
                const data = await res.json();
                setUser(data);
            } else {
                localStorage.removeItem("token");
                setUser(null);
            }
        } catch (error) {
            console.error("Auth check failed:", error);
            localStorage.removeItem("token");
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = (token: string, userData: User) => {
        localStorage.setItem("token", token);
        setUser(userData);
        router.push("/ebooks"); // Redirect to ebooks page after login
    };

    const logout = async () => {
        try {
            const token = localStorage.getItem("token");
            if (token) {
                const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";
                await fetch(`${API_URL}/auth/logout`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: "application/json",
                    },
                });
            }
        } catch (error) {
            console.error("Logout error:", error);
        } finally {
            localStorage.removeItem("token");
            setUser(null);
            router.push("/login");
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, checkAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
