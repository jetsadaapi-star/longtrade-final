"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

// Define interface compatible with our Article model
export interface ArticleItem {
  title: string;
  excerpt: string;
  featured_image: string;
  slug: string;
  category?: {
    name: string;
    slug: string;
  };
}

export default function CatalogCard({
  item,
}: {
  item: ArticleItem;
}) {
  return (
    <article className="group rounded-2xl overflow-hidden bg-white/[0.04] border border-white/10 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,.06)]">
      {/* Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-2xl">
        <Image
          src={item.featured_image || "/images/placeholder.jpg"}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width:1024px) 33vw, 100vw"
        />

        {/* Category Badge */}
        {item.category && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs font-medium text-white/90">
            {item.category.name}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold leading-tight mb-2 group-hover:text-red-400 transition-colors">
          {item.title}
        </h3>
        <p className="text-white/70 line-clamp-2 text-sm mb-4">
          {item.excerpt}
        </p>

        {/* Action Button */}
        <Link
          href={`/articles/${item.slug}`}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 transition text-sm font-medium"
        >
          อ่านเพิ่มเติม
        </Link>
      </div>
    </article>
  );
}
