import { Car, Wifi, Wind, Droplets, Accessibility, Baby } from "lucide-react";

const facilities = [
  {
    icon: Droplets,
    title: "Tempat Wudhu Bersih",
    description: "Tempat wudhu yang luas dan terawat untuk pria dan wanita",
  },
  {
    icon: Wind,
    title: "Ruang Ber-AC",
    description: "Ruang shalat yang nyaman dengan pendingin udara",
  },
  {
    icon: Car,
    title: "Parkir Luas",
    description: "Area parkir yang memadai untuk kendaraan jamaah",
  },
  {
    icon: Wifi,
    title: "WiFi Gratis",
    description: "Koneksi internet untuk mendukung kegiatan kajian online",
  },
  {
    icon: Accessibility,
    title: "Akses Ramah Difabel",
    description: "Fasilitas yang dapat diakses oleh jamaah berkebutuhan khusus",
  },
  {
    icon: Baby,
    title: "Ruang Ibu & Anak",
    description: "Ruangan khusus untuk ibu menyusui dan anak-anak",
  },
];

export function FacilitiesSection() {
  return (
    <section id="fasilitas" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-100 rounded-full border border-gold-300 mb-6">
              <div className="w-2 h-2 bg-gold-500 rounded-full" />
              <span className="text-gold-700 text-sm font-medium">Fasilitas</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Fasilitas untuk
              <span className="block text-gold-600">Kenyamanan Beribadah</span>
            </h2>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Kami berupaya menyediakan fasilitas yang bersih dan layak agar jamaah dapat beribadah dengan khusyuk dan nyaman.
            </p>
          </div>

          {/* Facilities Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={facility.title}
                className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border/50 hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brown-100 to-brown-200 flex items-center justify-center shrink-0">
                  <facility.icon className="w-6 h-6 text-brown-600" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {facility.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
