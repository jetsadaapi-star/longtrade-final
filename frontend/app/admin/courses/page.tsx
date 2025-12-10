'use client';

import { useState, useEffect } from 'react';
import { Plus, Search, Edit, Trash2, Eye, BookOpen, Star, Clock, Users, Loader2, X, Save, Image, DollarSign } from 'lucide-react';
import { adminCourses, adminCategories } from '@/lib/admin-api';

interface Course {
    id: string;
    title: string;
    slug: string;
    description?: string;
    cover?: string;
    price: number;
    original_price?: number;
    level: string;
    hours?: string;
    lessons_count: number;
    is_published: boolean;
    is_featured: boolean;
    average_rating: number;
    reviews_count: number;
    category_id?: string;
    created_at: string;
}

interface Category {
    id: string;
    name: string;
}

const levelLabels: Record<string, string> = {
    beginner: 'เริ่มต้น',
    intermediate: 'ปานกลาง',
    advanced: 'ขั้นสูง',
};

const levelColors: Record<string, string> = {
    beginner: 'from-emerald-500 to-teal-600',
    intermediate: 'from-blue-500 to-cyan-600',
    advanced: 'from-purple-500 to-pink-600',
};

export default function CoursesPage() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterLevel, setFilterLevel] = useState('all');
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    // Modal states
    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState<'create' | 'edit' | 'view'>('create');
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    // Form data
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        description: '',
        price: 0,
        original_price: 0,
        level: 'beginner',
        hours: '',
        category_id: '',
        is_published: false,
        is_featured: false,
    });

    useEffect(() => {
        loadCourses();
        loadCategories();
    }, [page]);

    const loadCourses = async () => {
        setIsLoading(true);
        const result = await adminCourses.getAll({ page, limit: 12 });
        if (result.data) {
            setCourses(result.data.data || result.data || []);
            setTotal(result.data.meta?.total || result.data.length || 0);
        }
        setIsLoading(false);
    };

    const loadCategories = async () => {
        const result = await adminCategories.getAll({ type: 'course' });
        if (result.data) {
            setCategories(Array.isArray(result.data) ? result.data : result.data.data || []);
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setPage(1);
        loadCourses();
    };

    const openCreateModal = () => {
        setFormData({ title: '', slug: '', description: '', price: 0, original_price: 0, level: 'beginner', hours: '', category_id: '', is_published: false, is_featured: false });
        setSelectedCourse(null);
        setModalMode('create');
        setShowModal(true);
    };

    const openEditModal = (course: Course) => {
        setFormData({
            title: course.title || '',
            slug: course.slug || '',
            description: course.description || '',
            price: course.price || 0,
            original_price: course.original_price || 0,
            level: course.level || 'beginner',
            hours: course.hours || '',
            category_id: course.category_id || '',
            is_published: course.is_published || false,
            is_featured: course.is_featured || false,
        });
        setSelectedCourse(course);
        setModalMode('edit');
        setShowModal(true);
    };

    const openViewModal = (course: Course) => {
        setSelectedCourse(course);
        setModalMode('view');
        setShowModal(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            const submitData = { ...formData, slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, '-') };
            if (modalMode === 'create') {
                await adminCourses.create(submitData);
            } else if (modalMode === 'edit' && selectedCourse) {
                await adminCourses.update(parseInt(selectedCourse.id), submitData);
            }
            setShowModal(false);
            loadCourses();
        } catch (error) {
            console.error('Error saving course:', error);
            alert('เกิดข้อผิดพลาดในการบันทึก');
        }

        setIsSaving(false);
    };

    const handleDelete = async (course: Course) => {
        if (confirm(`คุณต้องการลบคอร์ส "${course.title}" หรือไม่?`)) {
            await adminCourses.delete(parseInt(course.id));
            loadCourses();
        }
    };

    const filteredCourses = courses.filter(course => {
        const matchesSearch = !searchQuery || course.title?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesLevel = filterLevel === 'all' || course.level === filterLevel;
        return matchesSearch && matchesLevel;
    });

    // Stats
    const publishedCount = courses.filter(c => c.is_published).length;
    const featuredCount = courses.filter(c => c.is_featured).length;

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">จัดการคอร์สเรียน</h1>
                    <p className="text-gray-500 mt-1">สร้างและจัดการคอร์สเรียนออนไลน์</p>
                </div>
                <button
                    onClick={openCreateModal}
                    className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all font-medium"
                >
                    <Plus size={20} />
                    <span>สร้างคอร์สใหม่</span>
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'คอร์สทั้งหมด', value: total, color: 'from-blue-500 to-cyan-600', icon: <BookOpen size={20} /> },
                    { label: 'เผยแพร่แล้ว', value: publishedCount, color: 'from-emerald-500 to-teal-600', icon: <Eye size={20} /> },
                    { label: 'แนะนำ', value: featuredCount, color: 'from-amber-500 to-orange-600', icon: <Star size={20} /> },
                    { label: 'ร่าง', value: total - publishedCount, color: 'from-gray-500 to-gray-600', icon: <BookOpen size={20} /> },
                ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">{stat.label}</p>
                                <p className={`text-3xl font-bold mt-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.value}</p>
                            </div>
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white opacity-80`}>{stat.icon}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <form onSubmit={handleSearch} className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="ค้นหาคอร์ส..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        />
                    </div>
                    <select
                        value={filterLevel}
                        onChange={(e) => setFilterLevel(e.target.value)}
                        className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white text-gray-700"
                    >
                        <option value="all">ทุกระดับ</option>
                        <option value="beginner">เริ่มต้น</option>
                        <option value="intermediate">ปานกลาง</option>
                        <option value="advanced">ขั้นสูง</option>
                    </select>
                    <button type="submit" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl hover:shadow-lg transition-all font-medium">
                        ค้นหา
                    </button>
                </form>
            </div>

            {/* Courses Grid */}
            {isLoading ? (
                <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                </div>
            ) : filteredCourses.length === 0 ? (
                <div className="bg-white rounded-2xl p-12 border border-gray-100 shadow-sm text-center">
                    <BookOpen className="mx-auto text-gray-300 mb-4" size={48} />
                    <p className="text-gray-500">ไม่พบคอร์ส</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredCourses.map((course) => (
                        <div key={course.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-all group">
                            {/* Course Cover */}
                            <div className="h-44 bg-gradient-to-br from-blue-500 to-cyan-600 relative overflow-hidden">
                                {course.cover ? (
                                    <img src={course.cover} alt={course.title} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <BookOpen className="text-white/30" size={64} />
                                    </div>
                                )}
                                {/* Badges */}
                                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                                    {course.is_featured && (
                                        <span className="bg-amber-500 text-white px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 shadow">
                                            <Star size={12} /> แนะนำ
                                        </span>
                                    )}
                                    <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold text-white shadow bg-gradient-to-r ${levelColors[course.level] || levelColors.beginner}`}>
                                        {levelLabels[course.level] || course.level}
                                    </span>
                                </div>
                                {!course.is_published && (
                                    <div className="absolute top-3 right-3 bg-gray-800/80 text-white px-2.5 py-1 rounded-lg text-xs font-semibold">
                                        ร่าง
                                    </div>
                                )}
                            </div>

                            {/* Course Info */}
                            <div className="p-5">
                                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">{course.title}</h3>

                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                    <span className="flex items-center gap-1">
                                        <BookOpen size={14} /> {course.lessons_count} บทเรียน
                                    </span>
                                    {course.hours && (
                                        <span className="flex items-center gap-1">
                                            <Clock size={14} /> {course.hours}
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-1">
                                        <Star className="text-amber-500" size={16} />
                                        <span className="font-semibold text-gray-900">{course.average_rating || 0}</span>
                                        <span className="text-gray-400 text-sm">({course.reviews_count || 0})</span>
                                    </div>
                                    <div className="text-right">
                                        {course.original_price && course.original_price > course.price && (
                                            <span className="text-sm text-gray-400 line-through">฿{Number(course.original_price).toLocaleString()}</span>
                                        )}
                                        <span className="text-lg font-bold text-blue-600 ml-2">
                                            {course.price === 0 ? 'ฟรี' : `฿${Number(course.price).toLocaleString()}`}
                                        </span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                                    <button onClick={() => openViewModal(course)} className="flex-1 p-2.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all flex items-center justify-center gap-1.5 text-sm font-medium">
                                        <Eye size={16} /> ดู
                                    </button>
                                    <button onClick={() => openEditModal(course)} className="flex-1 p-2.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all flex items-center justify-center gap-1.5 text-sm font-medium">
                                        <Edit size={16} /> แก้ไข
                                    </button>
                                    <button onClick={() => handleDelete(course)} className="p-2.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all">
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
                    <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden my-8">
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-600 px-6 py-5 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-white">
                                {modalMode === 'create' ? 'สร้างคอร์สใหม่' : modalMode === 'edit' ? 'แก้ไขคอร์ส' : 'รายละเอียดคอร์ส'}
                            </h2>
                            <button onClick={() => setShowModal(false)} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                                <X className="text-white" size={20} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 max-h-[70vh] overflow-y-auto">
                            {modalMode === 'view' && selectedCourse ? (
                                <div className="space-y-6">
                                    <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl overflow-hidden">
                                        {selectedCourse.cover ? (
                                            <img src={selectedCourse.cover} alt={selectedCourse.title} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <BookOpen className="text-white/30" size={64} />
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">{selectedCourse.title}</h3>
                                    <p className="text-gray-600">{selectedCourse.description || 'ไม่มีคำอธิบาย'}</p>

                                    <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-2xl p-5">
                                        <div>
                                            <p className="text-sm text-gray-500">ราคา</p>
                                            <p className="text-xl font-bold text-blue-600">฿{Number(selectedCourse.price).toLocaleString()}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">ระดับ</p>
                                            <p className="font-medium text-gray-900">{levelLabels[selectedCourse.level]}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">บทเรียน</p>
                                            <p className="font-medium text-gray-900">{selectedCourse.lessons_count} บทเรียน</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">สถานะ</p>
                                            <p className={`font-medium ${selectedCourse.is_published ? 'text-emerald-600' : 'text-gray-500'}`}>
                                                {selectedCourse.is_published ? 'เผยแพร่แล้ว' : 'ร่าง'}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                                            ปิด
                                        </button>
                                        <button onClick={() => openEditModal(selectedCourse)} className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl hover:shadow-lg transition-all font-medium flex items-center justify-center gap-2">
                                            <Edit size={18} /> แก้ไข
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Title */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">ชื่อคอร์ส *</label>
                                        <input
                                            type="text"
                                            value={formData.title}
                                            onChange={(e) => setFormData({ ...formData, title: e.target.value, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-700"
                                            placeholder="ชื่อคอร์สเรียน"
                                            required
                                        />
                                    </div>

                                    {/* Slug */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Slug (URL)</label>
                                        <input
                                            type="text"
                                            value={formData.slug}
                                            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-700"
                                            placeholder="course-url"
                                        />
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">คำอธิบาย</label>
                                        <textarea
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-700 resize-none"
                                            placeholder="อธิบายเกี่ยวกับคอร์สนี้..."
                                        />
                                    </div>

                                    {/* Price Row */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">ราคา (บาท)</label>
                                            <div className="relative">
                                                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                <input
                                                    type="number"
                                                    value={formData.price}
                                                    onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                                                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-700"
                                                    placeholder="0"
                                                    min="0"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">ราคาเดิม</label>
                                            <input
                                                type="number"
                                                value={formData.original_price}
                                                onChange={(e) => setFormData({ ...formData, original_price: parseFloat(e.target.value) || 0 })}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-700"
                                                placeholder="0"
                                                min="0"
                                            />
                                        </div>
                                    </div>

                                    {/* Level & Hours */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">ระดับ</label>
                                            <select
                                                value={formData.level}
                                                onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-700 bg-white"
                                            >
                                                <option value="beginner">เริ่มต้น</option>
                                                <option value="intermediate">ปานกลาง</option>
                                                <option value="advanced">ขั้นสูง</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">ชั่วโมงเรียน</label>
                                            <input
                                                type="text"
                                                value={formData.hours}
                                                onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-700"
                                                placeholder="เช่น 10 ชม."
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
                                                className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
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
                                        <button type="submit" disabled={isSaving} className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl hover:shadow-lg transition-all font-medium flex items-center justify-center gap-2 disabled:opacity-50">
                                            {isSaving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                                            {modalMode === 'create' ? 'สร้างคอร์ส' : 'บันทึก'}
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
