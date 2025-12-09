"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaLine } from "react-icons/fa";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Validation
        if (password !== passwordConfirmation) {
            setError("รหัสผ่านไม่ตรงกัน");
            return;
        }

        if (password.length < 8) {
            setError("รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร");
            return;
        }

        setLoading(true);

        try {
            const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";
            const res = await fetch(`${API_URL}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    password,
                    password_confirmation: passwordConfirmation,
                }),
            });


            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "สมัครสมาชิกไม่สำเร็จ");
            }

            // Registration successful - auto login
            login(data.token, data.user);
        } catch (err: any) {
            setError(err.message || "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
        } finally {
            setLoading(false);
        }
    };

    const handleSocialRegister = (provider: string) => {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";
        // Redirect to backend social auth endpoint (same as login)
        window.location.href = `${API_URL}/auth/social/${provider}/redirect`;
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-gray-900 via-black to-gray-900">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative w-full max-w-md">
                {/* Logo/Title */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                        LongTrade Academy
                    </h1>
                    <p className="text-white/60">สมัครสมาชิกเพื่อเข้าถึง E-Books</p>
                </div>

                {/* Register Form */}
                <div className="glass rounded-2xl p-8 border border-white/10 backdrop-blur-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">สมัครสมาชิก</h2>

                    {error && (
                        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/80">
                                ชื่อ-นามสกุล
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                placeholder="สมชาย ใจดี"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/80">
                                อีเมล
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                placeholder="your@email.com"
                            />
                        </div>

                        {/* Phone Field */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white/80">
                                เบอร์โทรศัพท์
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                placeholder="08X-XXX-XXXX"
                            />
                            <p className="mt-1 text-xs text-white/50">ไม่บังคับ - ใช้สำหรับติดต่อกลับ</p>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium mb-2 text-white/80">
                                รหัสผ่าน
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength={8}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                placeholder="••••••••"
                            />
                            <p className="mt-1 text-xs text-white/50">รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร</p>
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <label htmlFor="password_confirmation" className="block text-sm font-medium mb-2 text-white/80">
                                ยืนยันรหัสผ่าน
                            </label>
                            <input
                                id="password_confirmation"
                                type="password"
                                value={passwordConfirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                required
                                minLength={8}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                placeholder="••••••••"
                            />
                        </div>

                        {/* Terms & Conditions */}
                        <div className="flex items-start">
                            <input
                                id="terms"
                                type="checkbox"
                                required
                                className="mt-1 mr-2 rounded"
                            />
                            <label htmlFor="terms" className="text-sm text-white/60">
                                ฉันยอมรับ{" "}
                                <Link href="/terms" className="text-red-400 hover:text-red-300">
                                    ข้อกำหนดและเงื่อนไข
                                </Link>{" "}
                                และ{" "}
                                <Link href="/privacy" className="text-red-400 hover:text-red-300">
                                    นโยบายความเป็นส่วนตัว
                                </Link>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full btn-red disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/20 border-t-white"></div>
                                    กำลังสมัครสมาชิก...
                                </span>
                            ) : (
                                "สมัครสมาชิก"
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-gray-900/50 text-white/60">หรือ</span>
                        </div>
                    </div>

                    {/* Social Register Buttons */}
                    <div className="space-y-3">
                        <button
                            onClick={() => handleSocialRegister('google')}
                            type="button"
                            className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 py-3 px-4 rounded-xl font-medium hover:bg-gray-100 transition-all shadow-lg"
                        >
                            <FcGoogle className="h-5 w-5" />
                            สมัครด้วย Google
                        </button>

                        <button
                            onClick={() => handleSocialRegister('facebook')}
                            type="button"
                            className="w-full flex items-center justify-center gap-3 bg-[#1877F2] text-white py-3 px-4 rounded-xl font-medium hover:bg-[#166FE5] transition-all shadow-lg"
                        >
                            <FaFacebook className="h-5 w-5" />
                            สมัครด้วย Facebook
                        </button>

                        <button
                            onClick={() => handleSocialRegister('line')}
                            type="button"
                            className="w-full flex items-center justify-center gap-3 bg-[#00B900] text-white py-3 px-4 rounded-xl font-medium hover:bg-[#00A000] transition-all shadow-lg"
                        >
                            <FaLine className="h-5 w-5" />
                            สมัครด้วย LINE
                        </button>
                    </div>

                    {/* Login Link */}
                    <div className="text-center mt-6">
                        <p className="text-white/60">
                            มีบัญชีอยู่แล้ว?{" "}
                            <Link href="/login" className="text-red-400 hover:text-red-300 font-semibold transition-colors">
                                เข้าสู่ระบบ
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Back to Home */}
                <div className="text-center mt-6">
                    <Link href="/" className="text-white/60 hover:text-white transition-colors text-sm">
                        ← กลับหน้าหลัก
                    </Link>
                </div>
            </div>
        </div>
    );
}
