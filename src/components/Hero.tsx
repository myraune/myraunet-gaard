import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/lovable-uploads/02e53cf1-81be-43b0-acda-0603c8aabe14.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70"></div>
      </div>

      {/* Decorative overlay elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none"></div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-xs tracking-widest font-light">SCROLL</span>
          <ChevronDown className="h-6 w-6 text-white/60" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
