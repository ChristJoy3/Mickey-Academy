import Image from "next/image";

// Client-supplied logo, used exactly as provided (701x65, sky background included).
export default function Logo({ className = "", preload = false }: { className?: string; preload?: boolean }) {
  return (
    <Image
      src="/logo.png"
      alt="Mickey Academy"
      width={701}
      height={65}
      preload={preload}
      unoptimized
      className={`h-auto w-[13.5rem] rounded-lg shadow-sm sm:w-[17rem] lg:w-[16rem] xl:w-[21rem] ${className}`}
    />
  );
}
