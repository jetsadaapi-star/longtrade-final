'use client';

import { Bell, Search, Sun, ChevronDown, Settings, User, LogOut } from 'lucide-react';
import { useState } from 'react';

export default function AdminHeader() {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);

    const notifications = [
        { id: 1, title: 'มีผู้ใช้ใหม่สมัครสมาชิก', time: '5 นาทีที่แล้ว', unread: true },
        { id: 2, title: 'มีการซื้อคอร์สเรียนใหม่', time: '1 ชั่วโมงที่แล้ว', unread: true },
        { id: 3, title: 'มีรีวิวใหม่', time: '3 ชั่วโมงที่แล้ว', unread: false },
    ];

    return (
        <header className="sticky top-0 z-40 h-20 bg-white/80 backdrop-blur-xl border-b border-gray-100 flex items-center justify-between px-6">
            {/* Search */}
            <div className="flex-1 max-w-xl hidden md:block">
                <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder="ค้นหา..."
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition-all"
                    />
                </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
                {/* Theme Toggle */}
                <button className="p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all">
                    <Sun size={20} />
                </button>

                {/* Notifications */}
                <div className="relative">
                    <button
                        onClick={() => { setShowNotifications(!showNotifications); setShowUserMenu(false); }}
                        className="relative p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all"
                    >
                        <Bell size={20} />
                        <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full ring-2 ring-white"></span>
                    </button>

                    {/* Notifications Dropdown */}
                    {showNotifications && (
                        <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
                            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                                <h3 className="font-semibold text-gray-900">การแจ้งเตือน</h3>
                                <span className="text-xs text-emerald-600 font-medium cursor-pointer hover:text-emerald-700">อ่านทั้งหมด</span>
                            </div>
                            <div className="max-h-80 overflow-y-auto">
                                {notifications.map((notif) => (
                                    <div key={notif.id} className={`p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors ${notif.unread ? 'bg-emerald-50/50' : ''}`}>
                                        <div className="flex items-start gap-3">
                                            <div className={`w-2 h-2 rounded-full mt-2 ${notif.unread ? 'bg-emerald-500' : 'bg-gray-300'}`}></div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{notif.title}</p>
                                                <p className="text-xs text-gray-500 mt-0.5">{notif.time}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-3 border-t border-gray-100 text-center">
                                <button className="text-sm text-emerald-600 font-medium hover:text-emerald-700">ดูทั้งหมด</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Divider */}
                <div className="w-px h-8 bg-gray-200 hidden sm:block"></div>

                {/* User Menu */}
                <div className="relative">
                    <button
                        onClick={() => { setShowUserMenu(!showUserMenu); setShowNotifications(false); }}
                        className="flex items-center gap-3 pl-2 pr-3 py-2 hover:bg-gray-100 rounded-2xl transition-all"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-500/25">
                            A
                        </div>
                        <div className="hidden sm:block text-left">
                            <p className="text-sm font-semibold text-gray-900">แอดมิน</p>
                            <p className="text-xs text-gray-500">ผู้ดูแลระบบ</p>
                        </div>
                        <ChevronDown size={16} className="text-gray-400 hidden sm:block" />
                    </button>

                    {/* User Dropdown */}
                    {showUserMenu && (
                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
                            <div className="p-2">
                                <a href="/admin/profile" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors">
                                    <User size={18} />
                                    <span className="text-sm">โปรไฟล์ของฉัน</span>
                                </a>
                                <a href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors">
                                    <Settings size={18} />
                                    <span className="text-sm">ตั้งค่า</span>
                                </a>
                            </div>
                            <div className="border-t border-gray-100 p-2">
                                <button className="w-full flex items-center gap-3 px-4 py-3 text-rose-600 hover:bg-rose-50 rounded-xl transition-colors">
                                    <LogOut size={18} />
                                    <span className="text-sm font-medium">ออกจากระบบ</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
