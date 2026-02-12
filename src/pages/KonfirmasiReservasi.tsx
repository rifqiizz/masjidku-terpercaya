import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Clock, 
  Mail, 
  Phone, 
  Home, 
  QrCode,
  Calendar,
  Users,
  User,
  MessageCircle
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

export default function KonfirmasiReservasi() {
  const [searchParams] = useSearchParams();
  
  const bookingId = searchParams.get("id") || "NZM-2026-0214-001";
  const kegiatan = searchParams.get("kegiatan") || "Akad Nikah";
  const tanggal = searchParams.get("tanggal") || "Sabtu, 14 Februari 2026";
  const nama = searchParams.get("nama") || "Ahmad Fauzan";
  const peserta = searchParams.get("peserta") || "100";
  const email = searchParams.get("email") || "ahmad@email.com";
  const kontribusi = searchParams.get("kontribusi") || "Rp500.000";

  // Generate a simple QR-like visual using the booking ID
  const qrPattern = bookingId.split("").map((char, i) => {
    const code = char.charCodeAt(0);
    return { filled: (code + i) % 3 !== 0 };
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Success Icon */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                Permohonan Berhasil Dikirim!
              </h1>
              <p className="text-muted-foreground">
                Terima kasih, permohonan Anda telah kami terima dan sedang diproses.
              </p>
            </div>

            {/* QR Code & Booking ID */}
            <Card className="mb-6 overflow-hidden">
              <div className="bg-primary/5 p-6 text-center border-b border-border/50">
                <div className="inline-flex flex-col items-center">
                  {/* QR Code Placeholder */}
                  <div className="w-40 h-40 bg-white rounded-xl p-3 shadow-sm border border-border mb-3">
                    <div className="w-full h-full grid grid-cols-8 grid-rows-8 gap-0.5">
                      {Array.from({ length: 64 }).map((_, i) => {
                        const row = Math.floor(i / 8);
                        const col = i % 8;
                        // Create a QR-like pattern based on booking ID
                        const hash = (bookingId.charCodeAt(i % bookingId.length) * (i + 1)) % 7;
                        const isCorner = (row < 2 && col < 2) || (row < 2 && col > 5) || (row > 5 && col < 2);
                        const filled = isCorner || hash < 3;
                        return (
                          <div
                            key={i}
                            className={`rounded-[1px] ${filled ? "bg-foreground" : "bg-transparent"}`}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                    <QrCode className="w-4 h-4" />
                    <span>Kode Booking</span>
                  </div>
                  <p className="font-mono text-xl font-bold text-foreground tracking-wider">
                    {bookingId}
                  </p>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="font-display font-semibold text-foreground text-lg">Detail Reservasi</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Jenis Kegiatan & Tanggal</p>
                      <p className="font-medium text-foreground">{kegiatan}</p>
                      <p className="text-sm text-foreground">{tanggal}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <User className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Nama Pemohon</p>
                      <p className="font-medium text-foreground">{nama}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Jumlah Peserta</p>
                      <p className="font-medium text-foreground">{peserta} orang</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">{email}</p>
                    </div>
                  </div>
                </div>

                {/* Contribution */}
                <div className="bg-gold-50 border border-gold-200 rounded-lg p-4 text-center">
                  <p className="text-sm text-gold-700 mb-1">Kontribusi Infaq</p>
                  <p className="font-mono text-2xl font-bold text-gold-800">{kontribusi}</p>
                </div>
              </CardContent>
            </Card>

            {/* Status Card */}
            <Card className="mb-6 border-amber-200 bg-amber-50/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-800 mb-1">Status: Menunggu Verifikasi</h3>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      Permohonan Anda sedang dalam proses verifikasi pembayaran oleh pengurus masjid. 
                      Proses verifikasi membutuhkan waktu <strong>maksimal 2x24 jam</strong> setelah bukti transfer diterima.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email Notification */}
            <Card className="mb-6 border-blue-200 bg-blue-50/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-1">Email Konfirmasi Terkirim</h3>
                    <p className="text-sm text-blue-700">
                      Detail reservasi dan kode booking telah dikirimkan ke <strong>{email}</strong>. 
                      Silakan periksa kotak masuk atau folder spam Anda.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Admin */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Butuh Bantuan?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Jika ada pertanyaan atau perlu konfirmasi lebih lanjut, silakan hubungi admin masjid:
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" className="flex-1 gap-2" asChild>
                    <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Admin
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2" asChild>
                    <a href="tel:+6231123456">
                      <Phone className="w-4 h-4" />
                      Telepon Sekretariat
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Back to Home */}
            <div className="text-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/">
                  <Home className="w-5 h-5" />
                  Kembali ke Beranda
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
