import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brown-800 text-brown-100">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <span className="text-brown-900 font-display font-bold text-xl">N</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gold-300">Masjid Nuruzzaman</h3>
                <p className="text-sm text-brown-300">Masjid Kampus B Unair</p>
              </div>
            </div>
            <p className="text-brown-300 leading-relaxed max-w-md font-display text-lg italic mt-6">
              "Semoga masjid ini menjadi tempat yang menguatkan iman, menumbuhkan ilmu, dan mempererat ukhuwah umat."
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold-300 mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                <span className="text-brown-300 text-sm">
                  Kampus B, Universitas Airlangga, Jl. Airlangga Selatan No.4-6, Gubeng, Surabaya, East Java 60286
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                <span className="text-brown-300 text-sm">(021) 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-400 shrink-0" />
                <span className="text-brown-300 text-sm">info@masjidalikh las.id</span>
              </li>
            </ul>
          </div>

          {/* Jadwal Shalat */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold-300 mb-4">Jadwal Shalat</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <div className="flex justify-between flex-1 text-sm">
                  <span className="text-brown-300">Subuh</span>
                  <span className="text-brown-200">04:30</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <div className="flex justify-between flex-1 text-sm">
                  <span className="text-brown-300">Dzuhur</span>
                  <span className="text-brown-200">12:00</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <div className="flex justify-between flex-1 text-sm">
                  <span className="text-brown-300">Ashar</span>
                  <span className="text-brown-200">15:15</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <div className="flex justify-between flex-1 text-sm">
                  <span className="text-brown-300">Maghrib</span>
                  <span className="text-brown-200">18:00</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <div className="flex justify-between flex-1 text-sm">
                  <span className="text-brown-300">Isya</span>
                  <span className="text-brown-200">19:15</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brown-700">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-brown-400 text-sm">
            © 2026 Masjid Nuruzzaman. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
