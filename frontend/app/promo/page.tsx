"use client";

import { useState, useEffect } from "react";
import { Tag, Clock, Gift, Percent, TrendingUp, Sparkles, LogIn, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

interface Promotion {
    id: number;
    name: string;
    slug: string;
    description: string;
    type: string;
    discount_type: string;
    discount_value: string;
    max_discount_amount: string | null;
    min_purchase_amount: string;
    applicable_to: string;
    starts_at: string;
    ends_at: string | null;
    is_active: boolean;
    usage_limit: number | null;
    usage_per_user: number;
    current_usage: number;
    badge_text: string;
    badge_color: string;
    priority: number;
    user_usage_count?: number;
    user_can_use?: boolean;
}

interface PaginatedResponse {
    data: Promotion[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

const typeColors: Record<string, string> = {
    flash_sale: "bg-red-500/10 text-red-400 border-red-500/20",
    bundle: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    seasonal: "bg-green-500/10 text-green-400 border-green-500/20",
    member_exclusive: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
};

const badgeColors: Record<string, string> = {
    red: "bg-red-500/20 text-red-400 border-red-500/30",
    blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    green: "bg-green-500/20 text-green-400 border-green-500/30",
    gold: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
};

export default function PromotionsPage() {
    const [promotions, setPromotions] = useState<Promotion[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedType, setSelectedType] = useState<string>("all");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        checkAuth();
        fetchPromotions();
    }, [selectedType]);

    const checkAuth = () => {
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
    };

    const fetchPromotions = async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams();
            if (selectedType !== "all") {
                params.append("type", selectedType);
            }

            const token = localStorage.getItem("token");
            const headers: HeadersInit = {
                "Content-Type": "application/json",
            };

            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/promotions?${params}`,
                { headers }
            );
            const result = await response.json();

            if (result.success) {
                setPromotions(result.data.data || result.data);
            }
        } catch (error) {
            console.error("Error fetching promotions:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleJoinPromotion = (promo: Promotion) => {
        if (!isAuthenticated) {
            // Redirect to login page
            router.push("/login?redirect=/promo");
        } else {
            // Handle joining promotion (could open modal or redirect to checkout)
            console.log("Joining promotion:", promo.slug);
            // TODO: Implement promotion joining logic
        }
    };

    const formatDiscount = (promo: Promotion) => {
        if (promo.discount_type === "percentage") {
            const maxText = promo.max_discount_amount
                ? ` (สูงสุด ฿${Number(promo.max_discount_amount).toLocaleString()})`
                : "";
            return `ลด ${promo.discount_value}%${maxText}`;
        } else if (promo.discount_type === "fixed_amount") {
            return `ลด ฿${Number(promo.discount_value).toLocaleString()}`;
        }
        return "โปรโมชั่นพิเศษ";
    };

    const formatDateRange = (promo: Promotion) => {
        const start = new Date(promo.starts_at);
        const end = promo.ends_at ? new Date(promo.ends_at) : null;

        if (!end) {
            return "ไม่มีกำหนด";
        }

        const now = new Date();
        if (now < start) {
            return `เริ่ม ${start.toLocaleDateString("th-TH", {
                day: "numeric",
                month: "short",
            })}`;
        }

        if (now > end) {
            return "หมดเวลาแล้ว";
        }

        const daysLeft = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
        if (daysLeft <= 3) {
            return `เหลือ ${daysLeft} วัน!`;
        }

        return `ถึง ${end.toLocaleDateString("th-TH", {
            day: "numeric",
            month: "short",
        })}`;
    };

    const getTypeLabel = (type: string) => {
        const labels: Record<string, string> = {
            flash_sale: "Flash Sale",
            bundle: "Bundle Deal",
            seasonal: "โปรโมชั่นตามฤดูกาล",
            member_exclusive: "สมาชิกพิเศษ",
        };
        return labels[type] || type;
    };

    return (
        <div className="min-h-screen pt-24 pb-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-yellow-500/20 backdrop-blur-sm border border-red-500/30 rounded-full px-4 py-2 mb-6">
                        <Sparkles className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm font-medium text-yellow-400">
                            โปรโมชั่นพิเศษ
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                        โปรโมชั่นและส่วนลด
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        รวมโปรโมชั่นสุดพิเศษ ส่วนลดมากมาย สำหรับสินค้าและคอร์สเรียนทั้งหมด
                    </p>
                </div>

                {/* Filters */}
                <div className="glass rounded-2xl border border-white/10 p-6 mb-8">
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setSelectedType("all")}
                            className={`pill ${selectedType === "all"
                                ? "active"
                                : "bg-white/5 text-white/60 hover:text-white"
                                }`}
                        >
                            ทั้งหมด
                        </button>
                        <button
                            onClick={() => setSelectedType("flash_sale")}
                            className={`pill ${selectedType === "flash_sale"
                                ? "active"
                                : "bg-white/5 text-white/60 hover:text-white"
                                }`}
                        >
                            <TrendingUp className="h-4 w-4" />
                            Flash Sale
                        </button>
                        <button
                            onClick={() => setSelectedType("bundle")}
                            className={`pill ${selectedType === "bundle"
                                ? "active"
                                : "bg-white/5 text-white/60 hover:text-white"
                                }`}
                        >
                            <Gift className="h-4 w-4" />
                            Bundle Deal
                        </button>
                        <button
                            onClick={() => setSelectedType("member_exclusive")}
                            className={`pill ${selectedType === "member_exclusive"
                                ? "active"
                                : "bg-white/5 text-white/60 hover:text-white"
                                }`}
                        >
                            <Sparkles className="h-4 w-4" />
                            สมาชิกพิเศษ
                        </button>
                    </div>
                </div>

                {/* Promotions Grid */}
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="glass rounded-2xl border border-white/10 p-6 animate-pulse"
                            >
                                <div className="h-32 bg-white/5 rounded-xl mb-4" />
                                <div className="h-6 bg-white/5 rounded mb-2" />
                                <div className="h-4 bg-white/5 rounded w-2/3" />
                            </div>
                        ))}
                    </div>
                ) : promotions.length === 0 ? (
                    <div className="text-center py-16">
                        <Tag className="h-16 w-16 text-white/20 mx-auto mb-4" />
                        <p className="text-white/60 text-lg">ไม่มีโปรโมชั่นในขณะนี้</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {promotions.map((promo) => (
                            <div
                                key={promo.id}
                                className="glass rounded-2xl border border-white/10 p-6 hover:border-red-500/50 transition-all duration-300 hover:scale-[1.02] group relative overflow-hidden"
                            >
                                {/* Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <span
                                            className={`text-xs px-3 py-1 rounded-lg border ${typeColors[promo.type]
                                                }`}
                                        >
                                            {getTypeLabel(promo.type)}
                                        </span>
                                        <span
                                            className={`text-xs px-3 py-1 rounded-lg border font-medium ${badgeColors[promo.badge_color] ||
                                                badgeColors.red
                                                }`}
                                        >
                                            {promo.badge_text}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors">
                                        {promo.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-white/60 text-sm mb-4 line-clamp-2">
                                        {promo.description}
                                    </p>

                                    {/* Discount Info */}
                                    <div className="bg-gradient-to-r from-red-500/10 to-yellow-500/10 rounded-xl p-4 mb-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Percent className="h-5 w-5 text-red-400" />
                                            <span className="text-2xl font-bold text-red-400">
                                                {formatDiscount(promo)}
                                            </span>
                                        </div>
                                        <div className="text-xs text-white/60">
                                            ซื้อขั้นต่ำ ฿
                                            {Number(promo.min_purchase_amount).toLocaleString()}
                                        </div>
                                    </div>

                                    {/* User Usage Info (if authenticated) */}
                                    {isAuthenticated && promo.user_usage_count !== undefined && (
                                        <div className="mb-4 flex items-center gap-2 text-sm">
                                            <CheckCircle className="h-4 w-4 text-green-400" />
                                            <span className="text-white/60">
                                                ใช้ไปแล้ว {promo.user_usage_count}/{promo.usage_per_user} ครั้ง
                                            </span>
                                        </div>
                                    )}

                                    {/* Join Button */}
                                    <button
                                        onClick={() => handleJoinPromotion(promo)}
                                        disabled={isAuthenticated && promo.user_can_use === false}
                                        className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 mb-4 flex items-center justify-center gap-2 ${isAuthenticated && promo.user_can_use === false
                                                ? "bg-white/5 text-white/30 cursor-not-allowed"
                                                : "bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white shadow-lg shadow-red-500/20 hover:shadow-red-500/40"
                                            }`}
                                    >
                                        {!isAuthenticated ? (
                                            <>
                                                <LogIn className="h-5 w-5" />
                                                เข้าสู่ระบบเพื่อเข้าร่วม
                                            </>
                                        ) : promo.user_can_use === false ? (
                                            <>
                                                <CheckCircle className="h-5 w-5" />
                                                ใช้ครบแล้ว
                                            </>
                                        ) : (
                                            <>
                                                <Gift className="h-5 w-5" />
                                                เข้าร่วมโปรโมชั่น
                                            </>
                                        )}
                                    </button>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2 text-white/60">
                                            <Clock className="h-4 w-4" />
                                            <span>{formatDateRange(promo)}</span>
                                        </div>
                                        {promo.usage_limit && (
                                            <div className="text-white/60">
                                                เหลือ{" "}
                                                {promo.usage_limit - promo.current_usage} สิทธิ์
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
