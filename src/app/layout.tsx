import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import { contact } from "@/content/site";
import "./globals.css";

const fredoka = Fredoka({ variable: "--font-fredoka", subsets: ["latin"] });
const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });

const description =
  "Mickey Academy is a daycare in Clifton, NJ for children from 2 weeks to 5 years old, plus a before & after school program. Infant care, toddler rooms, and preschool with an open-door policy, daily activity reports, and 24/7 video cameras. Open Mon–Fri 7am–7pm.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mickeyacademy.com"),
  title: "Mickey Academy Daycare | Daycare, Infant Care & Preschool in Clifton, NJ",
  description,
  keywords: [
    "daycare Clifton NJ",
    "infant care Clifton",
    "preschool Clifton NJ",
    "child care Clifton NJ",
    "toddler daycare Clifton",
    "before and after school program Clifton",
    "Mickey Academy",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Mickey Academy Daycare",
    title: "Mickey Academy Daycare | Clifton, NJ",
    description,
    images: [{ url: "/images/front.jpg", width: 800, height: 600, alt: "The Mickey Academy building in Clifton, NJ" }],
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#fff8ee",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ChildCare",
  name: contact.fullName,
  url: "https://mickeyacademy.com",
  image: "https://mickeyacademy.com/images/front.jpg",
  telephone: contact.phones[0],
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.streetLong,
    addressLocality: contact.city,
    addressRegion: contact.state,
    postalCode: contact.zip,
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: contact.lat, longitude: contact.lng },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
  ],
};

// Hides reveal targets before first paint when motion is allowed; failsafe
// removes the class if the motion script never runs.
const motionBoot = `(function(){try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){var d=document.documentElement;d.classList.add('js-motion');setTimeout(function(){if(!window.__maMotion)d.classList.remove('js-motion')},6000)}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBoot }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
