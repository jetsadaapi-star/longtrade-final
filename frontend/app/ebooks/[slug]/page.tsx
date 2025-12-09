"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import PaymentModal from "@/components/Payment/PaymentModal";
import Link from "next/link";
import Head from "next/head";
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
    preview_percentage: number;
    is_featured: boolean;
    category: Category;
    created_at: string;
}

export default function EbookDetailPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;
    const { success, error } = useToast();

    const [ebook, setEbook] = useState<Ebook | null>(null);
    const [loading, setLoading] = useState(true);
    const [downloading, setDownloading] = useState(false);
    const [relatedEbooks, setRelatedEbooks] = useState<Ebook[]>([]);
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

    useEffect(() => {
        if (!slug) return;

        // Fetch ebook details
        fetch(`${API_URL}/ebooks/${slug}`)
            .then((res) => {
                if (!res.ok) throw new Error("E-Book not found");
                return res.json();
            })
            .then((data: Ebook) => {
                setEbook(data);
                setLoading(false);

                // Track view
                fetch(`${API_URL}/ebooks/${slug}/track-view`, {
                    method: "POST",
                }).catch((err) => console.error("Error tracking view:", err));

                // Fetch related ebooks
                if (data.category) {
                    fetch(`${API_URL}/ebooks?category=${data.category.slug}&per_page=4`)
                        .then((res) => res.json())
                        .then((response) => {
                            const filtered = response.data.filter((e: Ebook) => e.id !== data.id);
                            setRelatedEbooks(filtered.slice(0, 3));
                        })
                        .catch((err) => console.error("Error fetching related ebooks:", err));
                }
            })
            .catch((err) => {
                console.error("Error fetching ebook:", err);
                setLoading(false);
            });
    }, [slug, API_URL]);

    const handleDownload = async () => {
        if (!ebook) return;

        // Check if authentication is required
        if (ebook.access_type === "members_only" || ebook.access_type === "premium") {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("กรุณาเข้าสู่ระบบเพื่อดาวน์โหลด E-Book นี้");
                router.push("/login");
                return;
            }
        }

        setDownloading(true);

        try {
            const token = localStorage.getItem("token");
            const headers: HeadersInit = {};
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }

            const response = await fetch(`${API_URL}/ebooks/${slug}/download`, {
                headers,
            });

            if (!response.ok) {
                const error = await response.json();
                if (response.status === 401) {
                    alert(error.message || "กรุณาเข้าสู่ระบบเพื่อดาวน์โหลด");
                    router.push("/login");
                    return;
                }
                throw new Error(error.message || "Download failed");
            }

            // Get filename from Content-Disposition header or use default
            const contentDisposition = response.headers.get("Content-Disposition");
            let filename = `${ebook.title}.pdf`;
            if (contentDisposition) {
                const matches = /filename="?([^"]+)"?/.exec(contentDisposition);
                if (matches && matches[1]) {
                    filename = matches[1];
                }
            }

            // Download file
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);

            // Update download count locally
            setEbook((prev) => prev ? { ...prev, downloads_count: prev.downloads_count + 1 } : null);

            // Show success notification
            success("ดาวน์โหลดสำเร็จ", `${ebook.title} ดาวน์โหลดเรียบร้อยแล้ว`);
        } catch (err) {
            console.error("Download error:", err);
            error("เกิดข้อผิดพลาด", "ไม่สามารถดาวน์โหลดได้ กรุณาลองใหม่อีกครั้ง");
        } finally {
            setDownloading(false);
        }
    };

    const getAccessBadge = (accessType: string) => {
        switch (accessType) {
            case "free":
                return (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                        🟢 ฟรีสำหรับทุกคน
                    </span>
                );
            case "members_only":
                return (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        🔵 สมาชิกเท่านั้น
                    </span>
                );
            case "premium":
                return (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                        🟡 Premium
                    </span>
                );
            default:
                return null;
        }
    };

    if (loading) {
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

    if (!ebook) {
        return (
            <>
                <Navbar />
                <main className="container mx-auto px-4 pt-28 pb-16">
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">❌</div>
                        <h1 className="text-3xl font-bold mb-2">ไม่พบ E-Book</h1>
                        <p className="text-white/60 mb-6">E-Book ที่คุณค้นหาไม่มีอยู่ในระบบ</p>
                        <Link href="/ebooks" className="btn-red">
                            กลับไปหน้า E-Books
                        </Link>
                    </div>
                </main>
            </>
        );
    }

    // Strip HTML tags from description for meta tags
    const stripHtml = (html: string) => {
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

    const metaDescription = ebook.description
        ? stripHtml(ebook.description).substring(0, 160)
        : `ดาวน์โหลด E-Book ${ebook.title} ${ebook.author ? `โดย ${ebook.author}` : ''} - LongTrade Academy`;

    const pageUrl = `https://longtrade.com/ebooks/${ebook.slug}`;

    // JSON-LD Structured Data
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Book",
        "name": ebook.title,
        "author": ebook.author ? {
            "@type": "Person",
            "name": ebook.author
        } : undefined,
        "description": metaDescription,
        "image": ebook.cover_image || undefined,
        "numberOfPages": ebook.pages_count || undefined,
        "genre": ebook.category.name,
        "aggregateRating": ebook.downloads_count > 0 ? {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "reviewCount": ebook.downloads_count
        } : undefined,
        "offers": ebook.access_type === "premium" && parseFloat(ebook.price) > 0 ? {
            "@type": "Offer",
            "price": ebook.price,
            "priceCurrency": "THB",
            "availability": "https://schema.org/InStock"
        } : {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "THB",
            "availability": "https://schema.org/InStock"
        }
    };

    return (
        <>
            <Head>
                <title>{ebook.title} - E-Book | LongTrade Academy</title>
                <meta name="description" content={metaDescription} />
                <meta name="keywords" content={`${ebook.title}, ${ebook.category.name}, E-Book, Trading, ${ebook.author || ''}, ดาวน์โหลด`} />

                {/* Open Graph */}
                <meta property="og:title" content={`${ebook.title} - E-Book | LongTrade Academy`} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:type" content="book" />
                <meta property="og:url" content={pageUrl} />
                {ebook.cover_image && <meta property="og:image" content={ebook.cover_image} />}
                <meta property="book:author" content={ebook.author || 'LongTrade Academy'} />
                <meta property="book:tag" content={ebook.category.name} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${ebook.title} - E-Book`} />
                <meta name="twitter:description" content={metaDescription} />
                {ebook.cover_image && <meta name="twitter:image" content={ebook.cover_image} />}

                {/* Canonical URL */}
                <link rel="canonical" href={pageUrl} />

                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>
            <Navbar />
            <main className="container mx-auto px-4 pt-28 pb-16">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-white/60 mb-8">
                    <Link href="/ebooks" className="hover:text-white transition-colors">
                        E-Books
                    </Link>
                    <span>/</span>
                    <Link href={`/ebooks?category=${ebook.category.slug}`} className="hover:text-white transition-colors">
                        {ebook.category.name}
                    </Link>
                    <span>/</span>
                    <span className="text-white">{ebook.title}</span>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Left: Cover Image */}
                    <div className="lg:col-span-1">
                        <div className="glass rounded-2xl p-6 border border-white/10 sticky top-24">
                            <div className="relative aspect-[3/4] bg-gradient-to-br from-white/5 to-white/10 rounded-xl overflow-hidden mb-4">
                                {ebook.cover_image ? (
                                    <img
                                        src={ebook.cover_image}
                                        alt={ebook.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-8xl">
                                        📚
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            {ebook.access_type === "premium" ? (
                                <>
                                    <button
                                        onClick={() => setShowPaymentModal(true)}
                                        className="w-full btn-red mb-3"
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            💳 ซื้อเลย ฿{parseFloat(ebook.price).toLocaleString()}
                                        </span>
                                    </button>
                                    <p className="text-xs text-center text-white/50">
                                        รองรับ PromptPay, โอนธนาคาร, บัตรเครดิต
                                    </p>
                                </>
                            ) : (
                                <button
                                    onClick={handleDownload}
                                    disabled={downloading}
                                    className="w-full btn-red mb-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {downloading ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/20 border-t-white"></div>
                                            กำลังดาวน์โหลด...
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            ⬇️ ดาวน์โหลด E-Book
                                        </span>
                                    )}
                                </button>
                            )}

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-3 text-center text-sm">
                                <div className="glass rounded-xl p-3 border border-white/10">
                                    <div className="text-2xl font-bold text-red-400">{ebook.downloads_count}</div>
                                    <div className="text-white/60">ดาวน์โหลด</div>
                                </div>
                                <div className="glass rounded-xl p-3 border border-white/10">
                                    <div className="text-2xl font-bold text-blue-400">{ebook.views_count}</div>
                                    <div className="text-white/60">เข้าชม</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Details */}
                    <div className="lg:col-span-2">
                        <div className="glass rounded-2xl p-8 border border-white/10">
                            {/* Title & Badge */}
                            <div className="mb-4">
                                {getAccessBadge(ebook.access_type)}
                            </div>

                            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
                                {ebook.title}
                            </h1>

                            {/* Author & Category */}
                            <div className="flex flex-wrap items-center gap-4 mb-6 text-white/70">
                                {ebook.author && (
                                    <div className="flex items-center gap-2">
                                        <span className="text-white/50">✍️</span>
                                        <span>{ebook.author}</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-2">
                                    <span className="text-white/50">📂</span>
                                    <Link
                                        href={`/ebooks?category=${ebook.category.slug}`}
                                        className="hover:text-red-400 transition-colors"
                                    >
                                        {ebook.category.name}
                                    </Link>
                                </div>
                                {ebook.pages_count && (
                                    <div className="flex items-center gap-2">
                                        <span className="text-white/50">📄</span>
                                        <span>{ebook.pages_count} หน้า</span>
                                    </div>
                                )}
                            </div>

                            {/* Price */}
                            {ebook.access_type === "premium" && parseFloat(ebook.price) > 0 && (
                                <div className="mb-6">
                                    <div className="text-3xl font-bold text-red-400">
                                        ฿{parseFloat(ebook.price).toLocaleString()}
                                    </div>
                                </div>
                            )}

                            {/* Description */}
                            <div className="prose prose-invert max-w-none">
                                <h2 className="text-xl font-bold mb-3">รายละเอียด</h2>
                                <div
                                    className="text-white/80 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: ebook.description }}
                                />
                            </div>

                            {/* Preview Info */}
                            {ebook.access_type !== "free" && ebook.preview_percentage > 0 && (
                                <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">ℹ️</span>
                                        <div>
                                            <div className="font-semibold text-blue-400 mb-1">
                                                ตัวอย่าง {ebook.preview_percentage}%
                                            </div>
                                            <div className="text-sm text-white/70">
                                                คุณสามารถดูตัวอย่าง {ebook.preview_percentage}% ของเนื้อหาได้ก่อนดาวน์โหลดเต็ม
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Related E-Books */}
                {relatedEbooks.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">E-Books ที่เกี่ยวข้อง</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedEbooks.map((related) => (
                                <Link
                                    key={related.id}
                                    href={`/ebooks/${related.slug}`}
                                    className="group glass rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:scale-105"
                                >
                                    <div className="relative aspect-[3/4] bg-gradient-to-br from-white/5 to-white/10">
                                        {related.cover_image ? (
                                            <img
                                                src={related.cover_image}
                                                alt={related.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-6xl">
                                                📚
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold line-clamp-2 group-hover:text-red-400 transition-colors">
                                            {related.title}
                                        </h3>
                                        {related.author && (
                                            <p className="text-sm text-white/60 mt-1">โดย {related.author}</p>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </main>

            {/* Payment Modal */}
            {ebook && (
                <PaymentModal
                    isOpen={showPaymentModal}
                    onClose={() => setShowPaymentModal(false)}
                    productName={ebook.title}
                    amount={parseFloat(ebook.price)}
                    productId={ebook.id}
                    productType="ebook"
                    onSuccess={() => {
                        // Redirect to My E-books after successful payment
                        router.push("/my-ebooks");
                    }}
                />
            )}
        </>
    );
}
