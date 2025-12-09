"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Facebook, Youtube, Globe } from "lucide-react";

/** Line Icon Vector */
function LineIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden {...props}>
      <path d="M39.6 8.4C36.8 5.6 32.6 4 28 4H20C11.2 4 4 10 4 17.6c0 5.5 3.9 10.2 9.6 12.5-.2.8-1.2 4.4-1.3 5-.2.9.3 1.1 1 1 .8-.1 5.1-3.4 5.9-3.9 2.4.4 4.8.5 7.3.2 8.8-1.2 15.5-7.9 15.5-15.8 0-4.3-1.8-7.9-5.4-10.2z" />
    </svg>
  );
}

/* Site Settings Type */
type SiteSettings = {
  site_name?: string;
  logo_url?: string;
  facebook_url?: string;
  line_url?: string;
  youtube_url?: string;
  footer_menu?: { label: string; url: string; is_external?: boolean }[];
  footer_text?: string;
};

/* Fallback Values */
const FALLBACK_LOGO = "/logo-footer.png";
const FALLBACK_SOCIALS = {
  facebook: "https://www.facebook.com/LongTradeAcademy",
  line: "https://lin.ee/oqfUFhG",
  youtube: "https://www.youtube.com/@AcademyLongtrade",
  website: "https://longtrade-academy.com/",
};
const FALLBACK_MENU = [
  { label: "หน้าหลัก", url: "/" },
  { label: "EA", url: "/ea" },
  { label: "คอร์สเรียน", url: "/courses" },
  { label: "บทความ", url: "/articles" },
  { label: "โปรโมชั่น", url: "/promo" },
  { label: "เกี่ยวกับ", url: "/about" },
  { label: "ติดต่อเรา", url: "/contact" },
  { label: "สั่งซื้อ/สอบถาม", url: "https://line.me/ti/p/~longtrade", is_external: true },
];

export default function Footer({
  year = new Date().getFullYear(),
}: { year?: number }) {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1'}/site-settings`);
        if (!res.ok) return;
        const data = (await res.json()) as SiteSettings;
        if (alive) setSettings(data);
      } catch { }
    })();
    return () => { alive = false; };
  }, []);

  const logoSrc = settings?.logo_url || FALLBACK_LOGO;
  const socials = {
    facebook: settings?.facebook_url || FALLBACK_SOCIALS.facebook,
    line: settings?.line_url || FALLBACK_SOCIALS.line,
    youtube: settings?.youtube_url || FALLBACK_SOCIALS.youtube,
    website: FALLBACK_SOCIALS.website,
  };
  const menu = settings?.footer_menu?.length ? settings.footer_menu : FALLBACK_MENU;
  const footerText = settings?.footer_text || `© ${year} Longtrade Academy — All Rights Reserved`;

  return (
    <footer
      className="
        relative mt-16 border-t border-white/10
        bg-black/30 backdrop-blur-sm text-white/85
      "
      aria-labelledby="site-footer"
    >
      {/* glow + texture */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_55%_at_15%_0%,rgba(225,29,72,.14),transparent_60%),radial-gradient(60%_55%_at_85%_100%,rgba(244,63,94,.16),transparent_65%)]" />

      <div className="container-narrow px-6 py-12">
        <h2 id="site-footer" className="sr-only">ส่วนท้ายเว็บไซต์</h2>

        {/* Logo on top */}
        <div className="flex items-center justify-center mb-6">
          {!logoError && logoSrc !== FALLBACK_LOGO ? (
            <div className="relative h-12 w-[220px]">
              <Image
                src={logoSrc}
                alt="Longtrade Academy"
                fill
                sizes="220px"
                className="object-contain drop-shadow"
                onError={() => setLogoError(true)}
              />
            </div>
          ) : (
            <Link href="/" className="font-extrabold tracking-wide text-2xl">
              <span className="text-red-500">LONGTRADE</span> ACADEMY
            </Link>
          )}
        </div>

        {/* Social (center, outlined circles) */}
        <ul className="mt-6 flex items-center justify-center gap-4">
          <Social href={socials.facebook} label="Facebook">
            <Facebook className="h-5 w-5" />
          </Social>
          <Social href={socials.line} label="LINE">
            <LineIcon className="h-5 w-5" />
          </Social>
          <Social href={socials.youtube} label="YouTube">
            <Youtube className="h-5 w-5" />
          </Social>
          <Social href={socials.website} label="Website">
            <Globe className="h-5 w-5" />
          </Social>
        </ul>

        {/* Menu row */}
        <nav
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[15px]"
          aria-label="ลิงก์เมนูส่วนท้าย"
        >
          {menu.map((l) =>
            l.is_external ? (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-white/85 hover:text-white transition"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                href={l.url}
                className="font-medium text-white/85 hover:text-white transition"
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        {/* Copyright */}
        <div className="mt-5 text-center text-xs text-white/65">
          {footerText}
        </div>
      </div>
    </footer>
  );
}

/** Social button (outlined circle) */
function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        className="
          group inline-flex h-11 w-11 items-center justify-center
          rounded-full border border-white/25
          bg-white/[0.03] hover:bg-white/[0.08]
          hover:border-white/40 transition
          shadow-[inset_0_0_0_1px_rgba(255,255,255,.02)]
        "
      >
        <span className="text-white/90 group-hover:text-white">{children}</span>
      </a>
    </li>
  );
}
