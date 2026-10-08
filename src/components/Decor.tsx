// Original decorative shapes: soft blobs, crayon squiggles, stars.
// All aria-hidden. No character silhouettes of any kind.

const blobs = [
  "M43.5,-58.6C55.4,-50.9,63.3,-36.6,68.1,-21.2C72.9,-5.8,74.6,10.7,68.6,23.8C62.6,36.9,48.9,46.6,34.6,54.7C20.3,62.8,5.4,69.3,-10.6,70.1C-26.6,70.9,-43.7,66,-55.4,54.9C-67.1,43.8,-73.4,26.5,-73.1,9.9C-72.8,-6.7,-65.9,-22.6,-55.6,-34.9C-45.3,-47.2,-31.6,-55.9,-17.5,-62.3C-3.4,-68.7,11.1,-72.8,24.5,-70.1C37.9,-67.4,31.6,-66.3,43.5,-58.6Z",
  "M38.9,-49.3C50.3,-41.8,59.4,-30.1,64.2,-16.3C69,-2.5,69.5,13.4,62.9,25.5C56.3,37.6,42.6,45.9,28.7,52.8C14.8,59.7,0.7,65.2,-14.9,65.1C-30.5,65,-47.6,59.3,-57.4,47.6C-67.2,35.9,-69.7,18,-67.6,1.6C-65.5,-14.8,-58.8,-29.6,-48.2,-37.5C-37.6,-45.4,-23.1,-46.4,-9.5,-50.3C4.1,-54.2,27.5,-56.8,38.9,-49.3Z",
  "M47.1,-61.1C59.7,-54.4,67.7,-38.7,70.9,-22.6C74.1,-6.5,72.5,10,66,24.2C59.5,38.4,48.1,50.3,34.5,57.8C20.9,65.3,5.1,68.4,-11.3,67.1C-27.7,65.8,-44.7,60.1,-55.4,48.5C-66.1,36.9,-70.5,19.4,-69.9,2.6C-69.3,-14.2,-63.7,-30.3,-53.3,-37.9C-42.9,-45.5,-27.7,-44.6,-13.5,-51.8C0.7,-59,34.5,-67.8,47.1,-61.1Z",
];

export function Blob({
  className = "",
  color = "var(--color-sun)",
  variant = 0,
}: {
  className?: string;
  color?: string;
  variant?: number;
}) {
  return (
    <svg viewBox="-80 -80 160 160" className={className} aria-hidden="true" focusable="false">
      <path d={blobs[variant % blobs.length]} fill={color} />
    </svg>
  );
}

export function Star({ className = "", color = "var(--color-sun)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <path
        d="M20 3c1.2 6.8 3.6 11.6 7.1 13.7 2.7 1.6 6 2.4 9.9 3.3-4.6.9-8.1 2-10.4 4-3 2.6-5 7.2-6.6 13-1.3-6-3.4-10.5-6.5-13C11.1 22 7.6 21 3 20c4.4-.9 7.9-2 10.1-3.7C16.3 14 18.6 9.3 20 3z"
        fill={color}
      />
    </svg>
  );
}

export function Squiggle({
  className = "",
  color = "var(--color-coral)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 120 24" className={className} aria-hidden="true" focusable="false" fill="none">
      <path
        d="M3 14c8-10 16-10 22 0s14 10 22 0 16-10 22 0 14 10 22 0 16-10 24-2"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Small loop/spiral doodle. */
export function Loop({ className = "", color = "var(--color-sky)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 80 40" className={className} aria-hidden="true" focusable="false" fill="none">
      <path
        d="M3 30c10 0 16-6 18-14 2-9-8-12-10-4s9 14 20 12 14-10 14-16-8-6-8 2 8 16 18 16 16-8 20-14"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Hand-drawn underline that draws itself on scroll. The <path> carries
 * data-draw so the shared motion layer can animate its stroke.
 */
export function CrayonUnderline({
  children,
  color = "var(--color-sun)",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className="relative z-10">{children}</span>
      <svg
        viewBox="0 0 200 20"
        preserveAspectRatio="none"
        className="absolute -bottom-1 left-[-4%] z-0 h-[0.42em] w-[108%]"
        aria-hidden="true"
        focusable="false"
        fill="none"
      >
        <path
          data-draw
          d="M4 13C40 6 90 4 130 7s52 5 66 1M12 17c50-5 110-7 176-5"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
