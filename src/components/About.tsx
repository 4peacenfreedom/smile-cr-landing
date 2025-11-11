import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import draSilvia from "@/assets/dra-silvia.jpg";
import drJosue from "@/assets/dr-josue.jpg";

const About = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<{
    name: string;
    bio: string;
  } | null>(null);

  const doctors = [
    {
      name: "Dra. Silvia Arce García",
      specialty: "Odontología",
      photo: draSilvia,
      description:
        "Especialista en Odontología General, Estética Dental y Urgencias. Comprometida con la salud y estética de cada sonrisa.",
      fullBio:
        "La Dra. Silvia Arce García es una especialista en Odontología con experiencia en una amplia gama de procedimientos, incluyendo odontología general, estética dental, endodoncia, periodoncia y cirugía oral. Su enfoque integral le permite ofrecer tratamientos personalizados para restaurar la salud y estética de cada sonrisa. Además, brinda atención de urgencias odontológicas, asegurando un manejo rápido y efectivo del dolor, infecciones y traumatismos dentales. Con un compromiso inquebrantable hacia sus pacientes, la Dra. Arce combina conocimiento, tecnología avanzada y un trato humano excepcional para garantizar la mejor atención dental.",
    },
    {
      name: "Dr. Josué Ulate Acuña",
      specialty: "Especialista en Tratamiento de Nervio (Endodoncia)",
      photo: drJosue,
      description:
        "Especialista en Endodoncia con amplia trayectoria en tratamientos de nervio. Precisión y tecnología avanzada para salvar tus piezas dentales.",
      fullBio:
        "El Dr. Josué Ulate Acuña es un especialista en Endodoncia y Odontología con una amplia trayectoria en el cuidado de la salud bucodental. Su experiencia y precisión en tratamientos de nervio permiten salvar piezas dentales y aliviar el dolor con las técnicas más avanzadas. Comprometido con la excelencia y el bienestar de sus pacientes, el Dr. Ulate combina tecnología de vanguardia con un enfoque personalizado para brindar una atención de calidad en cada procedimiento.",
    },
  ];

  return (
    <>
      <section id="nosotros" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Nuestro Equipo de <span className="text-primary">Especialistas</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-16">
              Profesionales comprometidos con tu salud dental
            </p>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {doctors.map((doctor, index) => (
                <div
                  key={index}
                  className="text-center group cursor-pointer"
                  onClick={() =>
                    setSelectedDoctor({
                      name: doctor.name,
                      bio: doctor.fullBio,
                    })
                  }
                >
                  <div className="relative mb-6 inline-block">
                    <div className="w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-primary/20 transition-all duration-300 group-hover:border-primary group-hover:shadow-xl group-hover:scale-105">
                      <img
                        src={doctor.photo}
                        alt={doctor.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-primary font-semibold mb-4">{doctor.specialty}</p>
                  <p className="text-muted-foreground leading-relaxed px-4">
                    {doctor.description}
                  </p>
                  <p className="text-sm text-primary mt-4 group-hover:underline">
                    Click para ver más información
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedDoctor} onOpenChange={() => setSelectedDoctor(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl text-primary">
              {selectedDoctor?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="text-muted-foreground leading-relaxed mt-4">
            {selectedDoctor?.bio}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default About;
