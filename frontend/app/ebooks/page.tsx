"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Head from "next/head";

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
    is_featured: boolean;
    category: Category;
}

interface PaginatedResponse {
    data: Ebook[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

export default function EbooksPage() {
    const [ebooks, setEbooks] = useState<Ebook[]>([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [selectedAccessType, setSelectedAccessType] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("latest");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

    // Fetch categories
    useEffect(() => {
        fetch(`${API_URL}/categories`)
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((err) => console.error("Error fetching categories:", err));
    }, [API_URL]);

    // Fetch ebooks
    useEffect(() => {
        setLoading(true);

        const params = new URLSearchParams({
            page: currentPage.toString(),
            per_page: "12",
            sort: sortBy,
        });

        if (selectedCategory !== "all") {
            params.append("category", selectedCategory);
        }

        if (selectedAccessType !== "all") {
            params.append("access_type", selectedAccessType);
        }

        if (searchQuery) {
            params.append("search", searchQuery);
        }

        fetch(`${API_URL}/ebooks?${params}`)
            .then((res) => res.json())
            .then((data: PaginatedResponse) => {
                setEbooks(data.data);
                setTotalPages(data.last_page);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching ebooks:", err);
                setLoading(false);
            });
    }, [API_URL, currentPage, selectedCategory, selectedAccessType, searchQuery, sortBy]);

    const getAccessBadge = (accessType: string) => {
        switch (accessType) {
            case "free":
                return (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                        🟢 ฟรี
                    </span>
                );
            case "members_only":
                return (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        🔵 สมาชิก
                    </span>
                );
            case "premium":
                return (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                        🟡 Premium
                    </span>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <Head>
                <title>E-Books - คลังความรู้ E-Books คุณภาพสูง | LongTrade Academy</title>
                <meta name="description" content="ดาวน์โหลด E-Books คุณภาพสูงเกี่ยวกับการเทรด Forex, Gold, และการลงทุน ฟรีและสำหรับสมาชิก พร้อมเนื้อหาจากผู้เชี่ยวชาญ" />
                <meta name="keywords" content="E-Books, Trading Books, Forex E-Books, Gold Trading, การเทรด, หนังสือเทรด, ดาวน์โหลดฟรี, LongTrade" />

                {/* Open Graph */}
                <meta property="og:title" content="E-Books - คลังความรู้การเทรด | LongTrade Academy" />
                <meta property="og:description" content="ดาวน์โหลด E-Books คุณภาพสูงเกี่ยวกับการเทรดและการลงทุน" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://longtrade.com/ebooks" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="E-Books - คลังความรู้การเทรด" />
                <meta name="twitter:description" content="ดาวน์โหลด E-Books คุณภาพสูงเกี่ยวกับการเทรดและการลงทุน" />
            </Head>
            <Navbar />
            <main className="container mx-auto px-4 pt-28 pb-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        📚 E-Books
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        คลังความรู้ E-Books คุณภาพสูง ดาวน์โหลดได้ทันที
                    </p>
                </div>

                {/* Filters */}
                <div className="glass rounded-2xl p-6 mb-8 border border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Search */}
                        <div className="md:col-span-2">
                            <input
                                type="text"
                                placeholder="🔍 ค้นหา E-Book..."
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-red-500/50 transition-colors"
                            />
                        </div>

                        {/* Category Filter */}
                        <select
                            value={selectedCategory}
                            onChange={(e) => {
                                setSelectedCategory(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-red-500/50 transition-colors"
                        >
                            <option value="all">ทุกหมวดหมู่</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.slug}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>

                        {/* Access Type Filter */}
                        <select
                            value={selectedAccessType}
                            onChange={(e) => {
                                setSelectedAccessType(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-red-500/50 transition-colors"
                        >
                            <option value="all">ทุกประเภท</option>
                            <option value="free">🟢 ฟรี</option>
                            <option value="members_only">🔵 สมาชิก</option>
                            <option value="premium">🟡 Premium</option>
                        </select>
                    </div>

                    {/* Sort */}
                    <div className="mt-4 flex items-center justify-between">
                        <div className="text-white/60 text-sm">
                            พบ {ebooks.length > 0 ? `${ebooks.length} รายการ` : "ไม่พบข้อมูล"}
                        </div>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-red-500/50 transition-colors"
                        >
                            <option value="latest">ล่าสุด</option>
                            <option value="popular">ยอดนิยม</option>
                            <option value="price_low">ราคาต่ำ-สูง</option>
                            <option value="price_high">ราคาสูง-ต่ำ</option>
                        </select>
                    </div>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="text-center py-20">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-white/20 border-t-red-500"></div>
                        <p className="mt-4 text-white/60">กำลังโหลด...</p>
                    </div>
                )}

                {/* E-Books Grid */}
                {!loading && ebooks.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {ebooks.map((ebook) => (
                            <Link
                                key={ebook.id}
                                href={`/ebooks/${ebook.slug}`}
                                className="group glass rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20"
                            >
                                {/* Cover Image */}
                                <div className="relative aspect-[3/4] bg-gradient-to-br from-white/5 to-white/10 overflow-hidden">
                                    {ebook.cover_image ? (
                                        <img
                                            src={ebook.cover_image}
                                            alt={ebook.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-6xl">
                                            📚
                                        </div>
                                    )}

                                    {/* Access Badge */}
                                    <div className="absolute top-3 right-3">
                                        {getAccessBadge(ebook.access_type)}
                                    </div>

                                    {/* Featured Badge */}
                                    {ebook.is_featured && (
                                        <div className="absolute top-3 left-3">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500/90 text-white">
                                                ⭐ แนะนำ
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-red-400 transition-colors">
                                        {ebook.title}
                                    </h3>

                                    {ebook.author && (
                                        <p className="text-sm text-white/60 mb-2">
                                            โดย {ebook.author}
                                        </p>
                                    )}

                                    <div className="flex items-center gap-3 text-xs text-white/50 mb-3">
                                        {ebook.pages_count && (
                                            <span>📄 {ebook.pages_count} หน้า</span>
                                        )}
                                        <span>⬇️ {ebook.downloads_count}</span>
                                    </div>

                                    {/* Price or Free */}
                                    {ebook.access_type === "premium" && parseFloat(ebook.price) > 0 ? (
                                        <div className="text-xl font-bold text-red-400">
                                            ฿{parseFloat(ebook.price).toLocaleString()}
                                        </div>
                                    ) : (
                                        <div className="text-green-400 font-semibold">
                                            ดาวน์โหลดฟรี
                                        </div>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {!loading && ebooks.length === 0 && (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">📚</div>
                        <h3 className="text-2xl font-bold mb-2">ไม่พบ E-Book</h3>
                        <p className="text-white/60">ลองเปลี่ยนตัวกรองหรือคำค้นหาดูครับ</p>
                    </div>
                )}

                {/* Pagination */}
                {!loading && totalPages > 1 && (
                    <div className="mt-12 flex justify-center gap-2">
                        <button
                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 glass rounded-xl border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed hover:border-red-500/50 transition-colors"
                        >
                            ← ก่อนหน้า
                        </button>

                        <div className="flex items-center gap-2">
                            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                const page = i + 1;
                                return (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`px-4 py-2 rounded-xl border transition-colors ${currentPage === page
                                            ? "bg-red-500 border-red-500 text-white"
                                            : "glass border-white/10 hover:border-red-500/50"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 glass rounded-xl border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed hover:border-red-500/50 transition-colors"
                        >
                            ถัดไป →
                        </button>
                    </div>
                )}
            </main>
        </>
    );
}
