"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { ScrollReveal, StaggerReveal, StaggerChild } from "@/components/ui/ScrollReveal";
import { products } from "@/lib/products";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ChefsGallery } from "@/components/sections/ChefsGallery";
import { TimelineSection, HeritageSection, ChefSection, ValuesSection } from "@/components/pages/StoryPage";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────
   ILLUSTRATED SVG DECORATIVES
───────────────────────────────────────────── */

function StarBurst({ size = 80, opacity = 0.4, className = "", style }: { size?: number; opacity?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" className={className} style={{ opacity, ...style }}>
      <path d="M40 2 L42 38 L78 40 L42 42 L40 78 L38 42 L2 40 L38 38 Z" fill="#C9A84C" />
      <path d="M40 14 L41.2 38.8 L66 40 L41.2 41.2 L40 66 L38.8 41.2 L14 40 L38.8 38.8 Z" fill="#E8D08A" opacity="0.5" />
    </svg>
  );
}

function FloralCorner({ className = "", flip = false, style }: { className?: string; flip?: boolean; style?: React.CSSProperties }) {
  return (
    <svg
      width="180" height="180" viewBox="0 0 180 180" fill="none" className={className}
      style={{ transform: flip ? "scaleX(-1)" : undefined, ...style }}
    >
      <path d="M10 10 Q50 10 90 50 Q130 90 170 170" stroke="#C9A84C" strokeWidth="0.8" opacity="0.3" fill="none" />
      <path d="M10 30 Q40 30 70 60 Q100 90 130 170" stroke="#C9A84C" strokeWidth="0.5" opacity="0.2" fill="none" />
      {/* Leaf clusters */}
      <ellipse cx="55" cy="30" rx="12" ry="6" transform="rotate(-30 55 30)" fill="#C9A84C" opacity="0.15" />
      <ellipse cx="45" cy="40" rx="10" ry="5" transform="rotate(-50 45 40)" fill="#C9A84C" opacity="0.2" />
      <ellipse cx="30" cy="55" rx="10" ry="5" transform="rotate(-70 30 55)" fill="#C9A84C" opacity="0.15" />
      {/* Small dots */}
      <circle cx="70" cy="18" r="2.5" fill="#C9A84C" opacity="0.35" />
      <circle cx="85" cy="30" r="1.8" fill="#C9A84C" opacity="0.25" />
      <circle cx="20" cy="70" r="2" fill="#C9A84C" opacity="0.3" />
      {/* Petal flower */}
      <g transform="translate(100,100) rotate(20)">
        {[0,60,120,180,240,300].map((a, i) => (
          <ellipse key={i} cx={Math.cos(a * Math.PI/180) * 9} cy={Math.sin(a * Math.PI/180) * 9} rx="5" ry="2.5" transform={`rotate(${a})`} fill="#C9A84C" opacity="0.2" />
        ))}
        <circle cx="0" cy="0" r="3" fill="#C9A84C" opacity="0.3" />
      </g>
    </svg>
  );
}

function SpiceIllustration({ type, size = 100 }: { type: "star" | "pepper" | "cardamom"; size?: number }) {
  if (type === "star") return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {[0,45,90,135].map((a, i) => (
        <ellipse key={i} cx="50" cy="50" rx="5" ry="28" transform={`rotate(${a} 50 50)`} fill="#C9A84C" opacity="0.25" />
      ))}
      <circle cx="50" cy="50" r="8" fill="#C9A84C" opacity="0.35" />
      <circle cx="50" cy="50" r="4" fill="#E8D08A" opacity="0.5" />
    </svg>
  );
  if (type === "pepper") return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path d="M50 20 C35 20 25 35 25 55 C25 72 35 82 50 82 C65 82 75 72 75 55 C75 35 65 20 50 20Z" fill="#8B1A1A" opacity="0.2" />
      <path d="M50 20 C50 20 52 10 56 8" stroke="#5A6632" strokeWidth="2" fill="none" opacity="0.4" />
      <path d="M30 50 Q25 45 28 38" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.3" />
      <path d="M70 50 Q75 45 72 38" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.3" />
    </svg>
  );
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <ellipse cx="50" cy="50" rx="18" ry="30" fill="#5A6632" opacity="0.2" />
      <ellipse cx="50" cy="50" rx="12" ry="22" fill="#5A6632" opacity="0.15" />
      <line x1="50" y1="20" x2="50" y2="80" stroke="#C9A84C" strokeWidth="0.8" opacity="0.3" />
      <line x1="32" y1="38" x2="68" y2="62" stroke="#C9A84C" strokeWidth="0.6" opacity="0.2" />
      <line x1="32" y1="62" x2="68" y2="38" stroke="#C9A84C" strokeWidth="0.6" opacity="0.2" />
    </svg>
  );
}

function DottedArc({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  const dots = [];
  for (let i = 0; i <= 20; i++) {
    const angle = -30 + (i / 20) * 240;
    const rad = angle * Math.PI / 180;
    const r = 90;
    dots.push({ x: 100 + r * Math.cos(rad), y: 100 + r * Math.sin(rad), size: i % 4 === 0 ? 2.5 : 1.2 });
  }
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className={className} style={{ opacity: 0.25, ...style }}>
      {dots.map((d, i) => <circle key={i} cx={d.x} cy={d.y} r={d.size} fill="#C9A84C" />)}
    </svg>
  );
}

function HorizontalDivider({ opacity = 0.2 }: { opacity?: number }) {
  return (
    <svg width="100%" height="20" viewBox="0 0 600 20" preserveAspectRatio="xMidYMid meet" style={{ opacity }}>
      <line x1="0" y1="10" x2="240" y2="10" stroke="#C9A84C" strokeWidth="0.5" />
      <path d="M270 10 L280 4 L290 10 L300 16 L310 10 L320 4 L330 10" stroke="#C9A84C" strokeWidth="0.8" fill="none" />
      <circle cx="300" cy="10" r="3" fill="#C9A84C" />
      <line x1="360" y1="10" x2="600" y2="10" stroke="#C9A84C" strokeWidth="0.5" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   WORD REVEAL
───────────────────────────────────────────── */
function WordReveal({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const container = useRef<HTMLSpanElement>(null);
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(container.current!.children, { opacity: 1, y: 0 });
      return;
    }
    gsap.fromTo(container.current!.children,
      { opacity: 0, y: 24, rotateX: -20 },
      { opacity: 1, y: 0, rotateX: 0, duration: 0.9, stagger: 0.1, ease: "power3.out", delay }
    );
  }, { scope: container });
  return (
    <span ref={container} className={className} style={{ display: "inline-block", perspective: "600px" }}>
      {text.split(" ").map((word, i) => (
        <span key={i} style={{ display: "inline-block", marginRight: "0.28em", opacity: 0 }}>{word}</span>
      ))}
    </span>
  );
}

/* ─────────────────────────────────────────────
   HERO SECTION — EDITORIAL COLLAGE
───────────────────────────────────────────── */
function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  // Refs for parallax images
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tl = gsap.timeline();

    // Fade in texts
    tl.fromTo(textRef.current!.children, 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power3.out" }
    );

    // Fade in images with slight movement
    gsap.fromTo([img1Ref.current, img2Ref.current, img3Ref.current],
      { opacity: 0, scale: 0.95, y: 60 },
      { opacity: 1, scale: 1, y: 0, duration: 1.5, stagger: 0.2, ease: "power2.out", delay: 0.4 }
    );

    // Parallax scroll effects
    gsap.to(img1Ref.current, {
      y: -150,
      ease: "none",
      scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1 }
    });
    
    gsap.to(img2Ref.current, {
      y: -80,
      ease: "none",
      scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1 }
    });

    gsap.to(img3Ref.current, {
      y: -220,
      ease: "none",
      scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1 }
    });

    // Subtle fade out on scroll
    gsap.to(textRef.current, {
      y: 100,
      opacity: 0,
      ease: "none",
      scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1 }
    });

  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="hero-section" style={{
      position: "relative",
      minHeight: "100svh",
      background: "var(--color-charcoal)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      padding: "120px 24px"
    }}>
      {/* Background glow */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 60%)", pointerEvents: "none", zIndex: 0 }} />

      {/* ── PARALLAX IMAGE COLLAGE ── */}
      {/* Image 1: Large, Left */}
      <div ref={img1Ref} className="hero-img hero-img-1" style={{
        position: "absolute",
        left: "5%",
        top: "20%",
        width: "clamp(200px, 30vw, 400px)",
        aspectRatio: "3/4",
        zIndex: 1,
        borderRadius: "4px",
        overflow: "hidden",
        boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
      }}>
        <Image src="/images/WhatsApp Image 2026-05-05 at 7.08.58 PM.jpeg" alt="Kannur Heritage" fill style={{ objectFit: "cover", filter: "brightness(0.8) contrast(1.1)" }} />
      </div>

      {/* Image 2: Medium, Top Right */}
      <div ref={img2Ref} className="hero-img hero-img-2" style={{
        position: "absolute",
        right: "8%",
        top: "10%",
        width: "clamp(150px, 22vw, 300px)",
        aspectRatio: "4/5",
        zIndex: 2,
        borderRadius: "4px",
        overflow: "hidden",
        boxShadow: "0 15px 35px rgba(0,0,0,0.3)"
      }}>
        <Image src="/images/WhatsApp Image 2026-05-05 at 7.46.09 PM.jpeg" alt="Spice Preparation" fill style={{ objectFit: "cover", filter: "brightness(0.8) contrast(1.1)" }} />
      </div>

      {/* Image 3: Small, Bottom Right */}
      <div ref={img3Ref} className="hero-img hero-img-3" style={{
        position: "absolute",
        right: "15%",
        bottom: "10%",
        width: "clamp(120px, 18vw, 250px)",
        aspectRatio: "1/1",
        zIndex: 3,
        borderRadius: "4px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
      }}>
        <Image src="/images/WhatsApp Image 2026-05-05 at 8.16.30 PM.jpeg" alt="Chef Details" fill style={{ objectFit: "cover", filter: "brightness(0.8) contrast(1.1)" }} />
      </div>

      {/* ── CENTER TYPOGRAPHY ── */}
      <div ref={textRef} className="hero-text" style={{
        position: "relative",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        maxWidth: "800px"
      }}>
        {/* Kicker */}
        <p style={{ fontFamily: "var(--font-label)", fontSize: "11px", letterSpacing: "0.4em", color: "var(--color-gold)", marginBottom: "32px", textTransform: "uppercase" }}>
          Kannur · Est. 1980
        </p>

        {/* Massive Headline */}
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontWeight: 300,
          fontSize: "clamp(60px, 12vw, 160px)",
          color: "var(--color-gold-pale)",
          lineHeight: 0.9,
          letterSpacing: "-0.02em",
          margin: "0 0 40px",
          textShadow: "0 10px 30px rgba(0,0,0,0.5)"
        }}>
          The Soul<br />of <span style={{ color: "var(--color-gold)" }}>Kannur.</span>
        </h1>

        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(14px, 1.5vw, 18px)",
          color: "rgba(251,249,246,0.7)",
          lineHeight: 1.6,
          maxWidth: "400px",
          margin: "0 0 48px",
        }}>
          Stone-ground heritage spice blends crafted for authentic Malabar wedding feasts.
        </p>

        <div className="hero-cta-group" style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/products">
            <Button variant="primary">SHOP COLLECTION</Button>
          </Link>
          <Link href="/story">
            <Button variant="ghost">OUR STORY</Button>
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-section {
            padding: 0 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            height: 100svh !important;
            min-height: 100svh !important;
          }
          
          .hero-img {
            position: absolute !important;
            opacity: 0.5 !important;
            z-index: 1 !important;
            width: 50vw !important;
            max-width: none !important;
            margin: 0 !important;
            border-radius: 0 !important;
            transform: none !important;
          }

          /* Top Row: Left Corner */
          .hero-img-1 {
            top: 0 !important;
            left: 0 !important;
            bottom: auto !important;
            right: auto !important;
            aspect-ratio: 4/5 !important;
          }

          /* Bottom Row: Right Corner */
          .hero-img-2 {
            bottom: 0 !important;
            right: 0 !important;
            top: auto !important;
            left: auto !important;
            aspect-ratio: 4/5 !important;
          }

          .hero-img-3 { display: none !important; }

          .hero-text {
            position: relative !important;
            z-index: 10 !important;
            padding: 0 24px !important;
            margin: 0 !important;
            width: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }

          .hero-cta-group {
            width: 100% !important;
            max-width: 280px !important;
            flex-direction: column !important;
            gap: 12px !important;
          }

          .hero-cta-group a, 
          .hero-cta-group a button {
            width: 100% !important;
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────
   MARQUEE
───────────────────────────────────────────── */
function MarqueeTicker() {
  const text = "KANNUR KALYANA BIRIYANI MASALA · MATGHOOT MASALA · 200G NET WEIGHT · CHEF SHAMEEM · MALABAR HERITAGE · ";
  return (
    <div style={{ background: "var(--color-crimson)", overflow: "hidden", padding: "13px 0", borderTop: "1px solid rgba(212,175,55,0.2)", borderBottom: "1px solid rgba(212,175,55,0.2)" }}>
      <div style={{ display: "flex", animation: "marquee 28s linear infinite", width: "max-content" }}>
        {[1, 2, 3].map(n => (
          <span key={n} style={{ fontFamily: "var(--font-label)", fontSize: "10px", color: "var(--color-gold)", letterSpacing: "0.22em", whiteSpace: "nowrap", paddingRight: "60px", flexShrink: 0 }}>
            {text}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }`}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────
   WHY SECTION — with illustrated icons
───────────────────────────────────────────── */
function WhySection() {
  const features = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 4 L22 17 L35 20 L22 23 L20 36 L18 23 L5 20 L18 17 Z" fill="#C9A84C" opacity="0.6" />
          <circle cx="20" cy="20" r="4" fill="#C9A84C" opacity="0.4" />
        </svg>
      ),
      title: "Heritage Recipe",
      body: "Passed down through generations of Malabar wedding cooks. Unchanged. Uncompromised.",
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <ellipse cx="20" cy="28" rx="14" ry="5" stroke="#C9A84C" strokeWidth="1" opacity="0.5" fill="none" />
          <path d="M10 28 Q10 16 20 12 Q30 16 30 28" stroke="#C9A84C" strokeWidth="1" fill="rgba(201,168,76,0.1)" />
          <line x1="20" y1="12" x2="20" y2="6" stroke="#C9A84C" strokeWidth="1.2" opacity="0.5" strokeLinecap="round" />
          <circle cx="20" cy="5" r="2" fill="#C9A84C" opacity="0.4" />
        </svg>
      ),
      title: "Stone-Ground Spices",
      body: "Traditional chakki grinding preserves volatile oils that machine-grinding destroys.",
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 8 C14 8 8 14 10 22 C12 30 20 34 20 34 C20 34 28 30 30 22 C32 14 26 8 20 8Z" fill="#5A6632" opacity="0.2" />
          <path d="M20 8 C14 8 8 14 10 22 C12 30 20 34 20 34 C20 34 28 30 30 22 C32 14 26 8 20 8Z" stroke="#C9A84C" strokeWidth="0.8" opacity="0.4" fill="none" />
          <line x1="20" y1="14" x2="20" y2="30" stroke="#C9A84C" strokeWidth="0.8" opacity="0.3" />
        </svg>
      ),
      title: "No Preservatives",
      body: "Pure spice, nothing added. What you taste is exactly what nature and Chef Shameem intended.",
    },
  ];

  return (
    <section style={{ background: "var(--color-beige)", padding: "96px 16px", position: "relative", overflow: "hidden" }}>
      {/* bg illustration */}
      <div style={{ position: "absolute", top: "10%", right: "5%", opacity: 0.06, pointerEvents: "none" }}>
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="140" stroke="#C9A84C" strokeWidth="1" />
          <circle cx="150" cy="150" r="110" stroke="#C9A84C" strokeWidth="0.6" />
          <circle cx="150" cy="150" r="80" stroke="#C9A84C" strokeWidth="0.4" />
          {[0,30,60,90,120,150,180,210,240,270,300,330].map(a => {
            const rad = a * Math.PI / 180;
            return <line key={a} x1={150+80*Math.cos(rad)} y1={150+80*Math.sin(rad)} x2={150+140*Math.cos(rad)} y2={150+140*Math.sin(rad)} stroke="#C9A84C" strokeWidth="0.4" />;
          })}
        </svg>
      </div>

      <ScrollReveal>
        <p style={{ fontFamily: "var(--font-label)", fontSize: "9px", letterSpacing: "0.3em", color: "var(--color-crimson)", textAlign: "center", marginBottom: "12px" }}>OUR PROMISE</p>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 5vw, 44px)", color: "var(--color-charcoal)", textAlign: "center", margin: "0 0 60px", fontWeight: 400 }}>
          Why Chef Shameem?
        </h2>
      </ScrollReveal>

      <StaggerReveal className="why-grid" stagger={0.25} y={120} duration={1.8} ease="power4.out">
        {features.map(f => (
          <StaggerChild key={f.title}>
            <div style={{
              background: "var(--color-cream)",
              border: "1px solid rgba(212,175,55,0.12)",
              padding: "44px 32px",
              display: "flex", flexDirection: "column", gap: "18px",
              height: "100%",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* corner accent */}
              <div style={{ position: "absolute", top: 0, right: 0, width: "40px", height: "40px", borderBottom: "1px solid rgba(212,175,55,0.15)", borderLeft: "1px solid rgba(212,175,55,0.15)" }} />
              <div style={{ color: "var(--color-gold)" }}>{f.icon}</div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "20px", color: "var(--color-charcoal)", margin: 0, fontWeight: 700 }}>{f.title}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(33,30,29,0.65)", lineHeight: 1.85, margin: 0, fontWeight: 300 }}>{f.body}</p>
            </div>
          </StaggerChild>
        ))}
      </StaggerReveal>

      <style>{`
        .why-grid { display: flex; flex-direction: column; gap: 20px; max-width: 1100px; margin: 0 auto; }
        @media (min-width: 768px) { .why-grid { flex-direction: row !important; } .why-grid > * { flex: 1; } }
        @media (min-width: 1280px) { section:has(.why-grid) { padding: 120px 80px !important; } }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PRODUCT TEASER
───────────────────────────────────────────── */
function ProductTeaser() {
  return (
    <section style={{ background: "var(--color-charcoal)", padding: "100px 0", position: "relative" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "80px", padding: "0 24px" }}>
        <p style={{ fontFamily: "var(--font-label)", fontSize: "10px", letterSpacing: "0.3em", color: "var(--color-gold)", fontWeight: 300, textTransform: "uppercase", marginBottom: "14px" }}>
          Small-batch · Stone-ground · Hand-blended
        </p>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 400, color: "var(--color-gold-pale)", margin: 0, lineHeight: 1.2 }}>
          The art of the <span style={{ color: "var(--color-gold)" }}>perfectly balanced spice</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="pt-cards">
        {products.map((product, i) => (
          <ScrollReveal key={product.slug} delay={i * 0.15}>
            <div className={`pt-card-new ${i % 2 === 1 ? 'pt-reverse' : ''}`}>
              <Link href={`/products/${product.slug}`} className="pt-card-link">
                <div className="pt-card-img-wrap">
                  <Image
                    src={i === 0 ? "/images/item1_bg.png" : "/images/item2_bg.png"}
                    alt={product.name} width={420} height={420}
                    style={{ width: "clamp(240px, 28vw, 380px)", height: "auto", objectFit: "contain", filter: "drop-shadow(0 24px 40px rgba(0,0,0,0.55))", position: "relative", zIndex: 1, transition: "transform 0.5s ease" }}
                    className="pt-img-hover"
                  />
                </div>
                <div className="pt-card-text">
                  <p style={{ fontFamily: "var(--font-label)", fontSize: "9px", letterSpacing: "0.28em", color: "var(--color-gold)", marginBottom: "6px" }}>
                    {i === 0 ? "HERITAGE BLEND" : "SIGNATURE BLEND №2"}
                  </p>
                  <p style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(14px,1.6vw,18px)", color: "var(--color-gold-pale)", fontWeight: 400, lineHeight: 1.3 }}>
                    {product.name}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(251,249,246,0.45)", marginTop: "8px" }}>
                    200g · {product.currency}{product.price}
                  </p>
                  
                  <div style={{ marginTop: "24px" }}>
                     <Button variant="outline-gold" id={`teaser-cta-${product.slug}`}>Discover</Button>
                  </div>
                </div>
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <style>{`
        .pt-cards { display: flex; flex-direction: column; gap: 80px; padding: 0 24px; max-width: 900px; margin: 0 auto; }
        .pt-card-link { display: flex; flex-direction: column; align-items: center; gap: 24px; text-decoration: none; text-align: center; }
        .pt-card-img-wrap { position: relative; display: flex; align-items: center; justify-content: center; }
        .pt-card-text { display: flex; flex-direction: column; align-items: center; }
        .pt-img-hover { animation: ptFloat 6s ease-in-out infinite; }
        .pt-card-new:nth-child(even) .pt-img-hover { animation-delay: 1s; animation-duration: 7s; }
        .pt-card-new:hover .pt-img-hover { transform: translateY(-10px) scale(1.02); animation-play-state: paused; }

        @keyframes ptFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @media (min-width: 768px) {
          .pt-cards { gap: 120px; }
          .pt-card-link { flex-direction: row; gap: 60px; text-align: left; }
          .pt-card-new.pt-reverse .pt-card-link { flex-direction: row-reverse; text-align: right; }
          .pt-card-text { align-items: flex-start; flex: 1; }
          .pt-card-new.pt-reverse .pt-card-text { align-items: flex-end; }
          .pt-card-img-wrap { flex: 1; justify-content: center; }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PRODUCT STORY — SYMBOL EXPLANATIONS
───────────────────────────────────────────── */
function ProductStorySection() {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Header stagger
    gsap.fromTo(headerRef.current!.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: headerRef.current, start: "top 85%" } }
    );

    // Main image reveal
    gsap.fromTo(mainImageRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: mainImageRef.current, start: "top 80%" } }
    );

    // Grid items stagger
    const items = gsap.utils.toArray(gridRef.current!.children);
    gsap.fromTo(items,
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: gridRef.current, start: "top 85%" } }
    );
  }, { scope: containerRef });

  const symbols = [
    { img: "Picsart_26-05-05_22-06-20-552.png", title: "Kannur Kotta", desc: "Part of Kannur kotta" },
    { img: "Picsart_26-05-05_22-11-23-452.png", title: "Mehndi Design", desc: "Traditional mehndi design." },
    { img: "Picsart_26-05-05_22-14-34-715.png", title: "Palakkayam Thattu", desc: "Palakkayam Thattu" },
    { img: "Picsart_26-05-05_22-17-03-975.png", title: "Natural Beauty", desc: "Natural Beauty of kannur" },
    { img: "Picsart_26-05-05_22-18-51-543.png", title: "Seafood Traditions", desc: "Indicate fishing and seafood traditions." },
    { img: "Picsart_26-05-05_22-10-07-860.png", title: "Thalassery Biriyani", desc: "Indicate Kannur's Thalassery biriyani." },
    { img: "Picsart_26-05-05_22-13-35-716.png", title: "Kadal Palam", desc: "The famous Kadal Palam." },
    { img: "Picsart_26-05-05_22-16-14-660.png", title: "Sunset Beauty", desc: "The beauty of the sunset." },
    { img: "Picsart_26-05-05_22-17-58-898.png", title: "Drive In Beach", desc: "The famous Drive In Beach." },
    { img: "building.png", title: "Kannur City", desc: "Indicate Kannur city." },
  ];

  return (
    <section ref={containerRef} id="product-story" style={{ background: "var(--color-charcoal)", padding: "120px 0", borderTop: "1px solid rgba(201, 168, 76, 0.1)", overflow: "hidden" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        
        <div ref={headerRef} style={{ textAlign: "center", marginBottom: "80px" }}>
          <p style={{ opacity: 0, fontFamily: "var(--font-label)", fontSize: "10px", letterSpacing: "0.4em", color: "var(--color-gold)", marginBottom: "20px", textTransform: "uppercase" }}>
            The Visual Language of Heritage
          </p>
          <h2 style={{ opacity: 0, fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 62px)", fontWeight: 300, color: "var(--color-gold-pale)", margin: "0 0 32px", lineHeight: 1.1 }}>
            Stories Written in <span style={{ color: "var(--color-gold)" }}>Symbols.</span>
          </h2>
          <p style={{ opacity: 0, fontFamily: "var(--font-body)", fontSize: "16px", color: "rgba(251,249,246,0.6)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
            Every curve and line on our label is a tribute to the rich tapestry of life in Kannur. Discover the meaning behind our signature patterns.
          </p>
        </div>

        {/* Main Image */}
        <div ref={mainImageRef} style={{ opacity: 0, position: "relative", width: "100%", height: "auto", marginBottom: "100px", borderRadius: "4px", overflow: "hidden" }}>
          <Image 
            src="/images/pattern/main-img.png" 
            alt="Complete Pattern Mural" 
            width={1200} 
            height={400} 
            style={{ width: "100%", height: "auto", display: "block", filter: "invert(1) brightness(1.2) sepia(1) saturate(1.2) hue-rotate(-10deg)" }}
          />
        </div>

        {/* Symbols Grid */}
        <div ref={gridRef} className="symbols-grid">
          {symbols.map((symbol, i) => (
            <div key={i} className="symbol-item" style={{ opacity: 0 }}>
              <div className="symbol-img-wrap">
                <Image 
                  src={`/images/pattern/${symbol.img}`} 
                  alt={symbol.title} 
                  width={400} 
                  height={400} 
                  style={{ width: "100%", height: "100%", objectFit: "contain", filter: "invert(1) brightness(1.2) sepia(1) saturate(1.2) hue-rotate(-10deg)" }}
                />
              </div>
              <div className="symbol-content">
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "18px", color: "var(--color-gold-pale)", margin: 0 }}>
                  {symbol.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .symbols-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 64px 48px;
        }
        .symbol-item {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .symbol-img-wrap {
          flex: 0 0 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .symbol-content {
          flex: 1;
        }
        @media (max-width: 900px) {
          .symbols-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .symbol-item {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }
          .symbol-img-wrap {
            flex: none;
            width: 120px;
            height: 120px;
          }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────
   STORY TEASER
───────────────────────────────────────────── */
function KannurStoryTeaser() {
  return (
    <section style={{ position: "relative", minHeight: "360px", background: "var(--color-charcoal)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: "80px 16px" }}>
      {/* Large illustrated compass rose */}
      <svg width="500" height="500" viewBox="0 0 500 500" style={{ position: "absolute", opacity: 0.04 }}>
        <circle cx="250" cy="250" r="240" stroke="#C9A84C" strokeWidth="0.8" fill="none" />
        <circle cx="250" cy="250" r="180" stroke="#C9A84C" strokeWidth="0.5" fill="none" />
        {[0,45,90,135,180,225,270,315].map(a => {
          const rad = a * Math.PI / 180;
          const inner = a % 90 === 0 ? 80 : 140;
          return <line key={a} x1={250+inner*Math.cos(rad)} y1={250+inner*Math.sin(rad)} x2={250+240*Math.cos(rad)} y2={250+240*Math.sin(rad)} stroke="#C9A84C" strokeWidth={a % 90 === 0 ? "1.5" : "0.6"} />;
        })}
        <circle cx="250" cy="250" r="20" stroke="#C9A84C" strokeWidth="1" fill="none" />
      </svg>

      <ScrollReveal style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "700px" } as React.CSSProperties}>
        <HorizontalDivider opacity={0.2} />
        <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px, 5vw, 38px)", fontWeight: 300, color: "var(--color-gold-pale)", lineHeight: 1.5, margin: "36px 0" }}>
          "Every pinch carries the memory<br />of a thousand Malabar feasts."
        </p>
        <Link href="/story"><Button variant="primary" id="story-teaser-cta">DISCOVER THE HERITAGE</Button></Link>
        <HorizontalDivider opacity={0.15} />
      </ScrollReveal>
    </section>
  );
}

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
export function LandingPage() {
  return (
    <>
      <HeroSection />
      {/* <MarqueeTicker /> */}
      <WhySection />
      <ProductStorySection />
      <ProductTeaser />
      <HeritageSection />
      <TimelineSection />
      <ChefSection />
      <ValuesSection />
      <TestimonialsSection />
      <ChefsGallery />
    </>
  );
}