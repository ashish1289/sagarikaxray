import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { Pricing } from "@/components/sections/Pricing";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { MobileStickyCTA } from "@/components/sections/MobileStickyCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <HowItWorks />
        <Benefits />
        <Pricing />
        <ServiceAreas />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
