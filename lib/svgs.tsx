// All decorative SVG components for Spices of Kannur
// Usage: import { MehndiDivider, KannurSkyline, ... } from "@/lib/svgs"

export function MehndiDivider({ className = "", opacity = 0.3, style }: { className?: string; opacity?: number; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 1200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
      preserveAspectRatio="none"
    >
      <g fill="#C9A84C">
        {/* Center diamond */}
        <polygon points="600,8 610,20 600,32 590,20" />
        <polygon points="600,12 606,20 600,28 594,20" opacity={0.5} />
        {/* Repeating geometric pattern */}
        {Array.from({ length: 24 }).map((_, i) => {
          const x = 80 + i * 45;
          return (
            <g key={i}>
              <rect x={x} y={17} width={30} height={2} rx={1} opacity={0.6} />
              <circle cx={x + 15} cy={18} r={2} />
              <polygon points={`${x+15},10 ${x+19},18 ${x+15},26 ${x+11},18`} opacity={0.4} />
            </g>
          );
        })}
        {/* Side diamonds */}
        <polygon points="40,14 52,20 40,26 28,20" />
        <polygon points="1160,14 1172,20 1160,26 1148,20" />
        {/* Horizontal lines */}
        <rect x={0} y={19} width={20} height={1} opacity={0.4} />
        <rect x={1180} y={19} width={20} height={1} opacity={0.4} />
      </g>
    </svg>
  );
}

export function KannurFortArch({ className = "", opacity = 0.1, style }: { className?: string; opacity?: number; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 800 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      {/* Fort wall base */}
      <rect x={100} y={300} width={600} height={100} fill="#C9A84C" />
      {/* Battlements */}
      {Array.from({ length: 20 }).map((_, i) => (
        <rect key={i} x={100 + i * 30} y={270} width={20} height={30} fill="#C9A84C" />
      ))}
      {/* Main arch */}
      <path
        d="M320 300 Q320 180 400 160 Q480 180 480 300 Z"
        fill="#C9A84C"
      />
      {/* Arch opening */}
      <path
        d="M345 300 Q345 210 400 195 Q455 210 455 300 Z"
        fill="transparent"
        stroke="#C9A84C"
        strokeWidth={2}
      />
      {/* Tower left */}
      <rect x={150} y={200} width={70} height={100} fill="#C9A84C" />
      <rect x={145} y={180} width={80} height={20} fill="#C9A84C" />
      {Array.from({ length: 4 }).map((_, i) => (
        <rect key={i} x={145 + i * 20} y={165} width={14} height={15} fill="#C9A84C" />
      ))}
      {/* Tower right */}
      <rect x={580} y={200} width={70} height={100} fill="#C9A84C" />
      <rect x={575} y={180} width={80} height={20} fill="#C9A84C" />
      {Array.from({ length: 4 }).map((_, i) => (
        <rect key={i} x={575 + i * 20} y={165} width={14} height={15} fill="#C9A84C" />
      ))}
      {/* Flag */}
      <line x1={400} y1={160} x2={400} y2={100} stroke="#C9A84C" strokeWidth={2} />
      <polygon points="400,100 440,115 400,130" fill="#C9A84C" opacity={0.7} />
    </svg>
  );
}

export function KannurSkyline({ className = "", opacity = 0.07, style }: { className?: string; opacity?: number; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 1400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
      preserveAspectRatio="xMidYMax meet"
    >
      {/* Sea waves */}
      <path d="M0 260 Q100 240 200 260 Q300 280 400 260 Q500 240 600 260 Q700 280 800 260 Q900 240 1000 260 Q1100 280 1200 260 Q1300 240 1400 260 L1400 300 L0 300 Z" fill="#C9A84C" />
      <path d="M0 275 Q70 265 140 275 Q210 285 280 275 Q350 265 420 275 Q490 285 560 275 Q630 265 700 275 Q770 285 840 275 Q910 265 980 275 Q1050 285 1120 275 Q1190 265 1260 275 Q1330 285 1400 275 L1400 300 L0 300 Z" fill="#C9A84C" opacity={0.5} />

      {/* ── Biriyani pot (deg) ── */}
      {/* Large pot body */}
      <path d="M40 220 Q35 260 80 262 Q125 264 120 220 Z" fill="#C9A84C" />
      {/* Pot rim */}
      <rect x={33} y={215} width={90} height={10} rx={5} fill="#C9A84C" />
      {/* Lid */}
      <path d="M38 215 Q80 195 122 215 Z" fill="#C9A84C" />
      {/* Lid knob */}
      <circle cx={80} cy={194} r={6} fill="#C9A84C" />
      {/* Steam lines */}
      <path d="M58 190 Q55 175 58 162" stroke="#C9A84C" strokeWidth={2} fill="none" opacity={0.6} />
      <path d="M80 188 Q77 170 80 155" stroke="#C9A84C" strokeWidth={2} fill="none" opacity={0.6} />
      <path d="M102 190 Q99 175 102 162" stroke="#C9A84C" strokeWidth={2} fill="none" opacity={0.6} />
      {/* Pot handles */}
      <path d="M33 230 Q20 230 20 242 Q20 252 33 250" stroke="#C9A84C" strokeWidth={4} fill="none" />
      <path d="M122 230 Q135 230 135 242 Q135 252 122 250" stroke="#C9A84C" strokeWidth={4} fill="none" />

      {/* ── Pathiri / flat bread stack ── */}
      <ellipse cx={195} cy={255} rx={35} ry={6} fill="#C9A84C" />
      <ellipse cx={195} cy={248} rx={33} ry={5} fill="#C9A84C" opacity={0.8} />
      <ellipse cx={195} cy={241} rx={31} ry={5} fill="#C9A84C" opacity={0.6} />

      {/* ── Coconut tree 1 ── */}
      <line x1={290} y1={262} x2={286} y2={155} stroke="#C9A84C" strokeWidth={7} />
      {/* Trunk curve */}
      <path d="M286 262 Q278 220 290 155" stroke="#C9A84C" strokeWidth={6} fill="none" />
      {/* Fronds */}
      <path d="M290 158 Q255 130 228 148 Q255 138 290 158" fill="#C9A84C" />
      <path d="M290 158 Q310 118 340 128 Q312 125 290 158" fill="#C9A84C" />
      <path d="M290 158 Q268 112 278 88 Q278 112 290 158" fill="#C9A84C" />
      <path d="M290 158 Q318 125 308 98 Q305 124 290 158" fill="#C9A84C" />
      <path d="M290 158 Q240 145 222 162 Q242 148 290 158" fill="#C9A84C" opacity={0.7} />
      {/* Coconuts */}
      <circle cx={278} cy={168} r={8} fill="#C9A84C" opacity={0.8} />
      <circle cx={294} cy={165} r={7} fill="#C9A84C" opacity={0.8} />

      {/* ── Coconut tree 2 (leaning) ── */}
      <path d="M370 262 Q385 220 395 158" stroke="#C9A84C" strokeWidth={6} fill="none" />
      <path d="M395 162 Q360 138 335 152 Q360 142 395 162" fill="#C9A84C" />
      <path d="M395 162 Q418 125 448 132 Q420 128 395 162" fill="#C9A84C" />
      <path d="M395 162 Q375 115 384 92 Q384 115 395 162" fill="#C9A84C" />
      <circle cx={385} cy={172} r={7} fill="#C9A84C" opacity={0.8} />

      {/* ── Football / Soccer ball ── */}
      <circle cx={490} cy={240} r={28} fill="#C9A84C" />
      {/* Pentagon patches */}
      <path d="M490 215 L500 223 L496 235 L484 235 L480 223 Z" fill="#C9A84C" opacity={0.35} />
      <path d="M514 228 L524 228 L526 240 L516 246 L508 240 Z" fill="#C9A84C" opacity={0.35} />
      <path d="M466 228 L456 228 L454 240 L464 246 L472 240 Z" fill="#C9A84C" opacity={0.35} />
      <path d="M505 252 L512 244 L520 250 L516 262 L504 262 Z" fill="#C9A84C" opacity={0.35} />
      <path d="M475 252 L468 244 L460 250 L464 262 L476 262 Z" fill="#C9A84C" opacity={0.35} />
      {/* Stitch lines */}
      <line x1={490} y1={215} x2={500} y2={223} stroke="#C9A84C" strokeWidth={1} opacity={0.5} />
      <line x1={490} y1={215} x2={480} y2={223} stroke="#C9A84C" strokeWidth={1} opacity={0.5} />
      <line x1={514} y1={228} x2={508} y2={240} stroke="#C9A84C" strokeWidth={1} opacity={0.5} />
      <line x1={466} y1={228} x2={472} y2={240} stroke="#C9A84C" strokeWidth={1} opacity={0.5} />

      {/* ── Beach scene ── */}
      {/* Beach umbrella */}
      <line x1={600} y1={262} x2={600} y2={210} stroke="#C9A84C" strokeWidth={3} />
      <path d="M570 218 Q600 195 630 218 Z" fill="#C9A84C" />
      <path d="M572 218 Q600 200 628 218" stroke="#C9A84C" strokeWidth={1} fill="none" opacity={0.4} />
      {/* Stripes on umbrella */}
      <line x1={600} y1={195} x2={572} y2={218} stroke="#C9A84C" strokeWidth={1} opacity={0.3} />
      <line x1={600} y1={195} x2={586} y2={215} stroke="#C9A84C" strokeWidth={1} opacity={0.3} />
      <line x1={600} y1={195} x2={614} y2={215} stroke="#C9A84C" strokeWidth={1} opacity={0.3} />
      <line x1={600} y1={195} x2={628} y2={218} stroke="#C9A84C" strokeWidth={1} opacity={0.3} />
      {/* Person lying on beach */}
      <ellipse cx={620} cy={258} rx={22} ry={5} fill="#C9A84C" opacity={0.7} />
      <circle cx={642} cy={254} r={6} fill="#C9A84C" opacity={0.7} />
      {/* Waves on shore */}
      <path d="M560 262 Q580 258 600 262 Q620 266 640 262" stroke="#C9A84C" strokeWidth={2} fill="none" opacity={0.5} />

      {/* ── Meen curry / fish dish ── */}
      {/* Bowl */}
      <path d="M690 242 Q685 265 730 267 Q775 265 770 242 Z" fill="#C9A84C" />
      <ellipse cx={730} cy={242} rx={42} ry={8} fill="#C9A84C" />
      {/* Fish in bowl */}
      <path d="M705 245 Q718 235 730 245 Q718 252 705 245 Z" fill="#C9A84C" opacity={0.4} />
      <path d="M700 245 Q695 240 698 245 Q695 250 700 245 Z" fill="#C9A84C" opacity={0.4} />
      {/* Curry ripple */}
      <path d="M698 248 Q715 244 730 248 Q745 252 762 248" stroke="#C9A84C" strokeWidth={1} fill="none" opacity={0.35} />

      {/* ── Halwa / Kozhikodan sweet ── */}
      {/* Tray */}
      <rect x={800} y={248} width={70} height={14} rx={3} fill="#C9A84C" />
      {/* Halwa blocks */}
      <rect x={804} y={236} width={18} height={13} rx={2} fill="#C9A84C" opacity={0.9} />
      <rect x={826} y={234} width={18} height={15} rx={2} fill="#C9A84C" opacity={0.75} />
      <rect x={848} y={237} width={18} height={12} rx={2} fill="#C9A84C" opacity={0.85} />

      {/* ── Kallummakkaya / Mussels (iconic Malabar snack) ── */}
      {/* Plate */}
      <ellipse cx={940} cy={258} rx={38} ry={8} fill="#C9A84C" />
      {/* Mussel shells */}
      <path d="M912 255 Q920 242 930 255 Q920 260 912 255 Z" fill="#C9A84C" opacity={0.7} />
      <path d="M928 252 Q936 239 946 252 Q936 257 928 252 Z" fill="#C9A84C" opacity={0.7} />
      <path d="M944 254 Q952 241 962 254 Q952 259 944 254 Z" fill="#C9A84C" opacity={0.7} />
      <path d="M920 260 Q928 248 938 260 Q928 265 920 260 Z" fill="#C9A84C" opacity={0.5} />
      <path d="M938 258 Q946 246 956 258 Q946 263 938 258 Z" fill="#C9A84C" opacity={0.5} />

      {/* ── Sunset over beach / horizon ── */}
      {/* Sun half dipping */}
      <path d="M1040 262 Q1040 230 1070 230 Q1100 230 1100 262 Z" fill="#C9A84C" opacity={0.55} />
      {/* Sun rays */}
      {Array.from({ length: 7 }).map((_, i) => {
        const angle = Math.PI + (i * Math.PI) / 6;
        return (
          <line
            key={i}
            x1={1070 + Math.cos(angle) * 36}
            y1={262 + Math.sin(angle) * 36}
            x2={1070 + Math.cos(angle) * 50}
            y2={262 + Math.sin(angle) * 50}
            stroke="#C9A84C"
            strokeWidth={2}
            opacity={0.4}
          />
        );
      })}
      {/* Horizon reflection */}
      <path d="M1030 262 Q1070 255 1110 262" stroke="#C9A84C" strokeWidth={2} fill="none" opacity={0.4} />

      {/* ── Coconut tree 3 (beach side) ── */}
      <path d="M1155 262 Q1162 218 1168 158" stroke="#C9A84C" strokeWidth={6} fill="none" />
      <path d="M1168 162 Q1135 140 1110 155 Q1135 144 1168 162" fill="#C9A84C" />
      <path d="M1168 162 Q1192 128 1220 135 Q1193 130 1168 162" fill="#C9A84C" />
      <path d="M1168 162 Q1150 118 1158 95 Q1158 118 1168 162" fill="#C9A84C" />
      <path d="M1168 162 Q1195 130 1185 105 Q1182 128 1168 162" fill="#C9A84C" />
      <circle cx={1158} cy={172} r={8} fill="#C9A84C" opacity={0.8} />
      <circle cx={1172} cy={168} r={7} fill="#C9A84C" opacity={0.8} />

      {/* ── Porotta stack ── */}
      <ellipse cx={1268} cy={260} rx={30} ry={6} fill="#C9A84C" />
      <ellipse cx={1268} cy={252} rx={28} ry={5} fill="#C9A84C" opacity={0.85} />
      <ellipse cx={1268} cy={244} rx={26} ry={5} fill="#C9A84C" opacity={0.7} />
      {/* Flaky lines on top porotta */}
      <path d="M1248 244 Q1258 240 1268 244 Q1278 240 1288 244" stroke="#C9A84C" strokeWidth={1} fill="none" opacity={0.4} />
      <path d="M1252 247 Q1262 243 1272 247 Q1282 243 1285 247" stroke="#C9A84C" strokeWidth={1} fill="none" opacity={0.3} />

      {/* ── Fishing net / shore fishing ── */}
      <path d="M1330 210 Q1360 200 1390 210" stroke="#C9A84C" strokeWidth={2} fill="none" />
      <line x1={1330} y1={210} x2={1340} y2={260} stroke="#C9A84C" strokeWidth={1.5} opacity={0.6} />
      <line x1={1348} y1={206} x2={1352} y2={260} stroke="#C9A84C" strokeWidth={1.5} opacity={0.6} />
      <line x1={1366} y1={204} x2={1366} y2={260} stroke="#C9A84C" strokeWidth={1.5} opacity={0.6} />
      <line x1={1384} y1={206} x2={1378} y2={260} stroke="#C9A84C" strokeWidth={1.5} opacity={0.6} />
      <line x1={1390} y1={210} x2={1390} y2={260} stroke="#C9A84C" strokeWidth={1.5} opacity={0.6} />
      {/* Net horizontal lines */}
      <path d="M1332 222 Q1360 218 1388 222" stroke="#C9A84C" strokeWidth={1} fill="none" opacity={0.4} />
      <path d="M1334 234 Q1360 230 1386 234" stroke="#C9A84C" strokeWidth={1} fill="none" opacity={0.4} />
      <path d="M1336 246 Q1360 242 1384 246" stroke="#C9A84C" strokeWidth={1} fill="none" opacity={0.4} />

      {/* ── Seagulls ── */}
      <path d="M430 120 Q438 113 446 120" stroke="#C9A84C" strokeWidth={1.5} fill="none" opacity={0.45} />
      <path d="M455 105 Q464 98 473 105" stroke="#C9A84C" strokeWidth={1.5} fill="none" opacity={0.4} />
      <path d="M820 95 Q829 88 838 95" stroke="#C9A84C" strokeWidth={1.5} fill="none" opacity={0.4} />
      <path d="M845 110 Q852 104 859 110" stroke="#C9A84C" strokeWidth={1.5} fill="none" opacity={0.35} />
    </svg>
  );
}
export function PalmTree({ className = "", opacity = 0.1, style }: { className?: string; opacity?: number; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 100 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      <path d="M48 200 Q50 150 52 100 Q54 60 58 40" stroke="#C9A84C" strokeWidth={5} strokeLinecap="round" />
      <path d="M58 40 Q30 20 10 35 Q35 22 58 40 Q82 15 105 28 Q82 18 58 40" fill="#C9A84C" />
      <path d="M58 50 Q20 45 5 62 Q28 46 58 50 Q88 35 108 50 Q88 38 58 50" fill="#C9A84C" opacity={0.7} />
      <path d="M55 35 Q50 10 60 0 Q55 12 55 35" fill="#C9A84C" opacity={0.5} />
      <ellipse cx={50} cy={198} rx={15} ry={3} fill="#C9A84C" opacity={0.3} />
    </svg>
  );
}

export function SteamLines({ className = "", opacity = 0.6, style }: { className?: string; opacity?: number; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 60 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      <path
        d="M10 70 Q5 55 12 45 Q19 35 14 20 Q9 8 15 0"
        stroke="#C9A84C"
        strokeWidth={2}
        strokeLinecap="round"
        opacity={0.6}
      />
      <path
        d="M30 70 Q25 55 32 45 Q39 35 34 20 Q29 8 35 0"
        stroke="#C9A84C"
        strokeWidth={2.5}
        strokeLinecap="round"
        opacity={0.8}
      />
      <path
        d="M50 70 Q45 55 52 45 Q59 35 54 20 Q49 8 55 0"
        stroke="#C9A84C"
        strokeWidth={2}
        strokeLinecap="round"
        opacity={0.6}
      />
    </svg>
  );
}

export function FishingBoat({ className = "", opacity = 0.1, style }: { className?: string; opacity?: number; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 300 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      {/* Hull */}
      <path d="M20 70 Q80 95 150 90 Q220 95 280 70 Q250 105 150 110 Q50 105 20 70 Z" fill="#C9A84C" />
      {/* Mast */}
      <line x1={150} y1={90} x2={150} y2={20} stroke="#C9A84C" strokeWidth={3} />
      {/* Sail */}
      <path d="M150 25 Q200 45 180 80 Q150 75 150 25 Z" fill="#C9A84C" opacity={0.7} />
      <path d="M150 30 Q110 50 125 80 Q150 78 150 30 Z" fill="#C9A84C" opacity={0.5} />
      {/* Waves */}
      <path d="M0 100 Q30 95 60 100 Q90 105 120 100" stroke="#C9A84C" strokeWidth={2} fill="none" opacity={0.4} />
      <path d="M180 100 Q210 95 240 100 Q270 105 300 100" stroke="#C9A84C" strokeWidth={2} fill="none" opacity={0.4} />
    </svg>
  );
}

export function WavePattern({ className = "", opacity = 0.08 }: { className?: string; opacity?: number }) {
  return (
    <svg
      viewBox="0 0 1400 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      preserveAspectRatio="none"
    >
      <path
        d="M0 30 Q70 10 140 30 Q210 50 280 30 Q350 10 420 30 Q490 50 560 30 Q630 10 700 30 Q770 50 840 30 Q910 10 980 30 Q1050 50 1120 30 Q1190 10 1260 30 Q1330 50 1400 30"
        stroke="#C9A84C"
        strokeWidth={2}
        fill="none"
      />
      <path
        d="M0 40 Q70 20 140 40 Q210 60 280 40 Q350 20 420 40 Q490 60 560 40 Q630 20 700 40 Q770 60 840 40 Q910 20 980 40 Q1050 60 1120 40 Q1190 20 1260 40 Q1330 60 1400 40"
        stroke="#C9A84C"
        strokeWidth={1}
        fill="none"
        opacity={0.5}
      />
    </svg>
  );
}

export function WheatSheafIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <line x1={20} y1={38} x2={20} y2={10} stroke="#C9A84C" strokeWidth={2} strokeLinecap="round" />
      <ellipse cx={20} cy={8} rx={4} ry={7} fill="#C9A84C" />
      <ellipse cx={12} cy={14} rx={3} ry={6} fill="#C9A84C" transform="rotate(-20 12 14)" opacity={0.8} />
      <ellipse cx={28} cy={14} rx={3} ry={6} fill="#C9A84C" transform="rotate(20 28 14)" opacity={0.8} />
      <ellipse cx={8} cy={20} rx={3} ry={5} fill="#C9A84C" transform="rotate(-35 8 20)" opacity={0.6} />
      <ellipse cx={32} cy={20} rx={3} ry={5} fill="#C9A84C" transform="rotate(35 32 20)" opacity={0.6} />
      <path d="M15 32 Q20 28 25 32" stroke="#C9A84C" strokeWidth={1.5} fill="none" />
    </svg>
  );
}

export function MortarPestleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx={20} cy={30} rx={14} ry={7} stroke="#C9A84C" strokeWidth={2} fill="none" />
      <path d="M6 30 Q6 38 20 38 Q34 38 34 30" stroke="#C9A84C" strokeWidth={2} fill="none" />
      <path d="M8 30 Q10 22 20 20 Q30 22 32 30" stroke="#C9A84C" strokeWidth={2} fill="none" />
      <line x1={26} y1={18} x2={38} y2={6} stroke="#C9A84C" strokeWidth={2.5} strokeLinecap="round" />
      <circle cx={38} cy={6} r={3} fill="#C9A84C" />
    </svg>
  );
}

export function LeafIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M20 36 Q6 28 8 14 Q10 4 24 4 Q36 6 34 20 Q32 32 20 36 Z"
        fill="#C9A84C"
        opacity={0.2}
        stroke="#C9A84C"
        strokeWidth={1.5}
      />
      <line x1={20} y1={36} x2={20} y2={10} stroke="#C9A84C" strokeWidth={1.5} strokeLinecap="round" />
      <path d="M20 18 Q26 16 30 20" stroke="#C9A84C" strokeWidth={1} fill="none" opacity={0.7} />
      <path d="M20 24 Q26 22 29 26" stroke="#C9A84C" strokeWidth={1} fill="none" opacity={0.7} />
      <path d="M20 18 Q14 16 10 20" stroke="#C9A84C" strokeWidth={1} fill="none" opacity={0.7} />
    </svg>
  );
}

export function EmptyBowlIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M10 30 Q10 65 60 65 Q110 65 110 30"
        stroke="#C9A84C"
        strokeWidth={3}
        fill="none"
        strokeLinecap="round"
      />
      <line x1={5} y1={30} x2={115} y2={30} stroke="#C9A84C" strokeWidth={3} strokeLinecap="round" />
      <path d="M35 70 Q60 75 85 70" stroke="#C9A84C" strokeWidth={2} fill="none" strokeLinecap="round" opacity={0.5} />
      {/* Steam */}
      <path d="M45 22 Q42 14 46 8" stroke="#C9A84C" strokeWidth={1.5} fill="none" strokeLinecap="round" opacity={0.4} />
      <path d="M60 20 Q57 12 61 6" stroke="#C9A84C" strokeWidth={1.5} fill="none" strokeLinecap="round" opacity={0.4} />
      <path d="M75 22 Q72 14 76 8" stroke="#C9A84C" strokeWidth={1.5} fill="none" strokeLinecap="round" opacity={0.4} />
    </svg>
  );
}

export function CheckmarkIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx={40} cy={40} r={36} stroke="#C9A84C" strokeWidth={3} />
      <path d="M24 40 L34 52 L56 28" stroke="#C9A84C" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
