import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";
import medicorpex from "./Medicorpex.png";
import SectionReveal from "./SectionReveal";


export default function Project(){

const project = {

name:"MediCorpEx",

text:"Plataforma médica enfocada en la gestión integral de pacientes, consultas clínicas y procesos administrativos.",

tech:["PHP","SQL","HTML","CSS","JavaScript"],

github:"https://github.com/yustinrua/medicorpex"

};

return(

<section id="projects" className="project-section">


    <SectionReveal>

<AnimatedTitle>
Proyecto Destacado
</AnimatedTitle>

<a 
href={project.github}
target="_blank"
rel="noopener noreferrer"
className="project-link"
>

<motion.div
className="project-card"
whileHover={{ rotateY:180 }}
transition={{ duration:0.8 }}
>

{/* FRONT */}

<div className="card-face card-front">

<h3>{project.name}</h3>

<p>{project.text}</p>

<div className="tech">

{project.tech.map((t,i)=>(

<span key={i}>{t}</span>

))}

</div>

</div>

{/* BACK */}

<div className="card-face card-back">

<img src={medicorpex} alt="MediCorpEx"/>

<p>Ver repositorio en GitHub</p>

</div>

</motion.div>

</a>

</SectionReveal>

</section>

);

}
