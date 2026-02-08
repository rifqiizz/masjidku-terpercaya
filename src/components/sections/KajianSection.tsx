import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const kajianList = [
  {
    title: "Fiqih Ibadah Sehari-hari",
    ustadz: "Ustadz Ahmad Fauzi",
    time: "Ba'da Maghrib",
    day: "Setiap Senin",
    badge: "Kajian Rutin",
    badgeVariant: "gold" as const,
  },
  {
    title: "Tafsir Al-Quran",
    ustadz: "Ustadz Muhammad Ridwan",
    time: "Ba'da Subuh",
    day: "Setiap Ahad",
    badge: "Kajian Rutin",
    badgeVariant: "gold" as const,
  },
  {
    title: "Persiapan Menyambut Ramadhan",
    ustadz: "Ustadz Abdullah Hakim",
    time: "Ba'da Isya",
    day: "Sabtu, 15 Feb 2026",
    badge: "Kajian Ramadhan",
    badgeVariant: "accent" as const,
  },
  {
    title: "Sirah Nabawiyyah",
    ustadz: "Ustadz Hasan Ali",
    time: "20:00 WIB",
    day: "Setiap Kamis",
    badge: "Kajian Online",
    badgeVariant: "brown" as const,
  },
];

export function KajianSection() {
  return (
    <section id="kajian" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-100 rounded-full border border-gold-300 mb-6">
              <div className="w-2 h-2 bg-gold-500 rounded-full" />
              <span className="text-gold-700 text-sm font-medium">Kajian Ilmu</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Menuntut Ilmu,
              <span className="block text-gold-600">Menguatkan Iman</span>
            </h2>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Kajian disampaikan oleh para ustadz dan pemateri terpercaya, sebagai ikhtiar bersama dalam menambah pemahaman agama.
            </p>
          </div>

          {/* Kajian List */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {kajianList.map((kajian, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <Badge variant={kajian.badgeVariant}>{kajian.badge}</Badge>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {kajian.title}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User className="w-4 h-4 text-gold-500" />
                    <span>{kajian.ustadz}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-gold-500" />
                    <span>{kajian.day}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4 text-gold-500" />
                    <span>{kajian.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg">
              Ikuti Kajian
            </Button>
            <Button variant="soft" size="lg">
              Lihat Jadwal Kajian
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
