import RatingDisplay from './RatingDisplay';

interface RatingBreakdown {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
}

interface ReviewStatsProps {
    averageRating: number;
    totalReviews: number;
    ratingBreakdown: RatingBreakdown;
    verifiedPurchases?: number;
}

export default function ReviewStats({
    averageRating,
    totalReviews,
    ratingBreakdown,
    verifiedPurchases = 0,
}: ReviewStatsProps) {
    const getRatingPercentage = (count: number): number => {
        if (totalReviews === 0) return 0;
        return (count / totalReviews) * 100;
    };

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold mb-4">คะแนนรีวิว</h3>

            {/* Overall Rating */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
                <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-1">
                        {averageRating.toFixed(1)}
                    </div>
                    <RatingDisplay rating={averageRating} size="md" />
                    <div className="text-sm text-gray-500 mt-2">
                        {totalReviews} รีวิว
                    </div>
                </div>
            </div>

            {/* Rating Breakdown */}
            <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => {
                    const count = ratingBreakdown[rating as keyof RatingBreakdown] || 0;
                    const percentage = getRatingPercentage(count);

                    return (
                        <div key={rating} className="flex items-center gap-2">
                            <div className="flex items-center gap-1 w-16">
                                <span className="text-sm font-medium text-gray-700">{rating}</span>
                                <svg
                                    className="w-4 h-4 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>

                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-yellow-400 transition-all duration-300"
                                    style={{ width: `${percentage}%` }}
                                />
                            </div>

                            <span className="text-sm text-gray-600 w-12 text-right">
                                {count}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Verified Purchases */}
            {verifiedPurchases > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <svg
                            className="w-5 h-5 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>
                            {verifiedPurchases} รีวิวจากผู้ซื้อที่ยืนยันแล้ว
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}
