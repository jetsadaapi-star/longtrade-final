"use client";

import { useState } from "react";
import { X, CreditCard, Building2, Smartphone, Copy, Check } from "lucide-react";

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    productName: string;
    amount: number;
    productId: number;
    productType: "ebook" | "product" | "course";
    onSuccess?: () => void;
}

type PaymentMethod = "bank_transfer" | "promptpay" | "stripe";

export default function PaymentModal({
    isOpen,
    onClose,
    productName,
    amount,
    productId,
    productType,
    onSuccess,
}: PaymentModalProps) {
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
    const [loading, setLoading] = useState(false);
    const [paymentData, setPaymentData] = useState<any>(null);
    const [copied, setCopied] = useState(false);

    if (!isOpen) return null;

    const handleMethodSelect = async (method: PaymentMethod) => {
        setSelectedMethod(method);
        setLoading(true);

        try {
            const token = localStorage.getItem("token");
            const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

            const response = await fetch(`${API_URL}/payment/create-order`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    product_id: productId,
                    product_type: productType,
                    payment_method: method,
                }),
            });

            if (!response.ok) throw new Error("Failed to create order");

            const data = await response.json();
            setPaymentData(data);
        } catch (error) {
            console.error("Payment error:", error);
            alert("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const renderPaymentContent = () => {
        if (!selectedMethod) {
            return (
                <div className="space-y-4">
                    <h3 className="text-xl font-bold mb-4">เลือกวิธีการชำระเงิน</h3>

                    {/* Bank Transfer */}
                    <button
                        onClick={() => handleMethodSelect("bank_transfer")}
                        className="w-full p-4 glass rounded-xl border border-white/10 hover:border-red-500/50 transition-all flex items-center gap-4"
                    >
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                            <Building2 className="h-6 w-6" />
                        </div>
                        <div className="flex-1 text-left">
                            <div className="font-semibold">โอนเงินผ่านธนาคาร</div>
                            <div className="text-sm text-white/60">กสิกรไทย, ไทยพาณิชย์</div>
                        </div>
                        <div className="text-2xl">🏦</div>
                    </button>

                    {/* PromptPay */}
                    <button
                        onClick={() => handleMethodSelect("promptpay")}
                        className="w-full p-4 glass rounded-xl border border-white/10 hover:border-red-500/50 transition-all flex items-center gap-4"
                    >
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                            <Smartphone className="h-6 w-6" />
                        </div>
                        <div className="flex-1 text-left">
                            <div className="font-semibold">พร้อมเพย์</div>
                            <div className="text-sm text-white/60">สแกน QR Code</div>
                        </div>
                        <div className="text-2xl">📱</div>
                    </button>

                    {/* Stripe Test */}
                    <button
                        onClick={() => handleMethodSelect("stripe")}
                        className="w-full p-4 glass rounded-xl border border-white/10 hover:border-red-500/50 transition-all flex items-center gap-4"
                    >
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                            <CreditCard className="h-6 w-6" />
                        </div>
                        <div className="flex-1 text-left">
                            <div className="font-semibold">บัตรเครดิต/เดบิต</div>
                            <div className="text-sm text-white/60">Stripe Test Mode</div>
                        </div>
                        <div className="text-2xl">💳</div>
                    </button>
                </div>
            );
        }

        if (loading) {
            return (
                <div className="text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-white/20 border-t-red-500"></div>
                    <p className="mt-4 text-white/60">กำลังสร้างคำสั่งซื้อ...</p>
                </div>
            );
        }

        // Bank Transfer Instructions
        if (selectedMethod === "bank_transfer" && paymentData) {
            const bankData = paymentData.payment_data;
            return (
                <div className="space-y-6">
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-2">โอนเงินผ่านธนาคาร</h3>
                        <p className="text-white/60">กรุณาโอนเงินไปยังบัญชีด้านล่าง</p>
                    </div>

                    <div className="glass rounded-xl p-6 border border-white/10 space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-white/60">ธนาคาร</span>
                            <span className="font-semibold">{bankData.bank_name}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-white/60">เลขที่บัญชี</span>
                            <div className="flex items-center gap-2">
                                <span className="font-mono font-semibold">{bankData.account_number}</span>
                                <button
                                    onClick={() => copyToClipboard(bankData.account_number)}
                                    className="p-1 hover:bg-white/10 rounded"
                                >
                                    {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-white/60">ชื่อบัญชี</span>
                            <span className="font-semibold">{bankData.account_name}</span>
                        </div>
                        <div className="h-px bg-white/10 my-4"></div>
                        <div className="flex justify-between items-center text-lg">
                            <span className="text-white/60">จำนวนเงิน</span>
                            <span className="font-bold text-red-400">฿{amount.toLocaleString()}</span>
                        </div>
                    </div>

                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                        <p className="text-sm text-yellow-200">
                            ⚠️ หลังจากโอนเงินแล้ว กรุณาแจ้งชำระเงินพร้อมแนบสลิป
                        </p>
                    </div>

                    <button
                        onClick={async () => {
                            // In production, this would upload slip and wait for admin confirmation
                            // For now, we'll simulate success
                            if (onSuccess) onSuccess();
                            onClose();
                        }}
                        className="w-full btn-red"
                    >
                        แจ้งชำระเงิน
                    </button>
                </div>
            );
        }

        // PromptPay QR Code
        if (selectedMethod === "promptpay" && paymentData) {
            return (
                <div className="space-y-6">
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-2">สแกน QR Code</h3>
                        <p className="text-white/60">ใช้แอปธนาคารสแกน QR Code ด้านล่าง</p>
                    </div>

                    <div className="flex justify-center">
                        <div className="bg-white p-6 rounded-2xl">
                            {/* Mock QR Code - replace with actual QR code library */}
                            <div className="w-64 h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                                <div className="text-gray-600 text-center">
                                    <div className="text-6xl mb-2">📱</div>
                                    <div className="text-sm">QR Code</div>
                                    <div className="text-xs text-gray-400 mt-2">
                                        PromptPay: 0123456789
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass rounded-xl p-4 border border-white/10">
                        <div className="flex justify-between items-center text-lg">
                            <span className="text-white/60">จำนวนเงิน</span>
                            <span className="font-bold text-red-400">฿{amount.toLocaleString()}</span>
                        </div>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                        <p className="text-sm text-blue-200">
                            ℹ️ QR Code นี้จะหมดอายุใน 15 นาที
                        </p>
                    </div>

                    <button
                        onClick={async () => {
                            // In production, verify QR payment status
                            // For now, we'll simulate success
                            if (onSuccess) onSuccess();
                            onClose();
                        }}
                        className="w-full btn-red"
                    >
                        ชำระเงินเรียบร้อยแล้ว
                    </button>
                </div>
            );
        }

        // Stripe Test Card
        if (selectedMethod === "stripe" && paymentData) {
            return (
                <div className="space-y-6">
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-2">ชำระด้วยบัตร (Test Mode)</h3>
                        <p className="text-white/60">ใช้บัตรทดสอบด้านล่าง</p>
                    </div>

                    <div className="glass rounded-xl p-6 border border-white/10 space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-white/80">
                                หมายเลขบัตร
                            </label>
                            <input
                                type="text"
                                value="4242 4242 4242 4242"
                                readOnly
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl font-mono"
                            />
                            <p className="text-xs text-white/50 mt-1">Test Card - Always Success</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-white/80">
                                    วันหมดอายุ
                                </label>
                                <input
                                    type="text"
                                    placeholder="12/25"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-white/80">
                                    CVC
                                </label>
                                <input
                                    type="text"
                                    placeholder="123"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl"
                                />
                            </div>
                        </div>

                        <div className="h-px bg-white/10 my-4"></div>

                        <div className="flex justify-between items-center text-lg">
                            <span className="text-white/60">จำนวนเงิน</span>
                            <span className="font-bold text-red-400">฿{amount.toLocaleString()}</span>
                        </div>
                    </div>

                    <button
                        onClick={async () => {
                            // In production, process Stripe payment
                            // For now, we'll simulate success
                            if (onSuccess) onSuccess();
                            onClose();
                        }}
                        className="w-full btn-red"
                    >
                        ชำระเงิน ฿{amount.toLocaleString()}
                    </button>
                </div>
            );
        }

        return null;
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-lg glass rounded-2xl border border-white/10 p-6 max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                    <X className="h-5 w-5" />
                </button>

                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">ชำระเงิน</h2>
                    <p className="text-white/60">{productName}</p>
                    <div className="mt-4 flex items-center justify-between p-4 bg-white/5 rounded-xl">
                        <span className="text-white/80">ยอดชำระ</span>
                        <span className="text-2xl font-bold text-red-400">฿{amount.toLocaleString()}</span>
                    </div>
                </div>

                {/* Payment Content */}
                {renderPaymentContent()}

                {/* Back Button */}
                {selectedMethod && !loading && (
                    <button
                        onClick={() => {
                            setSelectedMethod(null);
                            setPaymentData(null);
                        }}
                        className="w-full mt-4 py-3 text-white/60 hover:text-white transition-colors"
                    >
                        ← เลือกวิธีชำระเงินอื่น
                    </button>
                )}
            </div>
        </div>
    );
}
