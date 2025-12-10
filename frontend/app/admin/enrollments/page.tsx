'use client';

import { useState, useEffect } from 'react';
import { Search, Eye, BookOpen, Users, CheckCircle, Clock, XCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { adminEnrollments } from '@/lib/admin-api';

interface Enrollment {
    id: string;
    user_id: string;
    course_id: string;
    status: string;
    payment_status?: string;
    enrolled_at?: string;
    completed_at?: string;
    created_at: string;
    users?: { name: string; email: string };
    courses?: { title: string };
}

const statusLabels: Record<string, string> = {
    pending: 'รอดำเนินการ',
    active: 'กำลังเรียน',
    completed: 'เรียนจบแล้ว',
    cancelled: 'ยกเลิก',
};

const statusColors: Record<string, string> = {
    pending: 'from-amber-500/20 to-yellow-500/20 text-amber-600 border-amber-200',
    active: 'from-blue-500/20 to-blue-600/20 text-blue-600 border-blue-200',
    completed: 'from-emerald-500/20 to-teal-500/20 text-emerald-600 border-emerald-200',
    cancelled: 'from-rose-500/20 to-red-500/20 text-rose-600 border-rose-200',
};

export default function EnrollmentsPage() {
    const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        loadEnrollments();
    }, [page, filterStatus]);

    const loadEnrollments = async () => {
        setIsLoading(true);
        const params: any = { page, limit: 10 };
        if (filterStatus !== 'all') params.status = filterStatus;

        const result = await adminEnrollments.getAll(params);
        if (result.data) {
            setEnrollments(result.data.data || result.data || []);
            setTotal(result.data.meta?.total || result.data.length || 0);
        }
        setIsLoading(false);
    };

    const formatDate = (dateStr: string) => {
        if (!dateStr) return '-';
        return new Date(dateStr).toLocaleDateString('th-TH', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    // Stats
    const totalEnrollments = total;
    const activeCount = enrollments.filter(e => e.status === 'active').length;
    const completedCount = enrollments.filter(e => e.status === 'completed').length;
    const pendingCount = enrollments.filter(e => e.status === 'pending').length;

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">การลงทะเบียนเรียน</h1>
                    <p className="text-gray-500 mt-1">ติดตามการลงทะเบียนคอร์สเรียนของผู้ใช้</p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'ลงทะเบียนทั้งหมด', value: totalEnrollments, color: 'from-blue-500 to-blue-600', icon: <BookOpen size={20} /> },
                    { label: 'กำลังเรียน', value: activeCount, color: 'from-cyan-500 to-blue-600', icon: <Clock size={20} /> },
                    { label: 'เรียนจบแล้ว', value: completedCount, color: 'from-emerald-500 to-teal-600', icon: <CheckCircle size={20} /> },
                    { label: 'รอดำเนินการ', value: pendingCount, color: 'from-amber-500 to-orange-600', icon: <Clock size={20} /> },
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
                            placeholder="ค้นหาผู้ใช้หรือคอร์ส..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        />
                    </div>
                    <select
                        value={filterStatus}
                        onChange={(e) => { setFilterStatus(e.target.value); setPage(1); }}
                        className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white text-gray-700"
                    >
                        <option value="all">ทุกสถานะ</option>
                        <option value="pending">รอดำเนินการ</option>
                        <option value="active">กำลังเรียน</option>
                        <option value="completed">เรียนจบแล้ว</option>
                        <option value="cancelled">ยกเลิก</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {isLoading ? (
                    <div className="flex items-center justify-center py-12">
                        <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">ผู้ใช้</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">คอร์ส</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">สถานะ</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">วันที่ลงทะเบียน</th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase">จัดการ</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {enrollments.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                            ไม่พบการลงทะเบียน
                                        </td>
                                    </tr>
                                ) : (
                                    enrollments.map((enrollment) => (
                                        <tr key={enrollment.id} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-semibold">
                                                        {enrollment.users?.name?.charAt(0) || 'U'}
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-900">{enrollment.users?.name || `User #${enrollment.user_id}`}</p>
                                                        <p className="text-sm text-gray-500">{enrollment.users?.email || ''}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <p className="text-gray-900">{enrollment.courses?.title || `Course #${enrollment.course_id}`}</p>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r border ${statusColors[enrollment.status] || statusColors.pending}`}>
                                                    {statusLabels[enrollment.status] || enrollment.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {formatDate(enrollment.created_at)}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-end">
                                                    <Link href={`/admin/enrollments/${enrollment.id}`} className="p-2.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                                                        <Eye size={18} />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Pagination */}
                <div className="px-6 py-4 flex items-center justify-between border-t border-gray-100 bg-gray-50/50">
                    <p className="text-sm text-gray-500">แสดง {enrollments.length} จาก {total} รายการ</p>
                    <div className="flex items-center gap-2">
                        <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="px-4 py-2 text-sm border border-gray-200 rounded-xl hover:bg-white disabled:opacity-50">
                            ก่อนหน้า
                        </button>
                        <span className="px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl">{page}</span>
                        <button onClick={() => setPage(p => p + 1)} className="px-4 py-2 text-sm border border-gray-200 rounded-xl hover:bg-white">
                            ถัดไป
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
