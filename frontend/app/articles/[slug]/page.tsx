'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ShareButtons from '@/components/ShareButtons';
import ReadingProgress from '@/components/ReadingProgress';
import { Clock, Eye, Calendar, User, ChevronRight, ShoppingBag, TrendingUp } from 'lucide-react';

interface Article {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    featured_image: string;
    author: string;
    read_time: number;
    published_at: string;
    views_count: number;
    tags: string[] | string;
    category: {
        id: number;
        name: string;
        slug: string;
    };
}

interface LatestArticle {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    featured_image: string;
    published_at: string;
    read_time: number;
}

interface Product {
    id: number;
    name: string;
    slug: string;
    category_label: string;
    formatted_price: string;
    thumbnail: any;
}

export default function ArticleDetailPage() {
    const params = useParams();
    const slug = params.slug as string;

    const [article, setArticle] = useState<Article | null>(null);
    const [relatedArticles, setRelatedArticles] = useState<LatestArticle[]>([]);
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (slug) {
            fetchArticle();
            fetchRelatedProducts();
        }
    }, [slug]);

    const fetchArticle = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/${slug}`);
            const data = await response.json();
            if (data.success) {
                setArticle(data.data.article);
                // ใช้ related articles จาก API response
                if (data.data.related_articles) {
                    setRelatedArticles(data.data.related_articles.slice(0, 4));
                }
            }
        } catch (error) {
            console.error('Error fetching article:', error);
        } finally {
            setLoading(false);
        }
    };



    const fetchRelatedProducts = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?per_page=4&is_featured=true`);
            const data = await response.json();
            if (data.success) {
                setRelatedProducts(data.data.data);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }).format(date);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4 text-gray-900">ไม่พบบทความ</h1>
                    <Link href="/articles" className="text-red-600 hover:underline">
                        กลับไปหน้าบทความ
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <ReadingProgress />

            <main className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
                        <Link href="/" className="hover:text-gray-900">หน้าแรก</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/articles" className="hover:text-gray-900">บทความ</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-red-600 font-medium">{article.category.name}</span>
                    </nav>

                    <div className="grid lg:grid-cols-12 gap-8">
                        {/* Sidebar - Latest Articles */}
                        <aside className="lg:col-span-3 hidden lg:block">
                            <div className="sticky top-24 space-y-6">
                                {/* Promotional Banner */}
                                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white shadow-lg">
                                    <div className="text-sm font-semibold mb-2">🎉 โปรโมชั่นแนะนำ</div>
                                    <h3 className="text-lg font-bold mb-2">ลดพิเศษสูงสุด 50%</h3>
                                    <p className="text-sm text-white/90 mb-4">
                                        สำหรับคอร์สเรียนและ EA ทุกตัว
                                    </p>
                                    <Link
                                        href="/promo"
                                        className="inline-block bg-white text-red-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
                                    >
                                        ดูโปรโมชั่น →
                                    </Link>
                                </div>

                                {/* Related Articles */}
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">บทความที่เกี่ยวข้อง</h3>
                                    <div className="space-y-4">
                                        {relatedArticles && Array.isArray(relatedArticles) && relatedArticles.map((item) => (
                                            <Link
                                                key={item.id}
                                                href={`/articles/${item.slug}`}
                                                className="block bg-white rounded-lg p-3 hover:shadow-md transition-shadow border border-gray-200"
                                            >
                                                {item.featured_image && (
                                                    <div className="aspect-video relative rounded-md overflow-hidden mb-2">
                                                        <Image
                                                            src={item.featured_image}
                                                            alt={item.title}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                )}
                                                <h4 className="font-semibold text-sm text-gray-900 line-clamp-2 mb-1">
                                                    {item.title}
                                                </h4>
                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                    <Calendar className="w-3 h-3" />
                                                    <span>{formatDate(item.published_at)}</span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <div className="lg:col-span-9">
                            {/* Article Card */}
                            <article className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                                {/* Featured Image */}
                                {article.featured_image && (
                                    <div className="relative w-full aspect-video">
                                        <Image
                                            src={article.featured_image}
                                            alt={article.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                )}

                                {/* Content */}
                                <div className="p-8 md:p-12">
                                    {/* Category Badge */}
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-medium mb-4">
                                        {article.category.name}
                                    </div>

                                    {/* Title */}
                                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                        {article.title}
                                    </h1>

                                    {/* Meta */}
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 pb-6 mb-6 border-b border-gray-200">
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4" />
                                            <span>{article.author}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{formatDate(article.published_at)}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            <span>{article.read_time} นาที</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Eye className="w-4 h-4" />
                                            <span>{article.views_count.toLocaleString()} views</span>
                                        </div>
                                    </div>

                                    {/* Excerpt */}
                                    {article.excerpt && (
                                        <div className="text-xl text-gray-700 mb-8 font-medium border-l-4 border-red-500 pl-6 py-2">
                                            {article.excerpt}
                                        </div>
                                    )}

                                    {/* Article Content */}
                                    <div
                                        className="prose prose-lg max-w-none
                                        prose-headings:text-gray-900 prose-headings:font-bold
                                        prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-3
                                        prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                                        prose-p:text-gray-900 prose-p:leading-relaxed prose-p:mb-4
                                        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-800 hover:prose-a:underline
                                        prose-strong:text-gray-900 prose-strong:font-bold
                                        prose-ul:my-4 prose-li:my-1 prose-li:text-gray-900
                                        prose-ol:my-4 prose-ol:text-gray-900
                                        prose-img:rounded-lg prose-img:shadow-md
                                        prose-blockquote:border-l-red-500 prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:text-gray-900
                                        [&>*]:text-gray-900"
                                        dangerouslySetInnerHTML={{ __html: article.content }}
                                    />

                                    {/* Tags */}
                                    {(() => {
                                        let tags: string[] = [];
                                        if (article.tags) {
                                            if (Array.isArray(article.tags)) {
                                                tags = article.tags;
                                            } else if (typeof article.tags === 'string') {
                                                try {
                                                    tags = JSON.parse(article.tags);
                                                } catch (e) {
                                                    tags = [];
                                                }
                                            }
                                        }

                                        if (tags.length === 0) return null;

                                        return (
                                            <div className="mt-8 pt-6 border-t border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3">แท็กที่เกี่ยวข้อง</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {tags.map((tag, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-3 py-1 rounded-full bg-gray-100 border border-gray-300 text-sm text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
                                                        >
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })()}

                                    {/* Share Buttons */}
                                    <div className="mt-8 pt-6 border-t border-gray-200">
                                        <h3 className="text-lg font-bold text-gray-900 mb-3">แชร์บทความนี้</h3>
                                        <ShareButtons title={article.title} />
                                    </div>
                                </div>
                            </article>

                            {/* Related Products Section */}
                            {relatedProducts.length > 0 && (
                                <section className="mt-12">
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-2xl font-bold text-gray-900">สินค้าและบริการ</h2>
                                        <Link href="/products" className="text-sm text-red-600 hover:text-red-700 flex items-center gap-1">
                                            ดูทั้งหมด <ChevronRight className="w-4 h-4" />
                                        </Link>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                        {relatedProducts.map((product) => (
                                            <Link
                                                key={product.id}
                                                href={`/products/${product.slug}`}
                                                className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
                                            >
                                                {/* Thumbnail */}
                                                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-3 overflow-hidden relative">
                                                    {product.thumbnail ? (
                                                        <Image
                                                            src={product.thumbnail.url}
                                                            alt={product.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    ) : (
                                                        <div className="flex items-center justify-center h-full">
                                                            <ShoppingBag className="h-12 w-12 text-gray-400" />
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Category */}
                                                <div className="text-xs text-gray-600 mb-2">{product.category_label}</div>

                                                {/* Title */}
                                                <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2 group-hover:text-red-600 transition-colors">
                                                    {product.name}
                                                </h3>

                                                {/* Price */}
                                                <div className="text-lg font-bold text-red-600">
                                                    {product.formatted_price}
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
