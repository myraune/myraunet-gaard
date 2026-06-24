"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: { label: string; id: string; isRoute: boolean }[] = [
    { label: "Familiebedriften", id: "/familiebedriften", isRoute: true },
    { label: "Kontakt oss", id: "contact", isRoute: false },
  ];

  const handleNavClick = (id: string, isRoute: boolean) => {
    if (isRoute) {
      router.push(id);
    } else if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
    setIsMobileMenuOpen(false);
  };

  const handleBrandClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBrandClick}
              className={`text-2xl font-serif font-semibold transition-colors ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white hover:text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              }`}
            >
              Myraunet Gård
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id, item.isRoute)}
                  className={`font-medium transition-colors hover:text-primary min-h-[44px] px-4 ${
                    isScrolled
                      ? "text-foreground"
                      : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-10 px-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id, item.isRoute)}
                className="text-3xl font-serif text-foreground hover:text-primary transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
