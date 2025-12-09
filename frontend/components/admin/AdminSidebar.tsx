'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
    LayoutDashboard,
    Users,
    BookOpen,
    FileText,
    Package,
    Settings,
    Menu,
    X,
    ChevronRight,
    TrendingUp,
    ShoppingCart,
    Tag,
    LogOut,
    Sparkles,
    BookMarked,
    Megaphone,
    BarChart3,
    CreditCard
} from 'lucide-react';

interface NavItem {
    name: string;
    href: string;
    icon: React.ReactNode;
    badge?: string;
}

interface NavGroup {
    label: string;
    items: NavItem[];
}

const navigationGroups: NavGroup[] = [
    {
        label: 'ภาพรวม',
        items: [
            { name: 'แดชบอร์ด', href: '/admin', icon: <LayoutDashboard size={20} /> },
            { name: 'สถิติและรายงาน', href: '/admin/analytics', icon: <BarChart3 size={20} /> },
        ]
    },
    {
        label: 'จัดการผู้ใช้',
        items: [
            { name: 'ผู้ใช้งานทั้งหมด', href: '/admin/users', icon: <Users size={20} />, badge: '24' },
            { name: 'การสมัครสมาชิก', href: '/admin/subscriptions', icon: <CreditCard size={20} /> },
        ]
    },
    {
        label: 'เนื้อหา',
        items: [
            { name: 'คอร์สเรียน', href: '/admin/courses', icon: <BookOpen size={20} /> },
            { name: 'บทความ', href: '/admin/articles', icon: <FileText size={20} /> },
            { name: 'E-books', href: '/admin/ebooks', icon: <BookMarked size={20} /> },
        ]
    },
    {
        label: 'สินค้า',
        items: [
            { name: 'สินค้าทั้งหมด', href: '/admin/products', icon: <Package size={20} /> },
            { name: 'Indicators', href: '/admin/indicators', icon: <TrendingUp size={20} /> },
            { name: 'Expert Advisors', href: '/admin/expert-advisors', icon: <Sparkles size={20} /> },
        ]
    },
    {
        label: 'อื่นๆ',
        items: [
            { name: 'หมวดหมู่', href: '/admin/categories', icon: <Tag size={20} /> },
            { name: 'คำสั่งซื้อ', href: '/admin/orders', icon: <ShoppingCart size={20} />, badge: '5' },
            { name: 'โปรโมชั่น', href: '/admin/promotions', icon: <Megaphone size={20} /> },
            { name: 'ตั้งค่าเว็บไซต์', href: '/admin/settings', icon: <Settings size={20} /> },
        ]
    },
];

export default function AdminSidebar() {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const isActive = (href: string) => {
        if (href === '/admin') return pathname === '/admin';
        return pathname?.startsWith(href);
    };

    return (
        <>
            {/* Mobile menu button */}
            <button
                className="lg:hidden fixed top-4 left-4 z-50 p-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Overlay */}
            {sidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-72 
        bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950
        transform transition-all duration-300 ease-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        border-r border-white/5
        flex flex-col
      `}>
                {/* Logo */}
                <div className="h-20 flex items-center px-6 border-b border-white/5 flex-shrink-0">
                    <Link href="/admin" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-shadow">
                            <Sparkles className="text-white" size={22} />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold text-white tracking-tight">LongTrade</h1>
                            <p className="text-[10px] text-emerald-400 font-medium uppercase tracking-widest">ระบบจัดการ</p>
                        </div>
                    </Link>
                </div>

                {/* Navigation - Hidden Scrollbar */}
                <nav className="flex-1 px-4 py-6 overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <style jsx>{`
            nav::-webkit-scrollbar {
              display: none;
            }
          `}</style>

                    {navigationGroups.map((group, groupIndex) => (
                        <div key={group.label} className={groupIndex > 0 ? 'mt-8' : ''}>
                            {/* Group Label */}
                            <p className="px-4 mb-3 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                                {group.label}
                            </p>

                            {/* Group Items */}
                            <div className="space-y-1">
                                {group.items.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`
                      flex items-center justify-between px-4 py-3 rounded-xl
                      text-sm font-medium transition-all duration-200
                      ${isActive(item.href)
                                                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25'
                                                : 'text-slate-400 hover:text-white hover:bg-white/5'}
                    `}
                                    >
                                        <span className="flex items-center gap-3">
                                            {item.icon}
                                            {item.name}
                                        </span>
                                        {item.badge && (
                                            <span className={`
                        px-2 py-0.5 rounded-full text-xs font-medium
                        ${isActive(item.href)
                                                    ? 'bg-white/20 text-white'
                                                    : 'bg-emerald-500/20 text-emerald-400'}
                      `}>
                                                {item.badge}
                                            </span>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </nav>

                {/* User & Logout */}
                <div className="p-4 flex-shrink-0 border-t border-white/5">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/5 border border-white/5">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold">
                                A
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white">แอดมิน</p>
                                <p className="text-xs text-slate-500">ผู้ดูแลระบบ</p>
                            </div>
                        </div>
                        <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 border border-white/10 transition-all duration-200">
                            <LogOut size={18} />
                            ออกจากระบบ
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}
