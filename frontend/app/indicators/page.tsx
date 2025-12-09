import Navbar from "@/components/CatalogNavbar";
import Link from "next/link";
import Image from "next/image";
import { getIndicators } from "@/lib/api";

export const metadata = {
    title: "อินดิเคเตอร์ | Longtrade Academy",
    description: "อินดิเคเตอร์คุณภาพสำหรับ MT4, MT5 และ TradingView",
};

export default async function IndicatorsPage() {
    const response = await getIndicators({ per_page: 100 });
    const indicators = response?.data || [];

    // ใช้รูปของ indicator แรกเป็นภาพ Hero
    const heroImage = indicators[0]?.image;

    return (
        <>
            <Navbar />

            <main className="container-narrow pt-28 pb-16 space-y-12">
                {/* HERO */}
                <section className="rounded-3xl border border-white/10 p-8 md:p-12 bg-white/[0.04] relative overflow-hidden">
                    <div className="pointer-events-none absolute -inset-16 rounded-[32px] bg-[radial-gradient(55%_45%_at_10%_10%,rgba(59,130,246,.18),transparent_65%),radial-gradient(55%_45%_at_90%_90%,rgba(96,165,250,.22),transparent_65%)]" />
                    <div className="relative grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                                อินดิเคเตอร์มืออาชีพ
                                <br />
                                สำหรับเทรดเดอร์
                            </h1>
                            <p className="mt-3 text-white/80">
                                อินดิเคเตอร์คุณภาพจากผู้เชี่ยวชาญ รองรับ MT4, MT5 และ TradingView
                                พร้อมคู่มือการใช้งานละเอียด
                            </p>
                            <div className="mt-5 flex gap-2">
                                <a
                                    href="#list"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-[0_8px_28px_rgba(59,130,246,.35)] transition"
                                >
                                    เลือกดูอินดิเคเตอร์
                                </a>
                                <a
                                    href="https://line.me/ti/p/~longtrade"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/15 transition"
                                >
                                    ติดต่อ/สอบถาม
                                </a>
                            </div>
                        </div>

                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                            {heroImage ? (
                                <Image src={heroImage} alt="Hero" fill className="object-cover" priority />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-blue-700/30" />
                            )}
                        </div>
                    </div>
                </section>

                {/* SUB HERO */}
                <section className="rounded-3xl border border-white/10 p-6 md:p-8 bg-white/[0.04]">
                    <h2 className="text-2xl md:text-3xl font-extrabold">
                        ทำไมต้องเลือกอินดิเคเตอร์จาก <span className="text-blue-400">Longtrade</span>
                    </h2>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="glass rounded-2xl p-5 border border-white/10">
                            <div className="font-semibold mb-1">คุณภาพสูง</div>
                            <div className="text-white/80 text-sm">
                                ผ่านการทดสอบและใช้งานจริงจากเทรดเดอร์มืออาชีพ
                            </div>
                        </div>
                        <div className="glass rounded-2xl p-5 border border-white/10">
                            <div className="font-semibold mb-1">รองรับหลายแพลตฟอร์ม</div>
                            <div className="text-white/80 text-sm">
                                ทำงานได้ทั้ง MT4, MT5 และ TradingView
                            </div>
                        </div>
                        <div className="glass rounded-2xl p-5 border border-white/10">
                            <div className="font-semibold mb-1">อัพเดทฟรี</div>
                            <div className="text-white/80 text-sm">
                                รับอัพเดทและซัพพอร์ตตลอดชีพ
                            </div>
                        </div>
                    </div>
                </section>

                {/* STATS */}
                {indicators.length > 0 && (
                    <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="glass rounded-2xl p-5 border border-white/10 text-center">
                            <div className="text-3xl font-bold text-blue-400">{indicators.length}+</div>
                            <div className="text-sm text-white/70 mt-1">อินดิเคเตอร์</div>
                        </div>
                        <div className="glass rounded-2xl p-5 border border-white/10 text-center">
                            <div className="text-3xl font-bold text-blue-400">
                                {indicators.filter(i => i.platform?.includes('MT4')).length}+
                            </div>
                            <div className="text-sm text-white/70 mt-1">รองรับ MT4</div>
                        </div>
                        <div className="glass rounded-2xl p-5 border border-white/10 text-center">
                            <div className="text-3xl font-bold text-blue-400">
                                {indicators.filter(i => i.platform?.includes('MT5')).length}+
                            </div>
                            <div className="text-sm text-white/70 mt-1">รองรับ MT5</div>
                        </div>
                        <div className="glass rounded-2xl p-5 border border-white/10 text-center">
                            <div className="text-3xl font-bold text-blue-400">
                                {indicators.filter(i => i.platform?.includes('TradingView')).length}+
                            </div>
                            <div className="text-sm text-white/70 mt-1">TradingView</div>
                        </div>
                    </section>
                )}

                {/* LIST */}
                <section id="list" className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-extrabold">อินดิเคเตอร์ทั้งหมด</h2>

                    {indicators.length === 0 ? (
                        <div className="text-center py-12 text-white/60">
                            ยังไม่มีอินดิเคเตอร์ในขณะนี้
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {indicators.map((indicator) => (
                                <div
                                    key={indicator.slug}
                                    className="group rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03] hover:bg-white/[0.06] transition"
                                >
                                    <div className="relative h-48 border-b border-white/10">
                                        <Image
                                            src={indicator.image || '/placeholder.jpg'}
                                            alt={indicator.title}
                                            fill
                                            className="object-cover"
                                        />
                                        {indicator.platform && (
                                            <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-sm text-xs font-semibold">
                                                {indicator.platform}
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-5">
                                        <div className="text-lg font-semibold group-hover:underline">
                                            {indicator.title}
                                        </div>
                                        <div className="mt-2 text-sm text-white/70 line-clamp-2">
                                            {indicator.description}
                                        </div>

                                        {/* Features */}
                                        {indicator.features && indicator.features.length > 0 && (
                                            <div className="mt-3 space-y-1">
                                                {indicator.features.slice(0, 2).map((feature, idx) => (
                                                    <div key={idx} className="text-xs text-white/60 flex items-start gap-1">
                                                        <span className="text-blue-400 mt-0.5">✓</span>
                                                        <span>{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        <div className="mt-4 flex items-baseline gap-2">
                                            <div className="text-blue-400 font-bold text-xl">
                                                ฿{parseFloat(indicator.price.toString()).toLocaleString()}
                                            </div>
                                            {indicator.original_price && (
                                                <div className="text-xs text-white/60 line-through">
                                                    ฿{parseFloat(indicator.original_price.toString()).toLocaleString()}
                                                </div>
                                            )}
                                        </div>

                                        {indicator.downloads_count !== undefined && (
                                            <div className="mt-2 text-xs text-white/50">
                                                ดาวน์โหลด {indicator.downloads_count.toLocaleString()} ครั้ง
                                            </div>
                                        )}

                                        <button className="mt-4 w-full btn-blue">
                                            ดูรายละเอียด
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* CTA */}
                <section className="rounded-3xl border border-white/10 p-8 md:p-12 bg-gradient-to-br from-blue-600/10 to-blue-800/10 text-center">
                    <h2 className="text-2xl md:text-3xl font-extrabold">
                        ต้องการอินดิเคเตอร์แบบกำหนดเอง?
                    </h2>
                    <p className="mt-3 text-white/80 max-w-2xl mx-auto">
                        เรามีบริการพัฒนาอินดิเคเตอร์ตามความต้องการของคุณ
                        ติดต่อเราเพื่อปรึกษาและขอใบเสนอราคา
                    </p>
                    <div className="mt-6">
                        <a
                            href="https://line.me/ti/p/~longtrade"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg transition"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                            </svg>
                            ติดต่อทาง LINE
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}
