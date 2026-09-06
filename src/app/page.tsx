import { About } from "@/components/sections/About";
import { Content } from "@/components/sections/Content";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { Philosophy } from "@/components/sections/Philosophy";
import { Pkfx } from "@/components/sections/Pkfx";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";
import { StructuredData } from "@/components/site/StructuredData";
import { Grain } from "@/components/ui/Grain";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Grain />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Journey />
        <WhatIDo />
        <Content />
        <Pkfx />
        <Philosophy />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
