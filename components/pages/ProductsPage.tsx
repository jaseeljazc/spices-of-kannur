"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollReveal, StaggerReveal, StaggerChild } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { products } from "@/lib/products";
import { MehndiDivider } from "@/lib/svgs";
import { useCart } from "@/components/CartContext";

const filters = ["All", "Biriyani Masala", "Matghoot Masala"];

export function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { addItem } = useCart();
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = products.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Biriyani Masala") return p.slug.includes("biriyani");
    return p.slug.includes("matghoot");
  });

  useGSAP(() => {
    // Animate out
    gsap.to(gridRef.current!.children, {
      opacity: 0,
      y: 15,
      duration: 0.2,
      onComplete: () => {
        // We let React update the DOM based on state, then animate back in
        gsap.to(gridRef.current!.children, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
          clearProps: "all"
        });
      }
    });
  }, { dependencies: [activeFilter], scope: gridRef });

  return (
    <>
      {/* Header */}
      <section style={{ background: "var(--color-charcoal)", padding: "120px 16px 64px", textAlign: "center", borderBottom: "1px solid rgba(212,175,55,0.15)" }}>
        <MehndiDivider opacity={0.3} className="w-full mb-10" />
        <ScrollReveal>
          <p style={{ fontFamily: "var(--font-label)", fontSize: "11px", letterSpacing: "0.25em", color: "var(--color-gold)", marginBottom: "16px" }}>SPICES OF KANNUR</p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 8vw, 72px)", fontWeight: 300, color: "var(--color-gold-pale)", margin: "0 0 20px", lineHeight: 1.1 }}>
            Heritage Spice Blends
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "rgba(251,249,246,0.6)", fontWeight: 300, maxWidth: "440px", margin: "0 auto" }}>
            Two masalas. A hundred years of Malabar flavour.
          </p>
        </ScrollReveal>
      </section>

      {/* Filter Bar */}
      <div style={{ background: "var(--color-beige)", padding: "24px 16px", borderBottom: "1px solid rgba(212,175,55,0.15)", position: "sticky", top: "56px", zIndex: 10 }}>
        <div className="scrollbar-hide" style={{ display: "flex", gap: "12px", overflowX: "auto", padding: "4px 0", maxWidth: "1200px", margin: "0 auto" }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                position: "relative",
                padding: "12px 24px",
                borderRadius: "2px",
                border: `1px solid ${activeFilter === f ? "var(--color-crimson)" : "rgba(212,175,55,0.3)"}`,
                background: activeFilter === f ? "var(--color-crimson)" : "transparent",
                color: activeFilter === f ? "var(--color-gold-pale)" : "var(--color-gold)",
                fontFamily: "var(--font-label)",
                fontSize: "11px",
                letterSpacing: "0.15em",
                cursor: "pointer",
                whiteSpace: "nowrap",
                minHeight: "44px",
                transition: "all 0.3s ease",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <section style={{ background: "var(--color-beige)", padding: "48px 16px 96px", minHeight: "60vh" }}>
        <div ref={gridRef} className="products-grid">
          {filtered.map((product) => (
            <div
              key={product.slug}
              className="product-card"
              style={{
                background: "var(--color-cream)",
                border: "1px solid rgba(212,175,55,0.15)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image area */}
              <div style={{ position: "relative", background: product.variants[0].color + "15", padding: "40px 24px", borderBottom: "1px solid rgba(212,175,55,0.1)" }}>
                <div style={{ position: "relative", zIndex: 1, transition: "transform 0.4s ease" }} className="product-img-wrapper">
                  <Image
                    src={product.slug.includes("biriyani") ? "/images/biriyani-masala-product.jpeg" : "/images/matghoot-masala-product.jpeg"}
                    alt={product.name}
                    width={350}
                    height={350}
                    style={{ width: '100%', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.2))' }}
                  />
                </div>
                {/* Variant dots */}
                <div style={{ position: "absolute", bottom: "16px", right: "16px", display: "flex", gap: "6px" }}>
                  {product.variants.map((v) => (
                    <div
                      key={v.id}
                      title={v.name}
                      style={{ width: 12, height: 12, borderRadius: "50%", background: v.color, border: "2px solid var(--color-beige)" }}
                    />
                  ))}
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: "20px", color: "var(--color-charcoal)", lineHeight: 1.2, fontWeight: 700 }}>{product.name}</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(33,30,29,0.6)", fontWeight: 300, lineHeight: 1.5 }}>{product.tagline}</span>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", paddingTop: "20px" }}>
                  <span style={{ fontFamily: "var(--font-label)", fontSize: "18px", color: "var(--color-crimson)", fontWeight: 400 }}>{product.currency}{product.price}</span>
                  <Link href={`/products/${product.slug}`}>
                    <button style={{
                      fontFamily: "var(--font-label)",
                      fontSize: "10px",
                      letterSpacing: "0.15em",
                      color: "var(--color-crimson)",
                      background: "transparent",
                      border: "1px solid rgba(122,20,20,0.3)",
                      padding: "10px 16px",
                      borderRadius: "2px",
                      cursor: "pointer",
                      minHeight: "40px",
                      transition: "all 0.3s ease",
                    }} className="hover-fill-btn">VIEW</button>
                  </Link>
                </div>
                <button
                  onClick={() => addItem({
                    productSlug: product.slug,
                    productName: product.name,
                    variantId: product.variants[0].id,
                    variantName: product.variants[0].name,
                    variantColor: product.variants[0].color,
                    price: product.price,
                    currency: product.currency,
                    weight: product.weight,
                  })}
                  style={{
                    width: "100%",
                    minHeight: "44px",
                    background: "var(--color-charcoal)",
                    color: "var(--color-gold-pale)",
                    border: "none",
                    borderRadius: "2px",
                    fontFamily: "var(--font-label)",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    cursor: "pointer",
                    marginTop: "12px",
                    transition: "background 0.3s",
                  }}
                  className="hover-bg-crimson"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .products-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 24px; max-width: 1200px; margin: 0 auto; }
        .product-card:hover .product-img-wrapper { transform: translateY(-8px); }
        .hover-fill-btn:hover { background: var(--color-crimson) !important; color: var(--color-cream) !important; }
        .hover-bg-crimson:hover { background: var(--color-crimson) !important; }
        @media (min-width: 768px) { .products-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; } }
        @media (min-width: 1024px) {
          .products-grid { grid-template-columns: repeat(3, 1fr); }
          section:has(.products-grid) { padding: 80px 80px 120px !important; }
        }
      `}</style>
    </>
  );
}
