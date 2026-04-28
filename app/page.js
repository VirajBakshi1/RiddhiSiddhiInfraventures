import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Pillars from "@/components/sections/Pillars";
import SignatureProject from "@/components/sections/SignatureProject";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import Amenities from "@/components/sections/Amenities";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Pillars />
      <SignatureProject />
      <Amenities />
      <ProjectsGrid />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
