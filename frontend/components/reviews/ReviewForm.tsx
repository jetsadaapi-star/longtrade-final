'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';

interface ReviewFormProps {
    productType: string;
    productId: number;
    onSuccess?: () => void;
}

export default function ReviewForm({
    productType,
    productId,
    onSuccess,
}: ReviewFormProps) {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        rating: 0,
        title: '',
        comment: '',
    });
    const [hoveredRating, setHoveredRating] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/reviews`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        reviewable_type: productType,
                        reviewable_id: productId,
                        ...formData,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'เกิดข้อผิดพลาด');
            }

            setSuccess(true);
            setFormData({
                user_name: '',
                user_email: '',
                rating: 0,
                title: '',
                comment: '',
            });

            if (onSuccess) {
                onSuccess();
            }

            // Hide success message after 5 seconds
            setTimeout(() => setSuccess(false), 5000);
        } catch (err: any) {
            setError(err.message || 'เกิดข้อผิดพลาดในการส่งรีวิว');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold mb-4">เขียนรีวิว</h3>

            {success && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    รีวิวของคุณถูกส่งเรียบร้อยแล้ว รอการอนุมัติจากผู้ดูแลระบบ
                </div>
            )}

            {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Rating */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        คะแนน <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <button
                                key={rating}
                                type="button"
                                onClick={() => setFormData({ ...formData, rating })}
                                onMouseEnter={() => setHoveredRating(rating)}
                                onMouseLeave={() => setHoveredRating(0)}
                                className="focus:outline-none transition-transform hover:scale-110"
                            >
                                <Star
                                    className={`w-8 h-8 ${rating <= (hoveredRating || formData.rating)
                                            ? 'text-yellow-400 fill-yellow-400'
                                            : 'text-gray-300'
                                        }`}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Name */}
                <div>
                    <label
                        htmlFor="user_name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        ชื่อ <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="user_name"
                        required
                        value={formData.user_name}
                        onChange={(e) =>
                            setFormData({ ...formData, user_name: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="กรอกชื่อของคุณ"
                    />
                </div>

                {/* Email */}
                <div>
                    <label
                        htmlFor="user_email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        อีเมล <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="user_email"
                        required
                        value={formData.user_email}
                        onChange={(e) =>
                            setFormData({ ...formData, user_email: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="กรอกอีเมลของคุณ"
                    />
                </div>

                {/* Title */}
                <div>
                    <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        หัวข้อรีวิว
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={formData.title}
                        onChange={(e) =>
                            setFormData({ ...formData, title: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="สรุปความคิดเห็นของคุณ"
                    />
                </div>

                {/* Comment */}
                <div>
                    <label
                        htmlFor="comment"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        รีวิว
                    </label>
                    <textarea
                        id="comment"
                        rows={4}
                        value={formData.comment}
                        onChange={(e) =>
                            setFormData({ ...formData, comment: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        placeholder="แบ่งปันประสบการณ์ของคุณ..."
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading || formData.rating === 0}
                    className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    {loading ? 'กำลังส่ง...' : 'ส่งรีวิว'}
                </button>
            </form>
        </div>
    );
}
