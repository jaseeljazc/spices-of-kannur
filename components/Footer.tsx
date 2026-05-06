"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MapPin, Mail, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function IgIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>; }
function FbIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>; }
function YtIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>; }


const navColumns = [
  {
    title: "Products",
    links: [
      { label: "Biriyani Masala", href: "/products/kannur-kalyana-biriyani-masala" },
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
    title: "Connect",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Wholesale Enquiry", href: "/contact" },
      { label: "Instagram", href: "#" },
    ],
  },
];

const socials = [
  { icon: <IgIcon />, label: "Instagram", href: "#" },
  { icon: <FbIcon />, label: "Facebook", href: "#" },
  { icon: <YtIcon />, label: "YouTube", href: "#" },
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const colsRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;


    // Headline words
    gsap.fromTo(headlineRef.current!.children,
      { opacity: 0, y: 50, skewY: 2 },
      {
        opacity: 1, y: 0, skewY: 0,
        duration: 1.1, stagger: 0.1, ease: "power4.out",
        scrollTrigger: { trigger: headlineRef.current, start: "top 90%" }
      }
    );

    // Columns stagger
    gsap.fromTo(colsRef.current!.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0,
        duration: 0.9, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: colsRef.current, start: "top 90%" }
      }
    );

    // Bottom bar
    gsap.fromTo(bottomRef.current,
      { opacity: 0, y: 16 },
      {
        opacity: 1, y: 0,
        duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: bottomRef.current, start: "top 96%" }
      }
    );

  }, { scope: footerRef });

  return (
    <footer ref={footerRef} style={{
      background: "var(--color-charcoal)",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Ghost watermark text */}
      <div aria-hidden style={{
        position: "absolute", bottom: "4%", right: "-1%",
        fontFamily: "var(--font-display)",
        fontSize: "clamp(70px, 16vw, 200px)",
        fontWeight: 300, color: "transparent",
        WebkitTextStroke: "1px rgba(201,168,76,0.05)",
        lineHeight: 1, pointerEvents: "none", userSelect: "none",
        letterSpacing: "-0.03em", whiteSpace: "nowrap",
      }}>
        MALABAR
      </div>

      {/* Top gradient rule */}
      <div style={{
        height: "1px",
        background: "linear-gradient(to right, transparent, rgba(201,168,76,0.35) 30%, rgba(201,168,76,0.35) 70%, transparent)",
      }} />


      {/* ── MAIN FOOTER BODY ── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "72px 24px 0" }}>

        {/* Editorial Headline */}
        <div ref={headlineRef} style={{
          display: "flex", flexWrap: "wrap", gap: "0.15em",
          marginBottom: "64px", overflow: "hidden",
        }}>
          {["The", "Soul", "of", "Malabar."].map((word, i) => (
            <span key={i} style={{
              display: "inline-block",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 6vw, 80px)",
              fontWeight: 300,
              color: i === 3 ? "var(--color-gold)" : "var(--color-gold-pale)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              opacity: 0,
            }}>
              {word}&nbsp;
            </span>
          ))}
        </div>

        {/* Main Grid: brand + nav columns */}
        <div ref={colsRef} className="footer-main-grid">

          {/* Brand column */}
          <div style={{ opacity: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{
                width: 48, height: 48, borderRadius: "2px",
                background: "var(--color-charcoal)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                border: "1px solid rgba(201,168,76,0.2)",
                overflow: "hidden",
              }}>
                <Image
                  src="/images/logo.jpeg"
                  alt="Spices of Kannur Logo"
                  width={48}
                  height={48}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-label)", fontSize: "11px", color: "var(--color-gold-pale)", letterSpacing: "0.2em" }}>SPICES OF KANNUR</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "9px", color: "rgba(201,168,76,0.45)", letterSpacing: "0.3em", marginTop: "2px" }}>BY CHEF SHAMEEM</div>
              </div>
            </div>

            <p style={{
              fontFamily: "var(--font-body)", fontWeight: 300,
              fontSize: "14px", color: "rgba(251,249,246,0.45)",
              lineHeight: 1.8, maxWidth: "260px", margin: "0 0 28px",
            }}>
              Stone-ground heritage spice blends from the kitchens of Kannur — crafted with zero preservatives.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { icon: <MapPin size={12} />, text: "Kannur, Kerala — 670 001" },
                { icon: <Mail size={12} />, text: "hello@spicesofkannur.com" },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "rgba(201,168,76,0.5)", flexShrink: 0 }}>{icon}</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "rgba(251,249,246,0.35)", fontWeight: 300 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.title} style={{ opacity: 0 }}>
              <p style={{
                fontFamily: "var(--font-label)", fontSize: "9px",
                letterSpacing: "0.3em", color: "var(--color-gold)",
                marginBottom: "24px", textTransform: "uppercase",
              }}>
                {col.title}
              </p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="footer-nav-link"
                    style={{
                      fontFamily: "var(--font-body)", fontSize: "14px",
                      color: "rgba(251,249,246,0.45)",
                      textDecoration: "none", fontWeight: 300,
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "11px 0",
                      borderBottom: "1px solid rgba(201,168,76,0.06)",
                      transition: "color 0.2s ease",
                    }}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={11} className="footer-arrow" style={{ opacity: 0, transition: "opacity 0.2s ease", flexShrink: 0 }} />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── BOTTOM BAR ── */}
        <div ref={bottomRef} style={{ opacity: 0, marginTop: "56px" }}>
          <div style={{
            height: "1px",
            background: "linear-gradient(to right, rgba(201,168,76,0.25), transparent)",
            marginBottom: "28px",
          }} />
          <div className="footer-bottom">
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <p style={{ fontFamily: "var(--font-label)", fontSize: "9px", letterSpacing: "0.2em", color: "rgba(201,168,76,0.35)", margin: 0 }}>
                © 2025 SPICES OF KANNUR. ALL RIGHTS RESERVED.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "rgba(251,249,246,0.2)", fontWeight: 300, margin: 0 }}>
                FSSAI Lic. No. XXXXXXXXXXXXXXX · Made with love in Kannur, Kerala
              </p>
            </div>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              {socials.map(({ icon, label, href }) => (
                <a key={label} href={href} aria-label={label} className="footer-social" style={{
                  width: 40, height: 40,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(201,168,76,0.4)",
                  border: "1px solid rgba(201,168,76,0.1)",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
          <div style={{ height: "36px" }} />
        </div>
      </div>

      <style>{`
        .culture-link:hover { color: var(--color-gold-pale) !important; }
        .footer-nav-link:hover { color: var(--color-gold-pale) !important; }
        .footer-nav-link:hover .footer-arrow { opacity: 1 !important; }
        .footer-social:hover {
          color: var(--color-gold) !important;
          border-color: rgba(201,168,76,0.35) !important;
          background: rgba(201,168,76,0.05) !important;
          transform: translateY(-2px);
        }

        .footer-main-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        @media (min-width: 640px) {
          .footer-main-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
          .footer-main-grid > *:first-child { grid-column: 1 / -1; }
        }

        @media (min-width: 1024px) {
          .footer-main-grid {
            grid-template-columns: 1.3fr 1fr 1fr 1fr;
            gap: 60px;
            align-items: start;
          }
          .footer-main-grid > *:first-child { grid-column: auto; }
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        @media (min-width: 1280px) {
          .footer-main-grid { padding: 0 56px; }
        }
      `}</style>
    </footer>
  );
}
