import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InstagramFeedSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <Instagram className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Instagram</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              Ikuti Kami di Instagram
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Dapatkan update kegiatan dan informasi terbaru dari Masjid Nuruzzaman
            </p>
          </div>

          {/* Instagram Embed */}
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-2xl rounded-2xl overflow-hidden border border-border shadow-sm bg-card">
              <iframe
                src="https://www.instagram.com/masjidnuruzzaman/embed"
                className="w-full border-0"
                height="600"
                scrolling="no"
                allowTransparency
                title="Instagram Feed Masjid Nuruzzaman"
                loading="lazy"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.instagram.com/masjidnuruzzaman/"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Instagram className="w-5 h-5" />
                @masjidnuruzzaman
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
