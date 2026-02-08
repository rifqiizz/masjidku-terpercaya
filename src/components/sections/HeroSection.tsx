import { Button } from "@/components/ui/button";
import { ChevronDown, Calendar, BookOpen, FileText } from "lucide-react";
import heroImage from "@/assets/hero-mosque.jpg";

export function HeroSection() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Interior Masjid"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown-900/80 via-brown-800/70 to-brown-900/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 md:w-48 md:h-48 border border-gold-400/20 rounded-full" />
        <div className="absolute bottom-20 right-10 w-24 h-24 md:w-40 md:h-40 border border-gold-400/20 rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-gold-400/40 rounded-full" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-gold-400/30 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-400/20 backdrop-blur-sm rounded-full border border-gold-400/30 mb-8 animate-fade-up">
            <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
            <span className="text-gold-200 text-sm font-medium">Selamat Datang di Masjid Kami</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gold-100 leading-tight mb-6 animate-fade-up delay-100">
            Menjadi Tempat Bertumbuhnya
            <span className="block text-gold-400">Iman, Ilmu, dan Amal</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-brown-200 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up delay-200">
            Masjid ini hadir sebagai ruang ibadah, pembelajaran, dan pelayanan umat, dengan komitmen amanah, transparan, dan terbuka bagi seluruh jamaah.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              <Calendar className="w-5 h-5" />
              Lihat Kegiatan Masjid
            </Button>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
              <BookOpen className="w-5 h-5" />
              Ikuti Kajian
            </Button>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
              <FileText className="w-5 h-5" />
              Laporan Keuangan
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#momentum" className="flex flex-col items-center gap-2 text-gold-300/60 hover:text-gold-300 transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
