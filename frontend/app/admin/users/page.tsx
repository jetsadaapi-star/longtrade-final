'use client';

import { useState, useEffect } from 'react';
import { Search, Edit, Trash2, Eye, UserPlus, Download, Users, Loader2, X, Save, Mail, Phone, Shield } from 'lucide-react';
import Link from 'next/link';
import { adminUsers } from '@/lib/admin-api';

interface User {
    id: string;
    name: string;
    email: string;
    phone?: string;
    role: string;
    avatar?: string;
    email_verified_at?: string;
    created_at: string;
    updated_at?: string;
}

const roleLabels: Record<string, string> = {
    admin: 'ผู้ดูแลระบบ',
    superadmin: 'ซุปเปอร์แอดมิน',
    instructor: 'ผู้สอน',
    student: 'ผู้เรียน',
    user: 'ผู้ใช้งาน',
};

const roleColors: Record<string, string> = {
    admin: 'from-rose-500 to-pink-600',
    superadmin: 'from-purple-500 to-indigo-600',
    instructor: 'from-blue-500 to-cyan-600',
    student: 'from-emerald-500 to-teal-600',
    user: 'from-gray-500 to-gray-600',
};

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRole, setSelectedRole] = useState('all');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [total, setTotal] = useState(0);

    // Modal states
    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState<'create' | 'edit' | 'view'>('create');
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    // Form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: 'student',
        password: '',
    });

    useEffect(() => {
        loadUsers();
    }, [page, selectedRole]);

    const loadUsers = async () => {
        setIsLoading(true);
        const params: any = { page, limit: 10 };
        if (selectedRole !== 'all') params.role = selectedRole;
        if (searchQuery) params.search = searchQuery;

        const result = await adminUsers.getAll(params);
        if (result.data) {
            setUsers(result.data.data || result.data || []);
            setTotal(result.data.meta?.total || result.data.length || 0);
            setTotalPages(result.data.meta?.totalPages || 1);
        }
        setIsLoading(false);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setPage(1);
        loadUsers();
    };

    const openCreateModal = () => {
        setFormData({ name: '', email: '', phone: '', role: 'student', password: '' });
        setSelectedUser(null);
        setModalMode('create');
        setShowModal(true);
    };

    const openEditModal = (user: User) => {
        setFormData({
            name: user.name || '',
            email: user.email || '',
            phone: user.phone || '',
            role: user.role || 'student',
            password: '',
        });
        setSelectedUser(user);
        setModalMode('edit');
        setShowModal(true);
    };

    const openViewModal = (user: User) => {
        setSelectedUser(user);
        setModalMode('view');
        setShowModal(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            if (modalMode === 'create') {
                await adminUsers.create(formData);
            } else if (modalMode === 'edit' && selectedUser) {
                const updateData: any = { ...formData };
                if (!updateData.password) delete updateData.password;
                await adminUsers.update(parseInt(selectedUser.id), updateData);
            }
            setShowModal(false);
            loadUsers();
        } catch (error) {
            console.error('Error saving user:', error);
            alert('เกิดข้อผิดพลาดในการบันทึก');
        }

        setIsSaving(false);
    };

    const handleDelete = async (user: User) => {
        if (confirm(`คุณต้องการลบผู้ใช้ "${user.name}" หรือไม่?`)) {
            await adminUsers.delete(parseInt(user.id));
            loadUsers();
        }
    };

    const getRoleBadgeColor = (role: string) => {
        return roleColors[role] || roleColors.user;
    };

    const formatDate = (dateStr: string) => {
        if (!dateStr) return '-';
        return new Date(dateStr).toLocaleDateString('th-TH', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    const filteredUsers = users.filter(user => {
        const matchesSearch = !searchQuery ||
            user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email?.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
    });

    // Stats calculations
    const adminCount = users.filter(u => u.role === 'admin' || u.role === 'superadmin').length;
    const instructorCount = users.filter(u => u.role === 'instructor').length;
    const studentCount = users.filter(u => u.role === 'student').length;

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
                    <button
                        onClick={openCreateModal}
                        className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
                    >
                        <UserPlus size={18} />
                        <span>เพิ่มผู้ใช้</span>
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'ผู้ใช้ทั้งหมด', value: total, color: 'from-blue-500 to-blue-600', icon: <Users size={20} /> },
                    { label: 'ผู้ดูแลระบบ', value: adminCount, color: 'from-rose-500 to-pink-600', icon: <Shield size={20} /> },
                    { label: 'ผู้สอน', value: instructorCount, color: 'from-purple-500 to-purple-600', icon: <Users size={20} /> },
                    { label: 'ผู้เรียน', value: studentCount, color: 'from-emerald-500 to-teal-600', icon: <Users size={20} /> },
                ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">{stat.label}</p>
                                {isLoading ? (
                                    <div className="h-8 w-16 bg-gray-200 animate-pulse rounded mt-1"></div>
                                ) : (
                                    <p className={`text-3xl font-bold mt-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.value}</p>
                                )}
                            </div>
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white opacity-80`}>
                                {stat.icon}
                            </div>
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
                            placeholder="ค้นหาชื่อหรืออีเมล..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                        />
                    </div>
                    <select
                        value={selectedRole}
                        onChange={(e) => { setSelectedRole(e.target.value); setPage(1); }}
                        className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white text-gray-700"
                    >
                        <option value="all">ทุกบทบาท</option>
                        <option value="admin">ผู้ดูแลระบบ</option>
                        <option value="instructor">ผู้สอน</option>
                        <option value="student">ผู้เรียน</option>
                    </select>
                    <button type="submit" className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:shadow-lg transition-all">
                        ค้นหา
                    </button>
                </form>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {isLoading ? (
                    <div className="flex items-center justify-center py-12">
                        <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ผู้ใช้</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">โทรศัพท์</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">บทบาท</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">วันที่สมัคร</th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">จัดการ</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredUsers.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                            <Users className="mx-auto mb-4 text-gray-300" size={48} />
                                            <p>ไม่พบผู้ใช้</p>
                                        </td>
                                    </tr>
                                ) : (
                                    filteredUsers.map((user) => (
                                        <tr key={user.id} className="hover:bg-gray-50/50 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-11 h-11 bg-gradient-to-br ${getRoleBadgeColor(user.role)} rounded-xl flex items-center justify-center shadow-lg`}>
                                                        <span className="text-white font-bold">{user.name?.charAt(0)?.toUpperCase() || 'U'}</span>
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-gray-900">{user.name}</p>
                                                        <p className="text-sm text-gray-500">{user.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600">
                                                {user.phone || '-'}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex px-3 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r ${getRoleBadgeColor(user.role)} text-white shadow-sm`}>
                                                    {roleLabels[user.role] || user.role}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {formatDate(user.created_at)}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button
                                                        onClick={() => openViewModal(user)}
                                                        className="p-2.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                                                        title="ดูรายละเอียด"
                                                    >
                                                        <Eye size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => openEditModal(user)}
                                                        className="p-2.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"
                                                        title="แก้ไข"
                                                    >
                                                        <Edit size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(user)}
                                                        className="p-2.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                                                        title="ลบ"
                                                    >
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

                {/* Pagination */}
                <div className="px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100 bg-gray-50/50">
                    <p className="text-sm text-gray-500">
                        แสดง {filteredUsers.length} จาก {total} รายการ
                    </p>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setPage(p => Math.max(1, p - 1))}
                            disabled={page === 1}
                            className="px-4 py-2 text-sm border border-gray-200 rounded-xl hover:bg-white transition-colors disabled:opacity-50"
                        >
                            ก่อนหน้า
                        </button>
                        <span className="px-4 py-2 text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-medium">{page}</span>
                        <button
                            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                            disabled={page >= totalPages}
                            className="px-4 py-2 text-sm border border-gray-200 rounded-xl hover:bg-white transition-colors disabled:opacity-50"
                        >
                            ถัดไป
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden">
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-5 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-white">
                                {modalMode === 'create' ? 'เพิ่มผู้ใช้ใหม่' : modalMode === 'edit' ? 'แก้ไขผู้ใช้' : 'รายละเอียดผู้ใช้'}
                            </h2>
                            <button onClick={() => setShowModal(false)} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                                <X className="text-white" size={20} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6">
                            {modalMode === 'view' && selectedUser ? (
                                <div className="space-y-6">
                                    {/* Avatar and Name */}
                                    <div className="text-center">
                                        <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${getRoleBadgeColor(selectedUser.role)} rounded-2xl flex items-center justify-center shadow-lg mb-4`}>
                                            <span className="text-3xl font-bold text-white">{selectedUser.name?.charAt(0)?.toUpperCase()}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">{selectedUser.name}</h3>
                                        <span className={`inline-flex mt-2 px-3 py-1 text-sm font-semibold rounded-lg bg-gradient-to-r ${getRoleBadgeColor(selectedUser.role)} text-white`}>
                                            {roleLabels[selectedUser.role] || selectedUser.role}
                                        </span>
                                    </div>

                                    {/* Info Grid */}
                                    <div className="grid grid-cols-1 gap-4 bg-gray-50 rounded-2xl p-5">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-blue-100 rounded-lg">
                                                <Mail className="text-blue-600" size={18} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500">อีเมล</p>
                                                <p className="font-medium text-gray-900">{selectedUser.email}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-emerald-100 rounded-lg">
                                                <Phone className="text-emerald-600" size={18} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500">โทรศัพท์</p>
                                                <p className="font-medium text-gray-900">{selectedUser.phone || '-'}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
                                            ปิด
                                        </button>
                                        <button onClick={() => { setModalMode('edit'); setFormData({ name: selectedUser.name, email: selectedUser.email, phone: selectedUser.phone || '', role: selectedUser.role, password: '' }); }} className="flex-1 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2">
                                            <Edit size={18} />
                                            แก้ไข
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">ชื่อ-นามสกุล</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700"
                                            placeholder="กรอกชื่อ-นามสกุล"
                                            required
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">อีเมล</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700"
                                            placeholder="example@email.com"
                                            required
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">โทรศัพท์</label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700"
                                            placeholder="08x-xxx-xxxx"
                                        />
                                    </div>

                                    {/* Role */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">บทบาท</label>
                                        <select
                                            value={formData.role}
                                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700 bg-white"
                                        >
                                            <option value="student">ผู้เรียน</option>
                                            <option value="instructor">ผู้สอน</option>
                                            <option value="admin">ผู้ดูแลระบบ</option>
                                        </select>
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            {modalMode === 'create' ? 'รหัสผ่าน' : 'รหัสผ่านใหม่ (เว้นว่างถ้าไม่ต้องการเปลี่ยน)'}
                                        </label>
                                        <input
                                            type="password"
                                            value={formData.password}
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700"
                                            placeholder="••••••••"
                                            {...(modalMode === 'create' ? { required: true } : {})}
                                        />
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-3 pt-3">
                                        <button type="button" onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                                            ยกเลิก
                                        </button>
                                        <button type="submit" disabled={isSaving} className="flex-1 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:shadow-lg transition-all font-medium flex items-center justify-center gap-2 disabled:opacity-50">
                                            {isSaving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                                            {modalMode === 'create' ? 'สร้าง' : 'บันทึก'}
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
