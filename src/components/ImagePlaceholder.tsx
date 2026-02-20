interface ImagePlaceholderProps {
  alt: string;
  aspect?: "16/9" | "4/3" | "1/1" | "3/2";
  illustration?: "drone" | "grid" | "data" | "inspection";
  className?: string;
}

export default function ImagePlaceholder({
  alt,
  aspect = "16/9",
  illustration = "drone",
  className = "",
}: ImagePlaceholderProps) {
  const aspectClass = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "3/2": "aspect-[3/2]",
  }[aspect];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-surface-100 ${aspectClass} ${className}`}
      role="img"
      aria-label={alt}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-surface-100 to-accent-50" />

      {/* SVG illustration */}
      <div className="absolute inset-0 flex items-center justify-center">
        {illustration === "drone" && <DroneIllustration />}
        {illustration === "grid" && <GridIllustration />}
        {illustration === "data" && <DataIllustration />}
        {illustration === "inspection" && <InspectionIllustration />}
      </div>

      {/* Photo replacement hint (visible only in dev) */}
      <div className="absolute bottom-3 right-3">
        <span className="rounded-lg bg-white/80 px-2.5 py-1 text-[10px] font-medium text-surface-400 backdrop-blur-sm">
          {alt}
        </span>
      </div>
    </div>
  );
}

function DroneIllustration() {
  return (
    <svg className="h-32 w-32 text-brand-200" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      {/* Drone body */}
      <rect x="45" y="50" width="30" height="18" rx="4" stroke="currentColor" strokeWidth="1.5" />
      {/* Camera */}
      <circle cx="60" cy="72" r="4" stroke="currentColor" strokeWidth="1.5" />
      {/* Arms */}
      <line x1="45" y1="54" x2="25" y2="40" stroke="currentColor" strokeWidth="1.5" />
      <line x1="75" y1="54" x2="95" y2="40" stroke="currentColor" strokeWidth="1.5" />
      <line x1="45" y1="62" x2="25" y2="76" stroke="currentColor" strokeWidth="1.5" />
      <line x1="75" y1="62" x2="95" y2="76" stroke="currentColor" strokeWidth="1.5" />
      {/* Propellers */}
      <ellipse cx="25" cy="40" rx="12" ry="3" stroke="currentColor" strokeWidth="1" className="text-accent-200" />
      <ellipse cx="95" cy="40" rx="12" ry="3" stroke="currentColor" strokeWidth="1" className="text-accent-200" />
      <ellipse cx="25" cy="76" rx="12" ry="3" stroke="currentColor" strokeWidth="1" className="text-accent-200" />
      <ellipse cx="95" cy="76" rx="12" ry="3" stroke="currentColor" strokeWidth="1" className="text-accent-200" />
      {/* Signal lines */}
      <path d="M60 46 L60 36" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-surface-300" />
      <path d="M54 30 Q60 26 66 30" stroke="currentColor" strokeWidth="1" className="text-surface-300" />
      <path d="M50 26 Q60 20 70 26" stroke="currentColor" strokeWidth="1" className="text-surface-300" />
    </svg>
  );
}

function GridIllustration() {
  return (
    <svg className="h-32 w-32 text-brand-200" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      {/* Power poles */}
      <line x1="20" y1="35" x2="20" y2="95" stroke="currentColor" strokeWidth="2" />
      <line x1="60" y1="30" x2="60" y2="95" stroke="currentColor" strokeWidth="2" />
      <line x1="100" y1="35" x2="100" y2="95" stroke="currentColor" strokeWidth="2" />
      {/* Cross bars */}
      <line x1="10" y1="40" x2="30" y2="40" stroke="currentColor" strokeWidth="1.5" />
      <line x1="50" y1="35" x2="70" y2="35" stroke="currentColor" strokeWidth="1.5" />
      <line x1="90" y1="40" x2="110" y2="40" stroke="currentColor" strokeWidth="1.5" />
      {/* Power lines */}
      <path d="M10 40 Q40 50 50 35" stroke="currentColor" strokeWidth="1" className="text-accent-200" />
      <path d="M70 35 Q85 45 90 40" stroke="currentColor" strokeWidth="1" className="text-accent-200" />
      <path d="M30 40 Q45 48 50 35" stroke="currentColor" strokeWidth="1" className="text-surface-300" />
      <path d="M70 35 Q85 43 110 40" stroke="currentColor" strokeWidth="1" className="text-surface-300" />
      {/* Ground */}
      <line x1="5" y1="95" x2="115" y2="95" stroke="currentColor" strokeWidth="1" className="text-surface-200" />
    </svg>
  );
}

function DataIllustration() {
  return (
    <svg className="h-32 w-32 text-brand-200" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      {/* Document */}
      <rect x="25" y="20" width="50" height="65" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M62 20 L75 33 L75 20" stroke="currentColor" strokeWidth="1.5" />
      {/* Lines of data */}
      <line x1="35" y1="42" x2="55" y2="42" stroke="currentColor" strokeWidth="1" className="text-surface-300" />
      <line x1="35" y1="50" x2="65" y2="50" stroke="currentColor" strokeWidth="1" className="text-surface-300" />
      <line x1="35" y1="58" x2="58" y2="58" stroke="currentColor" strokeWidth="1" className="text-surface-300" />
      <line x1="35" y1="66" x2="62" y2="66" stroke="currentColor" strokeWidth="1" className="text-surface-300" />
      {/* GIS pin */}
      <circle cx="88" cy="55" r="12" stroke="currentColor" strokeWidth="1.5" className="text-accent-200" />
      <path d="M88 48 L88 50" stroke="currentColor" strokeWidth="2" className="text-accent-300" />
      <circle cx="88" cy="55" r="3" fill="currentColor" className="text-accent-200" />
      {/* Connection arrow */}
      <path d="M75 55 L80 55" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-surface-300" />
    </svg>
  );
}

function InspectionIllustration() {
  return (
    <svg className="h-32 w-32 text-brand-200" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      {/* Magnifying glass */}
      <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="2" />
      <line x1="66" y1="66" x2="82" y2="82" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Pole inside magnifying glass */}
      <line x1="50" y1="35" x2="50" y2="65" stroke="currentColor" strokeWidth="1.5" className="text-accent-200" />
      <line x1="42" y1="40" x2="58" y2="40" stroke="currentColor" strokeWidth="1" className="text-accent-200" />
      {/* Checkmarks */}
      <path d="M85 30 L88 33 L93 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-300" />
      <path d="M85 42 L88 45 L93 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-300" />
      <line x1="96" y1="30" x2="110" y2="30" stroke="currentColor" strokeWidth="1" className="text-surface-300" />
      <line x1="96" y1="42" x2="106" y2="42" stroke="currentColor" strokeWidth="1" className="text-surface-300" />
    </svg>
  );
}
