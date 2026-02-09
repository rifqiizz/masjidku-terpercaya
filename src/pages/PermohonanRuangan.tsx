import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  GraduationCap, 
  Users, 
  BookOpen, 
  Baby, 
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Calendar as CalendarIcon,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const purposeOptions = [
  {
    id: "akad-nikah",
    title: "Akad Nikah",
    description: "Prosesi ijab qabul pernikahan",
    icon: Heart,
  },
  {
    id: "resepsi-nikah",
    title: "Resepsi Nikah",
    description: "Walimatul 'ursy / resepsi pernikahan",
    icon: Sparkles,
  },
  {
    id: "seminar",
    title: "Seminar",
    description: "Seminar keagamaan atau akademik",
    icon: GraduationCap,
  },
  {
    id: "pelatihan",
    title: "Pelatihan",
    description: "Workshop atau pelatihan keterampilan",
    icon: BookOpen,
  },
  {
    id: "pengajian",
    title: "Pengajian",
    description: "Majelis taklim atau kajian khusus",
    icon: Users,
  },
  {
    id: "aqiqah",
    title: "Aqiqah",
    description: "Acara syukuran aqiqah",
    icon: Baby,
  },
];

// Dummy booked dates for demonstration
const bookedDates = [
  new Date(2026, 1, 14),
  new Date(2026, 1, 15),
  new Date(2026, 1, 21),
  new Date(2026, 1, 28),
];

export default function PermohonanRuangan() {
  const [selectedPurpose, setSelectedPurpose] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    nama: "",
    telepon: "",
    email: "",
    organisasi: "",
    peserta: "",
    keterangan: "",
  });
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  const isDateBooked = (date: Date) => {
    return bookedDates.some(
      (bookedDate) =>
        bookedDate.getDate() === date.getDate() &&
        bookedDate.getMonth() === date.getMonth() &&
        bookedDate.getFullYear() === date.getFullYear()
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Permohonan Terkirim",
      description: "Tim pengurus akan menghubungi Anda dalam 1-2 hari kerja.",
    });
  };

  const canProceedToStep2 = selectedPurpose !== null;
  const canProceedToStep3 = selectedDate !== undefined;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Beranda
            </Link>

            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Permohonan Pemakaian Ruangan
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Ajukan permohonan pemakaian ruangan masjid untuk kegiatan yang bermanfaat dan sesuai syariat Islam.
              </p>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-center gap-4 mb-12">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                      step >= s
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                  </div>
                  <span
                    className={`hidden sm:block text-sm font-medium ${
                      step >= s ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {s === 1 && "Jenis Kegiatan"}
                    {s === 2 && "Pilih Tanggal"}
                    {s === 3 && "Data Pemohon"}
                  </span>
                  {s < 3 && (
                    <div
                      className={`w-8 h-0.5 ${
                        step > s ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step 1: Purpose Selection */}
            {step === 1 && (
              <div className="space-y-8">
                <h2 className="font-display text-xl font-semibold text-foreground text-center">
                  Pilih Jenis Kegiatan
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {purposeOptions.map((purpose) => (
                    <Card
                      key={purpose.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedPurpose === purpose.id
                          ? "ring-2 ring-primary bg-primary/5"
                          : "hover:bg-muted/50"
                      }`}
                      onClick={() => setSelectedPurpose(purpose.id)}
                    >
                      <CardContent className="p-6 text-center">
                        <div
                          className={`w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center transition-colors ${
                            selectedPurpose === purpose.id
                              ? "bg-primary text-primary-foreground"
                              : "bg-gold-100 text-gold-700"
                          }`}
                        >
                          <purpose.icon className="w-7 h-7" />
                        </div>
                        <h3 className="font-display font-semibold text-foreground mb-1">
                          {purpose.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {purpose.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-end">
                  <Button
                    variant="cta"
                    size="lg"
                    onClick={() => setStep(2)}
                    disabled={!canProceedToStep2}
                  >
                    Lanjutkan
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Date Selection */}
            {step === 2 && (
              <div className="space-y-8">
                <h2 className="font-display text-xl font-semibold text-foreground text-center">
                  Pilih Tanggal Kegiatan
                </h2>
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
                  <Card className="p-4">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) =>
                        date < new Date() || isDateBooked(date)
                      }
                      modifiers={{
                        booked: bookedDates,
                      }}
                      modifiersStyles={{
                        booked: {
                          backgroundColor: "hsl(var(--destructive) / 0.1)",
                          color: "hsl(var(--destructive))",
                          textDecoration: "line-through",
                        },
                      }}
                      className="rounded-md"
                    />
                  </Card>
                  <div className="space-y-4 flex-1 max-w-sm">
                    <div className="bg-card p-4 rounded-lg border border-border">
                      <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <CalendarIcon className="w-5 h-5 text-primary" />
                        Keterangan
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded bg-primary" />
                          <span className="text-muted-foreground">Tanggal dipilih</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded bg-destructive/20" />
                          <span className="text-muted-foreground">Sudah terisi</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded bg-muted" />
                          <span className="text-muted-foreground">Tidak tersedia</span>
                        </div>
                      </div>
                    </div>
                    {selectedDate && (
                      <div className="bg-gold-50 p-4 rounded-lg border border-gold-200">
                        <p className="text-sm text-gold-800">
                          <strong>Tanggal dipilih:</strong>{" "}
                          {selectedDate.toLocaleDateString("id-ID", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" size="lg" onClick={() => setStep(1)}>
                    <ArrowLeft className="w-5 h-5" />
                    Kembali
                  </Button>
                  <Button
                    variant="cta"
                    size="lg"
                    onClick={() => setStep(3)}
                    disabled={!canProceedToStep3}
                  >
                    Lanjutkan
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Applicant Data */}
            {step === 3 && (
              <div className="space-y-8">
                <h2 className="font-display text-xl font-semibold text-foreground text-center">
                  Data Pemohon
                </h2>
                <Card className="p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nama">Nama Lengkap *</Label>
                        <Input
                          id="nama"
                          placeholder="Masukkan nama lengkap"
                          value={formData.nama}
                          onChange={(e) =>
                            setFormData({ ...formData, nama: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telepon">Nomor Telepon *</Label>
                        <Input
                          id="telepon"
                          type="tel"
                          placeholder="08xxxxxxxxxx"
                          value={formData.telepon}
                          onChange={(e) =>
                            setFormData({ ...formData, telepon: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="email@contoh.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="organisasi">Nama Organisasi</Label>
                        <Input
                          id="organisasi"
                          placeholder="Jika mewakili organisasi"
                          value={formData.organisasi}
                          onChange={(e) =>
                            setFormData({ ...formData, organisasi: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="peserta">Perkiraan Jumlah Peserta *</Label>
                        <Input
                          id="peserta"
                          type="number"
                          placeholder="Contoh: 50"
                          value={formData.peserta}
                          onChange={(e) =>
                            setFormData({ ...formData, peserta: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="keterangan">Keterangan Tambahan</Label>
                      <Textarea
                        id="keterangan"
                        placeholder="Jelaskan detail kegiatan, kebutuhan khusus, atau informasi lainnya"
                        rows={4}
                        value={formData.keterangan}
                        onChange={(e) =>
                          setFormData({ ...formData, keterangan: e.target.value })
                        }
                      />
                    </div>

                    {/* Summary */}
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-foreground">Ringkasan Permohonan</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>
                          <strong>Jenis Kegiatan:</strong>{" "}
                          {purposeOptions.find((p) => p.id === selectedPurpose)?.title}
                        </p>
                        <p>
                          <strong>Tanggal:</strong>{" "}
                          {selectedDate?.toLocaleDateString("id-ID", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="bg-cream p-4 rounded-lg border border-brown-200">
                      <p className="text-brown-700 text-sm italic">
                        Catatan: Setiap permohonan akan melalui proses peninjauan oleh pengurus masjid. Tim kami akan menghubungi Anda dalam 1-2 hari kerja.
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" size="lg" onClick={() => setStep(2)}>
                        <ArrowLeft className="w-5 h-5" />
                        Kembali
                      </Button>
                      <Button variant="cta" size="lg" type="submit">
                        Kirim Permohonan
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </form>
                </Card>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
