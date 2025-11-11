import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      content: "+506 7209-9038",
      link: "tel:+50672099038",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@dentalcarecr.com",
      link: "mailto:info@dentalcarecr.com",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Heredia, Santo Domingo, 200m sur Clínica Hugo Fonseca",
      link: "https://maps.app.goo.gl/4oGc7JvGKCswjNVz5",
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visítanos en Nuestra Nueva <span className="text-primary">Ubicación</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.slice(0, 2).map((info, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg">
                        <info.icon className="text-primary-foreground" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                          target={info.link.startsWith("http") ? "_blank" : undefined}
                          rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {info.content}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Location Card - Full Width */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg">
                    <MapPin className="text-primary-foreground" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{contactInfo[2].title}</h3>
                    <a
                      href={contactInfo[2].link}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contactInfo[2].content}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps Embed */}
            <Card className="border-0 shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6915.190279483503!2d-84.093519!3d9.9886952!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e5267ada84e5%3A0xca4866f8bb74131!2sCl%C3%ADnica%20Dr.%20Hugo%20Fonseca%20Arce!5e1!3m2!1ses!2scr!4v1762885697569!5m2!1ses!2scr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Dental Care Costa Rica"
              />
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Teléfono"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Mensaje"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    required
                    rows={5}
                    className="bg-background resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground"
                  size="lg"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
