'use client';

import { useState } from 'react';
import { Plus, Search, Edit, Trash2, Eye, UserPlus, Filter, Download } from 'lucide-react';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
    created_at: string;
}

const mockUsers: User[] = [
    { id: 1, name: 'สมชาย ใจดี', email: 'somchai@example.com', role: 'admin', status: 'active', created_at: '15 ม.ค. 2567' },
    { id: 2, name: 'สมหญิง รักเรียน', email: 'somying@example.com', role: 'user', status: 'active', created_at: '20 ก.พ. 2567' },
    { id: 3, name: 'วิชัย การค้า', email: 'wichai@example.com', role: 'user', status: 'inactive', created_at: '10 มี.ค. 2567' },
    { id: 4, name: 'นภา สดใส', email: 'napa@example.com', role: 'moderator', status: 'active', created_at: '5 เม.ย. 2567' },
    { id: 5, name: 'ธนา มั่งมี', email: 'tana@example.com', role: 'user', status: 'active', created_at: '12 พ.ค. 2567' },
];

const roleLabels: Record<string, string> = {
    admin: 'ผู้ดูแลระบบ',
    moderator: 'ผู้ดูแล',
    user: 'ผู้ใช้งาน',
};

const statusLabels: Record<string, string> = {
    active: 'ใช้งาน',
    inactive: 'ไม่ใช้งาน',
};

export default function UsersPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRole, setSelectedRole] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');

    const filteredUsers = mockUsers.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesRole = selectedRole === 'all' || user.role === selectedRole;
        const matchesStatus = selectedStatus === 'all' || user.status === selectedStatus;
        return matchesSearch && matchesRole && matchesStatus;
    });

    const getRoleBadgeColor = (role: string) => {
        switch (role) {
            case 'admin': return 'bg-gradient-to-r from-rose-500/20 to-pink-500/20 text-rose-600 border border-rose-200';
            case 'moderator': return 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-600 border border-purple-200';
            default: return 'bg-gray-100 text-gray-600 border border-gray-200';
        }
    };

    const getStatusBadgeColor = (status: string) => {
        return status === 'active'
            ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-600 border border-emerald-200'
            : 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-600 border border-amber-200';
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">จัดการผู้ใช้งาน</h1>
                    <p className="text-gray-500 mt-1">จัดการสมาชิกและสิทธิ์การเข้าถึง</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
                        <Download size={18} />
                        <span className="hidden sm:inline">ส่งออก</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all">
                        <UserPlus size={18} />
                        <span>เพิ่มผู้ใช้</span>
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'ผู้ใช้ทั้งหมด', value: mockUsers.length, color: 'from-blue-500 to-blue-600' },
                    { label: 'ผู้ใช้งาน', value: mockUsers.filter(u => u.status === 'active').length, color: 'from-emerald-500 to-teal-600' },
                    { label: 'ไม่ใช้งาน', value: mockUsers.filter(u => u.status === 'inactive').length, color: 'from-amber-500 to-orange-600' },
                    { label: 'ผู้ดูแลระบบ', value: mockUsers.filter(u => u.role === 'admin').length, color: 'from-rose-500 to-pink-600' },
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
                    {/* Search */}
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="ค้นหาผู้ใช้..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                        />
                    </div>

                    {/* Role Filter */}
                    <select
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white"
                    >
                        <option value="all">ทุกบทบาท</option>
                        <option value="admin">ผู้ดูแลระบบ</option>
                        <option value="moderator">ผู้ดูแล</option>
                        <option value="user">ผู้ใช้งาน</option>
                    </select>

                    {/* Status Filter */}
                    <select
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white"
                    >
                        <option value="all">ทุกสถานะ</option>
                        <option value="active">ใช้งาน</option>
                        <option value="inactive">ไม่ใช้งาน</option>
                    </select>
                </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ผู้ใช้</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">บทบาท</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">สถานะ</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">วันที่สมัคร</th>
                                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">จัดการ</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-11 h-11 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                                                <span className="text-white font-bold">{user.name.charAt(0)}</span>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">{user.name}</p>
                                                <p className="text-sm text-gray-500">{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getRoleBadgeColor(user.role)}`}>
                                            {roleLabels[user.role]}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getStatusBadgeColor(user.status)}`}>
                                            {statusLabels[user.status]}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {user.created_at}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-1">
                                            <button className="p-2.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                                                <Eye size={18} />
                                            </button>
                                            <button className="p-2.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all">
                                                <Edit size={18} />
                                            </button>
                                            <button className="p-2.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100 bg-gray-50/50">
                    <p className="text-sm text-gray-500">
                        แสดง {filteredUsers.length} จาก {mockUsers.length} รายการ
                    </p>
                    <div className="flex items-center gap-2">
                        <button className="px-4 py-2 text-sm border border-gray-200 rounded-xl hover:bg-white transition-colors disabled:opacity-50">
                            ก่อนหน้า
                        </button>
                        <button className="px-4 py-2 text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl shadow-lg shadow-emerald-500/25">1</button>
                        <button className="px-4 py-2 text-sm border border-gray-200 rounded-xl hover:bg-white transition-colors">2</button>
                        <button className="px-4 py-2 text-sm border border-gray-200 rounded-xl hover:bg-white transition-colors">
                            ถัดไป
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
