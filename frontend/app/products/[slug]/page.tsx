"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import PaymentModal from "@/components/Payment/PaymentModal";
import {
    Download,
    Star,
    Eye,
    ShoppingBag,
    CheckCircle,
    AlertCircle,
    ExternalLink,
} from "lucide-react";

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
    file_size: number;
    requirements: string;
    installation_guide: string;
    demo_url: string;
    downloads_count: number;
    views_count: number;
    rating: number;
    is_featured: boolean;
    thumbnail: any;
    featured_image: any;
    screenshots: any[];
    can_download: boolean;
}

export default function ProductDetailPage() {
    const params = useParams();
    const router = useRouter();
    const { user } = useAuth();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("overview");
    const [paymentModalOpen, setPaymentModalOpen] = useState(false);
    const [downloading, setDownloading] = useState(false);

    useEffect(() => {
        if (params.slug) {
            fetchProduct();
            trackView();
        }
    }, [params.slug]);

    const fetchProduct = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/products/${params.slug}`
            );
            const result = await response.json();

            if (result.success) {
                setProduct(result.data);
            }
        } catch (error) {
            console.error("Error fetching product:", error);
        } finally {
            setLoading(false);
        }
    };

    const trackView = async () => {
        try {
            await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/products/${params.slug}/track-view`,
                { method: "POST" }
            );
        } catch (error) {
            console.error("Error tracking view:", error);
        }
    };

    const handleDownload = async () => {
        if (!user) {
            router.push("/login");
            return;
        }

        setDownloading(true);
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/products/${params.slug}/download`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const result = await response.json();

            if (result.success) {
                // Open download URL in new tab
                window.open(result.data.download_url, "_blank");
            } else {
                alert(result.message || "ไม่สามารถดาวน์โหลดได้");
            }
        } catch (error) {
            console.error("Error downloading:", error);
            alert("เกิดข้อผิดพลาดในการดาวน์โหลด");
        } finally {
            setDownloading(false);
        }
    };

    const handlePurchase = () => {
        if (!user) {
            router.push("/login");
            return;
        }
        setPaymentModalOpen(true);
    };

    if (loading) {
        return (
            <div className="min-h-screen pt-24 pb-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="glass rounded-2xl border border-white/10 p-8 animate-pulse">
                        <div className="h-96 bg-white/5 rounded-xl mb-6" />
                        <div className="h-8 bg-white/5 rounded w-2/3 mb-4" />
                        <div className="h-4 bg-white/5 rounded w-1/2" />
                    </div>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen pt-24 pb-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <ShoppingBag className="h-16 w-16 text-white/20 mx-auto mb-4" />
                    <h1 className="text-2xl font-bold mb-2">ไม่พบสินค้า</h1>
                    <p className="text-white/60">สินค้าที่คุณค้นหาไม่มีอยู่ในระบบ</p>
                </div>
            </div>
        );
    }

    const categoryColor =
        product.category === "expert_advisors"
            ? "green"
            : product.category === "indicators"
                ? "blue"
                : "yellow";

    return (
        <>
            <div className="min-h-screen pt-24 pb-16 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Hero Section */}
                    <div className="glass rounded-2xl border border-white/10 overflow-hidden mb-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                            {/* Left: Image */}
                            <div>
                                <div className="aspect-video bg-gradient-to-br from-white/5 to-white/10 rounded-xl overflow-hidden mb-4">
                                    {product.featured_image ? (
                                        <img
                                            src={product.featured_image.url}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full">
                                            <ShoppingBag className="h-16 w-16 text-white/20" />
                                        </div>
                                    )}
                                </div>

                                {/* Screenshots */}
                                {product.screenshots && product.screenshots.length > 0 && (
                                    <div className="grid grid-cols-4 gap-2">
                                        {product.screenshots.map((screenshot: any, index: number) => (
                                            <div
                                                key={index}
                                                className="aspect-video bg-white/5 rounded-lg overflow-hidden"
                                            >
                                                <img
                                                    src={screenshot.media.url}
                                                    alt={`Screenshot ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Right: Info */}
                            <div>
                                {/* Badges */}
                                <div className="flex items-center gap-2 mb-4">
                                    <span
                                        className={`text-xs px-3 py-1 rounded-lg border bg-${categoryColor}-500/10 text-${categoryColor}-400 border-${categoryColor}-500/20`}
                                    >
                                        {product.category_label}
                                    </span>
                                    <span
                                        className={`text-xs px-3 py-1 rounded-lg ${product.access_type === "free"
                                            ? "bg-green-500/10 text-green-400"
                                            : "bg-yellow-500/10 text-yellow-400"
                                            }`}
                                    >
                                        {product.access_type === "free" ? "ฟรี" : "พรีเมียม"}
                                    </span>
                                    {product.is_featured && (
                                        <span className="text-xs px-3 py-1 rounded-lg bg-yellow-500/10 text-yellow-400 flex items-center gap-1">
                                            <Star className="h-3 w-3 fill-yellow-400" />
                                            แนะนำ
                                        </span>
                                    )}
                                </div>

                                {/* Title */}
                                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                                    {product.name}
                                </h1>

                                {/* Stats */}
                                <div className="flex items-center gap-6 text-white/60 mb-6">
                                    <div className="flex items-center gap-2">
                                        <Download className="h-5 w-5" />
                                        <span>{product.downloads_count.toLocaleString()} ดาวน์โหลด</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Eye className="h-5 w-5" />
                                        <span>{product.views_count.toLocaleString()} ครั้ง</span>
                                    </div>
                                    {product.rating > 0 && (
                                        <div className="flex items-center gap-2">
                                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                            <span>{Number(product.rating).toFixed(1)}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Price */}
                                <div className="mb-6">
                                    <div className={`text-4xl font-bold text-${categoryColor}-400 mb-2`}>
                                        {product.formatted_price}
                                    </div>
                                    {product.file_version && (
                                        <p className="text-white/60 text-sm">
                                            เวอร์ชัน {product.file_version}
                                        </p>
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="space-y-3">
                                    {product.can_download ? (
                                        <button
                                            onClick={handleDownload}
                                            disabled={downloading}
                                            className="w-full pill cta justify-center text-lg py-4 disabled:opacity-50"
                                        >
                                            <Download className="h-5 w-5" />
                                            {downloading ? "กำลังดาวน์โหลด..." : "ดาวน์โหลด"}
                                        </button>
                                    ) : product.access_type === "free" ? (
                                        <button
                                            onClick={handleDownload}
                                            className="w-full pill cta justify-center text-lg py-4"
                                        >
                                            <Download className="h-5 w-5" />
                                            ดาวน์โหลดฟรี
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handlePurchase}
                                            className="w-full pill cta justify-center text-lg py-4"
                                        >
                                            <ShoppingBag className="h-5 w-5" />
                                            ซื้อเลย {product.formatted_price}
                                        </button>
                                    )}

                                    {product.demo_url && (
                                        <a
                                            href={product.demo_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full pill bg-white/5 hover:bg-white/10 justify-center flex items-center gap-2"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            ดู Demo
                                        </a>
                                    )}
                                </div>

                                {/* Quick Info */}
                                <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <div className="text-white/60 mb-1">ประเภท</div>
                                            <div className="font-medium">{product.category_label}</div>
                                        </div>
                                        <div>
                                            <div className="text-white/60 mb-1">เวอร์ชัน</div>
                                            <div className="font-medium">
                                                {product.file_version || "N/A"}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="glass rounded-2xl border border-white/10 overflow-hidden">
                        {/* Tab Headers */}
                        <div className="flex border-b border-white/10">
                            <button
                                onClick={() => setActiveTab("overview")}
                                className={`flex-1 px-6 py-4 font-medium transition-colors ${activeTab === "overview"
                                    ? `text-${categoryColor}-400 border-b-2 border-${categoryColor}-400`
                                    : "text-white/60 hover:text-white"
                                    }`}
                            >
                                ภาพรวม
                            </button>
                            <button
                                onClick={() => setActiveTab("requirements")}
                                className={`flex-1 px-6 py-4 font-medium transition-colors ${activeTab === "requirements"
                                    ? `text-${categoryColor}-400 border-b-2 border-${categoryColor}-400`
                                    : "text-white/60 hover:text-white"
                                    }`}
                            >
                                ความต้องการ
                            </button>
                            <button
                                onClick={() => setActiveTab("installation")}
                                className={`flex-1 px-6 py-4 font-medium transition-colors ${activeTab === "installation"
                                    ? `text-${categoryColor}-400 border-b-2 border-${categoryColor}-400`
                                    : "text-white/60 hover:text-white"
                                    }`}
                            >
                                การติดตั้ง
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="p-8">
                            {activeTab === "overview" && (
                                <div
                                    className="prose prose-invert max-w-none"
                                    dangerouslySetInnerHTML={{ __html: product.description || "ไม่มีข้อมูล" }}
                                />
                            )}
                            {activeTab === "requirements" && (
                                <div
                                    className="prose prose-invert max-w-none"
                                    dangerouslySetInnerHTML={{
                                        __html: product.requirements || "ไม่มีข้อมูล",
                                    }}
                                />
                            )}
                            {activeTab === "installation" && (
                                <div
                                    className="prose prose-invert max-w-none"
                                    dangerouslySetInnerHTML={{
                                        __html: product.installation_guide || "ไม่มีข้อมูล",
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Modal */}
            {paymentModalOpen && (
                <PaymentModal
                    isOpen={paymentModalOpen}
                    onClose={() => setPaymentModalOpen(false)}
                    productType="product"
                    productId={product.id}
                    productName={product.name}
                    amount={product.price}
                    onSuccess={() => {
                        // Redirect to My Products after successful payment
                        router.push("/my-products");
                    }}
                />
            )}
        </>
    );
}
