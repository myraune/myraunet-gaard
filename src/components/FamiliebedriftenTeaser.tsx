import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FamiliebedriftenTeaser = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Familiebedriften
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              RÅGO - Norsk kvalitet fra gård til bord
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              RÅGO er vår egen grønnsaksprodusent som leverer ferske, norskdyrkede grønnsaker av høyeste kvalitet. Fra jord til bord - alt med kjærlighet til norsk matkultur.
            </p>
            <div className="pt-2">
              <Link href="/familiebedriften">
                <Button size="lg" className="group">
                  Les mer om RÅGO
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/lovable-uploads/raago-hero.avif"
              alt="RÅGO gårdsbilde"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamiliebedriftenTeaser;
