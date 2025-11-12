import { Button } from "@/components/ui/button";
import { MapPin, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/50672099038", "_blank");
  };

  return (
    <section id="inicio" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(240, 248, 255, 0.7), rgba(240, 248, 255, 0.85)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Promotional Banner */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 rounded-full mb-8 shadow-lg animate-in fade-in slide-in-from-top duration-700">
            <Sparkles size={20} />
            <span className="font-semibold">¡Revisión Dental GRATUITA para nuevos pacientes!</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
            ¡Dental Care Costa Rica llega a{" "}
            <span className="text-primary">Santo Domingo de Heredia!</span>
          </h1>

          {/* Subheading */}
          <div className="flex items-center justify-center gap-2 text-lg md:text-xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            <MapPin className="text-primary flex-shrink-0" size={24} />
            <p>
              Nueva sede en Heredia, Santo Domingo, ubicada 200 metros al sur de la Clínica Hugo Fonseca
            </p>
          </div>

          {/* CTA Button */}
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom duration-700 delay-300"
          >
            Agendar Cita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
