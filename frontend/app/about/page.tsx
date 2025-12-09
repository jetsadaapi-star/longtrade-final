// app/about/page.tsx
import SectionCard from "@/components/SectionCard";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function Page() {
  const MOVEMENTS = [
    { title: "Workshop: GoldFlow System", src: "/movement/1.jpg" },
    { title: "Hands-on Risk Management", src: "/movement/2.jpg" },
    { title: "Price Action Bootcamp", src: "/movement/3.jpg" },
    { title: "Community Meetup", src: "/movement/4.jpg" },
    { title: "Trader Talk & Live Q&A", src: "/movement/5.jpg" },
    { title: "Partner Session: XM", src: "/movement/6.jpg" },
  ];

  return (
    <main className="container-narrow pb-16 space-y-10 md:space-y-14">
      {/* Intro */}
      <SectionCard>
        <h1 className="h2">เกี่ยวกับ LongTrade Academy</h1>
        <p className="p mt-3 text-white/90">
          LongTrade Academy คือแพลตฟอร์มการเรียนรู้และเครื่องมือสำหรับเทรดเดอร์ไทยยุคใหม่ ที่มุ่งช่วยให้คนไทย “เทรดเป็น” สร้างรายได้และความมั่งคั่งอย่างยั่งยืน เรารวมทั้งองค์ความรู้ทฤษฎีการเทรดที่ผ่านการพิสูจน์แล้วว่าทำได้จริงกับเครื่องมือวิเคราะห์ที่พัฒนามาอย่างต่อเนื่อง เช่น GoldFlow System, LT Intelligence, Boost Capital และ EA ต่าง ๆ เพื่อช่วยให้เทรดเดอร์ทุกคนเทรดได้อย่างมีประสิทธิภาพ นำไปสู่ผลลัพธ์และกำไรที่จับต้องได้
        </p>
      </SectionCard>

      {/* Vision */}
      <SectionCard>
        <h2 className="h3">วิสัยทัศน์ (Vision)</h2>
        <p className="p mt-3">
          สร้างสังคมเทรดเดอร์มืออาชีพที่มีความรู้ ความเข้าใจ และทักษะการเทรดที่ถูกต้อง ให้คนไทยสามารถวางแผนการเงินของตนเองได้ผ่านการเทรด ด้วยการเข้าถึงองค์ความรู้ที่ใช้งานได้จริงและเครื่องมือที่ช่วยเพิ่มโอกาสทำกำไร
        </p>
      </SectionCard>

      {/* Mission */}
      <SectionCard>
        <h2 className="h3">พันธกิจ (Mission)</h2>
        <ol className="list-decimal pl-5 leading-relaxed space-y-2 mt-3">
          <li>พัฒนาและออกแบบคอร์สเรียนและวิธีการเทรดที่ใช้งานได้จริง เหมาะกับตลาดปัจจุบัน</li>
          <li>สร้างเครื่องมือช่วยวิเคราะห์ที่ใช้งานง่าย ครอบคลุมทุกระดับทักษะของเทรดเดอร์</li>
          <li>ถ่ายทอดประสบการณ์จริงและแนวทางการเทรด พร้อมให้คำแนะนำและ Feedback ที่ตรงจุด</li>
          <li>ผลักดันให้เทรดเดอร์ไทยมี Trading Plan และระบบจัดการความเสี่ยง (Risk Management) ที่มั่นคงและเป็นระบบ</li>
        </ol>
      </SectionCard>

      {/* Values */}
      <SectionCard>
        <h2 className="h3">ค่านิยมองค์กร (Core Values)</h2>
        <div className="grid md:grid-cols-2 gap-5 mt-4">
          <div className="glass p-5 rounded-xl">
            <h4 className="font-semibold">Practical First</h4>
            <p className="text-white/80 text-sm mt-1">
              เน้นเนื้อหาที่ใช้งานได้จริง ลดความซับซ้อนให้เรียนรู้และทำตามได้ง่าย
            </p>
          </div>
          <div className="glass p-5 rounded-xl">
            <h4 className="font-semibold">Data-Driven</h4>
            <p className="text-white/80 text-sm mt-1">
              ยึดข้อมูลจริงและหลักฐานทางสถิติ ไม่ใช้แค่ความรู้สึกในการตัดสินใจ
            </p>
          </div>
          <div className="glass p-5 rounded-xl">
            <h4 className="font-semibold">Discipline</h4>
            <p className="text-white/80 text-sm mt-1">
              ส่งเสริมวินัยและการจัดการความเสี่ยง เพื่อความสำเร็จในระยะยาว
            </p>
          </div>
          <div className="glass p-5 rounded-xl">
            <h4 className="font-semibold">Community</h4>
            <p className="text-white/80 text-sm mt-1">
              สร้างชุมชนแห่งการเรียนรู้และการแบ่งปันประสบการณ์ เพื่อเติบโตไปด้วยกัน
            </p>
          </div>
        </div>
      </SectionCard>

      {/* MOVEMENT */}
      <SectionCard>
        <h2 className="h3 mb-4 text-center">MOVEMENT</h2>
        <p className="p text-center text-white/80 max-w-2xl mx-auto">
          บางช่วงเวลาจากกิจกรรม เวิร์กช็อป และคอมมูนิตี้ของเรา
        </p>

        <div className="grid gap-6 mt-6 md:grid-cols-3">
          {MOVEMENTS.map((m) => (
            <div key={m.title} className="glass p-3 rounded-2xl">
              <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                {/* เปลี่ยนเป็นไฟล์จริงได้ภายหลัง */}
                <PlaceholderImage
                  src={m.src}
                  width={1920}
                  height={1080}
                  label={m.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 text-center font-medium">{m.title}</div>
            </div>
          ))}
        </div>
      </SectionCard>
    </main>
  );
}
