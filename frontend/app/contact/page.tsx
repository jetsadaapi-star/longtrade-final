"use client";

import { useState } from "react";
import SectionCard from "@/components/SectionCard";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;        // ← เก็บไว้ก่อน await
    const fd = new FormData(form);

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          message: fd.get("message"),
        }),
      });

      if (!res.ok) throw new Error(await res.text());

      setStatus("ok");
      form.reset();                      // ← ใช้อ้างถึงตัว form ที่เก็บไว้
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "ส่งข้อความไม่สำเร็จ");
    }
  }


  return (
    <main className="container-narrow pb-16">
      <SectionCard className="max-w-3xl mx-auto">
        <h1 className="h2 mb-2">ติดต่อทีมงาน</h1>
        <p className="p mb-6">ส่งข้อความหาเราได้ตลอดเวลา ทีมงานจะตอบกลับโดยเร็วที่สุด</p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/70 mb-1">ชื่อของคุณ</label>
              <input name="name" required placeholder="ชื่อ - สกุล"
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-red" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">อีเมล</label>
              <input type="email" name="email" required placeholder="your@email.com"
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-red" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-1">ข้อความ</label>
            <textarea name="message" required rows={6} placeholder="พิมพ์ข้อความของคุณที่นี่…"
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-red" />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn btn-primary disabled:opacity-60"
          >
            {status === "sending" ? "กำลังส่ง..." : "ส่งข้อความ"}
          </button>

          {status === "ok" && <p className="text-sm text-emerald-400">ส่งข้อความสำเร็จ ขอบคุณที่ติดต่อเรา!</p>}
          {status === "error" && <p className="text-sm text-red-400">เกิดข้อผิดพลาด: {errorMsg}</p>}
        </form>

        {/* โซเชียล */}
        <div className="mt-10">
          <h2 className="font-semibold mb-3">ติดตาม/ทักเราได้ที่</h2>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Facebook</a>
            <a href="https://line.me/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LINE</a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">YouTube</a>
            {/* เพิ่มลิงก์จริงของคุณแทนที่ URL ตัวอย่างด้านบน */}
          </div>
        </div>
      </SectionCard>
    </main>
  );
}
