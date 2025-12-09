'use client';

import { useState, useEffect } from 'react';
import { Plus, Search, Edit, Trash2, Eye, Star, BookOpen, Download } from 'lucide-react';
import Link from 'next/link';
import { adminCourses } from '@/lib/admin-api';

interface Course {
    id: number;
    title: string;
    slug: string;
    price: number;
    level: string;
    is_featured: boolean;
    is_published: boolean;
    lessons_count: number;
    cover?: string;
    created_at: string;
}

const levelLabels: Record<string, string> = {
    beginner: 'เริ่มต้น',
    intermediate: 'ปานกลาง',
    advanced: 'ขั้นสูง',
};

export default function CoursesPage() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterLevel, setFilterLevel] = useState('all');

    // Load courses from API
    useEffect(() => {
        loadCourses();
    }, []);

    const loadCourses = async () => {
        setIsLoading(true);
        const result = await adminCourses.getAll({ limit: 100 });
        if (result.data) {
            setCourses(result.data.data || result.data);
        }
        setIsLoading(false);
    };

    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesLevel = filterLevel === 'all' || course.level === filterLevel;
        return matchesSearch && matchesLevel;
    });

    const handleDelete = async (id: number) => {
        if (confirm('คุณต้องการลบคอร์สนี้หรือไม่?')) {
            await adminCourses.delete(id);
            loadCourses();
        }
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">คอร์สเรียน</h1>
                    <p className="text-gray-500 mt-1">จัดการคอร์สเรียนออนไลน์</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
                        <Download size={18} />
                        <span className="hidden sm:inline">ส่งออก</span>
                    </button>
                    <Link
                        href="/admin/courses/new"
                        className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
                    >
                        <Plus size={18} />
                        <span>เพิ่มคอร์ส</span>
                    </Link>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'คอร์สทั้งหมด', value: courses.length, color: 'from-blue-500 to-blue-600' },
                    { label: 'เผยแพร่แล้ว', value: courses.filter(c => c.is_published).length, color: 'from-emerald-500 to-teal-600' },
                    { label: 'ฉบับร่าง', value: courses.filter(c => !c.is_published).length, color: 'from-amber-500 to-orange-600' },
                    { label: 'แนะนำ', value: courses.filter(c => c.is_featured).length, color: 'from-purple-500 to-purple-600' },
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
                            placeholder="ค้นหาคอร์ส..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                        />
                    </div>
                    <select
                        value={filterLevel}
                        onChange={(e) => setFilterLevel(e.target.value)}
                        className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white text-gray-700"
                    >
                        <option value="all">ทุกระดับ</option>
                        <option value="beginner">เริ่มต้น</option>
                        <option value="intermediate">ปานกลาง</option>
                        <option value="advanced">ขั้นสูง</option>
                    </select>
                </div>
            </div>

            {/* Loading State */}
            {isLoading ? (
                <div className="flex items-center justify-center py-12">
                    <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                /* Courses Grid */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.length === 0 ? (
                        <div className="col-span-full text-center py-12">
                            <BookOpen className="mx-auto text-gray-300 mb-4" size={48} />
                            <p className="text-gray-500">ไม่พบคอร์สเรียน</p>
                        </div>
                    ) : (
                        filteredCourses.map((course) => (
                            <div key={course.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-all group">
                                {/* Course Image */}
                                <div className="h-44 bg-gradient-to-br from-emerald-400 to-teal-600 relative overflow-hidden">
                                    {course.cover && (
                                        <img src={course.cover} alt={course.title} className="w-full h-full object-cover" />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    {course.is_featured && (
                                        <span className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-900 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                                            <Star size={12} /> แนะนำ
                                        </span>
                                    )}
                                    {!course.is_published && (
                                        <span className="absolute top-3 left-3 bg-gray-900/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                                            ฉบับร่าง
                                        </span>
                                    )}
                                </div>

                                {/* Course Info */}
                                <div className="p-5">
                                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1 group-hover:text-emerald-600 transition-colors">{course.title}</h3>
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <span className="px-2 py-1 bg-gray-100 rounded-lg text-gray-600">{levelLabels[course.level] || course.level}</span>
                                        <span>{course.lessons_count || 0} บทเรียน</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-bold text-emerald-600">
                                            {course.price === 0 ? 'ฟรี' : `฿${course.price.toLocaleString()}`}
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <Link href={`/courses/${course.slug}`} className="p-2.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                                                <Eye size={18} />
                                            </Link>
                                            <Link href={`/admin/courses/${course.id}/edit`} className="p-2.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all">
                                                <Edit size={18} />
                                            </Link>
                                            <button onClick={() => handleDelete(course.id)} className="p-2.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all">
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
