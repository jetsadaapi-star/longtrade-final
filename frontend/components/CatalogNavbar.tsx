// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { content } from "@/data/content";
import {
  Star,          // หน้าหลัก
  TrendingUp,    // อินดิเคเตอร์
  BookOpen,      // Ebook
  Bot,           // EA
  GraduationCap, // คอร์สเรียน
  FileText,      // บทความ
  MessageCircle, // CTA (สั่งซื้อ/สอบถาม)
  Tag            // โปรโมชั่น
} from "lucide-react";

/* ===== Types for optional CMS site settings ===== */
type SiteSettings = {
  site_name: string;
  logo_url?: string;
  contact_email?: string;
  contact_phone?: string;
  facebook_url?: string;
  line_url?: string;
  tiktok_url?: string;
  youtube_url?: string;
  header_menu?: { label: string; url: string }[];
  footer_menu?: { label: string; url: string; is_external?: boolean }[];
  cta_text?: string;
  cta_link?: string;
  footer_text?: string;
};

/* ===== App defaults (fallback) ===== */
type MenuLabel =
  | "หน้าหลัก"
  | "Ebook"
  | "EA"
  | "คอร์สเรียน"
  | "บทความ"
  | "โปรโมชั่น";

const iconMap: Record<MenuLabel, React.ComponentType<{ className?: string }>> = {
  "หน้าหลัก": Star,
  "Ebook": BookOpen,
  "EA": Bot,
  "คอร์สเรียน": GraduationCap,
  "บทความ": FileText,
  "โปรโมชั่น": Tag,
};

const toHref = (label: string) => {
  switch (label as MenuLabel) {
    case "หน้าหลัก": return "/";
    case "Ebook": return "/ebooks";
    case "EA": return "/ea";
    case "คอร์สเรียน": return "/courses";
    case "บทความ": return "/articles";
    case "โปรโมชั่น": return "/promo";
    default: return "/";
  }
};

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // ---- pull from CMS ----
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch("http://localhost:8000/api/v1/site-settings");
        if (!res.ok) return;
        const data = (await res.json()) as SiteSettings;
        if (alive) setSettings(data);
      } catch (e) {
        console.error("Failed to fetch settings", e);
      }
    })();
    return () => { alive = false; };
  }, []);

  // helper เช็ค active: หน้า section ให้ติด active เมื่อ path เริ่มด้วย href
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  // เมนูหลัก: ใช้จาก API หรือ fallback
  const menus = settings?.header_menu?.length
    ? settings.header_menu
    : [
      { label: "หน้าหลัก", url: "/" },
      { label: "Ebook", url: "/ebooks" },
      { label: "EA", url: "/ea" },
      { label: "คอร์สเรียน", url: "/courses" },
      { label: "บทความ", url: "/articles" },
      { label: "โปรโมชั่น", url: "/promo" },
    ];

  const ctaText = settings?.cta_text || content.navbar.cta_text;
  const ctaLink = settings?.cta_link || content.navbar.cta_link;

  return (
    <div className="fixed top-4 left-4 right-4 z-50">
      <nav className="nav-shell px-4 py-3 flex items-center justify-between">
        {/* โลโก้ */}
        <a
          href="/"
          className="font-extrabold tracking-wide text-xl hover:opacity-90 flex items-center gap-2"
        >
          {settings?.logo_url ? (
            <img src={settings.logo_url} alt={settings.site_name} className="h-8 w-auto" />
          ) : (
            <>
              <span className="text-brand">LONGTRADE</span> ACADEMY
            </>
          )}
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          {menus.map((item: any, index: number) => {
            const label = item.label;
            const href = item.url;
            // Map icon if label matches known keys, else default to Star
            const Icon = iconMap[label as MenuLabel] ?? Star;
            const active = isActive(href);
            return (
              <Link key={index} href={href} className={`pill ${active ? "active" : ""}`}>
                <Icon className="h-4.5 w-4.5" />
                {label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="pill cta inline-flex items-center gap-2"
          >
            <MessageCircle className="h-4.5 w-4.5" />
            {ctaText}
          </a>
        </div>

        {/* Mobile button */}
        <button
          className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10"
          onClick={() => setOpen(true)}
          aria-label="เมนู"
        >
          ☰
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="mx-auto mt-20 max-w-2xl nav-overlay p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* โลโก้ใน drawer: ลิงก์ภายนอกเช่นกัน */}
            <a
              href="https://www.longtradeacademy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xl font-extrabold mb-4 hover:opacity-90"
              aria-label="Longtrade Academy (เปิดแท็บใหม่)"
            >
              <span className="text-brand">Long</span>trade Academy
            </a>

            <div className="grid gap-3">
              {menus.map((item: any, index: number) => {
                const label = item.label;
                const href = item.url;
                const Icon = iconMap[label as MenuLabel] ?? Star;
                const active = isActive(href);
                return (
                  <Link
                    key={index}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`pill ${active ? "active" : ""}`}
                  >
                    <Icon className="h-4.5 w-4.5" />
                    {label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-6">
              <a
                href={ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="pill cta w-full justify-center inline-flex items-center gap-2"
              >
                <MessageCircle className="h-4.5 w-4.5" />
                {ctaText}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
