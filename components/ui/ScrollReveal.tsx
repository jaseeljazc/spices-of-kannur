"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  scale?: number;
  style?: React.CSSProperties;
};

export function ScrollReveal({ children, className = "", delay = 0, y = 50, scale = 0.95, style }: ScrollRevealProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Only animate if the user hasn't reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      container.current,
      { opacity: 0, y: y, scale: scale },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: delay,
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%", // when top of element hits 85% of viewport
          once: true,
        },
      }
    );
  }, { scope: container });

  return (
    <div ref={container} className={className} style={{ ...style, opacity: 0 /* prevent flash */ }}>
      {children}
    </div>
  );
}

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  y?: number;
  scale?: number;
  duration?: number;
  ease?: string;
};

export function StaggerReveal({ children, className = "", stagger = 0.1, delay = 0, y = 50, scale = 0.95, duration = 1.2, ease = "power3.out" }: StaggerProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      gsap.utils.toArray(container.current!.children),
      { opacity: 0, y: y, scale: scale },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: duration,
        ease: ease,
        stagger: stagger,
        delay: delay,
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, { scope: container });

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}

export function StaggerChild({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  // The actual animation is handled by the parent StaggerReveal targeting its children.
  // We just need to render a standard div, initialized to opacity 0 to prevent FOUC.
  return (
    <div className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
