'use client';

import { useState, useEffect } from 'react';
import { Save, Globe, Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { adminSettings } from '@/lib/admin-api';

interface SiteSettings {
    site_name: string;
    site_description: string;
    contact_email: string;
    contact_phone: string;
    address: string;
    facebook_url: string;
    line_url: string;
    youtube_url: string;
    tiktok_url: string;
}

export default function SettingsPage() {
    const [settings, setSettings] = useState<SiteSettings>({
        site_name: '',
        site_description: '',
        contact_email: '',
        contact_phone: '',
        address: '',
        facebook_url: '',
        line_url: '',
        youtube_url: '',
        tiktok_url: '',
    });
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    useEffect(() => {
        loadSettings();
    }, []);

    const loadSettings = async () => {
        setIsLoading(true);
        const result = await adminSettings.get();
        if (result.data) {
            setSettings({
                site_name: result.data.site_name || '',
                site_description: result.data.site_description || '',
                contact_email: result.data.contact_email || '',
                contact_phone: result.data.contact_phone || '',
                address: result.data.address || '',
                facebook_url: result.data.facebook_url || '',
                line_url: result.data.line_url || '',
                youtube_url: result.data.youtube_url || '',
                tiktok_url: result.data.tiktok_url || '',
            });
        }
        setIsLoading(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSettings({ ...settings, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        setIsSaving(true);
        setMessage({ type: '', text: '' });

        const result = await adminSettings.update(settings);

        if (result.error) {
            setMessage({ type: 'error', text: result.error });
        } else {
            setMessage({ type: 'success', text: 'บันทึกการตั้งค่าเรียบร้อยแล้ว' });
        }

        setIsSaving(false);
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-24">
                <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">ตั้งค่าเว็บไซต์</h1>
                    <p className="text-gray-500 mt-1">จัดการข้อมูลและการตั้งค่าทั่วไป</p>
                </div>
                <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all disabled:opacity-50"
                >
                    {isSaving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                    {isSaving ? 'กำลังบันทึก...' : 'บันทึกการตั้งค่า'}
                </button>
            </div>

            {/* Message */}
            {message.text && (
                <div className={`p-4 rounded-xl ${message.type === 'success'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}>
                    {message.text}
                </div>
            )}

            {/* Settings Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* General Settings */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                        <Globe size={20} className="text-emerald-500" />
                        ข้อมูลทั่วไป
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">ชื่อเว็บไซต์</label>
                            <input
                                type="text"
                                name="site_name"
                                value={settings.site_name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">คำอธิบายเว็บไซต์</label>
                            <textarea
                                name="site_description"
                                value={settings.site_description}
                                onChange={handleChange}
                                rows={3}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700"
                            />
                        </div>
                    </div>
                </div>

                {/* Contact Settings */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                        <Mail size={20} className="text-emerald-500" />
                        ข้อมูลติดต่อ
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">อีเมล</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="email"
                                    name="contact_email"
                                    value={settings.contact_email}
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">โทรศัพท์</label>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    name="contact_phone"
                                    value={settings.contact_phone}
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">ที่อยู่</label>
                            <div className="relative">
                                <MapPin className="absolute left-4 top-3.5 text-gray-400" size={18} />
                                <textarea
                                    name="address"
                                    value={settings.address}
                                    onChange={handleChange}
                                    rows={2}
                                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm lg:col-span-2">
                    <h2 className="text-lg font-semibold text-gray-900 mb-6">โซเชียลมีเดีย</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Facebook URL</label>
                            <input
                                type="text"
                                name="facebook_url"
                                value={settings.facebook_url}
                                onChange={handleChange}
                                placeholder="https://facebook.com/..."
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700 placeholder-gray-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">LINE ID</label>
                            <input
                                type="text"
                                name="line_url"
                                value={settings.line_url}
                                onChange={handleChange}
                                placeholder="@youridline"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700 placeholder-gray-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">YouTube URL</label>
                            <input
                                type="text"
                                name="youtube_url"
                                value={settings.youtube_url}
                                onChange={handleChange}
                                placeholder="https://youtube.com/@..."
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700 placeholder-gray-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">TikTok</label>
                            <input
                                type="text"
                                name="tiktok_url"
                                value={settings.tiktok_url}
                                onChange={handleChange}
                                placeholder="@yourtiktok"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700 placeholder-gray-400"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
