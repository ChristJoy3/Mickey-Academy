import type { IconName } from "@/content/site";

// Rounded line icons, 24x24, stroke = currentColor.
const paths: Record<IconName | "check" | "pdf" | "download" | "phone" | "mail" | "pin" | "arrow" | "close" | "chevron" | "menu" | "plus", React.ReactNode> = {
  bottle: (
    <>
      <path d="M9 3h6M10 3v2.5c0 .8-.4 1.3-1 2C8.3 8.3 8 9 8 10v9a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-9c0-1-.3-1.7-1-2.5-.6-.7-1-1.2-1-2V3" />
      <path d="M8 12h3M8 15h3" />
    </>
  ),
  blocks: (
    <>
      <rect x="3" y="12" width="8" height="8" rx="2" />
      <rect x="13" y="12" width="8" height="8" rx="2" />
      <rect x="8" y="3" width="8" height="8" rx="2" />
    </>
  ),
  brush: (
    <>
      <path d="M14.5 4.5l5 5L11 18l-5-5 8.5-8.5z" />
      <path d="M6 13c-2 0-3 1.5-3 3.5 0 1.5-.5 2.5-1 3 3 .5 6-.5 6.5-3" />
    </>
  ),
  music: (
    <>
      <path d="M9 18V5l11-2v13" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="17.5" cy="16" r="2.5" />
    </>
  ),
  apple: (
    <>
      <path d="M12 7c-1.5-1-5-1.5-6.5 1.5S5 16 7.5 19c1.5 1.8 3 1.8 4.5 1 1.5.8 3 .8 4.5-1 2.5-3 3.5-7.5 2-10.5S13.5 6 12 7z" />
      <path d="M12 7c0-2 1-3.5 3-4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7.5 3v5.5c0 4.5-3.2 8-7.5 9.5-4.3-1.5-7.5-5-7.5-9.5V6L12 3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  camera: (
    <>
      <rect x="3" y="7" width="13" height="10" rx="2.5" />
      <path d="M16 11l5-3v8l-5-3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  door: (
    <>
      <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
      <path d="M3 21h18M14.5 12.5v.01" />
    </>
  ),
  report: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2.5" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </>
  ),
  heart: <path d="M12 20s-7.5-4.5-7.5-10A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7.5 3c0 5.5-7.5 10-7.5 10z" />,
  people: (
    <>
      <circle cx="8.5" cy="8" r="3" />
      <circle cx="16.5" cy="9" r="2.5" />
      <path d="M3 20c0-3.3 2.5-6 5.5-6s5.5 2.7 5.5 6M14.5 14.2c.6-.2 1.3-.2 2-.2 2.5 0 4.5 2.2 4.5 5" />
    </>
  ),
  dance: (
    <>
      <circle cx="13" cy="4.5" r="2" />
      <path d="M8 10l4-2.5 3 2 3-1M12 7.5l-1 6 3 3 1 5M11 13.5l-3 2.5-2 4" />
    </>
  ),
  computer: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2.5" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  cook: (
    <>
      <path d="M7 13h10v5a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-5z" />
      <path d="M7 13a3 3 0 0 1-1-5.8 4 4 0 0 1 7.7-2.4A3.5 3.5 0 0 1 17 13" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
    </>
  ),
  puzzle: (
    <path d="M10 4a2 2 0 0 1 4 0v1h4a1 1 0 0 1 1 1v4h-1a2 2 0 0 0 0 4h1v4a1 1 0 0 1-1 1h-4v-1a2 2 0 0 0-4 0v1H6a1 1 0 0 1-1-1v-4h1a2 2 0 0 0 0-4H5V6a1 1 0 0 1 1-1h4V4z" />
  ),
  star: <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5z" />,
  pencil: (
    <>
      <path d="M15 4l5 5L9 20H4v-5L15 4z" />
      <path d="M13 6l5 5" />
    </>
  ),
  backpack: (
    <>
      <path d="M6 10a6 6 0 0 1 12 0v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9z" />
      <path d="M9 4.5V4a3 3 0 0 1 6 0v.5M9 14h6v3H9z" />
    </>
  ),
  grad: (
    <>
      <path d="M2.5 9L12 4.5 21.5 9 12 13.5 2.5 9z" />
      <path d="M6.5 11v4.5c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3V11M21.5 9v5" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  pdf: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </>
  ),
  download: <path d="M12 4v11M7 10.5l5 5 5-5M5 20h14" />,
  phone: (
    <path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5l1.5-2 4 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  plus: <path d="M12 5v14M5 12h14" />,
};

export type AnyIcon = keyof typeof paths;

export default function Icon({
  name,
  className = "size-6",
  strokeWidth = 2,
}: {
  name: AnyIcon;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
