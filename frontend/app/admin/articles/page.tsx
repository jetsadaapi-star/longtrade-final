'use client';

import { useState, useEffect } from 'react';
import { Plus, Search, Edit, Trash2, Eye, FileText, Clock, Calendar, Loader2, X, Save, Tag, User } from 'lucide-react';
import { adminArticles, adminCategories } from '@/lib/admin-api';

interface Article {
    id: string;
    title: string;
    slug: string;
    excerpt?: string;
    content?: string;
    cover_image?: string;
    author?: string;
    is_published: boolean;
    is_featured: boolean;
    views_count: number;
    category_id?: string;
    focus_keyword?: string;
    meta_title?: string;
    meta_description?: string;
    created_at: string;
    published_at?: string;
}

export default function ArticlesPage() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    // Modal states
    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState<'create' | 'edit' | 'view'>('create');
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    // Form data
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        author: '',
        focus_keyword: '',
        meta_title: '',
        meta_description: '',
        is_published: false,
        is_featured: false,
    });

    useEffect(() => {
        loadArticles();
    }, [page, filterStatus]);

    const loadArticles = async () => {
        setIsLoading(true);
        const result = await adminArticles.getAll({ page, limit: 10 });
        if (result.data) {
            setArticles(result.data.data || result.data || []);
            setTotal(result.data.meta?.total || result.data.length || 0);
        }
        setIsLoading(false);
    };

    const openCreateModal = () => {
        setFormData({ title: '', slug: '', excerpt: '', content: '', author: '', focus_keyword: '', meta_title: '', meta_description: '', is_published: false, is_featured: false });
        setSelectedArticle(null);
        setModalMode('create');
        setShowModal(true);
    };

    const openEditModal = (article: Article) => {
        setFormData({
            title: article.title || '',
            slug: article.slug || '',
            excerpt: article.excerpt || '',
            content: article.content || '',
            author: article.author || '',
            focus_keyword: article.focus_keyword || '',
            meta_title: article.meta_title || '',
            meta_description: article.meta_description || '',
            is_published: article.is_published || false,
            is_featured: article.is_featured || false,
        });
        setSelectedArticle(article);
        setModalMode('edit');
        setShowModal(true);
    };

    const openViewModal = (article: Article) => {
        setSelectedArticle(article);
        setModalMode('view');
        setShowModal(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            const submitData = { ...formData, slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, '-') };
            if (modalMode === 'create') {
                await adminArticles.create(submitData);
            } else if (modalMode === 'edit' && selectedArticle) {
                await adminArticles.update(parseInt(selectedArticle.id), submitData);
            }
            setShowModal(false);
            loadArticles();
        } catch (error) {
            console.error('Error saving article:', error);
            alert('เกิดข้อผิดพลาดในการบันทึก');
        }

        setIsSaving(false);
    };

    const handleDelete = async (article: Article) => {
        if (confirm(`คุณต้องการลบบทความ "${article.title}" หรือไม่?`)) {
            await adminArticles.delete(parseInt(article.id));
            loadArticles();
        }
    };

    const formatDate = (dateStr: string) => {
        if (!dateStr) return '-';
        return new Date(dateStr).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    const filteredArticles = articles.filter(article => {
        const matchesSearch = !searchQuery || article.title?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = filterStatus === 'all' || (filterStatus === 'published' && article.is_published) || (filterStatus === 'draft' && !article.is_published);
        return matchesSearch && matchesStatus;
    });

    const publishedCount = articles.filter(a => a.is_published).length;
    const totalViews = articles.reduce((sum, a) => sum + (a.views_count || 0), 0);

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">จัดการบทความ</h1>
                    <p className="text-gray-500 mt-1">สร้างและจัดการบทความ SEO</p>
                </div>
                <button
                    onClick={openCreateModal}
                    className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all font-medium"
                >
                    <Plus size={20} />
                    <span>เขียนบทความใหม่</span>
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'บทความทั้งหมด', value: total, color: 'from-purple-500 to-pink-600', icon: <FileText size={20} /> },
                    { label: 'เผยแพร่แล้ว', value: publishedCount, color: 'from-emerald-500 to-teal-600', icon: <Eye size={20} /> },
                    { label: 'ร่าง', value: total - publishedCount, color: 'from-gray-500 to-gray-600', icon: <FileText size={20} /> },
                    { label: 'ยอดเข้าชมรวม', value: totalViews, color: 'from-blue-500 to-cyan-600', icon: <Eye size={20} /> },
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

            {/* Filters */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="ค้นหาบทความ..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
                        />
                    </div>
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 bg-white text-gray-700"
                    >
                        <option value="all">ทั้งหมด</option>
                        <option value="published">เผยแพร่แล้ว</option>
                        <option value="draft">ร่าง</option>
                    </select>
                </div>
            </div>

            {/* Articles Table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {isLoading ? (
                    <div className="flex items-center justify-center py-12">
                        <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">บทความ</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">ผู้เขียน</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">สถานะ</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">วันที่</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">เข้าชม</th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase">จัดการ</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredArticles.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                                            <FileText className="mx-auto mb-4 text-gray-300" size={48} />
                                            <p>ไม่พบบทความ</p>
                                        </td>
                                    </tr>
                                ) : (
                                    filteredArticles.map((article) => (
                                        <tr key={article.id} className="hover:bg-gray-50/50 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-16 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                                                        {article.cover_image ? (
                                                            <img src={article.cover_image} alt="" className="w-full h-full object-cover" />
                                                        ) : (
                                                            <FileText className="text-white/50" size={20} />
                                                        )}
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p className="font-semibold text-gray-900 truncate max-w-xs">{article.title}</p>
                                                        {article.focus_keyword && (
                                                            <p className="text-xs text-purple-600 mt-0.5 flex items-center gap-1">
                                                                <Tag size={10} /> {article.focus_keyword}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600">
                                                {article.author || '-'}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${article.is_published
                                                        ? 'bg-emerald-100 text-emerald-600'
                                                        : 'bg-gray-100 text-gray-600'
                                                    }`}>
                                                    {article.is_published ? 'เผยแพร่' : 'ร่าง'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {formatDate(article.created_at)}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600">
                                                {(article.views_count || 0).toLocaleString()}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button onClick={() => openViewModal(article)} className="p-2.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                                                        <Eye size={18} />
                                                    </button>
                                                    <button onClick={() => openEditModal(article)} className="p-2.5 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all">
                                                        <Edit size={18} />
                                                    </button>
                                                    <button onClick={() => handleDelete(article)} className="p-2.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all">
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
                    <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden my-8">
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-5 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-white">
                                {modalMode === 'create' ? 'เขียนบทความใหม่' : modalMode === 'edit' ? 'แก้ไขบทความ' : 'รายละเอียดบทความ'}
                            </h2>
                            <button onClick={() => setShowModal(false)} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                                <X className="text-white" size={20} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 max-h-[70vh] overflow-y-auto">
                            {modalMode === 'view' && selectedArticle ? (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-gray-900">{selectedArticle.title}</h3>
                                    <p className="text-gray-600">{selectedArticle.excerpt || selectedArticle.content?.substring(0, 200) || 'ไม่มีเนื้อหา'}</p>

                                    <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-2xl p-5">
                                        <div>
                                            <p className="text-sm text-gray-500">ผู้เขียน</p>
                                            <p className="font-medium text-gray-900">{selectedArticle.author || '-'}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">สถานะ</p>
                                            <p className={`font-medium ${selectedArticle.is_published ? 'text-emerald-600' : 'text-gray-500'}`}>
                                                {selectedArticle.is_published ? 'เผยแพร่แล้ว' : 'ร่าง'}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Focus Keyword</p>
                                            <p className="font-medium text-purple-600">{selectedArticle.focus_keyword || '-'}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">ยอดเข้าชม</p>
                                            <p className="font-medium text-gray-900">{(selectedArticle.views_count || 0).toLocaleString()}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                                            ปิด
                                        </button>
                                        <button onClick={() => openEditModal(selectedArticle)} className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all font-medium flex items-center justify-center gap-2">
                                            <Edit size={18} /> แก้ไข
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Title */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">หัวข้อบทความ *</label>
                                        <input
                                            type="text"
                                            value={formData.title}
                                            onChange={(e) => setFormData({ ...formData, title: e.target.value, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-700"
                                            placeholder="หัวข้อบทความ"
                                            required
                                        />
                                    </div>

                                    {/* Excerpt */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">บทคัดย่อ</label>
                                        <textarea
                                            value={formData.excerpt}
                                            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                            rows={2}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-700 resize-none"
                                            placeholder="สรุปเนื้อหาสั้นๆ..."
                                        />
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">เนื้อหา</label>
                                        <textarea
                                            value={formData.content}
                                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                            rows={6}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-700 resize-none"
                                            placeholder="เนื้อหาบทความ..."
                                        />
                                    </div>

                                    {/* Author & Keyword */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">ผู้เขียน</label>
                                            <input
                                                type="text"
                                                value={formData.author}
                                                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-700"
                                                placeholder="ชื่อผู้เขียน"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Focus Keyword</label>
                                            <input
                                                type="text"
                                                value={formData.focus_keyword}
                                                onChange={(e) => setFormData({ ...formData, focus_keyword: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-700"
                                                placeholder="คำค้นหาหลัก"
                                            />
                                        </div>
                                    </div>

                                    {/* SEO Fields */}
                                    <div className="p-4 bg-purple-50 rounded-xl space-y-4">
                                        <p className="text-sm font-semibold text-purple-800">SEO Settings</p>
                                        <div>
                                            <label className="block text-sm text-gray-600 mb-1">Meta Title</label>
                                            <input
                                                type="text"
                                                value={formData.meta_title}
                                                onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
                                                className="w-full px-4 py-2.5 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-700"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-600 mb-1">Meta Description</label>
                                            <textarea
                                                value={formData.meta_description}
                                                onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                                                rows={2}
                                                className="w-full px-4 py-2.5 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-700 resize-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Toggles */}
                                    <div className="flex flex-wrap gap-6 py-2">
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={formData.is_published}
                                                onChange={(e) => setFormData({ ...formData, is_published: e.target.checked })}
                                                className="w-5 h-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                            />
                                            <span className="text-gray-700 font-medium">เผยแพร่</span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={formData.is_featured}
                                                onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                                                className="w-5 h-5 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                                            />
                                            <span className="text-gray-700 font-medium">แนะนำ</span>
                                        </label>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-3 pt-4 border-t border-gray-100">
                                        <button type="button" onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                                            ยกเลิก
                                        </button>
                                        <button type="submit" disabled={isSaving} className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all font-medium flex items-center justify-center gap-2 disabled:opacity-50">
                                            {isSaving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                                            {modalMode === 'create' ? 'เผยแพร่' : 'บันทึก'}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
