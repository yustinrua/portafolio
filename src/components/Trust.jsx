import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";
import SectionReveal from "./SectionReveal";
const skills = [
  {
    title: "Liderazgo",
    text: "Capacidad para dirigir equipos y coordinar proyectos tecnológicos."
  },
  {
    title: "Aprendizaje rápido",
    text: "Adapto nuevas tecnologías y frameworks con rapidez."
  },
  {
    title: "Pensamiento analítico",
    text: "Capacidad para descomponer problemas complejos en soluciones claras."
  },
  {
    title: "Arquitectura de software",
    text: "Diseño de sistemas escalables y mantenibles."
  },
  {
    title: "Trabajo en equipo",
    text: "Experiencia colaborando con desarrolladores y diseñadores."
  },
  {
    title: "Innovación",
    text: "Uso creativo de la tecnología para resolver problemas reales."
  }
];

export default function Trust(){

  return(

    <section className="trust">
        <SectionReveal>

      <AnimatedTitle>
        ¿Por qué confiar en mí?
      </AnimatedTitle>

      <div className="trust-grid">

        {skills.map((s,i)=>(
          <motion.div
            key={i}
            whileHover={{scale:1.05}}
            className="trust-card"
          >

            <h3>{s.title}</h3>
            <p>{s.text}</p>

          </motion.div>
        ))}

      </div>
        </SectionReveal>
    </section>

  );

}