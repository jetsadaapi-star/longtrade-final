"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import {
    ShoppingBag,
    Download,
    Bot,
    TrendingUp,
    Code,
    Loader2,
} from "lucide-react";

interface Product {
    id: number;
    name: string;
    slug: string;
    category: string;
    category_label: string;
    price: number;
    formatted_price: string;
    file_version: string;
    thumbnail: any;
    created_at: string;
}

interface GroupedProducts {
    expert_advisors: Product[];
    indicators: Product[];
    scripts: Product[];
}

export default function MyProductsPage() {
    const router = useRouter();
    const { user, loading: authLoading } = useAuth();
    const [products, setProducts] = useState<GroupedProducts>({
        expert_advisors: [],
        indicators: [],
        scripts: [],
    });
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const [downloading, setDownloading] = useState<string | null>(null);

    useEffect(() => {
        if (!authLoading) {
            if (!user) {
                router.push("/login");
            } else {
                fetchProducts();
            }
        }
    }, [user, authLoading]);

    const fetchProducts = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/user/products`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const result = await response.json();

            if (result.success) {
                setProducts(result.data);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = async (slug: string) => {
        setDownloading(slug);
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/products/${slug}/download`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const result = await response.json();

            if (result.success) {
                window.open(result.data.download_url, "_blank");
            } else {
                alert(result.message || "ไม่สามารถดาวน์โหลดได้");
            }
        } catch (error) {
            console.error("Error downloading:", error);
            alert("เกิดข้อผิดพลาดในการดาวน์โหลด");
        } finally {
            setDownloading(null);
        }
    };

    const allProducts = [
        ...products.expert_advisors,
        ...products.indicators,
        ...products.scripts,
    ];

    const filteredProducts =
        activeCategory === "all"
            ? allProducts
            : activeCategory === "expert_advisors"
                ? products.expert_advisors
                : activeCategory === "indicators"
                    ? products.indicators
                    : products.scripts;

    const categoryIcons: Record<string, any> = {
        expert_advisors: Bot,
        indicators: TrendingUp,
        scripts: Code,
    };

    const categoryColors: Record<string, string> = {
        expert_advisors: "green",
        indicators: "blue",
        scripts: "yellow",
    };

    if (authLoading || loading) {
        return (
            <div className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="h-12 w-12 text-red-400 animate-spin mx-auto mb-4" />
                    <p className="text-white/60">กำลังโหลด...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                        สินค้าของฉัน
                    </h1>
                    <p className="text-white/60 text-lg">
                        จัดการและดาวน์โหลดสินค้าที่คุณซื้อแล้ว
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2 mb-8">
                    <button
                        onClick={() => setActiveCategory("all")}
                        className={`pill ${activeCategory === "all"
                            ? "active"
                            : "bg-white/5 text-white/60 hover:text-white"
                            }`}
                    >
                        ทั้งหมด ({allProducts.length})
                    </button>
                    <button
                        onClick={() => setActiveCategory("expert_advisors")}
                        className={`pill ${activeCategory === "expert_advisors"
                            ? "active"
                            : "bg-white/5 text-white/60 hover:text-white"
                            }`}
                    >
                        <Bot className="h-4 w-4" />
                        Expert Advisors ({products.expert_advisors.length})
                    </button>
                    <button
                        onClick={() => setActiveCategory("indicators")}
                        className={`pill ${activeCategory === "indicators"
                            ? "active"
                            : "bg-white/5 text-white/60 hover:text-white"
                            }`}
                    >
                        <TrendingUp className="h-4 w-4" />
                        อินดิเคเตอร์ ({products.indicators.length})
                    </button>
                    <button
                        onClick={() => setActiveCategory("scripts")}
                        className={`pill ${activeCategory === "scripts"
                            ? "active"
                            : "bg-white/5 text-white/60 hover:text-white"
                            }`}
                    >
                        <Code className="h-4 w-4" />
                        TradingView ({products.scripts.length})
                    </button>
                </div>

                {/* Products Grid */}
                {filteredProducts.length === 0 ? (
                    <div className="text-center py-16 glass rounded-2xl border border-white/10">
                        <ShoppingBag className="h-16 w-16 text-white/20 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">ยังไม่มีสินค้า</h3>
                        <p className="text-white/60 mb-6">
                            คุณยังไม่ได้ซื้อสินค้าในหมวดหมู่นี้
                        </p>
                        <Link href="/products" className="pill cta inline-flex items-center gap-2">
                            <ShoppingBag className="h-4 w-4" />
                            เลือกซื้อสินค้า
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => {
                            const Icon = categoryIcons[product.category];
                            const color = categoryColors[product.category];

                            return (
                                <div
                                    key={product.id}
                                    className="glass rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all"
                                >
                                    {/* Thumbnail */}
                                    <div
                                        className={`aspect-video bg-gradient-to-br from-${color}-500/10 to-${color}-600/10 rounded-xl mb-4 overflow-hidden`}
                                    >
                                        {product.thumbnail ? (
                                            <img
                                                src={product.thumbnail.url}
                                                alt={product.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full">
                                                <Icon className={`h-12 w-12 text-${color}-400/40`} />
                                            </div>
                                        )}
                                    </div>

                                    {/* Category Badge */}
                                    <div className="mb-3">
                                        <span
                                            className={`text-xs px-2 py-1 rounded-lg bg-${color}-500/10 text-${color}-400 border border-${color}-500/20`}
                                        >
                                            {product.category_label}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold mb-2 line-clamp-2">
                                        {product.name}
                                    </h3>

                                    {/* Version */}
                                    {product.file_version && (
                                        <p className="text-sm text-white/60 mb-4">
                                            เวอร์ชัน {product.file_version}
                                        </p>
                                    )}

                                    {/* Actions */}
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleDownload(product.slug)}
                                            disabled={downloading === product.slug}
                                            className="flex-1 pill cta justify-center disabled:opacity-50"
                                        >
                                            {downloading === product.slug ? (
                                                <>
                                                    <Loader2 className="h-4 w-4 animate-spin" />
                                                    กำลังดาวน์โหลด...
                                                </>
                                            ) : (
                                                <>
                                                    <Download className="h-4 w-4" />
                                                    ดาวน์โหลด
                                                </>
                                            )}
                                        </button>
                                        <Link
                                            href={`/products/${product.slug}`}
                                            className="pill bg-white/5 hover:bg-white/10"
                                        >
                                            ดูรายละเอียด
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
