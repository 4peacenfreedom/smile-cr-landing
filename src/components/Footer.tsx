import { Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "nosotros", label: "Nosotros" },
    { id: "servicios", label: "Servicios" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">DC</span>
              </div>
              <span className="text-xl font-bold">Dental Care Costa Rica</span>
            </div>
            <p className="text-background/80 mb-4">
              Tu salud bucal es nuestra prioridad. Tecnología avanzada y atención personalizada.
            </p>
            <div className="flex items-center gap-2 text-background/90">
              <Heart size={20} className="text-primary" />
              <span>¡Te esperamos para cuidar de tu sonrisa!</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-background/80 hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a
                  href="tel:+50672099038"
                  className="hover:text-primary transition-colors duration-300"
                >
                  +506 7209-9038
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@dentalcarecr.com"
                  className="hover:text-primary transition-colors duration-300"
                >
                  info@dentalcarecr.com
                </a>
              </li>
              <li className="text-sm">Heredia, Santo Domingo<br />200m sur Clínica Hugo Fonseca</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p>© 2025 Dental Care Costa Rica. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
