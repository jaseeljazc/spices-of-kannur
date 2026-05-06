"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ShoppingBag, X, Menu } from "lucide-react";
import { useCart } from "@/components/CartContext";

function IgIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function FbIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function YtIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLightPage, setIsLightPage] = useState(false);
  const { totalItems, openCart } = useCart();

  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Pages with light backgrounds dispatch 'nav-theme-change' to force dark links
  useEffect(() => {
    const check = () => setIsLightPage(document.body.dataset.navTheme === "light");
    check();
    window.addEventListener("nav-theme-change", check);
    return () => window.removeEventListener("nav-theme-change", check);
  }, []);

  // Derived: should we show dark colored nav items?
  const useDark = isLightPage || scrolled;

  // Lock body scroll when menu open
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useGSAP(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, { x: "0%", duration: 0.5, ease: "power3.out" });
      gsap.fromTo(
        linksRef.current!.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power3.out",
          delay: 0.2,
        },
      );
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power3.inOut",
      });
    }
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          transition: "all 0.3s ease",
          background: scrolled ? "rgba(251,249,246,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(212,175,55,0.2)"
            : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
          onClick={() => setMenuOpen(false)}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: "2px",
              background: "var(--color-charcoal)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              border: "1px solid rgba(212,175,55,0.3)",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/logo.jpeg"
              alt="Spices of Kannur Logo"
              width={42}
              height={42}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <div style={{ lineHeight: 1.1 }}>
            <div
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "12px",
                color: useDark ? "var(--color-charcoal)" : "var(--color-gold-pale)",
                letterSpacing: "0.15em",
              }}
            >
              SPICES OF KANNUR
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                color: "var(--color-gold)",
                letterSpacing: "0.25em",
                fontWeight: 400,
              }}
            >
            BY CHEF SHAMEEM
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div style={{ display: "none", gap: "8px" }} className="md-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "11px",
                color: useDark ? "var(--color-charcoal)" : "var(--color-gold-pale)",
                letterSpacing: "0.15em",
                textDecoration: "none",
                padding: "8px 16px",
                transition: "color 0.2s",
              }}
              className="nav-link-hover"
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            onClick={openCart}
            style={{
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: useDark ? "var(--color-charcoal)" : "var(--color-gold-pale)",
              position: "relative",
            }}
            aria-label={`Cart (${totalItems} items)`}
            id="cart-button"
            className="nav-link-hover"
          >
            <ShoppingBag size={22} />
            {totalItems > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: 6,
                  right: 4,
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background: "var(--color-crimson)",
                  color: "var(--color-cream)",
                  fontSize: "9px",
                  fontFamily: "var(--font-label)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              width: 44,
              height: 44,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
              color: (useDark && !menuOpen) ? "var(--color-charcoal)" : "var(--color-gold-pale)",
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            id="hamburger-btn"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      <div
        ref={menuRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999,
          background: "var(--color-charcoal)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          transform: "translateX(100%)",
          borderLeft: "1px solid rgba(212,175,55,0.2)",
        }}
      >
        <nav
          ref={linksRef}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            width: "100%",
          }}
        >
          {navLinks.map((link) => (
            <div key={link.href} style={{ width: "100%", textAlign: "center" }}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  fontFamily: "var(--font-heading)",
                  fontSize: "36px",
                  color: "var(--color-gold-pale)",
                  textDecoration: "none",
                  padding: "16px 0",
                  letterSpacing: "0.05em",
                  transition: "color 0.2s",
                  borderBottom: "1px solid rgba(212,175,55,0.15)",
                }}
              >
                {link.label}
              </Link>
            </div>
          ))}
          <div style={{ display: "flex", gap: "24px", marginTop: "40px" }}>
            {[
              { icon: <IgIcon />, label: "Instagram", href: "#" },
              { icon: <FbIcon />, label: "Facebook", href: "#" },
              { icon: <YtIcon />, label: "YouTube", href: "#" },
            ].map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                style={{
                  width: 56,
                  height: 56,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-gold)",
                  border: "1px solid rgba(212,175,55,0.3)",
                  borderRadius: "2px",
                }}
              >
                {icon}
              </a>
            ))}
          </div>
          <p
            style={{
              marginTop: "32px",
              fontFamily: "var(--font-display)",
              fontSize: "16px",
              color: "rgba(212,175,55,0.5)",
              letterSpacing: "0.05em",
            }}
          >
            Made with love in Kannur, Kerala
          </p>
        </nav>
      </div>

      <style>{`
        .nav-link-hover:hover { color: var(--color-crimson) !important; }
        @media (min-width: 768px) {
          .md-nav { display: flex !important; align-items: center; }
          #hamburger-btn { display: none !important; }
          .desktop-only { display: flex !important; }
          nav { padding: 0 40px !important; }
        }
        @media (min-width: 1280px) { nav { padding: 0 80px !important; } }
        .desktop-only { display: none; }
      `}</style>
    </>
  );
}
