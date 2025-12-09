"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import PromotionBanner from "@/components/PromotionBanner";
import {
  Star,          // หน้าหลัก
  TrendingUp,    // อินดิเคเตอร์
  BookOpen,      // Ebook
  Bot,           // EA
  GraduationCap, // คอร์สเรียน
  FileText,      // บทความ
  MessageCircle, // CTA (สั่งซื้อ/สอบถาม)
  Tag,           // โปรโมชั่น
  Menu,
  X,
  User,
  LogOut,
  Library,
  ShoppingBag,   // สินค้าและบริการ
  ChevronDown
} from "lucide-react";

type MenuLabel =
  | "หน้าหลัก"
  | "สินค้าและบริการ"
  | "Ebook"
  | "คอร์สเรียน"
  | "บทความ"
  | "โปรโมชั่น";

const iconMap: Record<MenuLabel, React.ComponentType<{ className?: string }>> = {
  "หน้าหลัก": Star,
  "สินค้าและบริการ": ShoppingBag,
  "Ebook": BookOpen,
  "คอร์สเรียน": GraduationCap,
  "บทความ": FileText,
  "โปรโมชั่น": Tag,
};

interface MenuItem {
  label: MenuLabel;
  href: string;
  submenu?: { label: string; href: string }[];
}

const menuItems: MenuItem[] = [
  { label: "หน้าหลัก", href: "/" },
  {
    label: "สินค้าและบริการ",
    href: "/products",
    submenu: [
      { label: "Expert Advisors (EA)", href: "/products/expert-advisors" },
      { label: "Indicator", href: "/products/indicators" },
      { label: "TradingView", href: "/products/tradingview" },
      { label: "ดูทั้งหมด", href: "/products" },
    ],
  },
  { label: "Ebook", href: "/ebooks" },
  { label: "คอร์สเรียน", href: "/courses" },
  { label: "บทความ", href: "/articles" },
  { label: "โปรโมชั่น", href: "/promo" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const { user, logout, loading } = useAuth();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <div className="fixed top-2 left-4 right-4 z-50">
      <nav className="nav-shell px-3 py-2 flex flex-col gap-2">
        {/* Promotion Banner - อยู่ด้านบนสุดภายใน nav-shell */}
        <PromotionBanner position="top" />

        {/* Menu Bar - อยู่ด้านล่าง */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-extrabold tracking-wide text-lg hover:opacity-90"
          >
            <span className="text-red-500">LONGTRADE</span> ACADEMY
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            {menuItems.map((item) => {
              const Icon = iconMap[item.label];
              const active = isActive(item.href);
              const hasSubmenu = item.submenu && item.submenu.length > 0;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasSubmenu && setActiveSubmenu(item.label)}
                  onMouseLeave={() => hasSubmenu && setActiveSubmenu(null)}
                >
                  <Link
                    href={item.href}
                    className={`pill text-sm ${active ? "active" : "text-white/80 hover:text-white"}`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {item.label}
                    {hasSubmenu && <ChevronDown className="h-3 w-3 ml-1" />}
                  </Link>

                  {/* Dropdown Submenu */}
                  {hasSubmenu && activeSubmenu === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-[#1a1a1a] rounded-xl border border-white/10 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 shadow-xl">
                      {item.submenu!.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className="flex items-center px-4 py-2.5 hover:bg-white/5 transition-colors text-white/80 hover:text-white"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Auth Section */}
          <div className="hidden lg:flex items-center gap-3">
            {!loading && (
              <>
                {user ? (
                  <div className="relative">
                    <button
                      onClick={() => setUserMenuOpen(!userMenuOpen)}
                      className="pill text-sm inline-flex items-center gap-2 bg-white/5 hover:bg-white/10"
                    >
                      <User className="h-3.5 w-3.5" />
                      <span className="max-w-[100px] truncate text-sm">{user.name}</span>
                    </button>

                    {/* User Dropdown */}
                    {userMenuOpen && (
                      <>
                        <div
                          className="fixed inset-0 z-10"
                          onClick={() => setUserMenuOpen(false)}
                        />
                        <div className="absolute right-0 top-full mt-2 w-56 bg-[#1a1a1a] rounded-xl border border-white/10 py-2 z-20 shadow-xl">
                          <Link
                            href="/my-ebooks"
                            onClick={() => setUserMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 transition-colors"
                          >
                            <Library className="h-4 w-4 text-white/60" />
                            <span>E-Books ของฉัน</span>
                          </Link>
                          <Link
                            href="/my-products"
                            onClick={() => setUserMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 transition-colors"
                          >
                            <ShoppingBag className="h-4 w-4 text-white/60" />
                            <span>สินค้าของฉัน</span>
                          </Link>
                          <div className="h-px bg-white/10 my-2" />
                          <button
                            onClick={() => {
                              setUserMenuOpen(false);
                              logout();
                            }}
                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 transition-colors w-full text-left text-red-400"
                          >
                            <LogOut className="h-4 w-4" />
                            <span>ออกจากระบบ</span>
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <Link href="/login" className="pill cta text-sm inline-flex items-center gap-2">
                    <User className="h-3.5 w-3.5" />
                    สำหรับสมาชิก
                  </Link>
                )}
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-1.5 rounded-lg bg-white/5 border border-white/10"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-[#111] border-l border-white/10 p-6" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold"><span className="text-red-500">Long</span>trade</span>
              <button onClick={() => setOpen(false)} className="p-2 bg-white/5 rounded-full">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* User Info (Mobile) */}
            {!loading && user && (
              <div className="mb-6 p-4 glass rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                    <User className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate">{user.name}</div>
                    <div className="text-sm text-white/60 truncate">{user.email}</div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3">
              {menuItems.map((item) => {
                const Icon = iconMap[item.label];
                const active = isActive(item.href);
                const hasSubmenu = item.submenu && item.submenu.length > 0;
                const submenuOpen = activeSubmenu === item.label;

                return (
                  <div key={item.label}>
                    {hasSubmenu ? (
                      <>
                        <button
                          onClick={() => setActiveSubmenu(submenuOpen ? null : item.label)}
                          className={`pill w-full justify-between ${active ? "active" : "text-white/80"}`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="h-5 w-5" />
                            {item.label}
                          </div>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${submenuOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        {submenuOpen && (
                          <div className="ml-4 mt-2 flex flex-col gap-2">
                            {item.submenu!.map((subitem) => (
                              <Link
                                key={subitem.href}
                                href={subitem.href}
                                onClick={() => setOpen(false)}
                                className="pill w-full justify-start text-white/70 hover:text-white text-sm"
                              >
                                {subitem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`pill w-full justify-start ${active ? "active" : "text-white/80"}`}
                      >
                        <Icon className="h-5 w-5" />
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}

              {/* My E-Books & Products (Mobile) */}
              {!loading && user && (
                <>
                  <div className="h-px bg-white/10 my-2" />
                  <Link
                    href="/my-ebooks"
                    onClick={() => setOpen(false)}
                    className="pill w-full justify-start text-white/80"
                  >
                    <Library className="h-5 w-5" />
                    E-Books ของฉัน
                  </Link>
                  <Link
                    href="/my-products"
                    onClick={() => setOpen(false)}
                    className="pill w-full justify-start text-white/80"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    สินค้าของฉัน
                  </Link>
                </>
              )}

              <div className="h-px bg-white/10 my-2" />

              {/* Auth Buttons (Mobile) */}
              {!loading && (
                <>
                  {user ? (
                    <button
                      onClick={() => {
                        setOpen(false);
                        logout();
                      }}
                      className="pill w-full justify-center bg-red-500/10 text-red-400 hover:bg-red-500/20"
                    >
                      <LogOut className="h-5 w-5" />
                      ออกจากระบบ
                    </button>
                  ) : (
                    <Link
                      href="/login"
                      onClick={() => setOpen(false)}
                      className="pill cta w-full justify-center"
                    >
                      <User className="h-5 w-5" />
                      สำหรับสมาชิก
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
