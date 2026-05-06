"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Minus, Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal, StaggerReveal, StaggerChild } from "@/components/ui/ScrollReveal";
import { MehndiDivider } from "@/lib/svgs";
import type { Product } from "@/lib/products";
import { useCart } from "@/components/CartContext";

gsap.registerPlugin(ScrollTrigger);

const TABS = ["Description", "Nutrition", "How to Use", "Ingredients"] as const;
type Tab = typeof TABS[number];

const labelStory = [
  { n: 1, title: "Kannur Kotta", desc: "Part of the iconic Kannur Fort pattern — a symbol of the city's historical strength and Malabar heritage." },
  { n: 2, title: "Thalassery Biriyani", desc: "The steam motif indicates Kannur's world-famous Thalassery Biriyani — cooked slow, served at every celebration." },
  { n: 3, title: "Kadal Palam", desc: "The famous bridge that has witnessed generations of Kannur's coastal life and trade." },
  { n: 4, title: "The Sunset", desc: "Kannur's breathtaking Arabian Sea sunsets — the warmth that inspired these spices." },
  { n: 5, title: "Drive-In Beach", desc: "Where the sea breeze meets the spice trails of Malabar." },
  { n: 6, title: "Kannur City", desc: "The layered skyline — a tapestry of tradition, commerce, and coastal culture." },
  { n: 7, title: "Mehndi Design", desc: "Traditional Malabar mehndi — celebrating the wedding feasts this masala was born for." },
  { n: 8, title: "Palakkayam Thattu", desc: "Kannur's misty highland, where the wild spices of these blends are sourced." },
  { n: 9, title: "Natural Beauty", desc: "Lush palm groves, rivers, paddy fields — the land behind the flavour." },
  { n: 10, title: "Fishing Traditions", desc: "Kannur's rich seafood heritage — the ocean soul of every Malabar recipe." },
];

export function ProductDetailPage({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<Tab>("Description");
  const [addedState, setAddedState] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const { addItem } = useCart();
  
  const galleryRef = useRef<HTMLDivElement>(null);
  const tabContentRef = useRef<HTMLDivElement>(null);
  const qtyRef = useRef<HTMLSpanElement>(null);

  // GSAP image gallery transition
  useEffect(() => {
    gsap.fromTo(galleryRef.current, 
      { opacity: 0, scale: 0.98 }, 
      { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
    );
  }, [galleryIndex]);

  // GSAP tab transition
  useEffect(() => {
    gsap.fromTo(tabContentRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
    );
  }, [activeTab]);

  // GSAP quantity bump
  useEffect(() => {
    gsap.fromTo(qtyRef.current,
      { scale: 1.3 },
      { scale: 1, duration: 0.3, ease: "back.out(2)" }
    );
  }, [quantity]);

  const handleAddToCart = () => {
    addItem({
      productSlug: product.slug, productName: product.name,
      variantId: selectedVariant.id, variantName: selectedVariant.name,
      variantColor: selectedVariant.color, price: product.price,
      currency: product.currency, weight: product.weight,
    });
    setAddedState(true);
    setTimeout(() => setAddedState(false), 1800);
  };

  const galleryImages = [
    product.slug.includes("biriyani") ? "/images/biriyani-masala-product.jpeg" : "/images/matghoot-masala-product.jpeg",
    "/images/matghoot-unwrapped.jpeg",
    "/images/label-details.jpeg"
  ];

  return (
    <>
      <div style={{ paddingTop: "80px", background: "var(--color-beige)" }}>
        <div className="product-detail-layout">
          {/* Gallery - Sticky on desktop */}
          <div className="gallery-col" style={{ position: "sticky", top: "100px" }}>
            <div style={{ position: "relative", overflow: "hidden", background: "var(--color-cream)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "2px", padding: "40px 24px" }}>
              <div ref={galleryRef} style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "400px" }}>
                <Image 
                  src={galleryImages[galleryIndex]} 
                  alt={`${product.name} — View ${galleryIndex + 1}`} 
                  width={600} 
                  height={600} 
                  style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain', filter: galleryIndex === 0 ? 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))' : 'none' }} 
                />
              </div>
            </div>
            {/* Dot nav */}
            <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "24px" }}>
              {[0, 1, 2].map(i => (
                <button key={i} onClick={() => setGalleryIndex(i)}
                  style={{ width: i === galleryIndex ? 32 : 8, height: 8, borderRadius: "4px", background: i === galleryIndex ? "var(--color-charcoal)" : "rgba(33,30,29,0.2)", border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}
                  aria-label={`Gallery image ${i + 1}`} />
              ))}
            </div>
          </div>

          {/* Info Panel */}
          <div className="info-col">
            <span style={{ fontFamily: "var(--font-label)", fontSize: "10px", letterSpacing: "0.2em", color: "var(--color-gold)", marginBottom: "20px", display: "inline-block" }}>CHEF'S SIGNATURE</span>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(36px, 6vw, 56px)", color: "var(--color-charcoal)", margin: "0 0 16px", lineHeight: 1.1, fontWeight: 400 }}>{product.name}</h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "rgba(33,30,29,0.7)", fontWeight: 300, margin: "0 0 32px", lineHeight: 1.6, maxWidth: "500px" }}>{product.tagline}</p>

            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "32px", paddingBottom: "32px", borderBottom: "1px solid rgba(212,175,55,0.2)" }}>
              <span style={{ fontFamily: "var(--font-label)", fontSize: "32px", color: "var(--color-crimson)" }}>{product.currency}{product.price}</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(33,30,29,0.5)", fontWeight: 300 }}>/ {product.weight}</span>
            </div>

            {/* Variants */}
            <div style={{ marginBottom: "32px" }}>
              <p style={{ fontFamily: "var(--font-label)", fontSize: "10px", letterSpacing: "0.2em", color: "rgba(33,30,29,0.5)", marginBottom: "16px" }}>
                VARIANT — <span style={{ color: "var(--color-charcoal)" }}>{selectedVariant.name}</span>
              </p>
              <div style={{ display: "flex", gap: "12px" }}>
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    style={{
                      width: 44, height: 44, borderRadius: "50%",
                      background: v.color,
                      border: selectedVariant.id === v.id ? `2px solid var(--color-beige)` : "2px solid transparent",
                      outline: selectedVariant.id === v.id ? "2px solid var(--color-gold)" : "2px solid transparent",
                      outlineOffset: "2px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                    aria-label={v.name}
                    title={v.name}
                  />
                ))}
              </div>
            </div>

            {/* Quantity stepper */}
            <div style={{ display: "flex", alignItems: "center", gap: "0", border: "1px solid rgba(212,175,55,0.4)", borderRadius: "2px", width: "fit-content", marginBottom: "32px", background: "var(--color-cream)" }}>
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} style={{ width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", color: "var(--color-crimson)" }} aria-label="Decrease">
                <Minus size={16} />
              </button>
              <span
                ref={qtyRef}
                style={{ width: 48, textAlign: "center", fontFamily: "var(--font-label)", fontSize: "16px", color: "var(--color-charcoal)", display: "inline-block" }}
              >{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)} style={{ width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", color: "var(--color-crimson)" }} aria-label="Increase">
                <Plus size={16} />
              </button>
            </div>

            {/* Desktop CTAs */}
            <div className="desktop-ctas" style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "400px" }}>
              <button
                onClick={handleAddToCart}
                style={{
                  width: "100%", minHeight: "60px",
                  background: addedState ? "var(--color-olive)" : "var(--color-charcoal)",
                  color: "var(--color-gold-pale)", border: "none", borderRadius: "2px",
                  fontFamily: "var(--font-label)",
                  fontSize: "12px", letterSpacing: "0.2em", cursor: "pointer",
                  transition: "background 0.3s ease",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                }}
                id="add-to-cart-btn"
              >
                {addedState ? <><Check size={16} /> ADDED TO CART</> : "ADD TO CART"}
              </button>
              <Button variant="outline-gold" fullWidth id="buy-now-btn">BUY NOW</Button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <section style={{ padding: "40px 16px", background: "var(--color-cream)", borderTop: "1px solid rgba(212,175,55,0.15)", borderBottom: "1px solid rgba(212,175,55,0.15)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="scrollbar-hide" style={{ display: "flex", gap: "24px", overflowX: "auto", borderBottom: "1px solid rgba(212,175,55,0.2)", marginBottom: "40px" }}>
              {TABS.map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  style={{
                    padding: "16px 0", minHeight: "56px",
                    background: "transparent", border: "none",
                    borderBottom: `2px solid ${activeTab === tab ? "var(--color-crimson)" : "transparent"}`,
                    color: activeTab === tab ? "var(--color-crimson)" : "rgba(33,30,29,0.4)",
                    fontFamily: "var(--font-label)", fontSize: "12px",
                    letterSpacing: "0.15em", cursor: "pointer", whiteSpace: "nowrap",
                    transition: "color 0.3s ease, border-color 0.3s ease",
                  }}
                >{tab.toUpperCase()}</button>
              ))}
            </div>

            <div ref={tabContentRef} style={{ maxWidth: "800px", minHeight: "200px" }}>
              {activeTab === "Description" && (
                <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "rgba(33,30,29,0.8)", lineHeight: 1.8, margin: 0, fontWeight: 300 }}>{product.description}</p>
              )}
              {activeTab === "Nutrition" && (
                <div>
                  <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid rgba(212,175,55,0.2)" }} className="nutrition-table">
                    <tbody>
                      {Object.entries(product.nutrition).map(([k, v]) => (
                        <tr key={k} style={{ borderBottom: "1px solid rgba(212,175,55,0.1)" }}>
                          <td style={{ padding: "16px 20px", fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(33,30,29,0.7)", fontWeight: 400, borderLeft: "4px solid var(--color-gold)", textTransform: "capitalize" }}>
                            {k.replace(/([A-Z])/g, " $1").trim()}
                          </td>
                          <td style={{ padding: "16px 20px", fontFamily: "var(--font-label)", fontSize: "14px", color: "var(--color-charcoal)", textAlign: "right" }}>{v}</td>
                        </tr>
                      ))}
                      <tr>
                        <td colSpan={2} style={{ padding: "16px 20px", fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--color-crimson)", background: "rgba(212,175,55,0.05)" }}>Usage: {product.usage} of meat / rice</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              {activeTab === "How to Use" && (
                <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "rgba(33,30,29,0.8)", lineHeight: 1.8, margin: 0, fontWeight: 300 }}>{product.howToUse}</p>
              )}
              {activeTab === "Ingredients" && (
                <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "rgba(33,30,29,0.8)", lineHeight: 1.8, margin: 0, fontWeight: 300 }}>{product.ingredients}</p>
              )}
            </div>
          </div>
        </section>

        {/* Label Story */}
        <section style={{ background: "var(--color-charcoal)", padding: "120px 16px" }}>
          <ScrollReveal style={{ textAlign: "center", marginBottom: "80px" } as React.CSSProperties}>
            <MehndiDivider opacity={0.3} className="w-full mb-8" />
            <p style={{ fontFamily: "var(--font-label)", fontSize: "11px", letterSpacing: "0.25em", color: "var(--color-gold)", marginBottom: "12px" }}>PACKAGING STORY</p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(32px, 6vw, 48px)", color: "var(--color-gold-pale)", margin: "0 0 16px", fontWeight: 400 }}>The Story Behind the Label</h2>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(18px, 4vw, 24px)", color: "rgba(251,249,246,0.6)", margin: 0 }}>Every element of our packaging is a love letter to Kannur.</p>
          </ScrollReveal>

          <StaggerReveal className="label-story-grid" stagger={0.1}>
            {labelStory.map((item) => (
              <StaggerChild key={item.n}>
                <div style={{ display: "flex", gap: "20px", padding: "32px", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "2px", background: "rgba(212,175,55,0.03)", height: "100%" }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: "var(--color-crimson)", color: "var(--color-gold)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-label)", fontSize: "14px",
                    flexShrink: 0, border: "1px solid rgba(212,175,55,0.3)"
                  }}>{item.n}</div>
                  <div>
                    <p style={{ fontFamily: "var(--font-label)", fontSize: "13px", color: "var(--color-gold)", letterSpacing: "0.15em", margin: "0 0 10px" }}>{item.title.toUpperCase()}</p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "rgba(251,249,246,0.7)", lineHeight: 1.7, margin: 0, fontWeight: 300 }}>{item.desc}</p>
                  </div>
                </div>
              </StaggerChild>
            ))}
          </StaggerReveal>

          {/* Packaging callouts */}
          <div className="packaging-callouts" style={{ marginTop: "64px" }}>
            {[
              { label: "01", title: "See-Through Slit", desc: "A slit on the label lets you see the masala inside the bottle through the design." },
              { label: "02", title: "Auto-Split Punch", desc: "A punch on the extension splits automatically when opening the top." },
            ].map((item) => (
              <ScrollReveal key={item.label}>
                <div style={{ border: "1px solid rgba(212,175,55,0.2)", borderRadius: "2px", padding: "40px 32px", background: "rgba(212,175,55,0.05)" }}>
                  <span style={{ fontFamily: "var(--font-label)", fontSize: "32px", color: "rgba(212,175,55,0.2)", display: "block", marginBottom: "12px" }}>{item.label}</span>
                  <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "24px", color: "var(--color-gold-pale)", margin: "0 0 12px", fontWeight: 400 }}>{item.title}</h4>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "rgba(251,249,246,0.6)", lineHeight: 1.7, margin: 0, fontWeight: 300 }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>

      {/* Sticky Bottom Bar (mobile only) */}
      <div className="sticky-bar">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", height: "100%" }}>
          <div>
            <p style={{ fontFamily: "var(--font-label)", fontSize: "20px", color: "var(--color-gold)", margin: 0 }}>{product.currency}{product.price}</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "rgba(251,249,246,0.5)", margin: 0, fontWeight: 300 }}>/ {product.weight}</p>
          </div>
          <button onClick={handleAddToCart}
            style={{
              background: addedState ? "var(--color-olive)" : "var(--color-crimson)",
              color: "var(--color-gold-pale)", border: "none",
              padding: "0 32px", borderRadius: "2px",
              fontFamily: "var(--font-label)",
              fontSize: "11px", letterSpacing: "0.15em",
              cursor: "pointer", height: "48px",
              transition: "background 0.3s",
            }}
            id="sticky-add-to-cart"
          >
            {addedState ? "✓ ADDED" : "ADD TO CART"}
          </button>
        </div>
      </div>

      <style>{`
        .product-detail-layout { display: flex; flex-direction: column; padding: 48px 16px 80px; gap: 48px; max-width: 1300px; margin: 0 auto; }
        .gallery-col { width: 100%; }
        .info-col { width: 100%; }
        .desktop-ctas { display: flex !important; }
        .sticky-bar { 
          position: fixed; bottom: 0; left: 0; right: 0; 
          height: 80px; background: var(--color-charcoal);
          border-top: 1px solid rgba(212,175,55,0.2);
          z-index: 100; padding-bottom: env(safe-area-inset-bottom, 0);
        }
        .label-story-grid { display: flex; flex-direction: column; gap: 20px; max-width: 1100px; margin: 0 auto; }
        .packaging-callouts { display: flex; flex-direction: column; gap: 24px; max-width: 1100px; margin: 64px auto 0; }
        @media (min-width: 1024px) {
          .product-detail-layout { flex-direction: row !important; padding: 80px !important; align-items: start; gap: 80px; }
          .gallery-col { flex: 0 0 50%; }
          .info-col { flex: 1; padding-top: 20px; }
          .sticky-bar { display: none !important; }
          .label-story-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
          .packaging-callouts { flex-direction: row !important; }
          .packaging-callouts > * { flex: 1; }
          section:has(.label-story-grid) { padding: 140px 80px !important; }
        }
        @media (max-width: 1023px) {
          body { padding-bottom: 80px; }
        }
      `}</style>
    </>
  );
}
