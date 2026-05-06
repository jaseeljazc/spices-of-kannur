"use client";

import React from "react";

type ButtonVariant = "primary" | "ghost" | "outline-gold";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
  id?: string;
};

export function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  fullWidth = false,
  id,
}: ButtonProps) {


  const base =
    "inline-flex items-center justify-center gap-2 font-label tracking-widest text-xs transition-all duration-300 min-h-[48px] px-6 py-3 rounded-sm cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<ButtonVariant, string> = {
    primary: "btn-shimmer text-[#F5EDD6]",
    ghost: "bg-transparent border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/10",
    "outline-gold": "bg-transparent border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#1C1C1C]",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${widthClass} ${className} hover:scale-[1.02] active:scale-95`}
    >
      {children}
    </button>
  );
}
