"use client";
import { motion } from "framer-motion";
import React from "react";

type Variant = "glass" | "liquid";

export default function SectionCard({
  children,
  className = "",
  variant = "liquid",     // <-- ค่าเริ่มต้นใช้ liquid เลย
}: {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
}) {
  const base = variant === "liquid" ? "liquid" : "glass";

  return (
    <motion.section
      className={`${base} container-std my-8 md:my-16 p-6 md:p-10 ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* blobs สองก้อน (ตกแต่ง) */}
      {variant === "liquid" && (
        <>
          <span className="blob" style={{ width: 160, height: 120, left: -30, top: -20 }} />
          <span className="blob" style={{ width: 140, height: 140, right: -20, bottom: -30, animationDelay: "1.2s" }} />
        </>
      )}
      <div className="relative z-10">{children}</div>
    </motion.section>
  );
}
