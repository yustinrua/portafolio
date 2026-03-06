import yustin from "./yustin.png"
import SectionReveal from "./SectionReveal";
export default function Hero(){

return(

<section className="hero">

<SectionReveal>

<div className="hero-container">

<div className="hero-text">

<h1 className="welcome">
BIENVENIDOS
</h1>

<h2 className="subtitle">
Ingeniero de Software en formación
</h2>

<p className="description">
Soy un desarrollador enfocado en construir soluciones tecnológicas con impacto real.
Me especializo en desarrollo web, arquitectura de software y gestión de proyectos tecnológicos.
Mi enfoque combina liderazgo, pensamiento analítico y aprendizaje constante para transformar ideas en productos funcionales.
</p>

<div className="hero-buttons">

<button>Ver proyectos</button>
<button>Contacto</button>

</div>

</div>

<div className="hero-image">

<img src={yustin} alt="Yustin Rua"/>

</div>
 
</div>

 </SectionReveal>
</section>

);

}