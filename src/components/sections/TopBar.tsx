import Icon from "../Icon";
import { contact, tel } from "@/content/site";

export default function TopBar() {
  return (
    <div className="bg-navy text-cream">
      <div className="mx-auto flex max-w-[84rem] flex-wrap items-center justify-center gap-x-5 gap-y-1 px-4 py-2 text-sm sm:justify-between sm:px-6 lg:px-8">
        <p className="flex items-center gap-2">
          <Icon name="phone" className="size-4 text-sun" />
          <a href={tel(contact.phones[0])} className="font-semibold hover:text-sun">
            {contact.phones[0]}
          </a>
          <span aria-hidden="true">|</span>
          <a href={tel(contact.phones[1])} className="font-semibold hover:text-sun">
            {contact.phones[1]}
          </a>
        </p>
        <p className="hidden items-center gap-5 md:flex">
          <span className="flex items-center gap-2">
            <Icon name="pin" className="size-4 text-sun" />
            {contact.streetLong}, {contact.city}, {contact.state}
          </span>
          <span className="flex items-center gap-2">
            <Icon name="clock" className="size-4 text-sun" />
            {contact.hoursShort}
          </span>
        </p>
      </div>
    </div>
  );
}
