'use client';

import { useState, useEffect } from 'react';
import { Plus, Search, Edit, Trash2, Eye, Calendar, Star, FileText, Download } from 'lucide-react';
import Link from 'next/link';
import { adminArticles } from '@/lib/admin-api';

interface Article {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    is_featured: boolean;
    is_published: boolean;
    views_count: number;
    category?: { name: string };
    published_at: string;
    created_at: string;
}

export default function ArticlesPage() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');

    useEffect(() => {
        loadArticles();
    }, []);

    const loadArticles = async () => {
        setIsLoading(true);
        const result = await adminArticles.getAll({ limit: 100 });
        if (result.data) {
            setArticles(result.data.data || result.data);
        }
        setIsLoading(false);
    };

    const filteredArticles = articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = filterStatus === 'all' ||
            (filterStatus === 'published' && article.is_published) ||
            (filterStatus === 'draft' && !article.is_published);
        return matchesSearch && matchesStatus;
    });

    const handleDelete = async (id: number) => {
        if (confirm('คุณต้องการลบบทความนี้หรือไม่?')) {
            await adminArticles.delete(id);
            loadArticles();
        }
    };

    const formatDate = (dateString: string) => {
        if (!dateString) return '-';
        const date = new Date(dateString);
        return date.toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">บทความ</h1>
                    <p className="text-gray-500 mt-1">จัดการบทความและเนื้อหา</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
                        <Download size={18} />
                        <span className="hidden sm:inline">ส่งออก</span>
                    </button>
                    <Link
                        href="/admin/articles/new"
                        className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
                    >
                        <Plus size={18} />
                        <span>เพิ่มบทความ</span>
                    </Link>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'บทความทั้งหมด', value: articles.length, color: 'from-blue-500 to-blue-600' },
                    { label: 'เผยแพร่แล้ว', value: articles.filter(a => a.is_published).length, color: 'from-emerald-500 to-teal-600' },
                    { label: 'ฉบับร่าง', value: articles.filter(a => !a.is_published).length, color: 'from-amber-500 to-orange-600' },
                    { label: 'แนะนำ', value: articles.filter(a => a.is_featured).length, color: 'from-purple-500 to-purple-600' },
                ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                        <p className="text-sm text-gray-500">{stat.label}</p>
                        <p className={`text-3xl font-bold mt-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.value}</p>
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
                            placeholder="ค้นหาบทความ..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                        />
                    </div>
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white text-gray-700"
                    >
                        <option value="all">ทุกสถานะ</option>
                        <option value="published">เผยแพร่แล้ว</option>
                        <option value="draft">ฉบับร่าง</option>
                    </select>
                </div>
            </div>

            {/* Loading State */}
            {isLoading ? (
                <div className="flex items-center justify-center py-12">
                    <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                /* Articles Table */
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    {filteredArticles.length === 0 ? (
                        <div className="text-center py-12">
                            <FileText className="mx-auto text-gray-300 mb-4" size={48} />
                            <p className="text-gray-500">ไม่พบบทความ</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">บทความ</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">หมวดหมู่</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">สถานะ</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ยอดดู</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">วันที่</th>
                                        <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">จัดการ</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredArticles.map((article) => (
                                        <tr key={article.id} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-start gap-3">
                                                    {article.is_featured && <Star className="text-amber-400 mt-1 flex-shrink-0" size={16} />}
                                                    <div>
                                                        <p className="font-semibold text-gray-900">{article.title}</p>
                                                        <p className="text-sm text-gray-500 line-clamp-1">{article.excerpt}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                                                    {article.category?.name || 'ทั่วไป'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${article.is_published
                                                        ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-700 border border-emerald-200'
                                                        : 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-700 border border-amber-200'
                                                    }`}>
                                                    {article.is_published ? 'เผยแพร่' : 'ฉบับร่าง'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600">
                                                {(article.views_count || 0).toLocaleString()}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600">
                                                <div className="flex items-center gap-1">
                                                    <Calendar size={14} className="text-gray-400" />
                                                    {formatDate(article.published_at || article.created_at)}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-end gap-1">
                                                    <Link href={`/articles/${article.slug}`} className="p-2.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                                                        <Eye size={18} />
                                                    </Link>
                                                    <Link href={`/admin/articles/${article.id}/edit`} className="p-2.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all">
                                                        <Edit size={18} />
                                                    </Link>
                                                    <button onClick={() => handleDelete(article.id)} className="p-2.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all">
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
