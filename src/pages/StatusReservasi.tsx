import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  Mail, 
  Phone, 
  Home, 
  QrCode,
  Calendar,
  Users,
  User,
  MessageCircle,
  CheckCircle2,
  XCircle,
  FileText,
  CreditCard,
  Send
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

const timelineEvents = [
  {
    date: "12 Feb 2026, 14:30",
    title: "Permohonan Dikirim",
    description: "Formulir permohonan berhasil dikirim oleh pemohon.",
    icon: Send,
    status: "done" as const,
  },
  {
    date: "12 Feb 2026, 14:30",
    title: "Bukti Pembayaran Diterima",
    description: "Sistem menerima data pembayaran transfer manual.",
    icon: CreditCard,
    status: "done" as const,
  },
  {
    date: "13 Feb 2026, 09:15",
    title: "Verifikasi Pembayaran",
    description: "Admin sedang memverifikasi bukti pembayaran.",
    icon: FileText,
    status: "current" as const,
  },
  {
    date: "-",
    title: "Persetujuan Pengurus",
    description: "Menunggu persetujuan dari pengurus masjid.",
    icon: CheckCircle2,
    status: "pending" as const,
  },
  {
    date: "-",
    title: "Reservasi Dikonfirmasi",
    description: "Reservasi resmi dikonfirmasi dan dijadwalkan.",
    icon: Calendar,
    status: "pending" as const,
  },
];

export default function StatusReservasi() {
  const [searchParams] = useSearchParams();
  
  const bookingId = searchParams.get("id") || "NZM-2026-0214-001";
  const kegiatan = searchParams.get("kegiatan") || "Akad Nikah";
  const tanggal = searchParams.get("tanggal") || "Sabtu, 14 Februari 2026";
  const nama = searchParams.get("nama") || "Ahmad Fauzan";
  const peserta = searchParams.get("peserta") || "100";
  const email = searchParams.get("email") || "ahmad@email.com";
  const kontribusi = searchParams.get("kontribusi") || "Rp500.000";
  const statusParam = searchParams.get("status") || "pending";

  const isVerified = statusParam === "verified";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* QR Code & Booking ID */}
            <Card className="mb-6 overflow-hidden">
              <div className="bg-primary/5 p-6 text-center border-b border-border/50">
                <div className="inline-flex flex-col items-center">
                  <div className="w-40 h-40 bg-white rounded-xl p-3 shadow-sm border border-border mb-3">
                    <div className="w-full h-full grid grid-cols-8 grid-rows-8 gap-0.5">
                      {Array.from({ length: 64 }).map((_, i) => {
                        const row = Math.floor(i / 8);
                        const col = i % 8;
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

                <div className="bg-gold-50 border border-gold-200 rounded-lg p-4 text-center">
                  <p className="text-sm text-gold-700 mb-1">Kontribusi Infaq</p>
                  <p className="font-mono text-2xl font-bold text-gold-800">{kontribusi}</p>
                </div>
              </CardContent>
            </Card>

            {/* Status Card */}
            {isVerified ? (
              <Card className="mb-6 border-green-200 bg-green-50/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800 mb-1">Status: Terverifikasi</h3>
                      <p className="text-sm text-green-700 leading-relaxed">
                        Pembayaran Anda telah diverifikasi dan reservasi telah dikonfirmasi oleh pengurus masjid.
                        Silakan datang sesuai jadwal yang telah ditentukan.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
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
            )}

            {/* Timeline */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="font-display font-semibold text-foreground text-lg mb-6">Histori Pemesanan</h3>
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" />
                  
                  <div className="space-y-6">
                    {timelineEvents.map((event, idx) => {
                      const IconComp = event.icon;
                      const isDone = event.status === "done";
                      const isCurrent = event.status === "current";
                      
                      return (
                        <div key={idx} className="relative flex items-start gap-4 pl-1">
                          <div
                            className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                              isDone
                                ? "bg-green-100 text-green-600"
                                : isCurrent
                                ? "bg-amber-100 text-amber-600 ring-2 ring-amber-300"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div className="pt-1">
                            <p className={`font-medium text-sm ${isDone || isCurrent ? "text-foreground" : "text-muted-foreground"}`}>
                              {event.title}
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5">{event.description}</p>
                            <p className={`text-xs mt-1 ${isDone ? "text-green-600" : isCurrent ? "text-amber-600" : "text-muted-foreground"}`}>
                              {event.date}
                            </p>
                          </div>
                        </div>
                      );
                    })}
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
