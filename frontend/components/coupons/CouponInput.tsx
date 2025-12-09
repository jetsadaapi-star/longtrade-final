'use client';

import { useState } from 'react';
import { Tag, X } from 'lucide-react';

interface CouponInputProps {
    onApply: (discount: number, couponCode: string) => void;
    onRemove: () => void;
    totalAmount: number;
    appliedCoupon?: string;
}

export default function CouponInput({
    onApply,
    onRemove,
    totalAmount,
    appliedCoupon,
}: CouponInputProps) {
    const [couponCode, setCouponCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleApply = async () => {
        if (!couponCode.trim()) {
            setError('กรุณากรอกรหัสคูปอง');
            return;
        }

        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/coupons/validate`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        code: couponCode,
                        amount: totalAmount,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'รหัสคูปองไม่ถูกต้อง');
            }

            if (data.valid) {
                setSuccess(data.message);
                onApply(data.discount, couponCode.toUpperCase());
                setCouponCode('');
            } else {
                setError(data.message);
            }
        } catch (err: any) {
            setError(err.message || 'เกิดข้อผิดพลาดในการตรวจสอบคูปอง');
        } finally {
            setLoading(false);
        }
    };

    const handleRemove = () => {
        setSuccess('');
        setError('');
        onRemove();
    };

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-2 mb-3">
                <Tag className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">รหัสส่วนลด</h3>
            </div>

            {appliedCoupon ? (
                <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <Tag className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-green-900">
                                {appliedCoupon}
                            </p>
                            <p className="text-xs text-green-700">ใช้คูปองสำเร็จ</p>
                        </div>
                    </div>
                    <button
                        onClick={handleRemove}
                        className="p-1 hover:bg-green-100 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5 text-green-700" />
                    </button>
                </div>
            ) : (
                <>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={couponCode}
                            onChange={(e) => {
                                setCouponCode(e.target.value.toUpperCase());
                                setError('');
                                setSuccess('');
                            }}
                            onKeyPress={(e) => e.key === 'Enter' && handleApply()}
                            placeholder="กรอกรหัสคูปอง"
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 uppercase"
                            disabled={loading}
                        />
                        <button
                            onClick={handleApply}
                            disabled={loading || !couponCode.trim()}
                            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                'ใช้'
                            )}
                        </button>
                    </div>

                    {error && (
                        <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded text-sm text-red-800">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded text-sm text-green-800">
                            {success}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
