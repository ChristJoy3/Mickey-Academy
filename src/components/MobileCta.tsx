import Icon from "./Icon";
import { contact, tel } from "@/content/site";

// Sticky "Book a Visit" bar on small screens.
export default function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-navy/10 bg-cream/90 px-4 py-3 backdrop-blur-lg md:hidden">
      <a href={tel(contact.phones[0])} className="btn btn-secondary flex-none px-4" aria-label={`Call ${contact.phones[0]}`}>
        <Icon name="phone" className="size-5" />
      </a>
      <a href="#contact" className="btn btn-primary wiggle flex-1">
        Book a Visit
      </a>
    </div>
  );
}
