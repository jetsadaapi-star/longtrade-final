import { formatDistanceToNow } from 'date-fns';
import { th } from 'date-fns/locale';
import RatingDisplay from './RatingDisplay';
import { CheckCircle } from 'lucide-react';

export interface Review {
    id: number;
    user_name: string;
    rating: number;
    title?: string;
    comment?: string;
    is_verified_purchase: boolean;
    created_at: string;
}

interface ReviewCardProps {
    review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
    const formatDate = (dateString: string) => {
        try {
            return formatDistanceToNow(new Date(dateString), {
                addSuffix: true,
                locale: th,
            });
        } catch {
            return dateString;
        }
    };

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-gray-900">{review.user_name}</h4>
                        {review.is_verified_purchase && (
                            <div className="flex items-center gap-1 text-green-600 text-sm">
                                <CheckCircle className="w-4 h-4" />
                                <span>ซื้อแล้ว</span>
                            </div>
                        )}
                    </div>
                    <RatingDisplay rating={review.rating} size="sm" />
                </div>
                <span className="text-sm text-gray-500">
                    {formatDate(review.created_at)}
                </span>
            </div>

            {/* Title */}
            {review.title && (
                <h5 className="font-medium text-gray-900 mb-2">{review.title}</h5>
            )}

            {/* Comment */}
            {review.comment && (
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {review.comment}
                </p>
            )}
        </div>
    );
}
