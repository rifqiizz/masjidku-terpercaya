import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  ArrowLeft, 
  TrendingUp, 
  TrendingDown, 
  Wallet,
  Download,
  FileText,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

const years = ["2026", "2025", "2024"];
const months = [
  { value: "01", label: "Januari" },
  { value: "02", label: "Februari" },
  { value: "03", label: "Maret" },
  { value: "04", label: "April" },
  { value: "05", label: "Mei" },
  { value: "06", label: "Juni" },
  { value: "07", label: "Juli" },
  { value: "08", label: "Agustus" },
  { value: "09", label: "September" },
  { value: "10", label: "Oktober" },
  { value: "11", label: "November" },
  { value: "12", label: "Desember" },
];

// Dummy financial data generator
const generateFinancialData = (year: string, month: string) => {
  const baseMultiplier = parseInt(year) === 2026 ? 1.1 : parseInt(year) === 2025 ? 1.0 : 0.9;
  const monthMultiplier = parseInt(month) <= 6 ? 1.0 : 1.15;
  
  const income = [
    { kategori: "Donatur Tetap", jumlah: Math.round(15000000 * baseMultiplier * monthMultiplier) },
    { kategori: "Infaq Jumat", jumlah: Math.round(8500000 * baseMultiplier * monthMultiplier) },
    { kategori: "Infaq Harian", jumlah: Math.round(4200000 * baseMultiplier * monthMultiplier) },
    { kategori: "Infaq Parkir", jumlah: Math.round(2800000 * baseMultiplier * monthMultiplier) },
    { kategori: "Kotak Amal", jumlah: Math.round(3500000 * baseMultiplier * monthMultiplier) },
    { kategori: "Sewa Ruangan", jumlah: Math.round(6000000 * baseMultiplier * monthMultiplier) },
    { kategori: "Zakat", jumlah: Math.round(4500000 * baseMultiplier * monthMultiplier) },
    { kategori: "Wakaf", jumlah: Math.round(2000000 * baseMultiplier * monthMultiplier) },
  ];

  const expenses = [
    { kategori: "Listrik & Air", jumlah: Math.round(4500000 * baseMultiplier) },
    { kategori: "Kebersihan & Perawatan", jumlah: Math.round(3200000 * baseMultiplier) },
    { kategori: "Honor Staf", jumlah: Math.round(8000000 * baseMultiplier) },
    { kategori: "Honor Imam Rawatib", jumlah: Math.round(5000000 * baseMultiplier) },
    { kategori: "Honor Muadzin", jumlah: Math.round(2500000 * baseMultiplier) },
    { kategori: "Kegiatan Dakwah", jumlah: Math.round(4000000 * baseMultiplier) },
    { kategori: "Kegiatan Sosial", jumlah: Math.round(3500000 * baseMultiplier) },
    { kategori: "ATK & Perlengkapan", jumlah: Math.round(1200000 * baseMultiplier) },
    { kategori: "Konsumsi Kajian", jumlah: Math.round(2000000 * baseMultiplier) },
    { kategori: "Perbaikan & Renovasi", jumlah: Math.round(3800000 * baseMultiplier) },
  ];

  return { income, expenses };
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function LaporanKeuangan() {
  const [selectedYear, setSelectedYear] = useState("2026");
  const [selectedMonth, setSelectedMonth] = useState("01");

  const { income, expenses } = generateFinancialData(selectedYear, selectedMonth);
  
  const totalIncome = income.reduce((sum, item) => sum + item.jumlah, 0);
  const totalExpenses = expenses.reduce((sum, item) => sum + item.jumlah, 0);
  const balance = totalIncome - totalExpenses;

  const selectedMonthLabel = months.find(m => m.value === selectedMonth)?.label;

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
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-100 rounded-full border border-gold-300 mb-6">
                <Shield className="w-4 h-4 text-gold-600" />
                <span className="text-gold-700 text-sm font-medium">Amanah & Transparan</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Laporan Keuangan Masjid
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Laporan keuangan dipublikasikan sebagai bentuk pertanggungjawaban pengurus kepada jamaah dan umat.
              </p>
            </div>

            {/* Period Selector */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">Pilih Periode Laporan</span>
                  </div>
                  <div className="flex gap-3">
                    <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Bulan" />
                      </SelectTrigger>
                      <SelectContent>
                        {months.map((month) => (
                          <SelectItem key={month.value} value={month.value}>
                            {month.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select value={selectedYear} onValueChange={setSelectedYear}>
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Tahun" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Summary Cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Pemasukan</p>
                      <p className="text-xs text-muted-foreground/70">{selectedMonthLabel} {selectedYear}</p>
                    </div>
                  </div>
                  <p className="font-mono text-2xl font-bold text-green-600">
                    {formatCurrency(totalIncome)}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                      <TrendingDown className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Pengeluaran</p>
                      <p className="text-xs text-muted-foreground/70">{selectedMonthLabel} {selectedYear}</p>
                    </div>
                  </div>
                  <p className="font-mono text-2xl font-bold text-red-600">
                    {formatCurrency(totalExpenses)}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gold-50 flex items-center justify-center">
                      <Wallet className="w-5 h-5 text-gold-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Saldo Bulan Ini</p>
                      <p className="text-xs text-muted-foreground/70">{selectedMonthLabel} {selectedYear}</p>
                    </div>
                  </div>
                  <p className={`font-mono text-2xl font-bold ${balance >= 0 ? "text-gold-600" : "text-red-600"}`}>
                    {formatCurrency(balance)}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Income Table */}
            <Card className="mb-8">
              <CardHeader className="bg-green-50/50 border-b">
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <TrendingUp className="w-5 h-5" />
                  Pemasukan - {selectedMonthLabel} {selectedYear}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">No</TableHead>
                      <TableHead>Kategori</TableHead>
                      <TableHead className="text-right">Jumlah</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {income.map((item, index) => (
                      <TableRow key={item.kategori}>
                        <TableCell className="font-mono text-muted-foreground">{index + 1}</TableCell>
                        <TableCell>{item.kategori}</TableCell>
                        <TableCell className="text-right font-mono">{formatCurrency(item.jumlah)}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="bg-green-50/50 font-semibold">
                      <TableCell colSpan={2}>Total Pemasukan</TableCell>
                      <TableCell className="text-right font-mono text-green-700">{formatCurrency(totalIncome)}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Expenses Table */}
            <Card className="mb-8">
              <CardHeader className="bg-red-50/50 border-b">
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <TrendingDown className="w-5 h-5" />
                  Pengeluaran - {selectedMonthLabel} {selectedYear}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">No</TableHead>
                      <TableHead>Kategori</TableHead>
                      <TableHead className="text-right">Jumlah</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {expenses.map((item, index) => (
                      <TableRow key={item.kategori}>
                        <TableCell className="font-mono text-muted-foreground">{index + 1}</TableCell>
                        <TableCell>{item.kategori}</TableCell>
                        <TableCell className="text-right font-mono">{formatCurrency(item.jumlah)}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="bg-red-50/50 font-semibold">
                      <TableCell colSpan={2}>Total Pengeluaran</TableCell>
                      <TableCell className="text-right font-mono text-red-700">{formatCurrency(totalExpenses)}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Quote & Download */}
            <div className="text-center space-y-6">
              <blockquote className="max-w-2xl mx-auto">
                <p className="font-display text-lg md:text-xl text-brown-700 italic leading-relaxed">
                  "Sesungguhnya amanah itu akan dimintai pertanggungjawaban."
                </p>
              </blockquote>
              
              <Button variant="gold" size="lg">
                <Download className="w-5 h-5" />
                Unduh Laporan PDF
              </Button>

              <p className="text-sm text-muted-foreground">
                Laporan ini diperbarui setiap awal bulan. Untuk pertanyaan, silakan hubungi pengurus masjid.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
