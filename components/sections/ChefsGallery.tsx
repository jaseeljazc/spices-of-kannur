"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  {
    src: "/gallery/WhatsApp Image 2026-05-05 at 11.32.20 PM.jpeg",
    title: "Heritage Hearth",
    type: "Culture",
  },
  {
    src: "/gallery/WhatsApp Image 2026-05-05 at 11.32.20 PM (1).jpeg",
    title: "Master at Work",
    type: "Chef",
  },
  {
    src: "/gallery/WhatsApp Image 2026-05-05 at 11.32.20 PM (2).jpeg",
    title: "Signature Blend",
    type: "Product",
  },
  {
    src: "/gallery/WhatsApp Image 2026-05-05 at 11.32.20 PM (3).jpeg",
    title: "Authentic Methods",
    type: "Process",
  },
  {
    src: "/gallery/WhatsApp Image 2026-05-05 at 11.32.20 PM (4).jpeg",
    title: "Malabar Tradition",
    type: "Legacy",
  },
  {
    src: "/gallery/WhatsApp Image 2026-05-05 at 11.48.23 PM.jpeg",
    title: "Culinary Craft",
    type: "Art",
  },
  {
    src: "/gallery/WhatsApp Image 2026-05-05 at 11.48.23 PM (1).jpeg",
    title: "The Perfect Roast",
    type: "Technique",
  },
  {
    src: "/gallery/WhatsApp Image 2026-05-05 at 11.48.23 PM (2).jpeg",
    title: "Timeless Flavours",
    type: "Taste",
  },
  {
    src: "/gallery/WhatsApp Image 2026-05-05 at 11.48.23 PM (3).jpeg",
    title: "Spices in Motion",
    type: "Energy",
  },
];

export function ChefsGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(".parallax-card-inner"),
    );
    const STRENGTH = isMobile ? 0.45 : 0.2; // how much the image travels relative to card height

    if (isMobile) {
      // Native rAF loop — works on Android passive scroll
      let rafId: number;

      const update = () => {
        cards.forEach((card) => {
          const outer = card.parentElement;
          if (!outer) return;
          const rect = outer.getBoundingClientRect();
          const vh = window.innerHeight;
          // progress: 0 when card enters bottom, 1 when it exits top
          const progress = 1 - rect.bottom / (vh + rect.height);
          const clampedProgress = Math.min(1, Math.max(0, progress));
          const translateY = -(clampedProgress * rect.height * STRENGTH);
          card.style.transform = `translateY(${translateY}px)`;
        });
        rafId = requestAnimationFrame(update);
      };

      rafId = requestAnimationFrame(update);
      return () => cancelAnimationFrame(rafId);
    } else {
      // Desktop: GSAP ScrollTrigger is fine
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: "0%" },
          {
            y: "-20%",
            ease: "none",
            scrollTrigger: {
              trigger: card.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        );
      });
    }
  }, []);

  return (
    <section
      ref={containerRef}
      id="chefs-gallery"
      style={{
        background: "var(--color-charcoal)",
        padding: "120px 0 200px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "-5%",
          opacity: 0.05,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/images/pattern/Picsart_26-05-05_22-14-34-715.png"
          width={400}
          height={400}
          alt="Background Pattern"
          style={{ objectFit: "contain", width: 'clamp(180px, 25vw, 400px)', height: 'auto' }}
        />
      </div>
      <div
        style={{ padding: "0 24px", marginBottom: "64px", textAlign: "center" }}
      >
        <ScrollReveal>
          <p
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "11px",
              letterSpacing: "0.25em",
              color: "var(--color-gold)",
              marginBottom: "16px",
            }}
          >
            HERITAGE IN MOTION
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(36px, 8vw, 64px)",
              color: "var(--color-gold-pale)",
              margin: 0,
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            Chefs <span style={{ color: "var(--color-gold)" }}>Gallery</span>
          </h2>
        </ScrollReveal>
      </div>

      <div className="gallery-parallax-grid">
        {IMAGES.map((img, i) => (
          <div key={i} className="parallax-card-outer">
            <div className="parallax-card-inner">
              <img
                src={img.src}
                alt={img.title}
                style={{
                  width: "100%",
                  height: "140%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div className="parallax-card-overlay">
                <span
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: "8px",
                    letterSpacing: "0.1em",
                    color: "var(--color-gold)",
                  }}
                >
                  {img.type.toUpperCase()}
                </span>
                <h4
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "15px",
                    color: "var(--color-gold-pale)",
                    margin: "4px 0 0",
                    fontWeight: 400,
                  }}
                >
                  {img.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .gallery-parallax-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          padding: 0 12px;
          max-width: 1100px;
          margin: 0 auto;
        }
        
        .parallax-card-outer {
          position: relative;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background: #211E1D;
          border-radius: 2px;
          border: 1px solid rgba(212,175,55,0.1);
        }

        .parallax-card-outer:nth-child(even) {
          transform: translateY(40px);
        }
        
        .parallax-card-inner {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 140%;
          will-change: transform;
        }
        
        .parallax-card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 16px;
          background: linear-gradient(to top, rgba(33,30,29,0.95) 0%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .parallax-card-outer:hover .parallax-card-overlay {
          opacity: 1;
        }

        @media (max-width: 767px) {
          .parallax-card-outer:nth-child(9) {
            display: none !important;
          }
        }

        @media (min-width: 768px) {
          .gallery-parallax-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            padding: 0 40px;
          }
          .parallax-card-outer:nth-child(even) { transform: none; }
          .parallax-card-outer:nth-child(3n+2) { transform: translateY(60px); }
        }
        
        @media (min-width: 1024px) {
          .parallax-card-outer { aspect-ratio: 1 / 1; }
        }
      `}</style>
    </section>
  );
}
