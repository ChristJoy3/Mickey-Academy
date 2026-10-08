import Image from "next/image";
import type { Photo } from "@/content/site";

export default function Polaroid({
  photo,
  rotate = 0,
  className = "",
  sizes = "(min-width: 1024px) 33vw, 80vw",
  preload = false,
  caption,
}: {
  photo: Photo;
  rotate?: number;
  className?: string;
  sizes?: string;
  preload?: boolean;
  caption?: string;
}) {
  return (
    <figure className={`polaroid ${className}`} style={{ rotate: `${rotate}deg` }}>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes={sizes}
        preload={preload}
        className="aspect-[4/3] w-full rounded-lg object-cover"
      />
      {caption && (
        <figcaption className="absolute inset-x-0 bottom-2.5 text-center font-display text-base text-navy-soft">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
