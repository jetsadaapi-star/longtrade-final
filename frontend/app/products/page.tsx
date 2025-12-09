"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Filter, ShoppingBag, Download, Star } from "lucide-react";

interface Product {
    id: number;
    name: string;
    slug: string;
    description: string;
    category: string;
    category_label: string;
    price: number;
    formatted_price: string;
    access_type: string;
    file_version: string;
    downloads_count: number;
    views_count: number;
    rating: number;
    is_featured: boolean;
    thumbnail: any;
    featured_image: any;
}

interface PaginatedResponse {
    data: Product[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

const categoryColors: Record<string, string> = {
    expert_advisors: "bg-green-500/10 text-green-400 border-green-500/20",
    indicators: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    scripts: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
};

const accessTypeColors: Record<string, string> = {
    free: "bg-green-500/10 text-green-400",
    premium: "bg-yellow-500/10 text-yellow-400",
    members_only: "bg-blue-500/10 text-blue-400",
};

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [selectedAccessType, setSelectedAccessType] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("created_at");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchProducts();
    }, [selectedCategory, selectedAccessType, searchQuery, sortBy, currentPage]);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams({
                page: currentPage.toString(),
                per_page: "12",
                sort_by: sortBy,
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
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/products?${params}`
            );
            const result = await response.json();

            if (result.success) {
                setProducts(result.data.data);
                setTotalPages(result.data.last_page);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                        สินค้าและบริการ
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        เครื่องมือเทรดคุณภาพสูง Expert Advisors, อินดิเคเตอร์ และ TradingView
                    </p>
                </div>

                {/* Filters */}
                <div className="glass rounded-2xl border border-white/10 p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Search */}
                        <div className="md:col-span-2">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                                <input
                                    type="text"
                                    placeholder="ค้นหาสินค้า..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-red-500/50 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Category Filter */}
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500/50 transition-colors"
                        >
                            <option value="all">ทุกประเภท</option>
                            <option value="expert_advisors">Expert Advisors</option>
                            <option value="indicators">อินดิเคเตอร์</option>
                            <option value="scripts">TradingView</option>
                        </select>

                        {/* Sort */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500/50 transition-colors"
                        >
                            <option value="created_at">ล่าสุด</option>
                            <option value="popular">ยอดนิยม</option>
                            <option value="price">ราคา: ต่ำ-สูง</option>
                        </select>
                    </div>

                    {/* Access Type Pills */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        <button
                            onClick={() => setSelectedAccessType("all")}
                            className={`pill ${selectedAccessType === "all"
                                ? "active"
                                : "bg-white/5 text-white/60 hover:text-white"
                                }`}
                        >
                            ทั้งหมด
                        </button>
                        <button
                            onClick={() => setSelectedAccessType("free")}
                            className={`pill ${selectedAccessType === "free"
                                ? "active"
                                : "bg-white/5 text-white/60 hover:text-white"
                                }`}
                        >
                            ฟรี
                        </button>
                        <button
                            onClick={() => setSelectedAccessType("premium")}
                            className={`pill ${selectedAccessType === "premium"
                                ? "active"
                                : "bg-white/5 text-white/60 hover:text-white"
                                }`}
                        >
                            พรีเมียม
                        </button>
                    </div>
                </div>

                {/* Products Grid */}
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="glass rounded-2xl border border-white/10 p-6 animate-pulse"
                            >
                                <div className="aspect-video bg-white/5 rounded-xl mb-4" />
                                <div className="h-6 bg-white/5 rounded mb-2" />
                                <div className="h-4 bg-white/5 rounded w-2/3" />
                            </div>
                        ))}
                    </div>
                ) : products.length === 0 ? (
                    <div className="text-center py-16">
                        <ShoppingBag className="h-16 w-16 text-white/20 mx-auto mb-4" />
                        <p className="text-white/60 text-lg">ไม่พบสินค้า</p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <Link
                                    key={product.id}
                                    href={`/products/${product.slug}`}
                                    className="glass rounded-2xl border border-white/10 p-6 hover:border-red-500/50 transition-all duration-300 hover:scale-[1.02] group"
                                >
                                    {/* Thumbnail */}
                                    <div className="aspect-video bg-gradient-to-br from-white/5 to-white/10 rounded-xl mb-4 overflow-hidden relative">
                                        {product.thumbnail ? (
                                            <img
                                                src={product.thumbnail.url}
                                                alt={product.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full">
                                                <ShoppingBag className="h-12 w-12 text-white/20" />
                                            </div>
                                        )}
                                        {product.is_featured && (
                                            <div className="absolute top-2 right-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-lg px-2 py-1 flex items-center gap-1">
                                                <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                                                <span className="text-xs text-yellow-400 font-medium">
                                                    แนะนำ
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Category Badge */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <span
                                            className={`text-xs px-2 py-1 rounded-lg border ${categoryColors[product.category]
                                                }`}
                                        >
                                            {product.category_label}
                                        </span>
                                        <span
                                            className={`text-xs px-2 py-1 rounded-lg ${accessTypeColors[product.access_type]
                                                }`}
                                        >
                                            {product.access_type === "free"
                                                ? "ฟรี"
                                                : product.access_type === "premium"
                                                    ? "พรีเมียม"
                                                    : "สมาชิก"}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors line-clamp-2">
                                        {product.name}
                                    </h3>

                                    {/* Stats */}
                                    <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Download className="h-4 w-4" />
                                            <span>{product.downloads_count.toLocaleString()}</span>
                                        </div>
                                        {product.rating > 0 && (
                                            <div className="flex items-center gap-1">
                                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                <span>{Number(product.rating).toFixed(1)}</span>
                                            </div>
                                        )}
                                        {product.file_version && (
                                            <span className="text-xs">v{product.file_version}</span>
                                        )}
                                    </div>

                                    {/* Price */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold text-red-400">
                                            {product.formatted_price}
                                        </span>
                                        <span className="text-sm text-white/60 group-hover:text-white transition-colors">
                                            ดูรายละเอียด →
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center gap-2 mt-8">
                                <button
                                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    className="pill bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    ← ก่อนหน้า
                                </button>
                                <div className="flex items-center gap-2">
                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentPage(i + 1)}
                                            className={`pill ${currentPage === i + 1
                                                ? "active"
                                                : "bg-white/5 text-white/60"
                                                }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={() =>
                                        setCurrentPage((p) => Math.min(totalPages, p + 1))
                                    }
                                    disabled={currentPage === totalPages}
                                    className="pill bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    ถัดไป →
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
