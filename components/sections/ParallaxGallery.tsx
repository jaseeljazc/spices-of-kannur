"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const IMAGES = [
  { src: "/images/biriyani-masala-product.jpeg", title: "Kalyana Biriyani", type: "Signature" },
  { src: "/images/matghoot-masala-product.jpeg", title: "Matghoot Spices", type: "Heritage" },
  { src: "/images/pattern-graphic.jpeg", title: "Heritage Patterns", type: "Art" },
  { src: "/images/label-details.jpeg", title: "Pure Ingredients", type: "Quality" },
  { src: "/images/matghoot-unwrapped.jpeg", title: "Traditional Craft", type: "Process" },
  { src: "/images/biriyani-masala-product.jpeg", title: "Malabar Flavours", type: "Legacy" },
  { src: "/images/label-details.jpeg", title: "Stone Ground", type: "Method" },
  { src: "/images/pattern-graphic.jpeg", title: "Kannur Soul", type: "Origin" },
  { src: "/images/matghoot-masala-product.jpeg", title: "Royal Feasts", type: "Tradition" },
];

export function ParallaxGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (typeof window === "undefined") return;
    
    const cards = gsap.utils.toArray<HTMLElement>(".parallax-card-inner");
    
    cards.forEach((card) => {
      gsap.to(card, {
        y: "-33.33%", // Max possible parallax with 150% height
        ease: "none",
        scrollTrigger: {
          trigger: card.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} style={{ background: "var(--color-charcoal)", padding: "120px 0 200px", overflow: "hidden" }}>
      <div style={{ padding: "0 24px", marginBottom: "64px", textAlign: "center" }}>
        <ScrollReveal>
          <p style={{ fontFamily: "var(--font-label)", fontSize: "11px", letterSpacing: "0.25em", color: "var(--color-gold)", marginBottom: "16px" }}>OUR GALLERY</p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(36px, 8vw, 64px)", color: "var(--color-gold-pale)", margin: 0, fontWeight: 400, lineHeight: 1.1 }}>
            A Feast for <br /><span style={{ color: "var(--color-gold)" }}>the Eyes</span>
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
                style={{ width: "100%", height: "150%", objectFit: "cover", display: "block" }} 
              />
              <div className="parallax-card-overlay">
                <span style={{ fontFamily: "var(--font-label)", fontSize: "8px", letterSpacing: "0.1em", color: "var(--color-gold)" }}>{img.type.toUpperCase()}</span>
                <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "15px", color: "var(--color-gold-pale)", margin: "4px 0 0", fontWeight: 400 }}>{img.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .gallery-parallax-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 4px;
          padding: 0 8px;
          max-width: 1400px;
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

        /* Stagger second column on mobile */
        .parallax-card-outer:nth-child(2n) {
          transform: translateY(40px);
        }
        
        .parallax-card-inner {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 150%; /* Deepest possible for square cards */
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

        @media (min-width: 768px) {
          .gallery-parallax-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
            padding: 0 24px;
          }
          .parallax-card-overlay { padding: 32px; }
          
          /* Reset mobile stagger, apply desktop second-column stagger */
          .parallax-card-outer:nth-child(2n) { transform: none; }
          .parallax-card-outer:nth-child(3n+2) { transform: translateY(60px); }
        }
        
        @media (min-width: 1024px) {
          .gallery-parallax-grid {
            gap: 12px;
            padding: 0 40px;
          }
          .parallax-card-outer:nth-child(3n+2) { transform: translateY(80px); }
        }
      `}</style>
    </section>
  );
}
