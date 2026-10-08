import Icon from "../Icon";
import SectionHeading from "../SectionHeading";
import ContactForm from "../ContactForm";
import { contact, tel } from "@/content/site";

export default function Contact() {
  const mapSrc = `https://maps.google.com/maps?q=${contact.lat},${contact.lng}&z=16&output=embed`;
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact"
          title="Book a visit."
          intro="Send us a note or give us a call. We'd love to show you around."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <address className="card flex flex-col gap-5 not-italic" data-reveal="fade">
              <p className="font-display text-2xl font-semibold">{contact.name}</p>
              <p className="flex gap-3">
                <Icon name="pin" className="mt-1 size-6 shrink-0 text-coral-ink" />
                <span>
                  {contact.street}, {contact.city}, {contact.state} {contact.zip}
                  <span className="block text-base text-navy-soft">{contact.locationNote}</span>
                </span>
              </p>
              <p className="flex gap-3">
                <Icon name="phone" className="mt-1 size-6 shrink-0 text-coral-ink" />
                <span className="flex flex-wrap gap-x-4 gap-y-1">
                  {contact.phones.map((p) => (
                    <a key={p} href={tel(p)} className="font-semibold underline-offset-4 hover:underline">
                      {p}
                    </a>
                  ))}
                </span>
              </p>
              <p className="flex gap-3">
                <Icon name="mail" className="mt-1 size-6 shrink-0 text-coral-ink" />
                <a href={`mailto:${contact.email}`} className="font-semibold break-all underline-offset-4 hover:underline">
                  {contact.email}
                </a>
              </p>
              <p className="flex gap-3">
                <Icon name="clock" className="mt-1 size-6 shrink-0 text-coral-ink" />
                <span>
                  {contact.hours}
                  <span className="block text-base text-navy-soft">{contact.hoursNote}</span>
                </span>
              </p>
              <p className="flex gap-3">
                <Icon name="people" className="mt-1 size-6 shrink-0 text-coral-ink" />
                <span>
                  <span className="block text-sm font-bold tracking-wider text-navy-soft uppercase">Directors</span>
                  {contact.directors}
                </span>
              </p>
            </address>
            <div
              className="overflow-hidden rounded-[var(--radius-card)] border-[6px] border-white shadow-[0_20px_40px_-20px_rgb(30_42_74/0.35)]"
              data-reveal="fade"
            >
              <iframe
                src={mapSrc}
                title="Map showing Mickey Academy at 11 Brighton Road, Clifton, NJ"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-72 w-full [filter:saturate(0.65)_sepia(0.12)_hue-rotate(-8deg)]"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
