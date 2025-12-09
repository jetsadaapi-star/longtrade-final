'use client';

import { useState, useEffect } from 'react';
import { ReviewStats, ReviewList, ReviewForm } from '@/components/reviews';

interface ReviewSectionProps {
    productType: string;
    productSlug: string;
    productId?: number;
    showForm?: boolean;
}

interface RatingBreakdown {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
}

interface ReviewStatsData {
    average_rating: number;
    total_reviews: number;
    rating_breakdown: RatingBreakdown;
    verified_purchases: number;
}

export default function ReviewSection({
    productType,
    productSlug,
    productId,
    showForm = true,
}: ReviewSectionProps) {
    const [stats, setStats] = useState<ReviewStatsData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000'}/api/v1/reviews/${productType}/${productSlug}/stats`
                );

                if (response.ok) {
                    const data = await response.json();
                    setStats(data);
                }
            } catch (error) {
                console.error('Error fetching review stats:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, [productType, productSlug]);

    if (loading) {
        return (
            <div className="space-y-6">
                <div className="glass rounded-2xl p-5 border border-white/10 animate-pulse">
                    <div className="h-8 bg-white/10 rounded w-1/3 mb-4"></div>
                    <div className="h-24 bg-white/10 rounded"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Review Statistics */}
            {stats && (
                <div className="glass rounded-2xl p-5 border border-white/10">
                    <h2 className="text-2xl font-bold mb-4">รีวิวและคะแนน</h2>
                    <ReviewStats
                        averageRating={stats.average_rating}
                        totalReviews={stats.total_reviews}
                        ratingBreakdown={stats.rating_breakdown}
                        verifiedPurchases={stats.verified_purchases}
                    />
                </div>
            )}

            {/* Review List */}
            <div className="glass rounded-2xl p-5 border border-white/10">
                <ReviewList
                    productType={productType}
                    productSlug={productSlug}
                />
            </div>

            {/* Review Form */}
            {showForm && productId && (
                <div className="glass rounded-2xl p-5 border border-white/10">
                    <h3 className="text-xl font-bold mb-4">เขียนรีวิวของคุณ</h3>
                    <ReviewForm
                        productType={productType}
                        productId={productId}
                    />
                </div>
            )}
        </div>
    );
}
