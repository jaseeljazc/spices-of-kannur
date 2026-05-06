"use client";
import Link from "next/link";
import { X, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EmptyBowlIcon } from "@/lib/svgs";
import { useCart } from "@/components/CartContext";

export function CartPage() {
  const { items, removeItem, updateQty, subtotal, totalItems } = useCart();
  const shipping = subtotal >= 499 ? 0 : 60;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div style={{ minHeight: "100svh", background: "var(--color-beige)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 16px" }}>
        <div style={{ marginBottom: "24px" }} className="animate-float">
          <EmptyBowlIcon className="w-24 h-16" />
        </div>
        <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(32px, 6vw, 40px)", color: "var(--color-charcoal)", margin: "0 0 16px", textAlign: "center", fontWeight: 400 }}>Your cart is empty.</h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "rgba(33,30,29,0.7)", margin: "0 0 40px", fontWeight: 300 }}>No spices yet — let's fix that.</p>
        <Link href="/products"><Button variant="primary" id="empty-cart-shop">DISCOVER SPICES</Button></Link>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100svh", background: "var(--color-beige)", paddingTop: "80px" }}>
      <div style={{ padding: "40px 16px", maxWidth: "1200px", margin: "0 auto" }}>
        <ScrollReveal>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(32px, 5vw, 48px)", color: "var(--color-charcoal)", margin: "0 0 8px", fontWeight: 400 }}>Your Cart</h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "rgba(33,30,29,0.6)", margin: "0 0 40px", fontWeight: 300 }}>{totalItems} item{totalItems !== 1 ? "s" : ""}</p>
        </ScrollReveal>

        <div className="cart-layout">
          {/* Items */}
          <div style={{ flex: "0 0 65%" }}>
            {items.map((item) => (
              <div
                key={`${item.productSlug}-${item.variantId}`}
                style={{
                  display: "flex", gap: "20px",
                  padding: "24px", marginBottom: "16px",
                  background: "var(--color-cream)", borderRadius: "2px",
                  border: "1px solid rgba(212,175,55,0.15)",
                  transition: "all 0.3s ease"
                }}
              >
                <div style={{ width: 80, height: 80, flexShrink: 0, background: item.variantColor + "15", border: `1px solid ${item.variantColor}30`, borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "10px", color: "var(--color-gold)", fontFamily: "var(--font-label)" }}>IMG</span>
                </div>
                <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
                  <p style={{ fontFamily: "var(--font-heading)", fontSize: "18px", color: "var(--color-charcoal)", margin: "0 0 4px", fontWeight: 700 }}>{item.productName}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(33,30,29,0.5)", margin: "0 0 16px", fontWeight: 300 }}>{item.variantName} · {item.weight}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
                    <div style={{ display: "flex", alignItems: "center", border: "1px solid rgba(212,175,55,0.3)", borderRadius: "2px" }}>
                      <button onClick={() => updateQty(item.productSlug, item.variantId, item.quantity - 1)} style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", color: "var(--color-crimson)" }} aria-label="Decrease"><Minus size={14} /></button>
                      <span style={{ width: 40, textAlign: "center", fontFamily: "var(--font-label)", fontSize: "14px", color: "var(--color-charcoal)" }}>{item.quantity}</span>
                      <button onClick={() => updateQty(item.productSlug, item.variantId, item.quantity + 1)} style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", color: "var(--color-crimson)" }} aria-label="Increase"><Plus size={14} /></button>
                    </div>
                    <span style={{ fontFamily: "var(--font-label)", fontSize: "16px", color: "var(--color-crimson)" }}>{item.currency}{(item.price * item.quantity).toLocaleString("en-IN")}</span>
                  </div>
                </div>
                <button onClick={() => removeItem(item.productSlug, item.variantId)} style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", color: "rgba(33,30,29,0.3)", alignSelf: "flex-start", flexShrink: 0, transition: "color 0.2s" }} aria-label="Remove item" onMouseOver={e => e.currentTarget.style.color="var(--color-crimson)"} onMouseOut={e => e.currentTarget.style.color="rgba(33,30,29,0.3)"}><X size={16} /></button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="cart-summary">
            <div style={{ background: "var(--color-charcoal)", borderRadius: "2px", padding: "32px 28px", border: "1px solid rgba(212,175,55,0.15)" }}>
              <p style={{ fontFamily: "var(--font-label)", fontSize: "11px", color: "var(--color-gold)", letterSpacing: "0.2em", marginBottom: "24px" }}>ORDER SUMMARY</p>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "rgba(251,249,246,0.6)", fontWeight: 300 }}>Subtotal</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--color-gold-pale)" }}>₹{subtotal.toLocaleString("en-IN")}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "24px" }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "rgba(251,249,246,0.6)", fontWeight: 300 }}>Shipping</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: shipping === 0 ? "var(--color-olive)" : "var(--color-gold-pale)" }}>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
              </div>
              <div style={{ borderTop: "1px solid rgba(212,175,55,0.15)", paddingTop: "20px", marginBottom: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-label)", fontSize: "13px", color: "var(--color-gold)", letterSpacing: "0.15em" }}>TOTAL</span>
                <span style={{ fontFamily: "var(--font-label)", fontSize: "20px", color: "var(--color-gold)" }}>₹{total.toLocaleString("en-IN")}</span>
              </div>
              <Link href="/checkout" style={{ display: "block" }}>
                <Button variant="primary" fullWidth id="cart-checkout">PROCEED TO CHECKOUT</Button>
              </Link>
              <Link href="/products">
                <p style={{ textAlign: "center", fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(212,175,55,0.5)", marginTop: "16px", cursor: "pointer", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color="var(--color-gold)"} onMouseOut={e => e.currentTarget.style.color="rgba(212,175,55,0.5)"}>Continue Shopping</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cart-layout { display: flex; flex-direction: column; gap: 32px; }
        .cart-summary { width: 100%; }
        @media (min-width: 1024px) {
          .cart-layout { flex-direction: row !important; align-items: flex-start; gap: 40px; }
          .cart-summary { flex: 0 0 360px; position: sticky; top: 100px; }
          section, div:has(.cart-layout) { padding: 40px 80px !important; }
        }
      `}</style>
    </div>
  );
}
