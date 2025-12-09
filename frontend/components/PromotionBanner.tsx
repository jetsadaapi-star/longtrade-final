'use client';

import { useEffect, useState } from 'react';
import { Promotion } from '@/data/types';
import Link from 'next/link';
import { X } from 'lucide-react';

interface PromotionBannerProps {
    position?: 'top' | 'bottom';
    maxPromotions?: number;
}

export default function PromotionBanner({ position = 'top', maxPromotions = 1 }: PromotionBannerProps) {
    const [promotions, setPromotions] = useState<Promotion[]>([]);
    const [dismissed, setDismissed] = useState<number[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPromotions();
    }, []);

    const fetchPromotions = async () => {
        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/v1\/?$/, '') || '';
            const response = await fetch(`${baseUrl}/api/v1/promotions/featured`, {
                headers: {
                    'Accept': 'application/json',
                }
            });
            const data = await response.json();

            if (data.success) {
                setPromotions(data.data.slice(0, maxPromotions));
            }
        } catch (error) {
            console.error('Error fetching promotions:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDismiss = (id: number) => {
        setDismissed([...dismissed, id]);
        // Store in localStorage
        const dismissedIds = JSON.parse(localStorage.getItem('dismissedPromotions') || '[]');
        localStorage.setItem('dismissedPromotions', JSON.stringify([...dismissedIds, id]));
    };

    const visiblePromotions = promotions.filter(p => !dismissed.includes(p.id));

    if (loading || visiblePromotions.length === 0) {
        return null;
    }

    return (
        <div className={`w-full ${position === 'top' ? 'top-0' : 'bottom-0'} z-40`}>
            {visiblePromotions.map((promotion) => (
                <div
                    key={promotion.id}
                    className="relative bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4"
                    style={{ backgroundColor: promotion.badge_color || undefined }}
                >
                    <div className="container mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1">
                            {promotion.badge_text && (
                                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                                    {promotion.badge_text}
                                </span>
                            )}
                            <div className="flex-1">
                                <h3 className="font-bold text-lg">{promotion.name}</h3>
                                {promotion.description && (
                                    <p className="text-sm text-white/90">{promotion.description}</p>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Link
                                href={`/promotions/${promotion.slug}`}
                                className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                ดูรายละเอียด
                            </Link>

                            <button
                                onClick={() => handleDismiss(promotion.id)}
                                className="text-white/80 hover:text-white transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
