import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ObjetivosSection from "@/components/ObjetivosSection";
import TrabajoSection from "@/components/TrabajoSection";
import ModeloSection from "@/components/ModeloSection";
import PrincipiosSection from "@/components/PrincipiosSection";
import TrayectoriaSection from "@/components/TrayectoriaSection";
import MisionSection from "@/components/MisionSection";
import ContactoSection from "@/components/ContactoSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-16 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <Hero />
        <ObjetivosSection />
        <TrabajoSection />
        <ModeloSection />
        <PrincipiosSection />
        <TrayectoriaSection />
        <MisionSection />
        <ContactoSection />
      </main>
    </div>
  );
}
