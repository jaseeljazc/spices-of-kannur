"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import { ScrollReveal, StaggerReveal, StaggerChild } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { KannurSkyline, KannurFortArch, MehndiDivider, WavePattern, WheatSheafIcon, LeafIcon, MortarPestleIcon } from "@/lib/svgs";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  { year: "2001", event: "Began his journey studying Electronics and Communication, navigating entrance exams and building early resilience." },
  { year: "2008", event: "Started a successful IT career in Dubai, where extensive travel sparked a deep passion for discovering global cuisines." },
  { year: "2015", event: "Participated in 'Dhe Chef', a turning point that gave him the confidence to transition fully into the culinary world." },
  { year: "2016", event: "Received the prestigious honour of setting up a restaurant for the Indian Navy, serving national Defence Ministers." },
  { year: "2023", event: "Stepped forward independently to build his own culinary identity, rooting his craft in authentic Kannur traditions." },
];

const brandValues = [
  { icon: <WheatSheafIcon className="w-12 h-12" />, title: "Heritage", desc: "Every blend traces back to a Malabar kitchen, a grandmother's hand, and a wedding feast that lingered for days." },
  { icon: <LeafIcon className="w-12 h-12" />, title: "Purity", desc: "No artificial colours, no preservatives, no shortcuts. Just spice — the way it was always meant to be." },
  { icon: <MortarPestleIcon className="w-12 h-12" />, title: "Craft", desc: "Stone-ground on traditional chakki, blended in small batches, packed within 48 hours of grinding." },
];

export function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);

  useGSAP(() => {
    gsap.fromTo(lineRef.current,
      { strokeDasharray: "1000", strokeDashoffset: "1000" },
      {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      }
    );
  }, { scope: ref });

  return (
    <section ref={ref} style={{ background: "var(--color-beige)", padding: "96px 16px", position: "relative" }} id="timeline">
      <ScrollReveal style={{ textAlign: "center", marginBottom: "64px" } as React.CSSProperties}>
        <p style={{ fontFamily: "var(--font-label)", fontSize: "11px", letterSpacing: "0.25em", color: "var(--color-crimson)", marginBottom: "12px" }}>THE JOURNEY</p>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(32px, 6vw, 48px)", color: "var(--color-charcoal)", margin: 0, fontWeight: 400 }}>Five Decades of Flavour</h2>
      </ScrollReveal>

      <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
        {/* Animated timeline line */}
        <svg style={{ position: "absolute", left: "16px", top: 0, width: "2px", height: "100%", overflow: "visible" }}>
          <line
            ref={lineRef}
            x1="1" y1="0" x2="1" y2="100%"
            stroke="var(--color-gold)"
            strokeWidth="2"
          />
        </svg>

        <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
          {timeline.map((item, i) => (
            <ScrollReveal key={item.year} delay={i * 0.1}>
              <div style={{ display: "flex", gap: "32px", paddingLeft: "16px" }}>
                {/* Node */}
                <div style={{
                  width: 14, height: 14, borderRadius: "50%", background: "var(--color-crimson)",
                  border: "2px solid var(--color-gold)", flexShrink: 0, marginTop: "4px",
                  position: "relative", left: "-6px", boxShadow: "0 0 10px rgba(212,175,55,0.4)"
                }} />
                <div>
                  <span style={{
                    fontFamily: "var(--font-label)", fontSize: "14px",
                    color: "var(--color-gold-pale)", background: "var(--color-crimson)", padding: "4px 12px",
                    borderRadius: "2px", display: "inline-block", marginBottom: "12px", letterSpacing: "0.15em",
                  }}>{item.year}</span>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "16px",
                    color: "rgba(33,30,29,0.75)", lineHeight: 1.8, margin: 0, fontWeight: 300,
                  }}>{item.event}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StoryPage() {
  const titleContainer = useRef<HTMLHeadingElement>(null);
  
  useGSAP(() => {
    gsap.fromTo(titleContainer.current!.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: "power3.out", delay: 0.3 }
    );
  }, { scope: titleContainer });

  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: "100svh", background: "var(--color-charcoal)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <KannurFortArch className="absolute inset-0 w-full h-full" opacity={0.05} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "100px 24px 64px", maxWidth: "900px" }}>
          <ScrollReveal delay={0.2}>
            <p style={{ fontFamily: "var(--font-label)", fontSize: "11px", letterSpacing: "0.3em", color: "var(--color-gold)", marginBottom: "32px" }}>
              KANNUR · KERALA · INDIA
            </p>
          </ScrollReveal>
          <h1 ref={titleContainer} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 9vw, 85px)", fontWeight: 300, color: "var(--color-gold-pale)", lineHeight: 1.1, margin: "0 0 40px" }}>
            {["The", "Story", "Behind", "the", "Masala"].map((w, i) => (
              <span key={i} style={{ display: "inline-block", marginRight: "0.25em", opacity: 0 }}>{w}</span>
            ))}
          </h1>
          <ScrollReveal delay={0.9}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(20px, 4vw, 26px)", color: "rgba(251,249,246,0.6)", lineHeight: 1.7, margin: 0 }}>
              A family recipe. A city's heritage. A thousand wedding feasts.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <TimelineSection />
      <HeritageSection />
      <ChefSection />
      <ValuesSection />
    </>
  );
}

export function HeritageSection() {
  return (
    <section style={{ background: "var(--color-charcoal)", padding: "96px 16px" }} id="heritage">
        <div className="story-kannur-grid">
          <ScrollReveal>
            <KannurSkyline className="w-full" opacity={0.8} style={{ filter: "sepia(0.4) brightness(0.8)" } as React.CSSProperties} />
          </ScrollReveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", justifyContent: "center" }}>
            <ScrollReveal>
              <p style={{ fontFamily: "var(--font-label)", fontSize: "11px", letterSpacing: "0.25em", color: "var(--color-gold)", marginBottom: "12px" }}>ROOTED IN KANNUR</p>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(32px, 6vw, 48px)", color: "var(--color-gold-pale)", margin: "0 0 20px", fontWeight: 400 }}>The Malabar Table</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "rgba(251,249,246,0.6)", lineHeight: 1.8, margin: 0, fontWeight: 300 }}>
                Thalassery biriyani is not just a dish — it is a ceremony. The short-grain Khyma rice, the fragrant Malabar spices, the slow dum — every element is deliberate, honed over generations by the coastal kitchens of Kannur. It is the centrepiece of every Malabar wedding feast, served to hundreds, cooked in iron vessels over wood fire.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "rgba(251,249,246,0.5)", lineHeight: 1.8, margin: 0, fontWeight: 300 }}>
                Kannur's spice heritage stretches back to the Malabar trade routes — black pepper, cardamom, cloves shipped from its shores to the world. Chef Shameem grew up breathing this history, in kitchens that smelled of whole spices being dry-roasted on iron pans.
              </p>
            </ScrollReveal>
          </div>
        </div>
        <style>{`
          .story-kannur-grid { display: flex; flex-direction: column; gap: 64px; max-width: 1200px; margin: 0 auto; }
          @media (min-width: 1024px) {
            .story-kannur-grid { flex-direction: row !important; align-items: center; }
            .story-kannur-grid > * { flex: 1; }
          }
          @media (min-width: 1280px) {
            #heritage { padding: 140px 80px !important; }
          }
        `}</style>
      </section>
  );
}

export function ChefSection() {
  return (
    <section style={{ background: "var(--color-beige)", padding: "96px 16px" }}>
        <div className="chef-grid">
          <div style={{ position: "relative", maxWidth: "400px", margin: "0 auto" }}>
            <Image src="/images/chef2-image.jpeg" alt="Chef Shameem" width={400} height={480} className="chef-portrait" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '2px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))' }} />
            <ScrollReveal delay={0.4} style={{ position: "absolute", top: "12%", left: "-10%" }}>
              <span className="premium-badge">Master Chef</span>
            </ScrollReveal>
            <ScrollReveal delay={0.6} style={{ position: "absolute", top: "45%", right: "-12%" }}>
              <span className="premium-badge">Kannur Native</span>
            </ScrollReveal>
            <ScrollReveal delay={0.8} style={{ position: "absolute", bottom: "15%", left: "-10%" }}>
              <span className="premium-badge">20+ Years</span>
            </ScrollReveal>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", justifyContent: "center", paddingLeft: "4vw" }}>
            <ScrollReveal>
              <p style={{ fontFamily: "var(--font-label)", fontSize: "11px", letterSpacing: "0.25em", color: "var(--color-crimson)", marginBottom: "12px" }}>THE CHEF</p>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(32px, 6vw, 48px)", color: "var(--color-charcoal)", margin: "0 0 20px", fontWeight: 400 }}>Why Chef Shameem?</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "rgba(33,30,29,0.7)", lineHeight: 1.8, margin: "0 0 16px", fontWeight: 300 }}>
                Hailing from Kannur, a region celebrated for its rich culinary traditions, Chef Shameem's path to the kitchen was anything but ordinary. While working as an IT Consultant in Dubai for eight years, his extensive travels sparked a deep passion for global cuisines. He began recreating dishes at home, gradually refining his skills.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "rgba(33,30,29,0.7)", lineHeight: 1.8, margin: "0 0 16px", fontWeight: 300 }}>
                A strategic shift saw him focusing on restaurant clients in his IT role, gaining crucial insights into the food industry ecosystem. His defining moment came on Mazhavil Manorama's <strong>Dhe Chef</strong>. Encouraged by family, this experience gave him the confidence to leave his stable IT career and trust his culinary instincts.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "rgba(33,30,29,0.7)", lineHeight: 1.8, margin: 0, fontWeight: 300 }}>
                Today, his philosophy is rooted in authenticity. Drawing inspiration from Kannur and Turkish cuisines, he is known for innovative creations like his signature <strong>Dessert Pizza</strong>. What truly sets him apart is his unwavering commitment to purity—creating his own masalas from natural ingredients, entirely avoiding artificial or pre-made mixes.
              </p>
            </ScrollReveal>
          </div>
        </div>
        <style>{`
          .premium-badge {
            background: var(--color-charcoal);
            color: var(--color-gold-pale);
            font-family: var(--font-label);
            font-size: 11px;
            letter-spacing: 0.15em;
            padding: 10px 16px;
            border-radius: 2px;
            border: 1px solid rgba(212,175,55,0.3);
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            white-space: nowrap;
          }
          .chef-grid { display: flex; flex-direction: column; gap: 64px; max-width: 1200px; margin: 0 auto; }
          .chef-portrait { max-width: 400px; width: 100%; margin: 0 auto; display: block; }
          @media (min-width: 1024px) {
            .chef-grid { flex-direction: row !important; align-items: center; }
            .chef-grid > * { flex: 1; }
          }
          @media (min-width: 1280px) {
            section:has(.chef-grid) { padding: 140px 80px !important; }
          }
        `}</style>
      </section>
  );
}

export function ValuesSection() {
  return (
    <section style={{ background: "var(--color-charcoal)", padding: "96px 16px" }} id="values">
        <ScrollReveal style={{ textAlign: "center", marginBottom: "80px" } as React.CSSProperties}>
          <p style={{ fontFamily: "var(--font-label)", fontSize: "11px", letterSpacing: "0.25em", color: "var(--color-gold)", marginBottom: "12px" }}>WHAT WE STAND FOR</p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(32px, 6vw, 48px)", color: "var(--color-gold-pale)", margin: 0, fontWeight: 400 }}>Our Brand Values</h2>
        </ScrollReveal>
        <StaggerReveal className="values-grid" stagger={0.2}>
          {brandValues.map((v) => (
            <StaggerChild key={v.title}>
              <div style={{ border: "1px solid rgba(212,175,55,0.15)", borderRadius: "2px", padding: "48px 32px", display: "flex", flexDirection: "column", gap: "20px", background: "rgba(212,175,55,0.03)", height: "100%" }}>
                <div style={{ color: "var(--color-gold)" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "26px", color: "var(--color-gold-pale)", margin: 0, fontWeight: 400 }}>{v.title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "rgba(251,249,246,0.6)", lineHeight: 1.8, margin: 0, fontWeight: 300 }}>{v.desc}</p>
              </div>
            </StaggerChild>
          ))}
        </StaggerReveal>
        <style>{`
          .values-grid { display: flex; flex-direction: column; gap: 24px; max-width: 1200px; margin: 0 auto; }
          @media (min-width: 768px) { .values-grid { flex-direction: row !important; } .values-grid > * { flex: 1; } }
          @media (min-width: 1280px) { #values { padding: 140px 80px !important; } }
        `}</style>
      </section>
  );
}
