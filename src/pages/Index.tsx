import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MomentumSection } from "@/components/sections/MomentumSection";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { KajianSection } from "@/components/sections/KajianSection";
import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { FacilitiesSection } from "@/components/sections/FacilitiesSection";
import { RoomRentalSection } from "@/components/sections/RoomRentalSection";
import { FinanceSection } from "@/components/sections/FinanceSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MomentumSection />
        <ActivitiesSection />
        <KajianSection />
        <ArticlesSection />
        <FacilitiesSection />
        <RoomRentalSection />
        <FinanceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
