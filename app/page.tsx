import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ObjetivosSection from "@/components/ObjetivosSection";
import TrabajoSection from "@/components/TrabajoSection";
import ModeloSection from "@/components/ModeloSection";
import PorQueSection from "@/components/PorQueSection";
import PrincipiosSection from "@/components/PrincipiosSection";
import TrayectoriaSection from "@/components/TrayectoriaSection";
import MisionSection from "@/components/MisionSection";
import ContactoSection from "@/components/ContactoSection";
import CapacitacionSection from "@/components/CapacitacionSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="max-w-5xl mx-auto px-4">
        <Navbar />
        <main className="flex min-h-screen flex-col gap-16 pb-16 pt-8 sm:px-2 lg:px-4">
          <Hero />
          <ObjetivosSection />
          <TrabajoSection />
          <ModeloSection />
          <PorQueSection />
          <PrincipiosSection />
          <TrayectoriaSection />
          <MisionSection />
          <ContactoSection />
          <CapacitacionSection />
        </main>
      </div>
    </div>
  );
}
