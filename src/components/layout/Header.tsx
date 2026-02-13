import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoNuruzzaman from "@/assets/logo_nuruzzaman.png";

const navLinks = [
  { href: "#kegiatan", label: "Kegiatan" },
  { href: "#kajian", label: "Kajian" },
  { href: "#artikel", label: "Artikel" },
  { href: "#fasilitas", label: "Fasilitas" },
  //{ href: "/permohonan-ruangan", label: "Reservasi", isRoute: true },
  { href: "#laporan", label: "Laporan Keuangan" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 border-border/50 shadow-sm" 
          : "bg-white/70 border-white/20"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logoNuruzzaman} 
              alt="Logo Masjid Nuruzzaman" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="font-display text-lg md:text-xl font-bold text-foreground drop-shadow-sm">Masjid Nuruzzaman</h1>
              <p className="text-xs text-muted-foreground">Masjid Kampus B Unair</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="secondary" size="sm" asChild>
              <Link to="/permohonan-ruangan">Reservasi</Link>
            </Button>
            <Button variant="default" size="sm" asChild>
              <Link to="/ketakmiran">Ketakmiran</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-foreground/5 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-border/50">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium text-foreground/80 hover:bg-foreground/5 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium text-foreground/80 hover:bg-foreground/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              )
            ))}
            <div className="pt-4 border-t border-border/50 mt-2">
              <Button variant="secondary" className="w-full" asChild>
                <Link to="/permohonan-ruangan" onClick={() => setIsMenuOpen(false)}>Reservasi</Link>
              </Button>
              
            </div>
            <div className="">
              <Button variant="default" className="w-full" asChild>
                <Link to="/ketakmiran" onClick={() => setIsMenuOpen(false)}>Ketakmiran</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
