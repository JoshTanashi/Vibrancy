import { Hero } from "@/components/sections/Hero";
import { Premise } from "@/components/sections/Premise";
import { Pillars } from "@/components/sections/Pillars";
import { PillarDeepDive } from "@/components/sections/PillarDeepDive";
import { Evidence } from "@/components/sections/Evidence";
import { WhyItWorks } from "@/components/sections/WhyItWorks";
import { KnowledgeHub } from "@/components/sections/KnowledgeHub";
import { Booking } from "@/components/sections/Booking";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { Newsletter } from "@/components/sections/Newsletter";
import { ConnectingLine } from "@/components/ui/ConnectingLine";
import { pillarDeepDives } from "@/lib/content";

export default function Home() {
  return (
    <main>
      <Hero />
      <Premise />

      <ConnectingLine />

      <Pillars />

      <ConnectingLine />

      {pillarDeepDives.map((content, i) => (
        <PillarDeepDive key={content.id} content={content} reverse={i % 2 === 1} />
      ))}

      <Evidence />
      <WhyItWorks />

      <ConnectingLine />

      <KnowledgeHub />
      <Booking />
      <Contact />
      <FAQ />
      <Newsletter />
    </main>
  );
}
