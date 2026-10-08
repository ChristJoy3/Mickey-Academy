export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  id,
  eyebrowColor = "text-coral-ink",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  id?: string;
  eyebrowColor?: string;
}) {
  const center = align === "center" ? "mx-auto text-center items-center" : "";
  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${center}`} data-reveal="fade">
      <p className={`eyebrow ${eyebrowColor}`}>{eyebrow}</p>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {intro && <p className="text-lg text-navy-soft sm:text-xl">{intro}</p>}
    </div>
  );
}
