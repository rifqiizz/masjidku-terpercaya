import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Heart, 
  GraduationCap, 
  Users, 
  BookOpen, 
  Compass,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Calendar as CalendarIcon,
  CheckCircle2,
  FileCheck,
  CreditCard,
  Building2,
  Copy,
  Check,
  HelpCircle
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
    id: "manasik",
    title: "Manasik Haji/Umroh",
    description: "Pelatihan tata cara haji dan umroh",
    icon: Compass,
  },
];

// Dummy booked events for demonstration
const bookedEvents = [
  { date: new Date(2026, 1, 14), title: "Akad Nikah - Bp. Ahmad" },
  { date: new Date(2026, 1, 15), title: "Resepsi Nikah" },
  { date: new Date(2026, 1, 21), title: "Seminar Pendidikan" },
  { date: new Date(2026, 1, 28), title: "Manasik Haji" },
  { date: new Date(2026, 2, 7), title: "Pengajian Akbar" },
  { date: new Date(2026, 2, 14), title: "Pelatihan Tahsin" },
];

const bankAccounts = [
  {
    id: "bsi",
    bank: "Bank Syariah Indonesia (BSI)",
    accountNumber: "7123456789",
    accountName: "Masjid Nuruzzaman Unair",
    logo: "🏦",
  },
  {
    id: "mandiri",
    bank: "Bank Mandiri",
    accountNumber: "1400012345678",
    accountName: "Masjid Nuruzzaman Unair",
    logo: "🏛️",
  },
  {
    id: "bca",
    bank: "Bank BCA",
    accountNumber: "8901234567",
    accountName: "Masjid Nuruzzaman Unair",
    logo: "🏢",
  },
];

const stepLabels = [
  "Jenis Kegiatan",
  "Pilih Tanggal", 
  "Data Pemohon",
  "Persetujuan",
  "Pembayaran"
];

export default function PermohonanRuangan() {
  const navigate = useNavigate();
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
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const [checkBookingId, setCheckBookingId] = useState("");
  const [checkPhone, setCheckPhone] = useState("");
  const { toast } = useToast();

  const isDateBooked = (date: Date) => {
    return bookedEvents.some(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  const getEventForDate = (date: Date) => {
    return bookedEvents.find(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  const handleSubmit = () => {
    const params = new URLSearchParams({
      id: `NZM-2026-${String(selectedDate?.getMonth()! + 1).padStart(2, "0")}${String(selectedDate?.getDate()).padStart(2, "0")}-${String(Math.floor(Math.random() * 999) + 1).padStart(3, "0")}`,
      kegiatan: purposeOptions.find((p) => p.id === selectedPurpose)?.title || "",
      tanggal: selectedDate?.toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" }) || "",
      nama: formData.nama,
      peserta: formData.peserta,
      email: formData.email || "-",
      kontribusi: new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(getContributionAmount()),
    });
    navigate(`/konfirmasi-reservasi?${params.toString()}`);
  };

  const handleCopyAccount = (accountNumber: string) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedAccount(accountNumber);
    toast({
      title: "Nomor rekening disalin",
      description: accountNumber,
    });
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  const canProceedToStep2 = selectedPurpose !== null;
  const canProceedToStep3 = selectedDate !== undefined;
  const canProceedToStep4 = formData.nama && formData.telepon && formData.peserta;
  const canProceedToStep5 = agreedToTerms;

  // Calculate contribution amount based on event type
  const getContributionAmount = () => {
    switch (selectedPurpose) {
      case "akad-nikah":
        return 500000;
      case "resepsi-nikah":
        return 1500000;
      case "seminar":
        return 750000;
      case "pelatihan":
        return 500000;
      case "pengajian":
        return 300000;
      case "manasik":
        return 1000000;
      default:
        return 0;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
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
            <div className="flex items-center justify-center gap-2 md:gap-4 mb-12 overflow-x-auto pb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-semibold transition-colors flex-shrink-0 ${
                      step >= s
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > s ? <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" /> : s}
                  </div>
                  <span
                    className={`hidden lg:block text-sm font-medium whitespace-nowrap ${
                      step >= s ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {stepLabels[s - 1]}
                  </span>
                  {s < 5 && (
                    <div
                      className={`w-4 md:w-8 h-0.5 ${
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

            {/* Step 2: Date Selection - Improved Layout */}
            {step === 2 && (
              <div className="space-y-8">
                <h2 className="font-display text-xl font-semibold text-foreground text-center">
                  Pilih Tanggal Kegiatan
                </h2>
                
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Calendar - Wide */}
                  <Card className="lg:col-span-2 p-4 md:p-6">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) =>
                        date < new Date() || isDateBooked(date)
                      }
                      modifiers={{
                        booked: bookedEvents.map(e => e.date),
                      }}
                      modifiersStyles={{
                        booked: {
                          backgroundColor: "hsl(var(--destructive) / 0.1)",
                          color: "hsl(var(--destructive))",
                          textDecoration: "line-through",
                        },
                      }}
                      className="rounded-md w-full"
                      classNames={{
                        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                        month: "space-y-4 w-full",
                        caption: "flex justify-center pt-1 relative items-center",
                        caption_label: "text-base font-medium",
                        table: "w-full border-collapse",
                        head_row: "flex w-full",
                        head_cell: "text-muted-foreground rounded-md flex-1 font-normal text-sm",
                        row: "flex w-full mt-2",
                        cell: "flex-1 text-center text-sm relative p-0 [&:has([aria-selected])]:bg-accent",
                        day: "h-10 w-full p-0 font-normal aria-selected:opacity-100 hover:bg-accent rounded-md",
                        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                        day_today: "bg-accent text-accent-foreground",
                        day_outside: "text-muted-foreground opacity-50",
                        day_disabled: "text-muted-foreground opacity-50",
                      }}
                    />
                  </Card>

                  {/* Side Panel */}
                  <div className="space-y-4">
                    {/* Legend */}
                    <Card className="p-4">
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
                    </Card>

                    {/* Selected Date */}
                    {selectedDate && (
                      <Card className="p-4 bg-gold-50 border-gold-200">
                        <p className="text-sm text-gold-800">
                          <strong>Tanggal dipilih:</strong>{" "}
                          {selectedDate.toLocaleDateString("id-ID", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </Card>
                    )}

                    {/* Upcoming Events */}
                    <Card className="p-4">
                      <h3 className="font-semibold text-foreground mb-3">
                        Jadwal Terisi
                      </h3>
                      <div className="space-y-2 text-sm max-h-48 overflow-y-auto">
                        {bookedEvents
                          .filter(e => e.date >= new Date())
                          .sort((a, b) => a.date.getTime() - b.date.getTime())
                          .slice(0, 5)
                          .map((event, idx) => (
                            <div key={idx} className="flex items-start gap-2 p-2 bg-muted/50 rounded">
                              <div className="w-2 h-2 rounded-full bg-destructive mt-1.5 flex-shrink-0" />
                              <div>
                                <p className="font-medium text-foreground">{event.title}</p>
                                <p className="text-muted-foreground text-xs">
                                  {event.date.toLocaleDateString("id-ID", {
                                    weekday: "short",
                                    day: "numeric",
                                    month: "short",
                                  })}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </Card>
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
                  <div className="space-y-6">
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

                    <div className="flex justify-between">
                      <Button variant="outline" size="lg" onClick={() => setStep(2)}>
                        <ArrowLeft className="w-5 h-5" />
                        Kembali
                      </Button>
                      <Button
                        variant="cta"
                        size="lg"
                        onClick={() => setStep(4)}
                        disabled={!canProceedToStep4}
                      >
                        Lanjutkan
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Step 4: Agreement */}
            {step === 4 && (
              <div className="space-y-8">
                <h2 className="font-display text-xl font-semibold text-foreground text-center flex items-center justify-center gap-2">
                  <FileCheck className="w-6 h-6 text-primary" />
                  Persetujuan
                </h2>
                
                <Card className="p-6 md:p-8">
                  <div className="space-y-6">
                    <div className="bg-muted/50 p-6 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-4">Syarat dan Ketentuan</h3>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <p>1. Kegiatan yang diselenggarakan harus sesuai dengan syariat Islam dan tidak bertentangan dengan nilai-nilai keislaman.</p>
                        <p>2. Pemohon bertanggung jawab atas kebersihan dan kerapian ruangan setelah acara selesai.</p>
                        <p>3. Penggunaan sound system dan fasilitas masjid harus sesuai dengan ketentuan yang berlaku.</p>
                        <p>4. Masjid berhak membatalkan reservasi jika terdapat kegiatan masjid yang bersifat mendesak.</p>
                        <p>5. Kontribusi yang dibayarkan merupakan infaq untuk operasional masjid dan tidak dapat dikembalikan jika pembatalan dari pihak pemohon.</p>
                        <p>6. Pemohon wajib mengikuti protokol dan aturan yang ditetapkan oleh pengurus masjid.</p>
                        <p>7. Segala kerusakan fasilitas akibat kelalaian pengguna menjadi tanggung jawab pemohon.</p>
                      </div>
                    </div>

                    {/* Summary Card */}
                    <Card className="bg-gold-50 border-gold-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-gold-800">Ringkasan Reservasi</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Jenis Kegiatan:</span>
                          <span className="font-medium text-foreground">
                            {purposeOptions.find((p) => p.id === selectedPurpose)?.title}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Tanggal:</span>
                          <span className="font-medium text-foreground">
                            {selectedDate?.toLocaleDateString("id-ID", {
                              weekday: "long",
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Nama Pemohon:</span>
                          <span className="font-medium text-foreground">{formData.nama}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Jumlah Peserta:</span>
                          <span className="font-medium text-foreground">{formData.peserta} orang</span>
                        </div>
                        <div className="border-t border-gold-300 my-2 pt-2 flex justify-between">
                          <span className="text-gold-800 font-semibold">Kontribusi Infaq:</span>
                          <span className="font-mono font-bold text-gold-800">
                            {new Intl.NumberFormat("id-ID", {
                              style: "currency",
                              currency: "IDR",
                              minimumFractionDigits: 0,
                            }).format(getContributionAmount())}
                          </span>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="flex items-start gap-3 p-4 border rounded-lg">
                      <Checkbox
                        id="agreement"
                        checked={agreedToTerms}
                        onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                      />
                      <label htmlFor="agreement" className="text-sm text-muted-foreground cursor-pointer">
                        Saya telah membaca dan menyetujui syarat dan ketentuan di atas. Saya berkomitmen untuk mematuhi aturan yang berlaku di Masjid Nuruzzaman.
                      </label>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" size="lg" onClick={() => setStep(3)}>
                        <ArrowLeft className="w-5 h-5" />
                        Kembali
                      </Button>
                      <Button
                        variant="cta"
                        size="lg"
                        onClick={() => setStep(5)}
                        disabled={!canProceedToStep5}
                      >
                        Lanjutkan ke Pembayaran
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Step 5: Payment */}
            {step === 5 && (
              <div className="space-y-8">
                <h2 className="font-display text-xl font-semibold text-foreground text-center flex items-center justify-center gap-2">
                  <CreditCard className="w-6 h-6 text-primary" />
                  Pembayaran
                </h2>
                
                <Card className="p-6 md:p-8">
                  <div className="space-y-6">
                    {/* Amount */}
                    <div className="text-center p-6 bg-primary/5 rounded-xl">
                      <p className="text-muted-foreground mb-2">Total Kontribusi Infaq</p>
                      <p className="font-mono text-4xl font-bold text-primary">
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0,
                        }).format(getContributionAmount())}
                      </p>
                    </div>

                    {/* Bank Selection */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-foreground flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-primary" />
                        Pilih Rekening Tujuan
                      </h3>
                      
                      <RadioGroup value={selectedBank || ""} onValueChange={setSelectedBank}>
                        <div className="space-y-3">
                          {bankAccounts.map((bank) => (
                            <div 
                              key={bank.id}
                              className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${
                                selectedBank === bank.id ? "border-primary bg-primary/5" : "hover:bg-muted/50"
                              }`}
                              onClick={() => setSelectedBank(bank.id)}
                            >
                              <RadioGroupItem value={bank.id} id={bank.id} />
                              <div className="text-2xl">{bank.logo}</div>
                              <div className="flex-1">
                                <p className="font-medium text-foreground">{bank.bank}</p>
                                <p className="text-sm text-muted-foreground">{bank.accountName}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-mono font-semibold text-foreground">{bank.accountNumber}</p>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 gap-1"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleCopyAccount(bank.accountNumber);
                                  }}
                                >
                                  {copiedAccount === bank.accountNumber ? (
                                    <>
                                      <Check className="w-3 h-3" />
                                      Tersalin
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3 h-3" />
                                      Salin
                                    </>
                                  )}
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Instructions */}
                    <div className="bg-cream p-4 rounded-lg border border-brown-200 space-y-2">
                      <h4 className="font-semibold text-brown-800">Petunjuk Pembayaran:</h4>
                      <ol className="list-decimal list-inside text-sm text-brown-700 space-y-1">
                        <li>Transfer sesuai nominal ke rekening yang dipilih</li>
                        <li>Simpan bukti transfer untuk konfirmasi</li>
                        <li>Hubungi pengurus masjid via WhatsApp untuk konfirmasi</li>
                        <li>Tunggu konfirmasi persetujuan dari pengurus masjid</li>
                      </ol>
                    </div>

                    {/* Summary */}
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Ringkasan Permohonan</h4>
                      <div className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <p><strong>Kegiatan:</strong> {purposeOptions.find((p) => p.id === selectedPurpose)?.title}</p>
                        <p><strong>Pemohon:</strong> {formData.nama}</p>
                        <p><strong>Tanggal:</strong> {selectedDate?.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</p>
                        <p><strong>Peserta:</strong> {formData.peserta} orang</p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" size="lg" onClick={() => setStep(4)}>
                        <ArrowLeft className="w-5 h-5" />
                        Kembali
                      </Button>
                      <Button
                        variant="cta"
                        size="lg"
                        onClick={handleSubmit}
                        disabled={!selectedBank}
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        Selesaikan Permohonan
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Cek Pemesanan Section */}
            <div className="mt-16 pt-12 border-t border-border">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                  <FileCheck className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-medium">Cek Status</span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Cek Status Pemesanan
                </h2>
                <p className="text-muted-foreground">Masukkan kode booking dan nomor telepon untuk melihat status reservasi Anda</p>
              </div>

              <Card className="p-6 md:p-8 max-w-lg mx-auto mb-16">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cek-booking">Kode Booking</Label>
                    <Input
                      id="cek-booking"
                      placeholder="Contoh: NZM-2026-0214-001"
                      value={checkBookingId}
                      onChange={(e) => setCheckBookingId(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cek-telepon">Nomor Telepon</Label>
                    <Input
                      id="cek-telepon"
                      type="tel"
                      placeholder="08xxxxxxxxxx"
                      value={checkPhone}
                      onChange={(e) => setCheckPhone(e.target.value)}
                    />
                  </div>
                  <Button
                    variant="cta"
                    className="w-full"
                    disabled={!checkBookingId || !checkPhone}
                    onClick={() => {
                      const params = new URLSearchParams({ id: checkBookingId });
                      navigate(`/status-reservasi?${params.toString()}`);
                    }}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Cek Status Reservasi
                  </Button>
                </div>
              </Card>
            </div>

            {/* FAQ Section */}
            <div className="pt-12 border-t border-border">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                  <HelpCircle className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-medium">FAQ</span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Pertanyaan yang Sering Diajukan
                </h2>
                <p className="text-muted-foreground">Informasi seputar reservasi ruangan Masjid Nuruzzaman</p>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-2">
                <AccordionItem value="item-1" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium">
                    Apa saja jenis kegiatan yang bisa menggunakan ruangan masjid?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Ruangan masjid dapat digunakan untuk kegiatan yang bersifat keagamaan dan bermanfaat, seperti Akad Nikah, Resepsi Nikah, Seminar keagamaan/akademik, Pelatihan, Pengajian, dan Manasik Haji/Umroh. Setiap permohonan akan ditinjau oleh pengurus masjid.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium">
                    Berapa biaya kontribusi untuk penggunaan ruangan?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Biaya kontribusi bervariasi tergantung jenis kegiatan: Pengajian (Rp300.000), Akad Nikah & Pelatihan (Rp500.000), Seminar (Rp750.000), Manasik Haji/Umroh (Rp1.000.000), dan Resepsi Nikah (Rp1.500.000). Kontribusi ini merupakan infaq untuk operasional masjid.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium">
                    Bagaimana cara melakukan pembayaran?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Pembayaran dilakukan secara transfer manual ke salah satu rekening masjid (BSI, Mandiri, atau BCA). Setelah transfer, simpan bukti pembayaran dan konfirmasikan ke pengurus masjid melalui WhatsApp. Verifikasi membutuhkan waktu maksimal 2x24 jam.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium">
                    Apakah reservasi bisa dibatalkan?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Reservasi dapat dibatalkan dengan menghubungi pengurus masjid. Namun, kontribusi infaq yang sudah dibayarkan tidak dapat dikembalikan jika pembatalan berasal dari pihak pemohon. Masjid berhak membatalkan reservasi jika ada kegiatan masjid yang bersifat mendesak.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium">
                    Berapa lama proses verifikasi reservasi?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Proses verifikasi pembayaran membutuhkan waktu maksimal 2x24 jam setelah bukti transfer diterima. Anda akan menerima notifikasi melalui email yang terdaftar. Jika dalam waktu tersebut belum ada konfirmasi, silakan hubungi admin masjid.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium">
                    Bagaimana jika tanggal yang diinginkan sudah terisi?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Tanggal yang sudah terisi akan ditandai pada kalender dan tidak dapat dipilih. Anda dapat memilih tanggal lain yang tersedia atau menghubungi pengurus masjid untuk konsultasi jadwal alternatif.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
