import Header from "@/components/Header";
import Motion from "@/components/Motion";
import Loader from "@/components/Loader";
import MobileCta from "@/components/MobileCta";
import TopBar from "@/components/sections/TopBar";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Mission from "@/components/sections/Mission";
import Difference from "@/components/sections/Difference";
import Rooms from "@/components/sections/Rooms";
import Activities from "@/components/sections/Activities";
import Teachers from "@/components/sections/Teachers";
import Curriculum from "@/components/sections/Curriculum";
import Enroll from "@/components/sections/Enroll";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import Comparison from "@/components/sections/Comparison";
import Forms from "@/components/sections/Forms";
import Faq from "@/components/sections/Faq";
import CtaBand from "@/components/sections/CtaBand";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <a
        href="#main"
        className="sr-only z-[100] rounded-full bg-navy px-5 py-3 font-semibold text-cream focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <TopBar />
      <Header />
      <main id="main" className="pb-20 md:pb-0">
        <Hero />
        <TrustStrip />
        <Mission />
        <Difference />
        <Rooms />
        <Activities />
        <Teachers />
        <Curriculum />
        <Enroll />
        <Testimonials />
        <Gallery />
        <Comparison />
        <Forms />
        <Faq />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <MobileCta />
      <Motion />
    </>
  );
}
