'use client';

import { useState, useEffect } from 'react';
import { Plus, Search, Edit, Trash2, Gift, Percent, Tag, Calendar, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { adminPromotions } from '@/lib/admin-api';

interface Promotion {
    id: string;
    name: string;
    code: string;
    type: string;
    discount_type: string;
    discount_value: number;
    min_purchase?: number;
    max_discount?: number;
    usage_limit?: number;
    used_count: number;
    starts_at?: string;
    expires_at?: string;
    is_active: boolean;
    created_at: string;
}

export default function PromotionsPage() {
    const [promotions, setPromotions] = useState<Promotion[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        loadPromotions();
    }, []);

    const loadPromotions = async () => {
        setIsLoading(true);
        const result = await adminPromotions.getAll({ limit: 100 });
        if (result.data) {
            setPromotions(result.data.data || result.data || []);
        }
        setIsLoading(false);
    };

    const handleDelete = async (id: string) => {
        if (confirm('คุณต้องการลบโปรโมชันนี้หรือไม่?')) {
            await adminPromotions.delete(parseInt(id));
            loadPromotions();
        }
    };

    const formatDate = (dateStr: string) => {
        if (!dateStr) return '-';
        return new Date(dateStr).toLocaleDateString('th-TH', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    const filteredPromotions = promotions.filter(promo =>
        promo.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        promo.code?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const activeCount = promotions.filter(p => p.is_active).length;
    const totalUsed = promotions.reduce((sum, p) => sum + (p.used_count || 0), 0);

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">โปรโมชัน</h1>
                    <p className="text-gray-500 mt-1">จัดการโปรโมชันและส่วนลด</p>
                </div>
                <Link
                    href="/admin/promotions/new"
                    className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl hover:shadow-lg hover:shadow-rose-500/25 transition-all"
                >
                    <Plus size={18} />
                    <span>สร้างโปรโมชัน</span>
                </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'โปรโมชันทั้งหมด', value: promotions.length, color: 'from-rose-500 to-pink-600', icon: <Gift size={20} /> },
                    { label: 'ใช้งานอยู่', value: activeCount, color: 'from-emerald-500 to-teal-600', icon: <Tag size={20} /> },
                    { label: 'ใช้งานแล้ว', value: totalUsed, color: 'from-blue-500 to-blue-600', icon: <Percent size={20} /> },
                    { label: 'หมดอายุ', value: promotions.filter(p => !p.is_active).length, color: 'from-gray-500 to-gray-600', icon: <Calendar size={20} /> },
                ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">{stat.label}</p>
                                <p className={`text-3xl font-bold mt-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.value.toLocaleString()}</p>
                            </div>
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white opacity-80`}>{stat.icon}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Search */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="relative max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="ค้นหาโปรโมชัน..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {isLoading ? (
                    <div className="flex items-center justify-center py-12">
                        <Loader2 className="w-8 h-8 text-rose-500 animate-spin" />
                    </div>
                ) : filteredPromotions.length === 0 ? (
                    <div className="text-center py-12">
                        <Gift className="mx-auto text-gray-300 mb-4" size={48} />
                        <p className="text-gray-500">ไม่พบโปรโมชัน</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">โปรโมชัน</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">โค้ด</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">ส่วนลด</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">การใช้งาน</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">สถานะ</th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase">จัดการ</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredPromotions.map((promo) => (
                                    <tr key={promo.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                                                    <Gift className="text-white" size={18} />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">{promo.name}</p>
                                                    <p className="text-sm text-gray-500">{promo.expires_at ? `หมดอายุ ${formatDate(promo.expires_at)}` : 'ไม่มีวันหมดอายุ'}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <code className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-mono text-gray-700">{promo.code}</code>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-lg font-bold text-rose-600">
                                                {promo.discount_type === 'percentage' ? `${promo.discount_value}%` : `฿${Number(promo.discount_value).toLocaleString()}`}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {promo.used_count || 0} / {promo.usage_limit || '∞'}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${promo.is_active
                                                    ? 'bg-emerald-100 text-emerald-600'
                                                    : 'bg-gray-100 text-gray-600'
                                                }`}>
                                                {promo.is_active ? 'ใช้งาน' : 'ปิดใช้งาน'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-1">
                                                <Link href={`/admin/promotions/${promo.id}/edit`} className="p-2.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all">
                                                    <Edit size={18} />
                                                </Link>
                                                <button onClick={() => handleDelete(promo.id)} className="p-2.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all">
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
