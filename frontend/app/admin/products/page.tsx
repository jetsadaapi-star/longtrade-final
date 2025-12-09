'use client';

import { useState, useEffect } from 'react';
import { Plus, Search, Edit, Trash2, Eye, Download, Star, Package, TrendingUp, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { adminProducts } from '@/lib/admin-api';

interface Product {
    id: number;
    name: string;
    slug: string;
    category: 'indicators' | 'expert_advisors' | 'scripts' | 'tradingview';
    price: number;
    access_type: string;
    is_featured: boolean;
    status: string;
    downloads_count: number;
    created_at: string;
}

const categoryLabels: Record<string, string> = {
    indicators: 'Indicator',
    expert_advisors: 'Expert Advisor',
    scripts: 'Script',
    tradingview: 'TradingView',
};

const categoryColors: Record<string, string> = {
    indicators: 'bg-purple-100 text-purple-700 border-purple-200',
    expert_advisors: 'bg-blue-100 text-blue-700 border-blue-200',
    scripts: 'bg-orange-100 text-orange-700 border-orange-200',
    tradingview: 'bg-teal-100 text-teal-700 border-teal-200',
};

const categoryIcons: Record<string, React.ReactNode> = {
    indicators: <TrendingUp size={16} />,
    expert_advisors: <Sparkles size={16} />,
    scripts: <Package size={16} />,
    tradingview: <TrendingUp size={16} />,
};

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterCategory, setFilterCategory] = useState('all');

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        setIsLoading(true);
        const result = await adminProducts.getAll({ limit: 100 });
        if (result.data) {
            setProducts(result.data.data || result.data);
        }
        setIsLoading(false);
    };

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
        return matchesSearch && matchesCategory;
    });

    const handleDelete = async (id: number) => {
        if (confirm('คุณต้องการลบสินค้านี้หรือไม่?')) {
            await adminProducts.delete(id);
            loadProducts();
        }
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">สินค้า</h1>
                    <p className="text-gray-500 mt-1">จัดการ Indicators, EAs และ Scripts</p>
                </div>
                <div className="flex gap-2">
                    <Link
                        href="/admin/products/new?type=indicators"
                        className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all text-sm"
                    >
                        <Plus size={18} />
                        Indicator
                    </Link>
                    <Link
                        href="/admin/products/new?type=expert_advisors"
                        className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all text-sm"
                    >
                        <Plus size={18} />
                        EA
                    </Link>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'สินค้าทั้งหมด', value: products.length, color: 'from-emerald-500 to-teal-600', icon: <Package size={20} /> },
                    { label: 'Indicators', value: products.filter(p => p.category === 'indicators').length, color: 'from-purple-500 to-purple-600', icon: <TrendingUp size={20} /> },
                    { label: 'Expert Advisors', value: products.filter(p => p.category === 'expert_advisors').length, color: 'from-blue-500 to-blue-600', icon: <Sparkles size={20} /> },
                    { label: 'Scripts', value: products.filter(p => p.category === 'scripts').length, color: 'from-orange-500 to-orange-600', icon: <Package size={20} /> },
                ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white`}>
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">{stat.label}</p>
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="ค้นหาสินค้า..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                        />
                    </div>
                    <select
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white text-gray-700"
                    >
                        <option value="all">ทุกหมวดหมู่</option>
                        <option value="indicators">Indicators</option>
                        <option value="expert_advisors">Expert Advisors</option>
                        <option value="scripts">Scripts</option>
                        <option value="tradingview">TradingView</option>
                    </select>
                </div>
            </div>

            {/* Loading State */}
            {isLoading ? (
                <div className="flex items-center justify-center py-12">
                    <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                /* Products Table */
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-12">
                            <Package className="mx-auto text-gray-300 mb-4" size={48} />
                            <p className="text-gray-500">ไม่พบสินค้า</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">สินค้า</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">หมวดหมู่</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ราคา</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ดาวน์โหลด</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">สถานะ</th>
                                        <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">จัดการ</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredProducts.map((product) => (
                                        <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    {product.is_featured && <Star className="text-amber-400 flex-shrink-0" size={16} />}
                                                    <span className="font-semibold text-gray-900">{product.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border ${categoryColors[product.category]}`}>
                                                    {categoryIcons[product.category]}
                                                    {categoryLabels[product.category]}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                {product.access_type === 'free' || product.price === 0 ? (
                                                    <span className="text-emerald-600 font-semibold">ฟรี</span>
                                                ) : (
                                                    <span className="font-semibold text-gray-900">฿{product.price.toLocaleString()}</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-1.5 text-gray-600">
                                                    <Download size={14} className="text-gray-400" />
                                                    {(product.downloads_count || 0).toLocaleString()}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${product.status === 'published'
                                                        ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-700 border border-emerald-200'
                                                        : 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-700 border border-amber-200'
                                                    }`}>
                                                    {product.status === 'published' ? 'เผยแพร่' : 'ฉบับร่าง'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-end gap-1">
                                                    <button className="p-2.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                                                        <Eye size={18} />
                                                    </button>
                                                    <Link href={`/admin/products/${product.id}/edit`} className="p-2.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all">
                                                        <Edit size={18} />
                                                    </Link>
                                                    <button onClick={() => handleDelete(product.id)} className="p-2.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all">
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
            )}
        </div>
    );
}
