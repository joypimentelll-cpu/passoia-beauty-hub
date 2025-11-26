import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import passoiaLogo from "@/assets/passoia-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <img src={passoiaLogo} alt="PASSOIA" className="h-12 w-auto" />
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("looks")}
              className="text-sm font-semibold hover:text-primary transition-colors"
            >
              Look
            </button>
            <button
              onClick={() => scrollToSection("lancamentos")}
              className="text-sm font-semibold hover:text-primary transition-colors"
            >
              Lançamentos
            </button>
            <button
              onClick={() => scrollToSection("novidades")}
              className="text-sm font-semibold hover:text-primary transition-colors"
            >
              Novidades
            </button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed right-3 top-20 z-50 md:hidden">
          <div className="rounded-lg border border-border bg-background p-4 shadow-lg">
            <nav className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("looks")}
                className="text-left text-sm font-semibold hover:text-primary transition-colors"
              >
                Look
              </button>
              <button
                onClick={() => scrollToSection("lancamentos")}
                className="text-left text-sm font-semibold hover:text-primary transition-colors"
              >
                Lançamentos
              </button>
              <button
                onClick={() => scrollToSection("novidades")}
                className="text-left text-sm font-semibold hover:text-primary transition-colors"
              >
                Novidades
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
