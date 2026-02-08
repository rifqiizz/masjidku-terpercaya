import { Button } from "@/components/ui/button";
import { Calendar, BookOpen, Moon } from "lucide-react";
import ramadanImage from "@/assets/ramadan-lantern.jpg";

export function MomentumSection() {
  return (
    <section id="momentum" className="py-16 md:py-24 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-gold-400/20 to-brown-400/20 rounded-2xl blur-xl" />
                <div className="relative overflow-hidden rounded-2xl shadow-elevated">
                  <img
                    src={ramadanImage}
                    alt="Lentera Ramadhan"
                    className="w-full h-64 md:h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold-500/90 backdrop-blur-sm rounded-full">
                      <Moon className="w-4 h-4 text-brown-900" />
                      <span className="text-brown-900 text-sm font-semibold">Menyambut Ramadhan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-100 rounded-full border border-gold-300 mb-6">
                <div className="w-2 h-2 bg-gold-500 rounded-full" />
                <span className="text-gold-700 text-sm font-medium">Momentum Istimewa</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                Menyambut Ramadhan,
                <span className="block text-gold-600">Persiapkan Diri Sejak Sekarang</span>
              </h2>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                Ramadhan adalah bulan yang penuh keberkahan dan ampunan. Mari kita persiapkan diri dengan memperbanyak ilmu, memperbaiki ibadah, dan menghidupkan masjid dengan kegiatan yang bermanfaat.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg">
                  <Calendar className="w-5 h-5" />
                  Lihat Agenda Ramadhan
                </Button>
                <Button variant="soft" size="lg">
                  <BookOpen className="w-5 h-5" />
                  Kajian Persiapan Ramadhan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
