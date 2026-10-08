"use client";

import { useState } from "react";
import Icon from "./Icon";
import { ageChips, contact } from "@/content/site";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const field =
  "w-full rounded-2xl border-2 border-navy/15 bg-cream px-4 py-3 text-navy placeholder:text-navy-soft/70 focus:border-navy focus:outline-none aria-[invalid=true]:border-coral-ink";

// No backend yet: submitting opens the parent's email app with a prefilled
// message to the center. Swap handleSubmit for a form service when available.
export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const age = String(data.get("age") ?? "");
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Please tell us your name.";
    if (!email) next.email = "Please add your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "That email address doesn't look right.";
    if (!message) next.message = "Please write a short message.";
    setErrors(next);
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0];
      e.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    const body = [
      `Parent name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      age ? `Child's age: ${age}` : null,
      "",
      message,
    ]
      .filter((l) => l !== null)
      .join("\n");
    const subject = `Visit request from ${name}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const err = (key: keyof Errors) =>
    errors[key] ? (
      <p id={`${key}-error`} className="mt-2 text-sm font-semibold text-coral-ink">
        {errors[key]}
      </p>
    ) : null;

  return (
    <form noValidate onSubmit={handleSubmit} className="card flex flex-col gap-5 p-7 sm:p-9" aria-labelledby="form-title">
      <h3 id="form-title" className="text-3xl font-semibold">
        Send us a message
      </h3>
      <p className="-mt-3 text-base text-navy-soft">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-semibold">
            Parent name <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={field}
          />
          {err("name")}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block font-semibold">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={field}
          />
          {err("email")}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block font-semibold">
          Phone
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
      </div>

      <fieldset>
        <legend className="mb-3 font-semibold">Child&apos;s age</legend>
        <div className="flex flex-wrap gap-2">
          {ageChips.map((chip) => (
            <label key={chip} className="cursor-pointer">
              <input type="radio" name="age" value={chip} className="peer sr-only" />
              <span className="inline-flex rounded-full border-2 border-navy/20 bg-white px-4 py-2 font-semibold transition-colors peer-checked:border-navy peer-checked:bg-sun peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-navy hover:border-navy">
                {chip}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="mb-2 block font-semibold">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={field}
        />
        {err("message")}
      </div>

      <button type="submit" className="btn btn-primary wiggle self-start">
        Send message <Icon name="arrow" className="size-5" />
      </button>

      <p role="status" className="text-base font-semibold text-mint-ink">
        {sent &&
          `Your email app should open with your message ready to send. If it doesn't, email us at ${contact.email} or call ${contact.phones[0]}.`}
      </p>
    </form>
  );
}
