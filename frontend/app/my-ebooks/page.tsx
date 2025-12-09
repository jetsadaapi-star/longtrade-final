"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Download, Eye, Calendar, BookOpen, ArrowLeft } from "lucide-react";
import { useToast } from "@/components/Toast";

interface Category {
    id: number;
    name: string;
    slug: string;
}

interface Ebook {
    id: number;
    slug: string;
    title: string;
    author: string | null;
    description: string;
    cover_image: string | null;
    price: string;
    pages_count: number | null;
    downloads_count: number;
    views_count: number;
    access_type: "free" | "members_only" | "premium";
    category: Category;
    created_at: string;
    downloaded_at?: string;
}

export default function MyEbooksPage() {
    const { user, loading: authLoading } = useAuth();
    const router = useRouter();
    const { success, error } = useToast();
    const [ebooks, setEbooks] = useState<Ebook[]>([]);
    const [loading, setLoading] = useState(true);

    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

    useEffect(() => {
        if (!authLoading && !user) {
            router.push("/login");
            return;
        }

        if (user) {
            fetchMyEbooks();
        }
    }, [user, authLoading, router]);

    const fetchMyEbooks = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return;

            const res = await fetch(`${API_URL}/user/ebooks`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                },
            });

            if (res.ok) {
                const data = await res.json();
                setEbooks(data);
            }
        } catch (err) {
            console.error("Error fetching my ebooks:", err);
            error("เกิดข้อผิดพลาด", "ไม่สามารถโหลดรายการ E-books ได้");
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = async (slug: string, title: string) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${API_URL}/ebooks/${slug}/download`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                error("เกิดข้อผิดพลาด", "ไม่สามารถดาวน์โหลดได้");
                return;
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${slug}.pdf`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);

            success("ดาวน์โหลดสำเร็จ", `${title} ดาวน์โหลดเรียบร้อยแล้ว`);
        } catch (err) {
            console.error("Download error:", err);
            error("เกิดข้อผิดพลาด", "ไม่สามารถดาวน์โหลดได้");
        }
    };

    if (authLoading || loading) {
        return (
            <>
                <Navbar />
                <main className="container mx-auto px-4 pt-28 pb-16">
                    <div className="text-center py-20">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-white/20 border-t-red-500"></div>
                        <p className="mt-4 text-white/60">กำลังโหลด...</p>
                    </div>
                </main>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <main className="container mx-auto px-4 pt-28 pb-16">
                {/* Header */}
                <div className="mb-8">
                    <Link
                        href="/ebooks"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-4"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        กลับไปหน้า E-Books
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        📚 E-Books ของฉัน
                    </h1>
                    <p className="text-white/60 text-lg">
                        E-Books ทั้งหมดที่คุณสามารถเข้าถึงได้
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="glass rounded-2xl p-6 border border-white/10">
                        <div className="text-3xl font-bold text-red-400 mb-1">{ebooks.length}</div>
                        <div className="text-white/60">E-Books ทั้งหมด</div>
                    </div>
                    <div className="glass rounded-2xl p-6 border border-white/10">
                        <div className="text-3xl font-bold text-blue-400 mb-1">
                            {ebooks.filter((e) => e.access_type === "free").length}
                        </div>
                        <div className="text-white/60">E-Books ฟรี</div>
                    </div>
                    <div className="glass rounded-2xl p-6 border border-white/10">
                        <div className="text-3xl font-bold text-green-400 mb-1">
                            {ebooks.filter((e) => e.access_type === "members_only").length}
                        </div>
                        <div className="text-white/60">E-Books สมาชิก</div>
                    </div>
                </div>

                {/* E-Books Grid */}
                {ebooks.length === 0 ? (
                    <div className="text-center py-20 glass rounded-2xl border border-white/10">
                        <div className="text-6xl mb-4">📚</div>
                        <h2 className="text-2xl font-bold mb-2">ยังไม่มี E-Books</h2>
                        <p className="text-white/60 mb-6">
                            คุณยังไม่ได้ดาวน์โหลด E-Books เลย ลองดูคอลเลกชันของเราสิ!
                        </p>
                        <Link href="/ebooks" className="btn-red inline-block">
                            ดู E-Books ทั้งหมด
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {ebooks.map((ebook) => (
                            <div
                                key={ebook.id}
                                className="group glass rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-300"
                            >
                                {/* Cover Image */}
                                <Link href={`/ebooks/${ebook.slug}`}>
                                    <div className="relative aspect-[3/4] bg-gradient-to-br from-white/5 to-white/10 overflow-hidden">
                                        {ebook.cover_image ? (
                                            <img
                                                src={ebook.cover_image}
                                                alt={ebook.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-8xl">
                                                📚
                                            </div>
                                        )}
                                    </div>
                                </Link>

                                {/* Content */}
                                <div className="p-4">
                                    <Link href={`/ebooks/${ebook.slug}`}>
                                        <h3 className="font-bold text-lg line-clamp-2 mb-2 group-hover:text-red-400 transition-colors">
                                            {ebook.title}
                                        </h3>
                                    </Link>

                                    {ebook.author && (
                                        <p className="text-sm text-white/60 mb-3">โดย {ebook.author}</p>
                                    )}

                                    {/* Stats */}
                                    <div className="flex items-center gap-4 text-xs text-white/50 mb-4">
                                        {ebook.pages_count && (
                                            <span className="flex items-center gap-1">
                                                <BookOpen className="h-3 w-3" />
                                                {ebook.pages_count} หน้า
                                            </span>
                                        )}
                                        <span className="flex items-center gap-1">
                                            <Download className="h-3 w-3" />
                                            {ebook.downloads_count}
                                        </span>
                                    </div>

                                    {/* Download Button */}
                                    <button
                                        onClick={() => handleDownload(ebook.slug, ebook.title)}
                                        className="w-full btn-red text-sm py-2"
                                    >
                                        <Download className="h-4 w-4 inline mr-2" />
                                        ดาวน์โหลดอีกครั้ง
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </>
    );
}
