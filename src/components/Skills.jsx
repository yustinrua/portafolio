import AnimatedTitle from "./AnimatedTitle";
import SectionReveal from "./SectionReveal";


export default function Skills(){

const skills = [
"HTML",
"CSS",
"JavaScript",
"React",
"Python",
"Java",
"C++",
"SQL",
"Software Architecture",
"Leadership",
"Problem Solving",
"UI/UX Thinking"
];

return(

<section className="skills-section">
<SectionReveal>


<AnimatedTitle>
Tecnologías
</AnimatedTitle>

<div className="skills-container">

{skills.map((skill,i)=>(

<div key={i} className="skill-card">
{skill}
</div>

))}

</div>
</SectionReveal>

</section>

);

}