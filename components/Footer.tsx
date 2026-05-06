"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ChevronDown, MapPin, Phone, Mail } from "lucide-react";

function IgIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>; }
function FbIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>; }
function YtIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>; }
import { MehndiDivider, PalmTree } from "@/lib/svgs";

const footerSections = [
  {
    title: "Products",
    links: [
      { label: "Kannur Kalyana Biriyani Masala", href: "/products/kannur-kalyana-biriyani-masala" },
      { label: "Matghoot Masala", href: "/products/matghoot-masala" },
      { label: "All Products", href: "/products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "/story" },
      { label: "Heritage & Craft", href: "/story#heritage" },
      { label: "Brand Values", href: "/story#values" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Get in Touch", href: "/contact" },
      { label: "Wholesale Enquiry", href: "/contact" },
      { label: "Instagram", href: "#" },
    ],
  },
];

function AccordionSection({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (open) {
      gsap.to(contentRef.current, { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(iconRef.current, { rotate: 180, duration: 0.3, ease: "power2.out" });
    } else {
      gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.out" });
      gsap.to(iconRef.current, { rotate: 0, duration: 0.3, ease: "power2.out" });
    }
  }, [open]);

  return (
    <div style={{ borderBottom: "1px solid rgba(212,175,55,0.15)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px 0", background: "transparent", border: "none", cursor: "pointer", minHeight: "56px",
        }}
        aria-expanded={open}
      >
        <span style={{ fontFamily: "var(--font-label)", fontSize: "11px", color: "var(--color-gold)", letterSpacing: "0.15em", fontWeight: 400 }}>
          {title.toUpperCase()}
        </span>
        <span ref={iconRef} style={{ display: "inline-flex" }}>
          <ChevronDown size={16} color="rgba(212,175,55,0.5)" />
        </span>
      </button>

      <div ref={contentRef} style={{ height: 0, opacity: 0, overflow: "hidden" }}>
        <div style={{ paddingBottom: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
          {links.map((link) => (
            <Link
              key={link.label} href={link.href}
              style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(251,249,246,0.6)", textDecoration: "none", transition: "color 0.2s", minHeight: "32px", display: "flex", alignItems: "center" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer style={{ background: "var(--color-charcoal)", position: "relative", overflow: "hidden" }}>
      <PalmTree className="absolute" opacity={0.04} />

      {/* Mehndi divider at top */}
      <div style={{ width: "100%", padding: "0 16px" }}>
        <MehndiDivider opacity={0.3} className="w-full" />
      </div>

      <div style={{ padding: "64px 16px 0", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Brand section */}
        <div style={{ marginBottom: "56px" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <div style={{
              width: 48, height: 48, borderRadius: "2px",
              background: "var(--color-crimson)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <span style={{ color: "var(--color-gold)", fontSize: "18px", fontFamily: "var(--font-label)" }}>CS</span>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-label)", fontSize: "14px", color: "var(--color-gold-pale)", letterSpacing: "0.15em" }}>CHEF SHAMEEM</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "rgba(212,175,55,0.6)", letterSpacing: "0.25em" }}>KANNUR · KERALA</div>
            </div>
          </div>

          <p style={{ fontFamily: "var(--font-display)", fontSize: "18px", color: "rgba(251,249,246,0.6)", lineHeight: 1.7, maxWidth: "320px", fontWeight: 300 }}>
            Made with love in Kannur, Kerala. Heritage flavours, stone-ground for your table.
          </p>

          {/* Contact info */}
          <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { icon: <MapPin size={14} />, text: "Kannur, Kerala, India — 670 001" },
              { icon: <Phone size={14} />, text: "+91 97XXX XXXXX" },
              { icon: <Mail size={14} />, text: "hello@chefshameem.com" },
            ].map(({ icon, text }) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ color: "var(--color-gold)", flexShrink: 0 }}>{icon}</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(251,249,246,0.5)", fontWeight: 300 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Accordion Sections */}
        <div className="footer-accordion">
          {footerSections.map((section) => (
            <AccordionSection key={section.title} title={section.title} links={section.links} />
          ))}
        </div>

        {/* Desktop columns */}
        <div className="footer-columns" style={{ display: "none" }}>
          {footerSections.map((section) => (
            <div key={section.title}>
              <p style={{ fontFamily: "var(--font-label)", fontSize: "11px", color: "var(--color-gold)", letterSpacing: "0.2em", marginBottom: "24px" }}>
                {section.title.toUpperCase()}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {section.links.map((link) => (
                  <Link
                    key={link.label} href={link.href}
                    style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(251,249,246,0.6)", textDecoration: "none", transition: "color 0.2s", fontWeight: 300 }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div style={{ display: "flex", gap: "16px", margin: "48px 0 32px" }}>
          {[
            { icon: <IgIcon />, label: "Instagram", href: "#" },
            { icon: <FbIcon />, label: "Facebook", href: "#" },
            { icon: <YtIcon />, label: "YouTube", href: "#" },
          ].map(({ icon, label, href }) => (
            <a
              key={label} href={href} aria-label={label}
              style={{
                width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center",
                border: "1px solid rgba(212,175,55,0.2)", borderRadius: "2px", color: "rgba(212,175,55,0.6)", transition: "all 0.3s"
              }}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div style={{ borderTop: "1px solid rgba(212,175,55,0.15)", padding: "24px 0 40px", display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "rgba(251,249,246,0.4)", fontWeight: 300 }}>
            © 2025 Chef Shameem. All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "rgba(251,249,246,0.3)", fontWeight: 300 }}>
            FSSAI Lic. No. XXXXXXXXXXXXXXX
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .footer-accordion { display: none !important; }
          .footer-columns { display: grid !important; grid-template-columns: repeat(3, 1fr); gap: 64px; }
          footer > div:last-child { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-start; }
          footer > div:last-child > div:first-child { flex: 0 0 320px; }
          .footer-columns { flex: 1; justify-content: flex-end; padding-top: 16px; }
          footer > div:last-child > div:nth-child(4) { width: 100%; justify-content: flex-end; margin-top: -60px; margin-bottom: 40px; }
          footer > div:last-child > div:last-child { width: 100%; flex-direction: row; justify-content: space-between; }
        }
      `}</style>
    </footer>
  );
}
