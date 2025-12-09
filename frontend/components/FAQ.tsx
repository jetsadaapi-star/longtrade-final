"use client";
import { useState } from "react";

const QA = [
  {q:"สมัครสมาชิกอย่างไร?", a:"กดปุ่ม สมัครสมาชิก ที่หน้าแรก แล้วทำตามขั้นตอนง่าย ๆ ได้ทันที"},
  {q:"GoldFlow ใช้งานกับแพลตฟอร์มใด?", a:"ใช้งานบนโปรแกรม TradingView"},
  {q:"คอร์สเรียนมีระดับไหนบ้าง?", a:"มีตั้งแต่พื้นฐานจนถึงเชิงลึก เลือกตามประสบการณ์ได้"},
  {q:"มีค่าใช้จ่ายอะไรบ้าง?", a:"มีทั้งคอร์สฟรีและแบบชำระเงิน โปรดดูรายละเอียดในหน้าโปรโมชั่น/คอร์ส"},
  {q:"ติดต่อทีมงานได้ที่ไหน?", a:"ผ่านเมนู ติดต่อเรา หรือโซเชียลมีเดียด้านล่างเว็บไซต์"},
];

export default function FAQ(){
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {QA.map((item, idx)=>{
        const active = open===idx;
        return (
          <div key={idx} className="glass p-4">
            <button className="w-full text-left font-semibold flex justify-between items-center"
              onClick={()=>setOpen(active?null:idx)}>
              <span>{item.q}</span>
              <span className="text-brand-red">{active?"−":"+"}</span>
            </button>
            {active && <p className="mt-2 text-white/80">{item.a}</p>}
          </div>
        )
      })}
    </div>
  )
}
