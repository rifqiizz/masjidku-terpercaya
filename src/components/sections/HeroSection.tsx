import { Button } from "@/components/ui/button";
import { ChevronDown, Calendar, BookOpen, FileText, Clock, Loader2 } from "lucide-react";
import heroImage1 from "@/assets/hero-nuruzzaman-1.jpg";
import heroImage2 from "@/assets/hero-nuruzzaman-2.jpg";
import { useState, useEffect } from "react";

interface PrayerTime {
  name: string;
  time: string;
}

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [heroImage1, heroImage2];
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([]);
  const [prayerLoading, setPrayerLoading] = useState(true);
  const [hijriDate, setHijriDate] = useState("");
  const [gregorianDate, setGregorianDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();

    setGregorianDate(
      today.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    );

    // Aladhan API - Surabaya coordinates
    fetch(
      `https://api.aladhan.com/v1/timings/${dd}-${mm}-${yyyy}?latitude=-7.2756&longitude=112.7508&method=20`
    )
      .then((res) => res.json())
      .then((data) => {
        const t = data.data.timings;
        setPrayerTimes([
          { name: "Subuh", time: t.Fajr },
          { name: "Dzuhur", time: t.Dhuhr },
          { name: "Ashar", time: t.Asr },
          { name: "Maghrib", time: t.Maghrib },
          { name: "Isya", time: t.Isha },
        ]);
        const h = data.data.date.hijri;
        setHijriDate(`${h.day} ${h.month.en} ${h.year} H`);
        setPrayerLoading(false);
      })
      .catch(() => {
        setPrayerTimes([
          { name: "Subuh", time: "04:30" },
          { name: "Dzuhur", time: "11:45" },
          { name: "Ashar", time: "15:00" },
          { name: "Maghrib", time: "17:30" },
          { name: "Isya", time: "18:45" },
        ]);
        setPrayerLoading(false);
      });
  }, []);

  // Determine next prayer
  const getNextPrayer = () => {
    if (prayerTimes.length === 0) return null;
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    for (const p of prayerTimes) {
      const [h, m] = p.time.split(":").map(Number);
      if (h * 60 + m > currentMinutes) return p.name;
    }
    return prayerTimes[0].name; // next day Subuh
  };

  const nextPrayer = getNextPrayer();

  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Masjid Nuruzzaman"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-brown-900/80 via-brown-800/70 to-brown-900/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 md:w-48 md:h-48 border border-gold-400/20 rounded-full" />
        <div className="absolute bottom-20 right-10 w-24 h-24 md:w-40 md:h-40 border border-gold-400/20 rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-gold-400/40 rounded-full" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-gold-400/30 rounded-full" />
      </div>

      {/* Content - Split Layout */}
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left Side - Existing Content */}
          <div className="lg:col-span-3 text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-400/20 backdrop-blur-sm rounded-full border border-gold-400/30 mb-8 animate-fade-up">
              <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
              <span className="text-gold-200 text-sm font-medium">Selamat Datang di Masjid Kami</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gold-100 leading-tight mb-6 animate-fade-up delay-100">
              Menjadi Tempat Bertumbuhnya
              <span className="block text-gold-400">Iman, Ilmu, dan Amal</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-brown-200 max-w-xl leading-relaxed mb-10 animate-fade-up delay-200">
              Masjid ini hadir sebagai ruang ibadah, pembelajaran, dan pelayanan umat, dengan komitmen amanah, transparan, dan terbuka bagi seluruh jamaah.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up delay-300">
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

          {/* Right Side - Jadwal Sholat */}
          <div className="lg:col-span-2 animate-fade-up delay-200">
            <div className="bg-brown-900/60 backdrop-blur-md border border-gold-400/20 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-gold-600/30 to-gold-400/20 px-6 py-4 border-b border-gold-400/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-400/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-gold-100 text-lg">Jadwal Sholat</h3>
                    <p className="text-gold-300/70 text-xs">Surabaya, Jawa Timur</p>
                  </div>
                </div>
              </div>

              {/* Date */}
              <div className="px-6 py-3 border-b border-gold-400/10 bg-brown-900/30">
                <p className="text-gold-200 text-sm font-medium">{gregorianDate}</p>
                {hijriDate && (
                  <p className="text-gold-400/70 text-xs mt-0.5">{hijriDate}</p>
                )}
              </div>

              {/* Prayer Times */}
              <div className="px-6 py-4">
                {prayerLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="w-6 h-6 text-gold-400 animate-spin" />
                  </div>
                ) : (
                  <div className="space-y-1">
                    {prayerTimes.map((prayer) => (
                      <div
                        key={prayer.name}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
                          nextPrayer === prayer.name
                            ? "bg-gold-400/15 border border-gold-400/30"
                            : "hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {nextPrayer === prayer.name && (
                            <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
                          )}
                          <span
                            className={`font-medium text-sm ${
                              nextPrayer === prayer.name ? "text-gold-300" : "text-brown-200"
                            }`}
                          >
                            {prayer.name}
                          </span>
                          {nextPrayer === prayer.name && (
                            <span className="text-[10px] uppercase tracking-wider text-gold-400 font-semibold bg-gold-400/10 px-2 py-0.5 rounded-full">
                              Berikutnya
                            </span>
                          )}
                        </div>
                        <span
                          className={`font-mono text-sm font-semibold ${
                            nextPrayer === prayer.name ? "text-gold-400" : "text-gold-200/80"
                          }`}
                        >
                          {prayer.time}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer note */}
              <div className="px-6 py-3 border-t border-gold-400/10 bg-brown-900/30">
                <p className="text-gold-300/50 text-[11px] text-center">
                  Sumber: Kemenag RI • Metode Kemenag Indonesia
                </p>
              </div>
            </div>
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
