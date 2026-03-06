import { Github, Linkedin, Mail } from "lucide-react";
import AnimatedTitle from "./AnimatedTitle";
import SectionReveal from "./SectionReveal";

export default function Contact(){

return(

<section className="contact-section">
    <SectionReveal>

<AnimatedTitle>
Contacto
</AnimatedTitle>

<p>
Si quieres trabajar conmigo o conocer más sobre mis proyectos puedes contactarme.
</p>

<div className="contact-icons">

<a 
href="https://github.com/yustinrua" 
target="_blank"
rel="noopener noreferrer"
>
<Github size={32}/>
</a>

<a 
href="www.linkedin.com/in/yustin-alexander-9170b73a0" 
target="_blank"
rel="noopener noreferrer"
>
<Linkedin size={32}/>
</a>

<a href="https://mail.google.com/mail/?view=cm&fs=1&to=alexyus1025@gmail.com"
target="_blank">
<Mail size={32}/>
</a>
</div>

<p className="copyright">
© {new Date().getFullYear()} Yustin Rua
</p>
    </SectionReveal>
</section>

);

}