'use client';

import { useState, useEffect } from 'react';
import { Plus, Search, Edit, Trash2, Tag, Loader2, FolderOpen } from 'lucide-react';
import { adminCategories } from '@/lib/admin-api';

interface Category {
    id: string;
    name: string;
    slug: string;
    type: string;
    description?: string;
    icon?: string;
    color?: string;
    order: number;
    is_active: boolean;
    created_at: string;
}

const typeLabels: Record<string, string> = {
    course: 'คอร์สเรียน',
    article: 'บทความ',
    ebook: 'E-book',
    product: 'สินค้า',
    indicator: 'Indicator',
    ea: 'Expert Advisor',
    general: 'ทั่วไป',
};

export default function CategoriesPage() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [editingCategory, setEditingCategory] = useState<Category | null>(null);
    const [formData, setFormData] = useState({ name: '', slug: '', type: 'general', description: '', icon: '', color: '' });

    useEffect(() => {
        loadCategories();
    }, [filterType]);

    const loadCategories = async () => {
        setIsLoading(true);
        const params: any = {};
        if (filterType !== 'all') params.type = filterType;

        const result = await adminCategories.getAll(params);
        if (result.data) {
            setCategories(Array.isArray(result.data) ? result.data : result.data.data || []);
        }
        setIsLoading(false);
    };

    const handleDelete = async (id: string) => {
        if (confirm('คุณต้องการลบหมวดหมู่นี้หรือไม่?')) {
            await adminCategories.delete(parseInt(id));
            loadCategories();
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (editingCategory) {
            await adminCategories.update(parseInt(editingCategory.id), formData);
        } else {
            await adminCategories.create(formData);
        }
        setShowModal(false);
        setEditingCategory(null);
        setFormData({ name: '', slug: '', type: 'general', description: '', icon: '', color: '' });
        loadCategories();
    };

    const openEdit = (category: Category) => {
        setEditingCategory(category);
        setFormData({
            name: category.name,
            slug: category.slug,
            type: category.type,
            description: category.description || '',
            icon: category.icon || '',
            color: category.color || '',
        });
        setShowModal(true);
    };

    const filteredCategories = categories.filter(cat =>
        cat.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.slug?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getTypeBadgeColor = (type: string) => {
        const colors: Record<string, string> = {
            course: 'from-blue-500/20 to-blue-600/20 text-blue-600 border-blue-200',
            article: 'from-purple-500/20 to-purple-600/20 text-purple-600 border-purple-200',
            ebook: 'from-emerald-500/20 to-emerald-600/20 text-emerald-600 border-emerald-200',
            product: 'from-orange-500/20 to-orange-600/20 text-orange-600 border-orange-200',
            indicator: 'from-cyan-500/20 to-cyan-600/20 text-cyan-600 border-cyan-200',
            ea: 'from-pink-500/20 to-pink-600/20 text-pink-600 border-pink-200',
        };
        return colors[type] || 'from-gray-500/20 to-gray-600/20 text-gray-600 border-gray-200';
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">หมวดหมู่</h1>
                    <p className="text-gray-500 mt-1">จัดการหมวดหมู่สำหรับคอร์ส บทความ สินค้า</p>
                </div>
                <button
                    onClick={() => { setEditingCategory(null); setFormData({ name: '', slug: '', type: 'general', description: '', icon: '', color: '' }); setShowModal(true); }}
                    className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
                >
                    <Plus size={18} />
                    <span>เพิ่มหมวดหมู่</span>
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'หมวดหมู่ทั้งหมด', value: categories.length, color: 'from-blue-500 to-blue-600' },
                    { label: 'คอร์สเรียน', value: categories.filter(c => c.type === 'course').length, color: 'from-purple-500 to-purple-600' },
                    { label: 'บทความ', value: categories.filter(c => c.type === 'article').length, color: 'from-emerald-500 to-teal-600' },
                    { label: 'สินค้า', value: categories.filter(c => c.type === 'product').length, color: 'from-orange-500 to-orange-600' },
                ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                        <p className="text-sm text-gray-500">{stat.label}</p>
                        <p className={`text-3xl font-bold mt-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.value}</p>
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
                            placeholder="ค้นหาหมวดหมู่..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                        />
                    </div>
                    <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white text-gray-700"
                    >
                        <option value="all">ทุกประเภท</option>
                        <option value="course">คอร์สเรียน</option>
                        <option value="article">บทความ</option>
                        <option value="ebook">E-book</option>
                        <option value="product">สินค้า</option>
                        <option value="indicator">Indicator</option>
                        <option value="ea">Expert Advisor</option>
                    </select>
                </div>
            </div>

            {/* Categories Grid */}
            {isLoading ? (
                <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
                </div>
            ) : filteredCategories.length === 0 ? (
                <div className="bg-white rounded-2xl p-12 border border-gray-100 shadow-sm text-center">
                    <FolderOpen className="mx-auto text-gray-300 mb-4" size={48} />
                    <p className="text-gray-500">ไม่พบหมวดหมู่</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCategories.map((category) => (
                        <div key={category.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                                    <Tag className="text-white" size={24} />
                                </div>
                                <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r border ${getTypeBadgeColor(category.type)}`}>
                                    {typeLabels[category.type] || category.type}
                                </span>
                            </div>
                            <h3 className="font-semibold text-gray-900 text-lg mb-1">{category.name}</h3>
                            <p className="text-sm text-gray-500 mb-4 line-clamp-2">{category.description || category.slug}</p>
                            <div className="flex items-center justify-end gap-2 pt-4 border-t border-gray-100">
                                <button onClick={() => openEdit(category)} className="p-2.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all">
                                    <Edit size={18} />
                                </button>
                                <button onClick={() => handleDelete(category.id)} className="p-2.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">{editingCategory ? 'แก้ไขหมวดหมู่' : 'เพิ่มหมวดหมู่ใหม่'}</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อหมวดหมู่</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-gray-700"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                                <input
                                    type="text"
                                    value={formData.slug}
                                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-gray-700"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">ประเภท</label>
                                <select
                                    value={formData.type}
                                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-gray-700 bg-white"
                                >
                                    <option value="general">ทั่วไป</option>
                                    <option value="course">คอร์สเรียน</option>
                                    <option value="article">บทความ</option>
                                    <option value="ebook">E-book</option>
                                    <option value="product">สินค้า</option>
                                    <option value="indicator">Indicator</option>
                                    <option value="ea">Expert Advisor</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">คำอธิบาย</label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    rows={3}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-gray-700"
                                />
                            </div>
                            <div className="flex gap-3 pt-4">
                                <button type="button" onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
                                    ยกเลิก
                                </button>
                                <button type="submit" className="flex-1 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:shadow-lg transition-all">
                                    {editingCategory ? 'บันทึก' : 'เพิ่ม'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
