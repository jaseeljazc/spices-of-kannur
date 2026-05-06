// All decorative SVG components for Chef Shameem
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
      {/* Fort left */}
      <rect x={60} y={170} width={120} height={90} fill="#C9A84C" />
      <rect x={50} y={150} width={140} height={20} fill="#C9A84C" />
      {Array.from({ length: 7 }).map((_, i) => (
        <rect key={i} x={50 + i * 20} y={130} width={13} height={20} fill="#C9A84C" />
      ))}
      {/* Fort arch */}
      <path d="M100 260 Q100 210 120 200 Q140 210 140 260 Z" fill="#C9A84C" opacity={0.4} />
      {/* Palm trees */}
      <line x1={280} y1={260} x2={280} y2={170} stroke="#C9A84C" strokeWidth={6} />
      <path d="M280 175 Q250 150 220 165 Q250 155 280 175 Q310 150 340 165 Q310 155 280 175 Q260 140 275 120 Q275 140 280 175 Q295 135 315 140 Q295 138 280 175" fill="#C9A84C" />
      <line x1={380} y1={260} x2={380} y2={180} stroke="#C9A84C" strokeWidth={5} />
      <path d="M380 185 Q355 162 328 176 Q355 165 380 185 Q405 162 432 176 Q405 165 380 185 Q362 148 376 130 Q376 148 380 185" fill="#C9A84C" />
      {/* Bridge (Kadal Palam) */}
      <path d="M480 240 Q560 200 640 240" stroke="#C9A84C" strokeWidth={4} fill="none" />
      <line x1={480} y1={240} x2={480} y2={260} stroke="#C9A84C" strokeWidth={4} />
      <line x1={640} y1={240} x2={640} y2={260} stroke="#C9A84C" strokeWidth={4} />
      {/* Cables */}
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={i} x1={480 + i * 32} y1={260} x2={560} y2={220} stroke="#C9A84C" strokeWidth={1} opacity={0.5} />
      ))}
      {/* City buildings */}
      <rect x={700} y={190} width={40} height={70} fill="#C9A84C" />
      <rect x={750} y={200} width={30} height={60} fill="#C9A84C" />
      <rect x={790} y={175} width={50} height={85} fill="#C9A84C" />
      <rect x={850} y={210} width={35} height={50} fill="#C9A84C" />
      <rect x={895} y={195} width={45} height={65} fill="#C9A84C" />
      {/* Mosque dome */}
      <rect x={980} y={210} width={60} height={50} fill="#C9A84C" />
      <path d="M995 210 Q1010 190 1025 210 Z" fill="#C9A84C" />
      <line x1={1010} y1={190} x2={1010} y2={175} stroke="#C9A84C" strokeWidth={2} />
      {/* Palm right */}
      <line x1={1100} y1={260} x2={1100} y2={175} stroke="#C9A84C" strokeWidth={5} />
      <path d="M1100 180 Q1075 157 1048 170 Q1075 160 1100 180 Q1125 157 1152 170 Q1125 160 1100 180 Q1082 145 1096 127 Q1096 145 1100 180" fill="#C9A84C" />
      {/* Fishing boat */}
      <path d="M1200 255 Q1230 248 1280 250 Q1310 252 1340 245 Q1310 258 1200 255 Z" fill="#C9A84C" />
      <line x1={1260} y1={250} x2={1260} y2={220} stroke="#C9A84C" strokeWidth={2} />
      <path d="M1260 220 L1290 235" stroke="#C9A84C" strokeWidth={1} fill="none" />
      {/* Sun */}
      <circle cx={1350} cy={80} r={35} fill="#C9A84C" opacity={0.6} />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI * 2) / 8;
        return (
          <line
            key={i}
            x1={1350 + Math.cos(angle) * 42}
            y1={80 + Math.sin(angle) * 42}
            x2={1350 + Math.cos(angle) * 55}
            y2={80 + Math.sin(angle) * 55}
            stroke="#C9A84C"
            strokeWidth={2}
            opacity={0.5}
          />
        );
      })}
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
