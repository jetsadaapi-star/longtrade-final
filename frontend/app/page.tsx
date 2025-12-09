import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import SectionCard from "@/components/SectionCard";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import FAQ from "@/components/FAQ";
import { getFeaturedProducts, getFeaturedArticles, getFeaturedEbooks } from "@/lib/api";
import HomeClient from "@/components/HomeClient";

export default async function Home() {
  // Fetch featured content from API
  const [featuredProductsRes, featuredArticlesRes, featuredEbooksRes] = await Promise.all([
    getFeaturedProducts(),
    getFeaturedArticles(),
    getFeaturedEbooks(),
  ]);

  // Extract data from response (handle both array and object with data property)
  const featuredProducts = Array.isArray(featuredProductsRes) ? featuredProductsRes : featuredProductsRes?.data || null;
  const featuredArticles = Array.isArray(featuredArticlesRes) ? featuredArticlesRes : featuredArticlesRes?.data || null;
  const featuredEbooks = Array.isArray(featuredEbooksRes) ? featuredEbooksRes : featuredEbooksRes?.data || null;

  // Fallback to static data if API fails
  const TOOLS = (featuredProducts && Array.isArray(featuredProducts)) ? featuredProducts.slice(0, 3) : [
    { title: "GoldFlow Indicator", src: "/tools/goldflow.png" },
    { title: "BoostCapital EA", src: "/tools/boostcapital.png" },
    { title: "E-books", src: "/tools/ebooks.png" },
  ];

  const ARTICLES = (featuredArticles && Array.isArray(featuredArticles)) ? featuredArticles.slice(0, 3).map(article => ({
    title: article.title,
    src: article.featured_image || "/articles/articles1.jpg",
    slug: article.slug,
  })) : [
    { title: "2-2 Bearish Continuation", src: "/articles/articles1.jpg", slug: "" },
    { title: "Bullish Morning Doji Star", src: "/articles/articles2.jpg", slug: "" },
    { title: "Bullish Harami Cross", src: "/articles/articles3.jpg", slug: "" },
  ];

  return (
    <div className="space-y-8 md:space-y-12">
      {/* 1) HERO */}
      <SectionCard className="text-center">
        <h1 className="h1 text-center leading-tight">
          <span className="block">
            EMPOWER <span className="text-brand-red">YOUR</span>
          </span>
          <span className="block">
            TRADING <span className="text-brand-red">YOUR </span> STYLE
          </span>
          <span className="block">
            <span className="text-brand-red">YOUR </span> WAY!
          </span>
        </h1>

        <p className="p mt-4">
          ยกระดับการเทรดในสไตล์ของคุณ บนเส้นทางของคุณเอง ด้วยเครื่องมือช่วยเทรดอัจฉริยะ และคลังความรู้
        </p>
        <p className="p mt-4">
          เทคนิคการเทรดแบบมือโปร ครอบคลุมทุกเทคนิคที่นักเทรดต้องรู้
        </p>

        <HomeClient />

        <div className="mt-6">
          <a
            href="https://longtrade-catalog.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ไปยัง Longtrade Catalog"
            className="block group"
          >
            <PlaceholderImage
              src="/Herocard.png"
              width={1105}
              height={680}
              label="Home_1"
              className="transition-transform duration-300 group-hover:scale-[1.02] rounded-xl"
            />
          </a>
        </div>
      </SectionCard>

      {/* 4) course */}
      <SectionCard>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="h2">คอร์สเรียนออนไลน์สำหรับเทรดเดอร์ยุคใหม่</h2>
            <p className="p mt-3">
              ก้าวแรกสู่การเป็นเทรดเดอร์มืออาชีพ เรียนรู้วิธีคิด วิธีมองตลาด และกลยุทธ์ที่พิสูจน์แล้วว่าสามารถใช้ได้จริง ถ่ายทอดโดยทีมโค้ชที่ผ่านสนามจริงมาแล้ว เพื่อเปลี่ยนความรู้ให้เป็นทักษะ และเปลี่ยนการเทรดของคุณให้เติบโตอย่างมั่นคง
            </p>
            <div className="mt-5">
              <Link href="/courses" className="btn btn-primary">
                เริ่มเรียนทันที
              </Link>
            </div>
          </div>
          <PlaceholderImage src="/coach.png" width={1000} height={700} className="rounded-xl" />
        </div>
      </SectionCard>

      {/* 2) Hero Card - E-books */}
      <SectionCard>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="h2 mt-2">เริ่มต้นเทรดอย่างมั่นใจ ด้วย E-book จาก Longtrade Academy</h2>
            <p className="p mt-3">
              เราได้รวบรวมความรู้ เทคนิค และเครื่องมือที่จำเป็นสำหรับเทรดเดอร์ยุคใหม่ ไม่ว่าจะเป็นการอ่านกราฟเปล่า การวิเคราะห์ Price Action หรือกลยุทธ์การจัดการเงินทุน ทุกเล่มถูกออกแบบมาให้เข้าใจง่าย ใช้งานได้จริง และช่วยยกระดับการเทรดของคุณให้ก้าวไปอีกขั้น
            </p>
            <div className="mt-5">
              <Link href="/ebooks" className="btn btn-primary">ดูรายละเอียด</Link>
            </div>
          </div>
          <PlaceholderImage src="/ebook/ebook.png" width={1000} height={700} className="rounded-xl" />
        </div>
      </SectionCard>

      {/* 3) GoldFlow Overview - Products */}
      <SectionCard>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <PlaceholderImage src="/ea.png" width={1000} height={700} className="rounded-xl" />
          <div>
            <h2 className="h2">ชุดเครื่องมือ EA อัจฉริยะสำหรับนักเทรดมืออาชีพ</h2>
            <p className="p mt-3">
              EA จาก Longtrade ถูกพัฒนาขึ้นจากประสบการณ์ในตลาดจริง ผสานกลยุทธ์หลากหลาย ทั้งการจับจังหวะ Swing, การติดตามเทรนด์ใหญ่, การเก็งข่าว, รวมถึงการทดสอบกลยุทธ์ย้อนหลัง ครบจบในชุดเดียว เพื่อให้นักเทรดทุกระดับใช้ต่อยอดได้จริง
            </p>
            <div className="mt-5">
              <Link href="/products" className="btn btn-primary">ดูรายละเอียด</Link>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* 5) Tools Trio - Featured Products */}
      <SectionCard>
        <h2 className="h2 mb-6 text-center">เครื่องมืออัจฉริยะสำหรับเทรดเดอร์ยุคใหม่</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {TOOLS.map((t: any, index: number) => (
            <Link
              key={t.slug || index}
              href={t.slug ? `/products/${t.slug}` : "/products"}
              className="glass p-4 hover:border-red-500/50 transition-all duration-300 hover:scale-105 rounded-xl border border-white/10"
            >
              {t.thumbnail?.url || t.featured_image?.url ? (
                <img
                  src={t.thumbnail?.url || t.featured_image?.url}
                  alt={t.name || t.title}
                  className="rounded-xl w-full aspect-[2/3] object-cover"
                />
              ) : (
                <PlaceholderImage
                  src={t.src || "/tools/goldflow.png"}
                  width={600}
                  height={900}
                  label={t.name || t.title}
                  className="rounded-xl"
                />
              )}
              <div className="mt-4 font-semibold">{t.name || t.title}</div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/products" className="btn btn-primary">ดูรายละเอียด</Link>
        </div>
      </SectionCard>

      {/* 6) Articles - Featured Articles */}
      <SectionCard>
        <h2 className="h2 mb-6 text-center">บทความเทคนิควิเคราะห์กราฟ</h2>
        <p className="p mt-3 text-center">
          เรียบรู้เทคนิควิเคราะห์กราฟจากมุมมองของเทรดเดอร์มืออาชีพ ไม่ว่าจะเป็นรูปแบกราฟยอดนิยมแบบต่างๆ เราจะพาคุณเข้าใจโครงสร้างราคา จุดเข้าออกที่มีนัยสำคัญ เหมาะสำหรับทั้งมั้อใหม่ที่ต้องการปูพื้นฐาน และผู้มีประสบการณ์ที่ต้องการพัฒนาทักษะวิเคราะห์ให้แม่นยำยิ่งขึ้งขึ้น
        </p>
        <p className="p mt-3 text-center space-y-12">  </p>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          {ARTICLES.map((a, index) => (
            <Link
              key={a.slug || index}
              href={a.slug ? `/articles/${a.slug}` : "/articles"}
              className="glass p-4 hover:border-red-500/50 transition-all duration-300 hover:scale-105 rounded-xl border border-white/10"
            >
              <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
                {a.src ? (
                  <img
                    src={a.src}
                    alt={a.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <PlaceholderImage
                    src="/articles/articles1.jpg"
                    width={600}
                    height={900}
                    label={a.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="mt-4 font-semibold">{a.title}</div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link href="/articles" className="btn btn-primary">บทความทั้งหมด</Link>
        </div>
      </SectionCard>


      {/* 7) Videos */}
      <SectionCard>
        <h2 className="h2 mb-6 text-center">วิดีโอเจาะลึกกลยุทธ์เทรดแบบมือโปร</h2>
        <p className="p mt-3 text-center">
          รวมวิดีโอเนื้อหาเชิงลึก ที่ถ่ายทอดจากประสบการณ์จริงของเทรดเดอร์มืออาชีพครอบคลุมตั้งแต่พื้นฐานการวางแผนเกรด การจัดการความเสี่ยง ไปจนถึงเทคนิคการวิเคราะห์กราฟที่แม่นยำทุกตอนออกแบบให้เข้าใจง่าย ใช้ได้จริง
        </p>
        <p className="p mt-3 text-center space-y-12">  </p>
        <div className="grid md:grid-cols-3 gap-6">
          {["LYauImHOSkQ", "k2rNMj0RauQ", "DFUF0B2N8zw"].map((id) => (
            <YouTubeEmbed key={id} id={id} />
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="https://www.youtube.com/@AcademyLongtrade" className="btn btn-primary">VDO View All</Link>
        </div>
      </SectionCard>

      {/* 8) Promotion XM (สามรูปแยกกัน) */}
      <SectionCard>
        <h2 className="h2 mb-6 text-center">โปรโมชันพาร์ทเนอร์</h2>
        {(() => {
          const PROMOS = [
            { src: "/promos/xm_pro1.png", alt: "โปรโมชั่น XM #1" },
            { src: "/promos/xm_pro2.png", alt: "โปรโมชั่น XM #2" },
            { src: "/promos/xm_pro3.png", alt: "โปรโมชั่น XM #3" },
          ];
          return (
            <div className="grid md:grid-cols-3 gap-6">
              {PROMOS.map((p, i) => (
                <div key={i} className="glass p-4">
                  <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
                    <PlaceholderImage
                      src={p.src}
                      width={600}
                      height={800}
                      label={p.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-white/70 mt-2">
                    การลงทุนมีความเสี่ยง โปรดศึกษาข้อมูลก่อนตัดสินใจลงทุน
                  </p>
                </div>
              ))}
            </div>
          );
        })()}
        <div className="text-center mt-6">
          <Link href="/promotions" className="btn btn-primary">รายละเอียดโปรโมชัน</Link>
        </div>
      </SectionCard>

      {/* 9) FAQ */}
      <SectionCard>
        <h2 className="h2 mb-6 text-center">FAQ</h2>
        <p className="p mt-3 text-center">
          นี่คือ FAQ (คำถามที่พบบ่อย) สำหรับ Longtrade Academy
        </p>
        <p className="p mt-3 text-center space-y-12">  </p>
        <FAQ />
      </SectionCard>
    </div>
  );
}
