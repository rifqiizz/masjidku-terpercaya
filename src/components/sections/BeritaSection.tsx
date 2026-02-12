import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroMosque from "@/assets/hero-mosque.jpg";
import mosqueMinaret from "@/assets/mosque-minaret.jpg";
import heroNuruzzaman1 from "@/assets/hero-nuruzzaman-1.jpg";
import heroNuruzzaman2 from "@/assets/hero-nuruzzaman-2.jpg";

const newsItems = [
  {
    id: 1,
    title: "Renovasi Aula Lantai 2 Masjid Nuruzzaman Selesai",
    category: "Fasilitas",
    date: "10 Feb 2026",
    excerpt: "Alhamdulillah, renovasi aula lantai 2 telah selesai dan siap digunakan untuk berbagai kegiatan umat.",
    image: heroMosque,
    featured: true,
  },
  {
    id: 2,
    title: "Jadwal Kajian Rutin Bulan Februari 2026",
    category: "Kajian",
    date: "5 Feb 2026",
    excerpt: "Berikut jadwal kajian rutin yang akan diselenggarakan sepanjang bulan Februari.",
    image: mosqueMinaret,
    featured: false,
  },
  {
    id: 3,
    title: "Pembagian Santunan Anak Yatim",
    category: "Kegiatan Sosial",
    date: "1 Feb 2026",
    excerpt: "Masjid Nuruzzaman menyalurkan santunan kepada 50 anak yatim di sekitar kampus.",
    image: heroNuruzzaman1,
    featured: false,
  },
  {
    id: 4,
    title: "Pendaftaran Manasik Haji Dibuka",
    category: "Pengumuman",
    date: "28 Jan 2026",
    excerpt: "Pendaftaran pelatihan manasik haji dan umroh gelombang pertama telah dibuka.",
    image: heroNuruzzaman2,
    featured: false,
  },
  {
    id: 5,
    title: "Pelatihan Pengurusan Jenazah",
    category: "Pengumuman",
    date: "28 Jan 2026",
    excerpt: "Pendaftaran pelatihan manasik haji dan umroh gelombang pertama telah dibuka.",
    image: heroNuruzzaman1,
    featured: false,
  },
  {
    id: 6,
    title: "Lowongan Infaq Pavingisasi Parkir",
    category: "Pengumuman",
    date: "28 Jan 2026",
    excerpt: "Pendaftaran pelatihan manasik haji dan umroh gelombang pertama telah dibuka.",
    image: mosqueMinaret,
    featured: false,
  },
];

export function BeritaSection() {
  const featured = newsItems[0];
  const rest = newsItems.slice(1);

  return (
    <section id="berita" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-primary text-sm font-medium">Berita Terkini</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Berita Masjid
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Featured - spans 2 cols on lg */}
            <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-2xl">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-64 md:h-full min-h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="inline-block px-2.5 py-0.5 bg-gold-500 text-brown-900 text-xs font-semibold rounded-full mb-3">
                  {featured.category}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                  {featured.title}
                </h3>
                <p className="text-white/80 text-sm mb-4 line-clamp-2 max-w-lg">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-xs">{featured.date}</span>
                  <Button variant="hero" size="sm" className="gap-1.5">
                    Read more
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Smaller cards */}
            {rest.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-md transition-shadow"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2 py-0.5 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-display font-semibold text-foreground text-sm leading-snug mb-1.5 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xs line-clamp-2 mb-3">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-xs">{item.date}</span>
                    <Button variant="ghost" size="sm" className="h-7 px-2 text-xs gap-1 text-primary">
                      Read more
                      <ArrowRight className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
