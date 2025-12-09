'use client';

import { useState, useEffect } from 'react';
import { Plus, Search, Edit, Trash2, Download, FileText, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { adminEbooks } from '@/lib/admin-api';

interface Ebook {
    id: number;
    title: string;
    slug: string;
    price: number;
    access_type: string;
    is_featured: boolean;
    is_published: boolean;
    downloads_count: number;
    pages: number;
    cover_image?: string;
    created_at: string;
}

export default function EbooksPage() {
    const [ebooks, setEbooks] = useState<Ebook[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        loadEbooks();
    }, []);

    const loadEbooks = async () => {
        setIsLoading(true);
        const result = await adminEbooks.getAll({ limit: 100 });
        if (result.data) {
            setEbooks(result.data.data || result.data);
        }
        setIsLoading(false);
    };

    const filteredEbooks = ebooks.filter(ebook =>
        ebook.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleDelete = async (id: number) => {
        if (confirm('คุณต้องการลบ E-book นี้หรือไม่?')) {
            await adminEbooks.delete(id);
            loadEbooks();
        }
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">E-books</h1>
                    <p className="text-gray-500 mt-1">จัดการหนังสือดิจิทัล</p>
                </div>
                <Link
                    href="/admin/ebooks/new"
                    className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
                >
                    <Plus size={18} />
                    <span>เพิ่ม E-book</span>
                </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'E-books ทั้งหมด', value: ebooks.length, color: 'from-blue-500 to-blue-600' },
                    { label: 'เผยแพร่แล้ว', value: ebooks.filter(e => e.is_published).length, color: 'from-emerald-500 to-teal-600' },
                    { label: 'ฟรี', value: ebooks.filter(e => e.access_type === 'free' || e.price === 0).length, color: 'from-purple-500 to-purple-600' },
                    { label: 'ดาวน์โหลดรวม', value: ebooks.reduce((sum, e) => sum + (e.downloads_count || 0), 0), color: 'from-orange-500 to-orange-600' },
                ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                        <p className="text-sm text-gray-500">{stat.label}</p>
                        <p className={`text-3xl font-bold mt-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.value.toLocaleString()}</p>
                    </div>
                ))}
            </div>

            {/* Search */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="relative max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="ค้นหา E-books..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                    />
                </div>
            </div>

            {/* Loading State */}
            {isLoading ? (
                <div className="flex items-center justify-center py-12">
                    <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                /* Ebooks Grid */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredEbooks.length === 0 ? (
                        <div className="col-span-full text-center py-12">
                            <BookOpen className="mx-auto text-gray-300 mb-4" size={48} />
                            <p className="text-gray-500">ไม่พบ E-books</p>
                        </div>
                    ) : (
                        filteredEbooks.map((ebook) => (
                            <div key={ebook.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-all group">
                                {/* Cover */}
                                <div className="h-52 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                                    {ebook.cover_image ? (
                                        <img src={ebook.cover_image} alt={ebook.title} className="w-full h-full object-cover" />
                                    ) : (
                                        <FileText className="text-white/30" size={64} />
                                    )}
                                    {!ebook.is_published && (
                                        <span className="absolute top-3 left-3 bg-gray-900/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                                            ฉบับร่าง
                                        </span>
                                    )}
                                </div>

                                {/* Info */}
                                <div className="p-5">
                                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">{ebook.title}</h3>
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <span>{ebook.pages || 0} หน้า</span>
                                        <span className="flex items-center gap-1.5">
                                            <Download size={14} className="text-gray-400" />
                                            {(ebook.downloads_count || 0).toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        {ebook.access_type === 'free' || ebook.price === 0 ? (
                                            <span className="text-emerald-600 font-bold text-lg">ฟรี</span>
                                        ) : (
                                            <span className="text-xl font-bold text-emerald-600">฿{ebook.price.toLocaleString()}</span>
                                        )}
                                        <div className="flex items-center gap-1">
                                            <Link href={`/admin/ebooks/${ebook.id}/edit`} className="p-2.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all">
                                                <Edit size={18} />
                                            </Link>
                                            <button onClick={() => handleDelete(ebook.id)} className="p-2.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
