import { Button } from "@/components/ui/button";
import { Building2, Users, GraduationCap, Heart, ArrowRight } from "lucide-react";

const roomTypes = [
  {
    icon: Users,
    title: "Ruang Pertemuan",
    capacity: "50-100 orang",
  },
  {
    icon: GraduationCap,
    title: "Ruang Kelas",
    capacity: "20-30 orang",
  },
  {
    icon: Heart,
    title: "Aula Serbaguna",
    capacity: "100-200 orang",
  },
];

export function RoomRentalSection() {
  return (
    <section className="py-16 md:py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brown-100 rounded-full border border-brown-200 mb-6">
                <Building2 className="w-4 h-4 text-brown-600" />
                <span className="text-brown-700 text-sm font-medium">Pemanfaatan Ruang</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
                Pemanfaatan Ruang untuk
                <span className="block text-primary">Kegiatan yang Bermanfaat</span>
              </h2>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                Masjid menyediakan ruang yang dapat dimanfaatkan untuk kegiatan yang bernilai ibadah, pendidikan, dan kemaslahatan umat.
              </p>

              <div className="bg-cream rounded-lg p-4 border border-brown-200 mb-8">
                <p className="text-brown-700 text-sm italic">
                  Catatan: Setiap permohonan akan melalui proses peninjauan oleh pengurus masjid untuk memastikan kegiatan sesuai dengan syariat Islam.
                </p>
              </div>

              <Button variant="cta" size="lg">
                Ajukan Permohonan Pemakaian Ruangan
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Room Types */}
            <div className="space-y-4">
              {roomTypes.map((room, index) => (
                <div
                  key={room.title}
                  className="flex items-center gap-4 p-5 bg-background rounded-xl shadow-card border border-border/50"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center shrink-0">
                    <room.icon className="w-7 h-7 text-gold-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {room.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Kapasitas: {room.capacity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
