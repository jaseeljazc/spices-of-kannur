"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MapPin, Phone, Mail, Loader2 } from "lucide-react";

function IgIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>; }
function FbIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>; }
function YtIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>; }
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MehndiDivider } from "@/lib/svgs";

function FormField({ label, type = "text", placeholder, name, required = true }: { label: string; type?: string; placeholder: string; name: string; required?: boolean }) {
  return (
    <div style={{ position: "relative" }}>
      <label htmlFor={name} style={{ fontFamily: "var(--font-label)", fontSize: "10px", letterSpacing: "0.15em", color: "rgba(33,30,29,0.5)", display: "block", marginBottom: "8px" }}>{label.toUpperCase()}</label>
      <input id={name} type={type} name={name} placeholder={placeholder} className="input-underline" required={required} style={{ color: "var(--color-charcoal)" }} />
    </div>
  );
}

export function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const toastRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(heroRef.current!.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, { scope: heroRef });

  useEffect(() => {
    if (sent && toastRef.current) {
      gsap.fromTo(toastRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [sent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); setTimeout(() => setSent(false), 4000); }, 1800);
  };

  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--color-charcoal)", padding: "120px 16px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div ref={heroRef} style={{ maxWidth: "800px", margin: "0 auto" }}>
          <MehndiDivider opacity={0.3} className="w-full mb-8" />
          <h1
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 8vw, 80px)", fontWeight: 300, color: "var(--color-gold-pale)", margin: "0 0 24px", lineHeight: 1.1 }}
          >Say Hello</h1>
          <p
            style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "rgba(251,249,246,0.6)", fontWeight: 300, maxWidth: "440px", margin: "0 auto" }}
          >Questions, wholesale enquiries, or just want to talk about biriyani — we'd love to hear from you.</p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: "var(--color-beige)", padding: "96px 16px 120px" }}>
        <div className="contact-layout">
          {/* Info section */}
          <div>
            <ScrollReveal>
              <p style={{ fontFamily: "var(--font-label)", fontSize: "11px", letterSpacing: "0.25em", color: "var(--color-crimson)", marginBottom: "32px" }}>GET IN TOUCH</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginBottom: "48px" }}>
                {[
                  { icon: <MapPin size={18} />, label: "Address", value: "Kannur, Kerala, India — 670 001" },
                  { icon: <Phone size={18} />, label: "Phone", value: "+91 97XXX XXXXX" },
                  { icon: <Mail size={18} />, label: "Email", value: "hello@chefshameem.com" },
                ].map(({ icon, label, value }) => (
                  <div key={label} style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                    <div style={{ width: 48, height: 48, background: "var(--color-crimson)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--color-gold-pale)" }}>{icon}</div>
                    <div>
                      <p style={{ fontFamily: "var(--font-label)", fontSize: "10px", letterSpacing: "0.15em", color: "rgba(33,30,29,0.5)", margin: "0 0 8px" }}>{label.toUpperCase()}</p>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "var(--color-charcoal)", margin: 0, fontWeight: 400 }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p style={{ fontFamily: "var(--font-label)", fontSize: "11px", letterSpacing: "0.25em", color: "var(--color-crimson)", marginBottom: "20px" }}>FOLLOW US</p>
              <div style={{ display: "flex", gap: "12px" }}>
                {[
                  { icon: <IgIcon />, label: "Instagram", href: "#" },
                  { icon: <FbIcon />, label: "Facebook", href: "#" },
                  { icon: <YtIcon />, label: "YouTube", href: "#" },
                ].map(({ icon, label, href }) => (
                  <a key={label} href={href} aria-label={label}
                    style={{
                      width: 52, height: 52,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: "var(--color-charcoal)", color: "var(--color-gold-pale)",
                      borderRadius: "2px", transition: "background 0.3s",
                    }}
                    className="hover-bg-crimson"
                  >{icon}</a>
                ))}
              </div>

              {/* Map placeholder */}
              <div style={{ marginTop: "48px", background: "var(--color-charcoal)", height: "240px", borderRadius: "2px", border: "1px solid rgba(212,175,55,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <MapPin size={28} color="var(--color-gold)" />
                  <p style={{ fontFamily: "var(--font-label)", fontSize: "11px", color: "var(--color-gold)", letterSpacing: "0.15em", marginTop: "12px" }}>KANNUR, KERALA</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Form */}
          <ScrollReveal delay={0.2}>
            <div style={{ background: "var(--color-cream)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "2px", padding: "48px 40px" }}>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 4vw, 36px)", color: "var(--color-charcoal)", margin: "0 0 40px", fontWeight: 400 }}>Send a Message</h2>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                <FormField label="Your Name" placeholder="Muhammed Jaseel" name="contact-name" />
                <FormField label="Email Address" type="email" placeholder="you@email.com" name="contact-email" />
                <div style={{ width: "100%" }}>
                  <label htmlFor="contact-subject" style={{ fontFamily: "var(--font-label)", fontSize: "10px", letterSpacing: "0.15em", color: "rgba(33,30,29,0.5)", display: "block", marginBottom: "8px" }}>SUBJECT</label>
                  <select id="contact-subject" name="contact-subject" className="input-underline" style={{ cursor: "pointer", color: "var(--color-charcoal)" }}>
                    <option value="">Select a subject</option>
                    <option value="order">Order Enquiry</option>
                    <option value="wholesale">Wholesale</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div style={{ width: "100%" }}>
                  <label htmlFor="contact-message" style={{ fontFamily: "var(--font-label)", fontSize: "10px", letterSpacing: "0.15em", color: "rgba(33,30,29,0.5)", display: "block", marginBottom: "8px" }}>MESSAGE</label>
                  <textarea
                    id="contact-message" name="contact-message" placeholder="Tell us something..." rows={5} required
                    className="input-underline"
                    style={{ resize: "none", lineHeight: "1.7", color: "var(--color-charcoal)" }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%", minHeight: "60px",
                    background: "var(--color-crimson)", color: "var(--color-cream)",
                    border: "none", borderRadius: "2px",
                    fontFamily: "var(--font-label)",
                    fontSize: "12px", letterSpacing: "0.2em",
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.7 : 1,
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                    transition: "opacity 0.3s",
                  }}
                  id="contact-submit"
                >
                  {loading ? (
                    <span style={{ display: "inline-flex", animation: "spin 1s linear infinite" }}>
                      <Loader2 size={16} />
                    </span>
                  ) : "SEND MESSAGE"}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Toast */}
      <div className="toast-container">
        {sent && (
          <div
            ref={toastRef}
            style={{
              background: "var(--color-charcoal)",
              border: "1px solid rgba(212,175,55,0.3)",
              borderRadius: "2px",
              padding: "20px 32px",
              color: "var(--color-gold-pale)",
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              fontWeight: 300,
              whiteSpace: "nowrap",
              pointerEvents: "auto",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
            }}
          >
            ✓ Message sent! We'll get back to you soon.
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin { 100% { transform: rotate(360deg); } }
        .hover-bg-crimson:hover { background: var(--color-crimson) !important; }
        .contact-layout { display: flex; flex-direction: column; gap: 64px; max-width: 1200px; margin: 0 auto; }
        @media (min-width: 1024px) {
          .contact-layout { flex-direction: row !important; align-items: flex-start; gap: 80px; }
          .contact-layout > * { flex: 1; }
          section:has(.contact-layout) { padding: 120px 80px !important; }
        }
      `}</style>
    </>
  );
}
