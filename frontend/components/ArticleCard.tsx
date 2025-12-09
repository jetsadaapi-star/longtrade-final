"use client";

import Link from 'next/link';
import Image from 'next/image';
import type { Article } from '@/lib/api';

interface ArticleCardProps {
    article: Article;
    isFeatured?: boolean;
}

export default function ArticleCard({ article, isFeatured = false }: ArticleCardProps) {
    const formatDate = (dateString?: string) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }).format(date);
    };

    // Use featured_image or fallback to placeholder
    const imageUrl = article.featured_image || '/images/placeholder.jpg';
    const excerpt = article.excerpt || article.content?.substring(0, 150) + '...' || '';

    if (isFeatured) {
        return (
            <Link
                href={`/articles/${article.slug}`}
                className="group rounded-2xl overflow-hidden bg-white/[0.04] border border-white/10 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,.06)] hover:border-red-500/50 transition-all duration-300"
            >
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/images/placeholder.jpg';
                        }}
                    />
                    <div className="absolute top-4 right-4">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            ⭐ แนะนำ
                        </span>
                    </div>
                </div>
                <div className="p-6">
                    {article.category && (
                        <div className="flex items-center gap-2 mb-3">
                            <span className="bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-xs font-semibold border border-red-500/20">
                                {article.category.name}
                            </span>
                        </div>
                    )}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors line-clamp-2">
                        {article.title}
                    </h3>
                    <p className="text-white/70 text-sm line-clamp-2 mb-4">{excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-white/50">
                        {article.published_at && <span>{formatDate(article.published_at)}</span>}
                        {article.views_count !== undefined && (
                            <span>{article.views_count.toLocaleString()} views</span>
                        )}
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <Link
            href={`/articles/${article.slug}`}
            className="group rounded-2xl overflow-hidden bg-white/[0.04] border border-white/10 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,.06)] hover:border-white/20 transition-all duration-300"
        >
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/placeholder.jpg';
                    }}
                />
            </div>
            <div className="p-6">
                {article.category && (
                    <div className="flex items-center gap-2 mb-3">
                        <span className="bg-white/5 text-white/80 px-3 py-1 rounded-full text-xs font-semibold border border-white/10">
                            {article.category.name}
                        </span>
                    </div>
                )}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors line-clamp-2">
                    {article.title}
                </h3>
                <p className="text-white/70 text-sm line-clamp-2 mb-4">{excerpt}</p>
                <div className="flex items-center justify-between text-sm text-white/50">
                    {article.published_at && <span>{formatDate(article.published_at)}</span>}
                    {article.views_count !== undefined && (
                        <span>{article.views_count.toLocaleString()} views</span>
                    )}
                </div>
            </div>
        </Link>
    );
}

