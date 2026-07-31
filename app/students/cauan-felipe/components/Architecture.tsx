import {
Cpu,
MemoryStick,
GitBranch,
Zap,
HardDrive,
ArrowRight
} from "lucide-react";


const components = [

{
title:"CPU",
icon:<Cpu/>,
text:"Executa instruções e coordena o funcionamento do computador."
},

{
title:"Unidade de Controle",
icon:<GitBranch/>,
text:"Interpreta instruções e controla o fluxo de dados."
},

{
title:"ULA",
icon:<Zap/>,
text:"Realiza operações matemáticas e lógicas."
},

{
title:"Registradores",
icon:<HardDrive/>,
text:"Pequenas áreas de memória extremamente rápidas dentro do processador."
},

{
title:"Memória RAM",
icon:<MemoryStick/>,
text:"Armazena temporariamente programas e dados em execução."
}

]


export default function Architecture(){

return(

<section
id="architecture"
className="
mx-auto
max-w-7xl
px-8
py-16
"
>


<div className="
text-center
max-w-3xl
mx-auto
">

<h2 className="
text-4xl
md:text-5xl
font-black
">

Arquitetura de Computadores

</h2>


<p className="
mt-4
text-zinc-400
">

Um computador funciona através da comunicação entre
processador, memória e dispositivos.
Cada componente possui uma função específica dentro do sistema.

</p>

</div>



<div className="
mt-10
grid
gap-5
md:grid-cols-3
lg:grid-cols-5
">


{
components.map((item,index)=>(


<div
key={index}
className="
rounded-xl
border
border-zinc-800
bg-zinc-900/80
p-6
hover:border-cyan-400
transition
"
>


<div className="
text-cyan-400
">

{item.icon}

</div>


<h3 className="
mt-4
font-bold
">

{item.title}

</h3>


<p className="
mt-2
text-sm
text-zinc-400
leading-relaxed
">

{item.text}

</p>


</div>


))
}


</div>



<div className="
mt-10
flex
justify-center
items-center
gap-4
flex-wrap
text-sm
text-cyan-400
font-mono
">


<span>
Entrada
</span>

<ArrowRight/>

<span>
CPU
</span>

<ArrowRight/>

<span>
Memória
</span>

<ArrowRight/>

<span>
Saída
</span>


</div>


</section>

)

}