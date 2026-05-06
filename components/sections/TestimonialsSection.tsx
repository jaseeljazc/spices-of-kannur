"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "The Biriyani Masala transformed our wedding feast. Every guest asked for the secret — this is it.",
    name: "Fathima N.",
    city: "Kozhikode",
  },
  {
    quote:
      "Matghoot Masala is the most authentic I've tasted outside Kannur. Reminds me of my grandmother's kitchen.",
    name: "Rajan P.",
    city: "Bangalore",
  },
  {
    quote:
      "Finally a masala that doesn't overpower — it elevates. Stone-ground quality you can taste.",
    name: "Sreelakshmi A.",
    city: "Dubai",
  },
  {
    quote:
      "Used it for a Thalassery biriyani for 60 people. Not a single grain was left. Exceptional.",
    name: "Muhammed T.",
    city: "Calicut",
  },
];

function Stars() {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} style={{ color: "var(--color-gold)", fontSize: "14px" }}>
          ★
        </span>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" },
    );
  }, [current]);

  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50 && current < testimonials.length - 1)
      setCurrent((c) => c + 1);
    if (touchEnd - touchStart > 50 && current > 0) setCurrent((c) => c - 1);
  };

  return (
    <section
      id="community-section"
      style={{
        background: "var(--color-charcoal)",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "-5%",
          opacity: 0.05,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/images/pattern/Picsart_26-05-05_22-06-20-552.png"
          width={300}
          height={300}
          alt="Background Pattern"
          style={{ objectFit: "contain", width: 'clamp(150px, 20vw, 300px)', height: 'auto' }}
        />
      </div>
      <ScrollReveal
        style={
          {
            textAlign: "center",
            padding: "0 16px",
            marginBottom: "64px",
          } as React.CSSProperties
        }
      >
        <p
          style={{
            fontFamily: "var(--font-label)",
            fontSize: "11px",
            letterSpacing: "0.25em",
            color: "var(--color-gold)",
            marginBottom: "12px",
          }}
        >
          FROM OUR COMMUNITY
        </p>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(32px, 6vw, 48px)",
            color: "var(--color-gold-pale)",
            margin: 0,
            fontWeight: 400,
          }}
        >
          What They Say
        </h2>
      </ScrollReveal>

      {/* Mobile carousel */}
      <ScrollReveal>
        <div
          className="testimonials-mobile"
          style={{ overflow: "hidden", padding: "0 16px" }}
        >
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: "grab" }}
          >
            <div
              ref={cardRef}
              style={{
                background: "var(--color-cream)",
                border: "1px solid rgba(212,175,55,0.15)",
                borderRadius: "2px",
                padding: "40px 32px",
                minHeight: "220px",
              }}
            >
              <Stars />
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(20px, 5vw, 26px)",

                  color: "var(--color-charcoal)",
                  lineHeight: 1.6,
                  margin: "24px 0",
                  fontWeight: 300,
                }}
              >
                "{testimonials[current].quote}"
              </p>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: "12px",
                    color: "var(--color-crimson)",
                    letterSpacing: "0.15em",
                    margin: 0,
                  }}
                >
                  {testimonials[current].name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "rgba(33,30,29,0.5)",
                    margin: "4px 0 0",
                  }}
                >
                  {testimonials[current].city}
                </p>
              </div>
            </div>
          </div>

          {/* Dot indicators */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginTop: "32px",
            }}
          >
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? 32 : 8,
                  height: 8,
                  borderRadius: "4px",
                  background:
                    i === current
                      ? "var(--color-gold)"
                      : "rgba(212,175,55,0.2)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Desktop: 3 cards */}
      <div
        className="testimonials-desktop"
        style={{
          display: "none",
          gap: "24px",
          padding: "0 80px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {testimonials.slice(0, 3).map((t, i) => (
          <ScrollReveal key={i} delay={i * 0.15} className="flex-1">
            <div
              style={{
                background: "var(--color-cream)",
                border: "1px solid rgba(212,175,55,0.15)",
                borderRadius: "2px",
                padding: "48px 32px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stars />
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "22px",
                  color: "var(--color-charcoal)",
                  lineHeight: 1.6,
                  margin: "24px 0",
                  fontWeight: 300,
                  flex: 1,
                }}
              >
                "{t.quote}"
              </p>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: "12px",
                    color: "var(--color-crimson)",
                    letterSpacing: "0.15em",
                    margin: 0,
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "rgba(33,30,29,0.5)",
                    margin: "4px 0 0",
                  }}
                >
                  {t.city}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .testimonials-mobile { display: none !important; }
          .testimonials-desktop { display: flex !important; }
          #community-section { padding-top: 140px !important; padding-bottom: 140px !important; }
        }
      `}</style>
    </section>
  );
}
