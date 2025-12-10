'use client';

import { useState, useEffect } from 'react';
import { Plus, Search, Edit, Trash2, Eye, Bot, Download, Star, Loader2, X, Save, DollarSign, Cpu } from 'lucide-react';
import { adminExpertAdvisors } from '@/lib/admin-api';

interface ExpertAdvisor {
    id: string;
    title: string;
    slug: string;
    description?: string;
    image?: string;
    price: number;
    original_price?: number;
    platform: string;
    features?: string;
    strategy?: string;
    is_published: boolean;
    is_featured: boolean;
    downloads_count: number;
    average_rating: number;
    created_at: string;
}

export default function ExpertAdvisorsPage() {
    const [eas, setEas] = useState<ExpertAdvisor[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    // Modal states
    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState<'create' | 'edit' | 'view'>('create');
    const [selectedEA, setSelectedEA] = useState<ExpertAdvisor | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    // Form data
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        description: '',
        price: 0,
        original_price: 0,
        platform: 'MT4',
        features: '',
        strategy: '',
        is_published: false,
        is_featured: false,
    });

    useEffect(() => {
        loadEAs();
    }, [page]);

    const loadEAs = async () => {
        setIsLoading(true);
        const result = await adminExpertAdvisors.getAll({ page, limit: 12 });
        if (result.data) {
            setEas(result.data.data || result.data || []);
            setTotal(result.data.meta?.total || result.data.length || 0);
        }
        setIsLoading(false);
    };

    const openCreateModal = () => {
        setFormData({ title: '', slug: '', description: '', price: 0, original_price: 0, platform: 'MT4', features: '', strategy: '', is_published: false, is_featured: false });
        setSelectedEA(null);
        setModalMode('create');
        setShowModal(true);
    };

    const openEditModal = (ea: ExpertAdvisor) => {
        setFormData({
            title: ea.title || '',
            slug: ea.slug || '',
            description: ea.description || '',
            price: ea.price || 0,
            original_price: ea.original_price || 0,
            platform: ea.platform || 'MT4',
            features: ea.features || '',
            strategy: ea.strategy || '',
            is_published: ea.is_published || false,
            is_featured: ea.is_featured || false,
        });
        setSelectedEA(ea);
        setModalMode('edit');
        setShowModal(true);
    };

    const openViewModal = (ea: ExpertAdvisor) => {
        setSelectedEA(ea);
        setModalMode('view');
        setShowModal(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            const submitData = { ...formData, slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, '-') };
            if (modalMode === 'create') {
                await adminExpertAdvisors.create(submitData);
            } else if (modalMode === 'edit' && selectedEA) {
                await adminExpertAdvisors.update(parseInt(selectedEA.id), submitData);
            }
            setShowModal(false);
            loadEAs();
        } catch (error) {
            console.error('Error saving EA:', error);
            alert('เกิดข้อผิดพลาดในการบันทึก');
        }

        setIsSaving(false);
    };

    const handleDelete = async (ea: ExpertAdvisor) => {
        if (confirm(`คุณต้องการลบ EA "${ea.title}" หรือไม่?`)) {
            await adminExpertAdvisors.delete(parseInt(ea.id));
            loadEAs();
        }
    };

    const filteredEAs = eas.filter(ea =>
        !searchQuery || ea.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const publishedCount = eas.filter(e => e.is_published).length;
    const totalDownloads = eas.reduce((sum, e) => sum + (e.downloads_count || 0), 0);

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">จัดการ Expert Advisors</h1>
                    <p className="text-gray-500 mt-1">จัดการ EA สำหรับ MetaTrader</p>
                </div>
                <button
                    onClick={openCreateModal}
                    className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all font-medium"
                >
                    <Plus size={20} />
                    <span>เพิ่ม EA ใหม่</span>
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'EA ทั้งหมด', value: total, color: 'from-purple-500 to-pink-600', icon: <Bot size={20} /> },
                    { label: 'เผยแพร่แล้ว', value: publishedCount, color: 'from-emerald-500 to-teal-600', icon: <Eye size={20} /> },
                    { label: 'ดาวน์โหลดรวม', value: totalDownloads, color: 'from-blue-500 to-indigo-600', icon: <Download size={20} /> },
                    { label: 'แนะนำ', value: eas.filter(e => e.is_featured).length, color: 'from-amber-500 to-orange-600', icon: <Star size={20} /> },
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
                        placeholder="ค้นหา Expert Advisor..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
                    />
                </div>
            </div>

            {/* EAs Grid */}
            {isLoading ? (
                <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
                </div>
            ) : filteredEAs.length === 0 ? (
                <div className="bg-white rounded-2xl p-12 border border-gray-100 shadow-sm text-center">
                    <Bot className="mx-auto text-gray-300 mb-4" size={48} />
                    <p className="text-gray-500">ไม่พบ Expert Advisor</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredEAs.map((ea) => (
                        <div key={ea.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-all group">
                            {/* Cover */}
                            <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 relative overflow-hidden">
                                {ea.image ? (
                                    <img src={ea.image} alt={ea.title} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <Bot className="text-white/30" size={64} />
                                    </div>
                                )}
                                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                                    {ea.is_featured && (
                                        <span className="bg-amber-500 text-white px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 shadow">
                                            <Star size={12} /> แนะนำ
                                        </span>
                                    )}
                                    <span className="bg-black/50 text-white px-2.5 py-1 rounded-lg text-xs font-semibold">
                                        {ea.platform}
                                    </span>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-5">
                                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">{ea.title}</h3>

                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                    <span className="flex items-center gap-1">
                                        <Download size={14} /> {(ea.downloads_count || 0).toLocaleString()}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Star size={14} className="text-amber-500" /> {ea.average_rating || 0}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xl font-bold text-purple-600">
                                        {ea.price === 0 ? 'ฟรี' : `฿${Number(ea.price).toLocaleString()}`}
                                    </span>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                                    <button onClick={() => openViewModal(ea)} className="flex-1 p-2.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all flex items-center justify-center gap-1.5 text-sm font-medium">
                                        <Eye size={16} /> ดู
                                    </button>
                                    <button onClick={() => openEditModal(ea)} className="flex-1 p-2.5 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all flex items-center justify-center gap-1.5 text-sm font-medium">
                                        <Edit size={16} /> แก้ไข
                                    </button>
                                    <button onClick={() => handleDelete(ea)} className="p-2.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
                    <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden my-8">
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-5 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-white">
                                {modalMode === 'create' ? 'เพิ่ม EA ใหม่' : modalMode === 'edit' ? 'แก้ไข EA' : 'รายละเอียด EA'}
                            </h2>
                            <button onClick={() => setShowModal(false)} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                                <X className="text-white" size={20} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 max-h-[70vh] overflow-y-auto">
                            {modalMode === 'view' && selectedEA ? (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-gray-900">{selectedEA.title}</h3>
                                    <p className="text-gray-600">{selectedEA.description || 'ไม่มีคำอธิบาย'}</p>

                                    <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-2xl p-5">
                                        <div>
                                            <p className="text-sm text-gray-500">ราคา</p>
                                            <p className="text-xl font-bold text-purple-600">฿{Number(selectedEA.price).toLocaleString()}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">แพลตฟอร์ม</p>
                                            <p className="font-medium text-gray-900">{selectedEA.platform}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">ดาวน์โหลด</p>
                                            <p className="font-medium text-gray-900">{(selectedEA.downloads_count || 0).toLocaleString()}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">คะแนน</p>
                                            <p className="font-medium text-gray-900 flex items-center gap-1"><Star className="text-amber-500" size={16} /> {selectedEA.average_rating || 0}</p>
                                        </div>
                                    </div>

                                    {selectedEA.strategy && (
                                        <div className="bg-purple-50 rounded-xl p-4">
                                            <p className="text-sm font-semibold text-purple-800 mb-2">กลยุทธ์</p>
                                            <p className="text-sm text-gray-700">{selectedEA.strategy}</p>
                                        </div>
                                    )}

                                    <div className="flex gap-3">
                                        <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                                            ปิด
                                        </button>
                                        <button onClick={() => openEditModal(selectedEA)} className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all font-medium flex items-center justify-center gap-2">
                                            <Edit size={18} /> แก้ไข
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Title */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">ชื่อ EA *</label>
                                        <input
                                            type="text"
                                            value={formData.title}
                                            onChange={(e) => setFormData({ ...formData, title: e.target.value, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-700"
                                            placeholder="ชื่อ Expert Advisor"
                                            required
                                        />
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">คำอธิบาย</label>
                                        <textarea
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            rows={3}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-700 resize-none"
                                            placeholder="คำอธิบาย EA..."
                                        />
                                    </div>

                                    {/* Price & Platform */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">ราคา (บาท)</label>
                                            <div className="relative">
                                                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                <input
                                                    type="number"
                                                    value={formData.price}
                                                    onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                                                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-700"
                                                    min="0"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">แพลตฟอร์ม</label>
                                            <select
                                                value={formData.platform}
                                                onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-700 bg-white"
                                            >
                                                <option value="MT4">MT4</option>
                                                <option value="MT5">MT5</option>
                                                <option value="MT4/MT5">MT4/MT5</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Strategy */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">กลยุทธ์</label>
                                        <textarea
                                            value={formData.strategy}
                                            onChange={(e) => setFormData({ ...formData, strategy: e.target.value })}
                                            rows={2}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-700 resize-none"
                                            placeholder="อธิบายกลยุทธ์การเทรด..."
                                        />
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
                                            {modalMode === 'create' ? 'เพิ่ม' : 'บันทึก'}
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
