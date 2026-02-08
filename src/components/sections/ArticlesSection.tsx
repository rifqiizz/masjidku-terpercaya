import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import minaretImage from "@/assets/mosque-minaret.jpg";

const articles = [
  {
    title: "Keutamaan Memakmurkan Masjid",
    excerpt: "Allah SWT berfirman bahwa orang-orang yang memakmurkan masjid adalah mereka yang beriman kepada Allah dan hari akhir...",
    author: "Ustadz Ahmad",
    date: "5 Feb 2026",
    image: minaretImage,
  },
  {
    title: "Adab Memasuki Masjid",
    excerpt: "Masjid adalah rumah Allah yang mulia. Sebagai tamu di rumah Allah, kita hendaknya menjaga adab dan tata krama...",
    author: "Ustadz Ridwan",
    date: "3 Feb 2026",
    image: minaretImage,
  },
  {
    title: "Menjaga Kebersihan Masjid",
    excerpt: "Kebersihan adalah sebagian dari iman. Menjaga kebersihan masjid adalah tanggung jawab bersama seluruh jamaah...",
    author: "Ustadz Hasan",
    date: "1 Feb 2026",
    image: minaretImage,
  },
];

export function ArticlesSection() {
  return (
    <section id="artikel" className="py-16 md:py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brown-100 rounded-full border border-brown-200 mb-6">
              <div className="w-2 h-2 bg-brown-500 rounded-full" />
              <span className="text-brown-700 text-sm font-medium">Artikel & Nasihat</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Nasihat dan Pengingat untuk
              <span className="block text-primary">Kehidupan Sehari-hari</span>
            </h2>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Artikel disajikan sebagai sarana dakwah dan pengingat, agar nilai-nilai Islam dapat diamalkan dalam kehidupan sehari-hari.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {articles.map((article, index) => (
              <article
                key={index}
                className="group bg-background rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="cta" size="lg">
              Baca Artikel Terbaru
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
