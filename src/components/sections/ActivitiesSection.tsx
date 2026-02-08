import { Button } from "@/components/ui/button";
import { BookOpen, Users, Heart, GraduationCap, ArrowRight } from "lucide-react";

const activities = [
  {
    icon: BookOpen,
    title: "Kajian Rutin & Tematik",
    description: "Kajian berkala untuk memperdalam pemahaman agama",
  },
  {
    icon: Users,
    title: "Kegiatan Ramadhan",
    description: "Program khusus menyambut bulan suci Ramadhan",
  },
  {
    icon: Heart,
    title: "Kegiatan Sosial",
    description: "Berbagi dan membantu sesama umat yang membutuhkan",
  },
  {
    icon: GraduationCap,
    title: "Pembinaan Anak & Remaja",
    description: "Membentuk generasi muslim yang berakhlak mulia",
  },
];

export function ActivitiesSection() {
  return (
    <section id="kegiatan" className="py-16 md:py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brown-100 rounded-full border border-brown-200 mb-6">
              <div className="w-2 h-2 bg-brown-500 rounded-full" />
              <span className="text-brown-700 text-sm font-medium">Kegiatan Masjid</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Menghidupkan Masjid dengan
              <span className="block text-primary">Kegiatan yang Bermanfaat</span>
            </h2>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Kegiatan masjid diselenggarakan untuk memperkuat iman, menambah ilmu, serta mempererat ukhuwah antar jamaah.
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {activities.map((activity, index) => (
              <div
                key={activity.title}
                className="group bg-background rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center mb-4 group-hover:from-gold-200 group-hover:to-gold-300 transition-colors">
                  <activity.icon className="w-7 h-7 text-gold-700" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="cta" size="lg">
              Lihat Seluruh Kegiatan
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
