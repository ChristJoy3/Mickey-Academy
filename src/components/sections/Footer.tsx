import Logo from "../Logo";
import Icon from "../Icon";
import FooterYear from "../FooterYear";
import { contact, mission, nav, tel } from "@/content/site";

export default function Footer() {
  return (
    <footer className="mt-10 bg-navy text-cream">
      <div className="mx-auto grid max-w-[84rem] gap-12 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr] lg:px-8">
        <div className="flex flex-col gap-5">
          <Logo />
          <p className="max-w-xs text-cream/85">{mission.short}</p>
          <p className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
            <Icon name="check" className="size-4 text-sun" /> All government programs accepted
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-lg font-semibold text-sun">Quick links</h2>
          <ul className="mt-4 flex flex-col gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-cream/85 hover:text-sun">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-lg font-semibold text-sun">Contact</h2>
          <address className="mt-4 flex flex-col gap-2 text-cream/85 not-italic">
            <span>
              {contact.street}, {contact.city}, {contact.state} {contact.zip}
            </span>
            {contact.phones.map((p) => (
              <a key={p} href={tel(p)} className="hover:text-sun">
                {p}
              </a>
            ))}
            <a href={`mailto:${contact.email}`} className="break-all hover:text-sun">
              {contact.email}
            </a>
          </address>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-sun">Hours</h2>
          <p className="mt-4 text-cream/85">
            {contact.hours}
            <span className="block">{contact.hoursNote}</span>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[84rem] px-4 py-6 text-sm text-cream/75 sm:px-6 lg:px-8">
          © {contact.name} <FooterYear />
        </p>
      </div>
    </footer>
  );
}
