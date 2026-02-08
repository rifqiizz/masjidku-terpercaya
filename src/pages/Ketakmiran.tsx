import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Target, Eye, History, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const sejarah = [
  {
    tahun: "1985",
    judul: "Pendirian Masjid",
    deskripsi: "Masjid Nuruzzaman didirikan bersamaan dengan pembangunan Kampus B Universitas Airlangga sebagai tempat ibadah bagi civitas akademika."
  },
  {
    tahun: "1998",
    judul: "Renovasi Pertama",
    deskripsi: "Dilakukan renovasi besar untuk memperluas kapasitas jamaah dan menambah fasilitas pendukung seperti ruang wudhu dan perpustakaan."
  },
  {
    tahun: "2010",
    judul: "Pembentukan Ketakmiran",
    deskripsi: "Ketakmiran Masjid Nuruzzaman diresmikan sebagai lembaga pengelola masjid yang terstruktur dengan berbagai divisi."
  },
  {
    tahun: "2020",
    judul: "Era Digital",
    deskripsi: "Masjid mulai mengadopsi teknologi digital untuk dakwah, termasuk kajian online dan sistem informasi keuangan transparan."
  },
  {
    tahun: "2024",
    judul: "Renovasi Kedua",
    deskripsi: "Renovasi besar-besaran untuk meningkatkan kapasitas hingga 2000 jamaah dan penambahan fasilitas modern."
  }
];

const pengurus = [
  {
    jabatan: "Ketua Takmir",
    nama: "Dr. H. Ahmad Fauzi, M.Ag",
    foto: null,
    inisial: "AF"
  },
  {
    jabatan: "Wakil Ketua",
    nama: "Ir. Muhammad Rizki, S.T., M.T.",
    foto: null,
    inisial: "MR"
  },
  {
    jabatan: "Sekretaris",
    nama: "Hj. Siti Aminah, S.Pd.",
    foto: null,
    inisial: "SA"
  },
  {
    jabatan: "Bendahara",
    nama: "Drs. H. Bambang Sutrisno, M.M.",
    foto: null,
    inisial: "BS"
  },
  {
    jabatan: "Koordinator Dakwah",
    nama: "Ustadz Abdul Rahman, Lc., M.A.",
    foto: null,
    inisial: "AR"
  },
  {
    jabatan: "Koordinator Pendidikan",
    nama: "Dr. Fatimah Zahra, M.Pd.I.",
    foto: null,
    inisial: "FZ"
  },
  {
    jabatan: "Koordinator Sosial",
    nama: "H. Agus Prasetyo, S.E.",
    foto: null,
    inisial: "AP"
  },
  {
    jabatan: "Koordinator Pemuda",
    nama: "Muhammad Ilham, S.Kom.",
    foto: null,
    inisial: "MI"
  },
  {
    jabatan: "Koordinator Muslimah",
    nama: "Hj. Nur Hidayati, S.Psi.",
    foto: null,
    inisial: "NH"
  }
];

const Ketakmiran = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brown-800 to-brown-700 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Button variant="ghost" className="text-white/80 hover:text-white mb-6" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Link>
            </Button>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gold-100 mb-4">
              Ketakmiran Masjid Nuruzzaman
            </h1>
            <p className="text-lg text-brown-200 max-w-2xl">
              Lembaga pengelola masjid yang berkomitmen untuk memakmurkan masjid 
              dan melayani umat dengan amanah dan profesional.
            </p>
          </div>
        </section>

        {/* Visi & Misi Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Visi */}
              <Card className="border-gold-200 bg-white shadow-card">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-gold-600" />
                  </div>
                  <CardTitle className="text-2xl text-brown-800">Visi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brown-700 text-lg leading-relaxed">
                    Menjadikan Masjid Nuruzzaman sebagai pusat peribadatan, pendidikan, 
                    dan pelayanan umat yang unggul, amanah, dan bermanfaat bagi 
                    civitas akademika Universitas Airlangga dan masyarakat sekitar.
                  </p>
                </CardContent>
              </Card>

              {/* Misi */}
              <Card className="border-gold-200 bg-white shadow-card">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-gold-600" />
                  </div>
                  <CardTitle className="text-2xl text-brown-800">Misi</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-brown-700">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 shrink-0" />
                      <span>Menyelenggarakan kegiatan ibadah yang khusyuk dan berkualitas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 shrink-0" />
                      <span>Menyediakan program pendidikan dan kajian Islam yang komprehensif</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 shrink-0" />
                      <span>Membangun ukhuwah islamiyah di kalangan civitas akademika</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 shrink-0" />
                      <span>Mengelola masjid dengan transparan dan akuntabel</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 shrink-0" />
                      <span>Melaksanakan program sosial dan pemberdayaan masyarakat</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sejarah Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-full bg-brown-100 flex items-center justify-center">
                <History className="w-6 h-6 text-brown-600" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-brown-800">
                Sejarah Masjid
              </h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold-300 transform md:-translate-x-1/2" />

              <div className="space-y-8">
                {sejarah.map((item, index) => (
                  <div 
                    key={item.tahun}
                    className={`relative flex items-start gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gold-500 border-4 border-background transform -translate-x-1/2 z-10" />

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <Card className="bg-white border-gold-100 shadow-sm">
                        <CardContent className="p-6">
                          <span className="inline-block px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-sm font-semibold mb-3">
                            {item.tahun}
                          </span>
                          <h3 className="font-display text-lg font-semibold text-brown-800 mb-2">
                            {item.judul}
                          </h3>
                          <p className="text-brown-600 text-sm leading-relaxed">
                            {item.deskripsi}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Struktur Organisasi Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-full bg-brown-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-brown-600" />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-brown-800">
                  Struktur Organisasi
                </h2>
                <p className="text-brown-600">Periode 2024-2027</p>
              </div>
            </div>

            {/* Ketua */}
            <div className="flex justify-center mb-8">
              <Card className="bg-gradient-to-br from-gold-50 to-gold-100 border-gold-300 shadow-card w-full max-w-xs">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-gold-300">
                    <AvatarImage src={pengurus[0].foto || undefined} />
                    <AvatarFallback className="bg-brown-600 text-white text-xl font-semibold">
                      {pengurus[0].inisial}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-display font-semibold text-lg text-brown-800 mb-1">
                    {pengurus[0].nama}
                  </h3>
                  <span className="text-sm text-gold-700 font-medium">
                    {pengurus[0].jabatan}
                  </span>
                </CardContent>
              </Card>
            </div>

            {/* Wakil & Sekretaris & Bendahara */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
              {pengurus.slice(1, 4).map((person) => (
                <Card key={person.jabatan} className="bg-white border-brown-200 shadow-sm">
                  <CardContent className="p-6 text-center">
                    <Avatar className="w-16 h-16 mx-auto mb-3 border-2 border-brown-200">
                      <AvatarImage src={person.foto || undefined} />
                      <AvatarFallback className="bg-brown-500 text-white font-semibold">
                        {person.inisial}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-display font-semibold text-brown-800 mb-1">
                      {person.nama}
                    </h3>
                    <span className="text-sm text-brown-600">
                      {person.jabatan}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Koordinator */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {pengurus.slice(4).map((person) => (
                <Card key={person.jabatan} className="bg-white border-border shadow-sm">
                  <CardContent className="p-4 text-center">
                    <Avatar className="w-14 h-14 mx-auto mb-3 border border-brown-100">
                      <AvatarImage src={person.foto || undefined} />
                      <AvatarFallback className="bg-brown-400 text-white text-sm font-medium">
                        {person.inisial}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-display font-medium text-sm text-brown-800 mb-1">
                      {person.nama}
                    </h3>
                    <span className="text-xs text-brown-500">
                      {person.jabatan}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Ketakmiran;