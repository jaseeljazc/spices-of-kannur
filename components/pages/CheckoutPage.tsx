"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Check, CreditCard, Smartphone, Banknote } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MehndiDivider } from "@/lib/svgs";
import { useCart } from "@/components/CartContext";

type Step = 1 | 2 | 3;

const STEPS = ["Delivery", "Payment", "Confirm"] as const;

const PAYMENT_OPTIONS = [
  { id: "upi", icon: <Smartphone size={20} />, label: "UPI", sub: "Pay via any UPI app" },
  { id: "card", icon: <CreditCard size={20} />, label: "Credit / Debit Card", sub: "Visa, Mastercard, Rupay" },
  { id: "cod", icon: <Banknote size={20} />, label: "Cash on Delivery", sub: "Pay when delivered" },
];

function StepIndicator({ current }: { current: Step }) {
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    STEPS.forEach((_, i) => {
      if (i < STEPS.length - 1 && lineRefs.current[i]) {
        gsap.to(lineRefs.current[i], {
          width: current > i + 1 ? "100%" : "0%",
          duration: 0.4,
          ease: "power2.out"
        });
      }
    });
  }, [current]);

  return (
    <div style={{ display: "flex", alignItems: "center", padding: "24px 16px", gap: "0", maxWidth: "500px", margin: "0 auto", width: "100%" }}>
      {STEPS.map((s, i) => {
        const stepNum = (i + 1) as Step;
        const done = current > stepNum;
        const active = current === stepNum;
        return (
          <div key={s} style={{ display: "flex", alignItems: "center", flex: i < STEPS.length - 1 ? 1 : undefined }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
              <div style={{
                width: 32, height: 32, borderRadius: "50%",
                background: done ? "var(--color-olive)" : active ? "var(--color-crimson)" : "transparent",
                border: `2px solid ${done || active ? "transparent" : "rgba(212,175,55,0.3)"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.4s ease",
              }}>
                {done ? <Check size={14} color="var(--color-cream)" /> : (
                  <span style={{ fontFamily: "var(--font-label)", fontSize: "11px", color: active ? "var(--color-gold-pale)" : "rgba(33,30,29,0.4)" }}>{stepNum}</span>
                )}
              </div>
              <span style={{ fontFamily: "var(--font-label)", fontSize: "9px", letterSpacing: "0.15em", color: active ? "var(--color-crimson)" : "rgba(33,30,29,0.4)", whiteSpace: "nowrap" }}>{s.toUpperCase()}</span>
            </div>
            {i < STEPS.length - 1 && (
              <div style={{ flex: 1, height: 1, background: "rgba(212,175,55,0.2)", margin: "0 8px", position: "relative", bottom: "10px", overflow: "hidden" }}>
                <div
                  ref={el => { lineRefs.current[i] = el; }}
                  style={{ height: "100%", background: "var(--color-crimson)", width: current > stepNum ? "100%" : "0%" }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function FormField({ label, type = "text", placeholder, name }: { label: string; type?: string; placeholder: string; name: string }) {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <label style={{ fontFamily: "var(--font-label)", fontSize: "10px", letterSpacing: "0.15em", color: "rgba(33,30,29,0.5)", display: "block", marginBottom: "8px" }}>{label.toUpperCase()}</label>
      <input type={type} name={name} placeholder={placeholder} className="input-underline" required style={{ color: "var(--color-charcoal)" }} />
    </div>
  );
}

export function CheckoutPage() {
  const [step, setStep] = useState<Step>(1);
  const [payMethod, setPayMethod] = useState("upi");
  const { items, subtotal } = useCart();
  const total = subtotal + (subtotal >= 499 ? 0 : 60);
  
  const stepContainer = useRef<HTMLDivElement>(null);
  const checkCircle = useRef<SVGCircleElement>(null);
  const checkPath = useRef<SVGPathElement>(null);

  // Animate step content on change
  useEffect(() => {
    if (stepContainer.current) {
      gsap.fromTo(stepContainer.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
    
    // SVG drawing for step 3
    if (step === 3) {
      if (checkCircle.current) {
        gsap.fromTo(checkCircle.current, 
          { strokeDasharray: "300", strokeDashoffset: "300" },
          { strokeDashoffset: 0, duration: 0.8, ease: "power2.out" }
        );
      }
      if (checkPath.current) {
        gsap.fromTo(checkPath.current,
          { strokeDasharray: "100", strokeDashoffset: "100" },
          { strokeDashoffset: 0, duration: 0.5, delay: 0.6, ease: "power2.out" }
        );
      }
    }
  }, [step]);

  return (
    <div style={{ minHeight: "100svh", background: "var(--color-beige)", paddingTop: "80px" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 16px 80px" }}>
        <StepIndicator current={step} />

        <div ref={stepContainer} style={{ marginTop: "32px" }}>
          {step === 1 && (
            <div>
              <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 5vw, 40px)", color: "var(--color-charcoal)", margin: "0 0 40px", fontWeight: 400 }}>Delivery Details</h1>
              <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                <div className="form-row">
                  <FormField label="Full Name" placeholder="Muhammed Jaseel" name="name" />
                  <FormField label="Phone" type="tel" placeholder="+91 98765 43210" name="phone" />
                </div>
                <FormField label="Email" type="email" placeholder="you@email.com" name="email" />
                <FormField label="Address Line 1" placeholder="House No, Street, Colony" name="address1" />
                <FormField label="Address Line 2" placeholder="Landmark (optional)" name="address2" />
                <div className="form-row">
                  <FormField label="Pincode" placeholder="670001" name="pincode" />
                  <FormField label="City" placeholder="Kannur" name="city" />
                </div>
                <FormField label="State" placeholder="Kerala" name="state" />
                <div style={{ marginTop: "16px" }}>
                  <Button variant="primary" fullWidth type="submit" id="delivery-continue">CONTINUE TO PAYMENT</Button>
                </div>
              </form>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 5vw, 40px)", color: "var(--color-charcoal)", margin: "0 0 40px", fontWeight: 400 }}>Choose Payment</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
                {PAYMENT_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setPayMethod(opt.id)}
                    style={{
                      display: "flex", alignItems: "center", gap: "20px",
                      padding: "24px", borderRadius: "2px",
                      border: `2px solid ${payMethod === opt.id ? "var(--color-crimson)" : "rgba(212,175,55,0.2)"}`,
                      background: payMethod === opt.id ? "rgba(122,20,20,0.03)" : "var(--color-cream)",
                      cursor: "pointer", textAlign: "left", width: "100%",
                      minHeight: "72px", transition: "all 0.3s ease",
                    }}
                    id={`pay-${opt.id}`}
                  >
                    <span style={{ color: payMethod === opt.id ? "var(--color-crimson)" : "rgba(33,30,29,0.4)" }}>{opt.icon}</span>
                    <div>
                      <p style={{ fontFamily: "var(--font-label)", fontSize: "13px", color: "var(--color-charcoal)", margin: 0, letterSpacing: "0.1em" }}>{opt.label}</p>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(33,30,29,0.5)", margin: "4px 0 0", fontWeight: 300 }}>{opt.sub}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Order summary */}
              <div style={{ background: "var(--color-charcoal)", borderRadius: "2px", padding: "32px", marginBottom: "32px" }}>
                {items.map((item) => (
                  <div key={`${item.productSlug}-${item.variantId}`} style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(251,249,246,0.7)", fontWeight: 300 }}>{item.productName} × {item.quantity}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--color-gold-pale)" }}>₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid rgba(212,175,55,0.15)", paddingTop: "16px", marginTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-label)", fontSize: "12px", color: "var(--color-gold)", letterSpacing: "0.15em" }}>TOTAL</span>
                  <span style={{ fontFamily: "var(--font-label)", fontSize: "20px", color: "var(--color-gold)" }}>₹{total.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px" }}>
                <button onClick={() => setStep(1)} style={{ flex: "0 0 auto", minHeight: "56px", padding: "0 24px", background: "transparent", border: "1px solid rgba(212,175,55,0.4)", color: "var(--color-crimson)", fontFamily: "var(--font-label)", fontSize: "11px", letterSpacing: "0.15em", cursor: "pointer", borderRadius: "2px", transition: "all 0.3s" }} className="hover-fill-btn">BACK</button>
                <Button variant="primary" fullWidth id="place-order" onClick={() => setStep(3)}>PLACE ORDER</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div style={{ textAlign: "center", padding: "64px 0" }}>
              <MehndiDivider opacity={0.4} className="w-full mb-12" />
              {/* Animated checkmark */}
              <svg viewBox="0 0 80 80" width="80" height="80" style={{ margin: "0 auto 32px" }}>
                <circle
                  ref={checkCircle}
                  cx="40" cy="40" r="36"
                  stroke="var(--color-gold)" strokeWidth="3" fill="none"
                />
                <path
                  ref={checkPath}
                  d="M24 40 L34 52 L56 28"
                  stroke="var(--color-crimson)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
              <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(32px, 6vw, 48px)", color: "var(--color-crimson)", margin: "0 0 12px", fontWeight: 400 }}>Order Confirmed!</h1>
              <p style={{ fontFamily: "var(--font-label)", fontSize: "12px", color: "rgba(33,30,29,0.5)", letterSpacing: "0.15em", margin: "0 0 40px" }}>
                ORDER #CS{Math.floor(100000 + Math.random() * 900000)}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "rgba(33,30,29,0.6)", lineHeight: 1.8, margin: "0 0 48px", maxWidth: "420px", marginLeft: "auto", marginRight: "auto", fontWeight: 300 }}>
                Thank you for your order. Your heritage spice blend is being prepared with care in Kannur. You'll receive a confirmation shortly.
              </p>
              <Link href="/products">
                <Button variant="outline-gold" id="order-continue-shopping">CONTINUE SHOPPING</Button>
              </Link>
              <MehndiDivider opacity={0.3} className="w-full mt-12" />
            </div>
          )}
        </div>
      </div>

      <style>{`
        .form-row { display: flex; flex-direction: column; gap: 32px; }
        .hover-fill-btn:hover { background: var(--color-crimson) !important; color: var(--color-cream) !important; border-color: var(--color-crimson) !important; }
        @media (min-width: 768px) { .form-row { flex-direction: row !important; } .form-row > * { flex: 1; } }
      `}</style>
    </div>
  );
}
