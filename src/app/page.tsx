import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import EventSpaces from "@/components/EventSpaces";
import History from "@/components/History";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import DecorativeDivider from "@/components/ui/decorative-divider";
import FamiliebedriftenTeaser from "@/components/FamiliebedriftenTeaser";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <DecorativeDivider className="my-12" />
      <EventSpaces />

      <DecorativeDivider className="my-12" />
      <FamiliebedriftenTeaser />

      <DecorativeDivider className="my-12" />
      <History />
      <Gallery />

      <FAQ />
      <Contact />
    </div>
  );
}
