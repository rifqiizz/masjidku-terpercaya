import { Button } from "@/components/ui/button";
import { FileText, TrendingUp, TrendingDown, ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const financeHighlights = [
  {
    label: "Total Pemasukan",
    value: "Rp 45.500.000",
    period: "Januari 2026",
    icon: TrendingUp,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    label: "Total Pengeluaran",
    value: "Rp 38.200.000",
    period: "Januari 2026",
    icon: TrendingDown,
    color: "text-brown-600",
    bgColor: "bg-brown-50",
  },
];

export function FinanceSection() {
  return (
    <section id="laporan" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-100 rounded-full border border-gold-300 mb-6">
              <Shield className="w-4 h-4 text-gold-600" />
              <span className="text-gold-700 text-sm font-medium">Amanah & Transparan</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Transparansi sebagai
              <span className="block text-gold-600">Bentuk Amanah</span>
            </h2>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Laporan keuangan dipublikasikan sebagai bentuk pertanggungjawaban pengurus kepada jamaah dan umat.
            </p>
          </div>

          {/* Quote */}
          <div className="max-w-3xl mx-auto mb-12">
            <blockquote className="text-center">
              <p className="font-display text-xl md:text-2xl text-brown-700 italic leading-relaxed">
                "Sesungguhnya amanah itu akan dimintai pertanggungjawaban."
              </p>
            </blockquote>
          </div>

          {/* Finance Highlights */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
            {financeHighlights.map((item, index) => (
              <div
                key={item.label}
                className="p-6 bg-card rounded-xl shadow-card border border-border/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg ${item.bgColor} flex items-center justify-center`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground/70">{item.period}</p>
                  </div>
                </div>
                <p className="font-display text-2xl font-bold text-foreground">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="gold" size="lg" asChild>
              <Link to="/laporan-keuangan">
                <FileText className="w-5 h-5" />
                Lihat Laporan Keuangan Lengkap
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
