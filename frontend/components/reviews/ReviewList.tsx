'use client';

import { useState, useEffect } from 'react';
import ReviewCard, { Review } from './ReviewCard';
import { ChevronDown } from 'lucide-react';

interface ReviewListProps {
    productType: string;
    productSlug: string;
    initialReviews?: Review[];
}

export default function ReviewList({
    productType,
    productSlug,
    initialReviews = [],
}: ReviewListProps) {
    const [reviews, setReviews] = useState<Review[]>(initialReviews);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [sortBy, setSortBy] = useState('created_at');
    const [filterRating, setFilterRating] = useState<number | null>(null);

    const fetchReviews = async (pageNum: number, reset: boolean = false) => {
        setLoading(true);
        try {
            const params = new URLSearchParams({
                page: pageNum.toString(),
                sort: sortBy,
                order: 'desc',
            });

            if (filterRating) {
                params.append('rating', filterRating.toString());
            }

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/reviews/${productType}/${productSlug}?${params}`
            );

            if (!response.ok) throw new Error('Failed to fetch reviews');

            const data = await response.json();

            if (reset) {
                setReviews(data.data);
            } else {
                setReviews((prev) => [...prev, ...data.data]);
            }

            setHasMore(data.current_page < data.last_page);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (initialReviews.length === 0) {
            fetchReviews(1, true);
        }
    }, [sortBy, filterRating]);

    const loadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchReviews(nextPage);
    };

    return (
        <div className="space-y-6">
            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="flex gap-2">
                    <button
                        onClick={() => setFilterRating(null)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterRating === null
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        ทั้งหมด
                    </button>
                    {[5, 4, 3, 2, 1].map((rating) => (
                        <button
                            key={rating}
                            onClick={() => setFilterRating(rating)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterRating === rating
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {rating} ⭐
                        </button>
                    ))}
                </div>

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="created_at">ล่าสุด</option>
                    <option value="rating">คะแนนสูงสุด</option>
                </select>
            </div>

            {/* Reviews */}
            <div className="space-y-4">
                {reviews.length === 0 && !loading && (
                    <div className="text-center py-12 text-gray-500">
                        ยังไม่มีรีวิว
                    </div>
                )}

                {reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>

            {/* Load More */}
            {hasMore && (
                <div className="flex justify-center">
                    <button
                        onClick={loadMore}
                        disabled={loading}
                        className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {loading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
                                <span>กำลังโหลด...</span>
                            </>
                        ) : (
                            <>
                                <span>โหลดเพิ่มเติม</span>
                                <ChevronDown className="w-5 h-5" />
                            </>
                        )}
                    </button>
                </div>
            )}
        </div>
    );
}
