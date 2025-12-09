import Link from "next/link";
import Image from "next/image";
import PlaceholderImage from "@/components/PlaceholderImage";

const OPEN_ACCOUNT_URL = "https://clicks.pipaffiliates.com/c?c=883567&l=th&p=1";

interface OpenAccountModalProps {
    open: boolean;
    onClose: () => void;
}

export default function OpenAccountModal({ open, onClose }: OpenAccountModalProps) {
    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-[90] grid place-items-center bg-black/60 p-4"
            onClick={onClose}
        >
            <div
                className="w-full max-w-4xl rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                    <h3 className="text-xl md:text-2xl font-extrabold">
                        ขั้นตอนการเปิดบัญชีเทรด
                    </h3>
                    <button
                        className="px-3 py-1 rounded-md bg-white/5 hover:bg-white/10"
                        onClick={onClose}
                        aria-label="ปิดป็อปอัป"
                    >
                        ✕
                    </button>
                </div>

                {/* body */}
                <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                        <div className="rounded-xl overflow-hidden">
                            {/* ภาพตัวอย่างการเปิดบัญชี */}
                            <PlaceholderImage src="/sample_open.png" width={600} height={900} className="w-full h-full" />
                        </div>

                        <div className="space-y-3 text-white/90">
                            <ol className="list-decimal list-inside space-y-2 leading-relaxed">
                                <li>กรอกข้อมูล <strong>Email</strong> และกำหนด <strong>รหัสผ่าน</strong></li>
                                <li>
                                    คลิกที่คำว่า <strong>ป้อนที่นี้</strong> เพื่อใส่รหัสพันธมิตร
                                </li>
                                <li>
                                    กรอกรหัสพันธมิตร{" "}
                                    <span className="font-extrabold text-brand-red">
                                        LONGTRADE
                                    </span>
                                </li>
                                <li>ไปที่ Email เพื่อกดยืนยัน</li>
                            </ol>

                            <div className="pt-4">
                                <a
                                    href={OPEN_ACCOUNT_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary text-base"
                                >
                                    คลิกเพื่อเปิดบัญชี
                                </a>
                            </div>

                            <p className="text-xs text-white/60 pt-2">
                                *ลิงก์จะเปิดในแท็บใหม่ เพื่อดำเนินการเปิดบัญชีบนเว็บไซต์ XM
                            </p>

                            {/* โปรฯ + สิทธิพิเศษ */}
                            <div className="rounded-xl leading-8 border border-brand-red/35 bg-white/5 p-4">
                                <h4 className="font-bold mb-2">โปรโมชั่น XM</h4>
                                <ol className="list-decimal pl-5 space-y-1 text-sm md:text-base">
                                    <li>เปิดบัญชีเทรดครั้งแรก รับ <b>$30</b> ไปเทรดได้เลย</li>
                                    <li>โบนัสเงินฝาก <b>100%</b> สูงสุดถึง <b>$500</b></li>
                                    <li>โบนัสเงินฝาก <b>50%</b> สูงสุดถึง <b>$2,000</b></li>
                                    <li>โบนัสเงินฝาก <b>20%</b> สูงสุดถึง <b>$8,000</b></li>
                                    <li>แข่งขันบัญชีทดลอง ลุ้นรางวัลรวม <b>$25,000</b></li>
                                </ol>
                            </div>
                            <p className="text-xs text-white/60 mt-3">
                                *เป็นไปตามเงื่อนไขที่ทาง XM กำหนดเท่านั้น
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
