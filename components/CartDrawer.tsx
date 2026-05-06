"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";
import { Button } from "@/components/ui/Button";

export function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQty, subtotal, totalItems } = useCart();
  const [shouldRender, setShouldRender] = useState(false);
  
  const backdropRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      if (shouldRender) {
        // Animate out
        const tl = gsap.timeline({ onComplete: () => setShouldRender(false) });
        tl.to(drawerRef.current, { y: "100%", duration: 0.35, ease: "power2.in" }, 0);
        tl.to(backdropRef.current, { opacity: 0, duration: 0.3 }, 0);
      }
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && shouldRender) {
      // Animate in
      gsap.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      
      // Check if mobile or desktop (responsive drawer)
      const isDesktop = window.innerWidth >= 768;
      if (isDesktop) {
        gsap.fromTo(drawerRef.current, { x: "100%", y: "0%" }, { x: "0%", duration: 0.4, ease: "power3.out" });
      } else {
        gsap.fromTo(drawerRef.current, { y: "100%", x: "0%" }, { y: "0%", duration: 0.4, ease: "power3.out" });
      }
    }
  }, [isOpen, shouldRender]);

  const shipping = subtotal >= 499 ? 0 : 60;
  const total = subtotal + shipping;

  if (!shouldRender) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={closeCart}
        style={{
          position: "fixed", inset: 0, zIndex: 1100, background: "rgba(0,0,0,0.6)",
        }}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        style={{
          position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1101,
          background: "var(--color-charcoal)", borderTopLeftRadius: "2px", borderTopRightRadius: "2px",
          maxHeight: "90dvh", display: "flex", flexDirection: "column", overflow: "hidden",
          border: "1px solid rgba(212,175,55,0.2)", borderBottom: "none"
        }}
        className="cart-drawer-responsive"
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px", borderBottom: "1px solid rgba(212,175,55,0.15)", flexShrink: 0, background: "rgba(212,175,55,0.03)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <ShoppingBag size={20} color="var(--color-gold)" />
            <span style={{ fontFamily: "var(--font-label)", fontSize: "13px", color: "var(--color-gold)", letterSpacing: "0.15em" }}>YOUR CART</span>
            {totalItems > 0 && (
              <span style={{ background: "var(--color-crimson)", color: "var(--color-cream)", fontSize: "10px", fontFamily: "var(--font-label)", padding: "2px 8px", borderRadius: "2px" }}>{totalItems}</span>
            )}
          </div>
          <button onClick={closeCart} style={{ width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "2px", cursor: "pointer", color: "var(--color-gold)", transition: "all 0.2s" }} aria-label="Close cart" className="hover-border-gold">
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "64px 0" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "24px", color: "rgba(212,175,55,0.6)", marginBottom: "24px" }}>Your cart is empty</p>
              <Link href="/products" onClick={closeCart}>
                <Button variant="outline-gold">Browse Products</Button>
              </Link>
            </div>
          ) : (
            <div>
              {items.map((item) => (
                <div key={`${item.productSlug}-${item.variantId}`} style={{ display: "flex", gap: "16px", paddingBottom: "20px", marginBottom: "20px", borderBottom: "1px solid rgba(212,175,55,0.15)" }}>
                  <div style={{ width: 72, height: 72, flexShrink: 0, background: `${item.variantColor}20`, border: `1px solid ${item.variantColor}30`, borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "10px", color: "var(--color-gold)", fontFamily: "var(--font-label)", letterSpacing: "0.1em" }}>IMG</span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontFamily: "var(--font-label)", fontSize: "12px", color: "var(--color-gold-pale)", letterSpacing: "0.05em", marginBottom: "4px", lineHeight: 1.3 }}>{item.productName}</p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "rgba(212,175,55,0.6)", marginBottom: "12px", fontWeight: 300 }}>{item.variantName} · {item.weight}</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0", border: "1px solid rgba(212,175,55,0.3)", borderRadius: "2px" }}>
                        <button onClick={() => updateQty(item.productSlug, item.variantId, item.quantity - 1)} style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", color: "var(--color-gold)" }} aria-label="Decrease quantity"><Minus size={14} /></button>
                        <span style={{ width: 32, textAlign: "center", fontFamily: "var(--font-label)", fontSize: "13px", color: "var(--color-gold-pale)" }}>{item.quantity}</span>
                        <button onClick={() => updateQty(item.productSlug, item.variantId, item.quantity + 1)} style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", color: "var(--color-gold)" }} aria-label="Increase quantity"><Plus size={14} /></button>
                      </div>
                      <span style={{ fontFamily: "var(--font-label)", fontSize: "14px", color: "var(--color-gold)", fontWeight: 400 }}>{item.currency}{(item.price * item.quantity).toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.productSlug, item.variantId)} style={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: "none", cursor: "pointer", color: "rgba(212,175,55,0.5)", flexShrink: 0, alignSelf: "flex-start", transition: "color 0.2s" }} aria-label={`Remove ${item.productName}`} onMouseOver={e => e.currentTarget.style.color="var(--color-crimson)"} onMouseOut={e => e.currentTarget.style.color="rgba(212,175,55,0.5)"}><X size={16} /></button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Summary */}
        {items.length > 0 && (
          <div style={{ padding: "24px", borderTop: "1px solid rgba(212,175,55,0.15)", flexShrink: 0, background: "var(--color-charcoal)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(251,249,246,0.6)", fontWeight: 300 }}>Subtotal</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--color-gold-pale)" }}>₹{subtotal.toLocaleString("en-IN")}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(251,249,246,0.6)", fontWeight: 300 }}>Shipping</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: shipping === 0 ? "var(--color-olive)" : "var(--color-gold-pale)" }}>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
            </div>
            {shipping > 0 && (
              <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "rgba(212,175,55,0.6)", marginBottom: "16px", fontWeight: 300 }}>Free shipping on orders above ₹499</p>
            )}
            <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "16px", borderTop: "1px solid rgba(212,175,55,0.15)", marginBottom: "20px", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-label)", fontSize: "13px", color: "var(--color-gold)", letterSpacing: "0.15em" }}>TOTAL</span>
              <span style={{ fontFamily: "var(--font-label)", fontSize: "18px", color: "var(--color-gold)" }}>₹{total.toLocaleString("en-IN")}</span>
            </div>
            <Link href="/checkout" onClick={closeCart} style={{ display: "block" }}>
              <Button variant="primary" fullWidth id="cart-checkout-btn">PROCEED TO CHECKOUT</Button>
            </Link>
            <Link href="/cart" onClick={closeCart}>
              <p style={{ textAlign: "center", fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(212,175,55,0.6)", marginTop: "16px", cursor: "pointer", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color="var(--color-gold)"} onMouseOut={e => e.currentTarget.style.color="rgba(212,175,55,0.6)"}>View Full Cart</p>
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .hover-border-gold:hover { border-color: var(--color-gold) !important; color: var(--color-gold-pale) !important; }
        @media (min-width: 768px) {
          .cart-drawer-responsive {
            left: auto !important; right: 0 !important; bottom: 0 !important; top: 0 !important;
            width: 460px !important; max-height: 100dvh !important;
            border-radius: 0 !important; border-top-left-radius: 0 !important;
            border-left: 1px solid rgba(212,175,55,0.2) !important;
          }
        }
      `}</style>
    </>
  );
}
