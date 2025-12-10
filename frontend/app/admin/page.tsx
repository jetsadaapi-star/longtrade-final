'use client';

import { useState, useEffect } from 'react';
import { Users, BookOpen, FileText, Package, ShoppingCart, TrendingUp, DollarSign, ArrowUpRight, ArrowDownRight, Loader2, Eye, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { adminDashboard } from '@/lib/admin-api';

interface DashboardStats {
    users: number;
    courses: number;
    articles: number;
    products: number;
    ebooks: number;
    orders: number;
    revenue: number;
    enrollments: number;
}

export default function AdminDashboard() {
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadStats();
    }, []);

    const loadStats = async () => {
        setIsLoading(true);
        try {
            const result = await adminDashboard.getStats();
            if (result.data) {
                setStats(result.data);
            }
        } catch (error) {
            console.error('Error loading stats:', error);
        }
        setIsLoading(false);
    };

    const statCards = [
        { label: 'ผู้ใช้ทั้งหมด', value: stats?.users || 0, icon: <Users size={24} />, color: 'from-blue-500 to-cyan-600', link: '/admin/users', trend: '+12%' },
        { label: 'คอร์สเรียน', value: stats?.courses || 0, icon: <BookOpen size={24} />, color: 'from-purple-500 to-pink-600', link: '/admin/courses', trend: '+8%' },
        { label: 'บทความ', value: stats?.articles || 0, icon: <FileText size={24} />, color: 'from-emerald-500 to-teal-600', link: '/admin/articles', trend: '+5%' },
        { label: 'สินค้า', value: stats?.products || 0, icon: <Package size={24} />, color: 'from-orange-500 to-pink-600', link: '/admin/products', trend: '+3%' },
        { label: 'E-books', value: stats?.ebooks || 0, icon: <BookOpen size={24} />, color: 'from-teal-500 to-emerald-600', link: '/admin/ebooks', trend: '+7%' },
        { label: 'การลงทะเบียน', value: stats?.enrollments || 0, icon: <TrendingUp size={24} />, color: 'from-indigo-500 to-purple-600', link: '/admin/enrollments', trend: '+15%' },
    ];

    const quickLinks = [
        { label: 'เพิ่มผู้ใช้ใหม่', href: '/admin/users', color: 'bg-blue-500' },
        { label: 'สร้างคอร์ส', href: '/admin/courses', color: 'bg-purple-500' },
        { label: 'เขียนบทความ', href: '/admin/articles', color: 'bg-emerald-500' },
        { label: 'เพิ่มสินค้า', href: '/admin/products', color: 'bg-orange-500' },
        { label: 'เพิ่ม Indicator', href: '/admin/indicators', color: 'bg-cyan-500' },
        { label: 'เพิ่ม EA', href: '/admin/expert-advisors', color: 'bg-pink-500' },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">แดชบอร์ด</h1>
                    <p className="text-gray-500 mt-1">ภาพรวมข้อมูลระบบ LongTrade</p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">อัปเดตล่าสุด: {new Date().toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                    <button
                        onClick={loadStats}
                        className="px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-700 flex items-center gap-2"
                    >
                        {isLoading ? <Loader2 className="animate-spin" size={16} /> : <BarChart3 size={16} />}
                        รีเฟรช
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            {isLoading ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm animate-pulse">
                            <div className="h-12 w-12 bg-gray-200 rounded-xl mb-4"></div>
                            <div className="h-8 w-16 bg-gray-200 rounded mb-2"></div>
                            <div className="h-4 w-24 bg-gray-200 rounded"></div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {statCards.map((stat, i) => (
                        <Link
                            key={i}
                            href={stat.link}
                            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:scale-105 transition-all group"
                        >
                            <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                                {stat.icon}
                            </div>
                            <p className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                {stat.value.toLocaleString()}
                            </p>
                            <div className="flex items-center justify-between mt-2">
                                <p className="text-sm text-gray-500">{stat.label}</p>
                                <span className="text-xs text-emerald-500 flex items-center gap-0.5">
                                    <ArrowUpRight size={12} /> {stat.trend}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            )}

            {/* Revenue Card */}
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22none%22 stroke=%22white%22 stroke-width=%220.5%22 opacity=%220.1%22/></svg>')] bg-repeat opacity-50"></div>
                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div>
                            <p className="text-white/70 text-sm mb-2">รายได้รวมเดือนนี้</p>
                            <p className="text-5xl font-bold">
                                ฿{(stats?.revenue || 0).toLocaleString()}
                            </p>
                            <p className="mt-3 flex items-center gap-2 text-emerald-300">
                                <span className="bg-emerald-400/20 px-2 py-0.5 rounded-full text-xs flex items-center gap-1">
                                    <ArrowUpRight size={12} /> +24.5%
                                </span>
                                <span className="text-white/60 text-sm">vs เดือนก่อน</span>
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-center">
                                <p className="text-4xl font-bold">{stats?.orders || 0}</p>
                                <p className="text-white/70 text-sm mt-1">คำสั่งซื้อ</p>
                            </div>
                            <div className="w-px h-16 bg-white/20"></div>
                            <div className="text-center">
                                <p className="text-4xl font-bold">{stats?.enrollments || 0}</p>
                                <p className="text-white/70 text-sm mt-1">ลงทะเบียน</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-4">ทางลัด</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {quickLinks.map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors text-gray-700 font-medium text-sm"
                        >
                            <span className={`w-2 h-2 rounded-full ${link.color}`}></span>
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Recent Activity Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Users */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-gray-900">ผู้ใช้ใหม่</h2>
                        <Link href="/admin/users" className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                            ดูทั้งหมด <ArrowUpRight size={14} />
                        </Link>
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold">
                                    U
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-gray-900 truncate">ผู้ใช้ตัวอย่าง {i + 1}</p>
                                    <p className="text-sm text-gray-500">user{i + 1}@example.com</p>
                                </div>
                                <span className="text-xs text-gray-400">วันนี้</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-gray-900">คำสั่งซื้อล่าสุด</h2>
                        <Link href="/admin/enrollments" className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                            ดูทั้งหมด <ArrowUpRight size={14} />
                        </Link>
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white">
                                    <ShoppingCart size={18} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-gray-900 truncate">คำสั่งซื้อ #{1000 + i}</p>
                                    <p className="text-sm text-gray-500">สินค้า {i + 1} รายการ</p>
                                </div>
                                <span className="text-emerald-600 font-semibold">฿{(990 * (i + 1)).toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
