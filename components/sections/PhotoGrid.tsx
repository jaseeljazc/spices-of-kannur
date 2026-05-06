"use client";
import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const tiles = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  bg: ["#1C1C1C", "#2A1A0E", "#1A2020", "#1C1C2A", "#1A1410", "#0E1A14"][i],
}));

export function PhotoGrid() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section style={{ background: "#1C1C1C", padding: "64px 16px" }}>
      <ScrollReveal style={{ textAlign: "center", marginBottom: "40px" } as React.CSSProperties}>
        <p style={{ fontFamily: "var(--font-cinzel), Cinzel, serif", fontSize: "10px", letterSpacing: "0.2em", color: "#C9A84C", marginBottom: "8px" }}>LIFE IN KANNUR</p>
        <h2 style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif", fontSize: "clamp(24px, 5vw, 36px)", color: "#F5EDD6", margin: 0 }}>From the Spice Trails</h2>
      </ScrollReveal>

      <div className="photo-grid" style={{ display: "grid", gap: "8px", maxWidth: "1100px", margin: "0 auto" }}>
        {tiles.map((tile, i) => (
          <div
            key={tile.id}
            className={`photo-grid-item ${i === 0 || i === 5 ? "tall-tile" : ""}`}
            style={{ background: tile.bg, aspectRatio: "1", cursor: "pointer", position: "relative", overflow: "hidden", borderRadius: "2px" }}
            onClick={() => setActive(active === i ? null : i)}
            tabIndex={0}
            role="button"
            aria-label={`Lifestyle photo ${i + 1}`}
            onKeyDown={(e) => e.key === "Enter" && setActive(active === i ? null : i)}
          >
            {/* placeholder pattern */}
            <div style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `radial-gradient(circle at ${20 + i * 15}% ${30 + i * 8}%, rgba(201,168,76,0.08) 0%, transparent 60%)`,
            }} />
            <div
              className="photo-grid-overlay"
              style={{ opacity: active === i ? 1 : undefined }}
            >
              <span style={{ fontFamily: "var(--font-cinzel), Cinzel, serif", fontSize: "10px", color: "#C9A84C", letterSpacing: "0.15em" }}>VIEW</span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .photo-grid { grid-template-columns: repeat(2, 1fr); }
        @media (min-width: 768px) {
          .photo-grid { grid-template-columns: repeat(3, 1fr); }
          .tall-tile { grid-row: span 2; aspect-ratio: auto !important; }
        }
        @media (min-width: 1280px) {
          section:has(.photo-grid) { padding: 96px 80px !important; }
        }
      `}</style>
    </section>
  );
}
