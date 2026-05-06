"use client";
import React from "react";

type ImagePlaceholderProps = {
  aspect?: "product" | "hero" | "square" | "wide";
  label?: string;
  bgColor?: string;
  className?: string;
};

const aspectClasses = {
  product: "aspect-[3/4]",
  hero: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[16/9]",
};

const bgColors: Record<string, string> = {
  crimson: "bg-[#8B1A1A]/10 border-[#8B1A1A]/20",
  olive: "bg-[#6B7340]/10 border-[#6B7340]/20",
  navy: "bg-[#1A2744]/10 border-[#1A2744]/20",
  kraft: "bg-[#C8956C]/15 border-[#C8956C]/25",
  default: "border-[#C9A84C]/30",
};

export function ImagePlaceholder({
  aspect = "product",
  label = "Product Image",
  bgColor = "default",
  className = "",
}: ImagePlaceholderProps) {
  const bg = bgColors[bgColor] ?? bgColors.default;

  return (
    <div
      className={`image-placeholder ${aspectClasses[aspect]} ${bg} border rounded-sm w-full ${className}`}
      style={{
        background: bgColor === "default"
          ? "rgba(201,168,76,0.07)"
          : undefined,
      }}
    >
      <span
        className="font-label text-xs tracking-widest select-none pointer-events-none"
        style={{ color: "rgba(201,168,76,0.5)", fontFamily: "var(--font-cinzel), Cinzel, serif" }}
      >
        {label}
      </span>
    </div>
  );
}
