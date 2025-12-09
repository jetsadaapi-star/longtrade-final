import Image from "next/image";
import React from "react";

export default function PlaceholderImage({
  src,
  alt,
  label = "IMAGE",
  width = 1200,
  height = 600,
  className = "",
}: {
  src?: string;         // <— ใหม่
  alt?: string;         // <— ใหม่
  label?: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  if (!src) {
    return (
      <div
        className={`placeholder ${className}`}
        style={{ aspectRatio: `${width}/${height}` }}
        aria-label={`${label} placeholder ${width}x${height}`}
      >
        <span>{label} • {width}×{height}px</span>
      </div>
    );
  }
  return (
    <div className={className} style={{ aspectRatio: `${width}/${height}` }}>
      <Image
        src={src}
        alt={alt ?? label}
        width={width}
        height={height}
        className="w-full h-full rounded-xl object-cover"
      />
    </div>
  );
}
