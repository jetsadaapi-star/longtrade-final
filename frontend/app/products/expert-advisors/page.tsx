"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Bot, Download, Star, ShoppingBag } from "lucide-react";

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
}

export default function ExpertAdvisorsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("created_at");

    useEffect(() => {
        fetchProducts();
    }, [searchQuery, sortBy]);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams({
                sort_by: sortBy,
                per_page: "12",
            });

            if (searchQuery) {
                params.append("search", searchQuery);
            }

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/products/category/expert_advisors?${params}`
            );
            const result = await response.json();

            if (result.success) {
                setProducts(result.data.data);
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
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 mb-6">
                        <Bot className="h-10 w-10 text-green-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent">
                        Expert Advisors (EA)
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        โปรแกรมเทรดอัตโนมัติคุณภาพสูง ช่วยให้คุณเทรดได้ตลอด 24 ชั่วโมง
                    </p>
                </div>

                {/* Filters */}
                <div className="glass rounded-2xl border border-white/10 p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                            <input
                                type="text"
                                placeholder="ค้นหา EA..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-green-500/50 transition-colors"
                            />
                        </div>

                        {/* Sort */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500/50 transition-colors"
                        >
                            <option value="created_at">ล่าสุด</option>
                            <option value="popular">ยอดนิยม</option>
                            <option value="price">ราคา: ต่ำ-สูง</option>
                        </select>
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
                        <Bot className="h-16 w-16 text-white/20 mx-auto mb-4" />
                        <p className="text-white/60 text-lg">ไม่พบ Expert Advisors</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <Link
                                key={product.id}
                                href={`/products/${product.slug}`}
                                className="glass rounded-2xl border border-white/10 p-6 hover:border-green-500/50 transition-all duration-300 hover:scale-[1.02] group"
                            >
                                {/* Thumbnail */}
                                <div className="aspect-video bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl mb-4 overflow-hidden relative">
                                    {product.thumbnail ? (
                                        <img
                                            src={product.thumbnail.url}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full">
                                            <Bot className="h-12 w-12 text-green-400/40" />
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

                                {/* Access Type Badge */}
                                <div className="mb-3">
                                    <span
                                        className={`text-xs px-2 py-1 rounded-lg ${product.access_type === "free"
                                            ? "bg-green-500/10 text-green-400"
                                            : "bg-yellow-500/10 text-yellow-400"
                                            }`}
                                    >
                                        {product.access_type === "free" ? "ฟรี" : "พรีเมียม"}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors line-clamp-2">
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
                                            <span>{product.rating.toFixed(1)}</span>
                                        </div>
                                    )}
                                    {product.file_version && (
                                        <span className="text-xs">v{product.file_version}</span>
                                    )}
                                </div>

                                {/* Price */}
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-green-400">
                                        {product.formatted_price}
                                    </span>
                                    <span className="text-sm text-white/60 group-hover:text-white transition-colors">
                                        ดูรายละเอียด →
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
