import { Star } from 'lucide-react';

interface RatingDisplayProps {
    rating: number;
    maxRating?: number;
    size?: 'sm' | 'md' | 'lg';
    showValue?: boolean;
    className?: string;
}

export default function RatingDisplay({
    rating,
    maxRating = 5,
    size = 'md',
    showValue = false,
    className = '',
}: RatingDisplayProps) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
    };

    const textSizeClasses = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
    };

    return (
        <div className={`flex items-center gap-1 ${className}`}>
            {Array.from({ length: maxRating }).map((_, index) => {
                const fillPercentage = Math.min(Math.max(rating - index, 0), 1) * 100;

                return (
                    <div key={index} className="relative">
                        {/* Background star (empty) */}
                        <Star
                            className={`${sizeClasses[size]} text-gray-300`}
                            fill="currentColor"
                        />

                        {/* Foreground star (filled) */}
                        <div
                            className="absolute top-0 left-0 overflow-hidden"
                            style={{ width: `${fillPercentage}%` }}
                        >
                            <Star
                                className={`${sizeClasses[size]} text-yellow-400`}
                                fill="currentColor"
                            />
                        </div>
                    </div>
                );
            })}

            {showValue && (
                <span className={`ml-1 font-medium text-gray-700 ${textSizeClasses[size]}`}>
                    {rating.toFixed(1)}
                </span>
            )}
        </div>
    );
}
