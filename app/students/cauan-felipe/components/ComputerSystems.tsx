import {
Database,
Network,
Code2,
Settings
} from "lucide-react";


const items=[

{
title:"Software",
desc:"Programas transformam instruções em tarefas.",
icon:<Code2/>
},

{
title:"Banco de Dados",
desc:"Organização e persistência das informações.",
icon:<Database/>
},

{
title:"Redes",
desc:"Comunicação entre computadores.",
icon:<Network/>
},

{
title:"Sistemas",
desc:"Controle dos recursos da máquina.",
icon:<Settings/>
}

]


export default function ComputerSystems(){

return(

<section
id="systems"
className="
px-8
py-24
mx-auto
max-w-7xl
">


<h2 className="
text-5xl
font-black
mb-12
">

Sistemas Computacionais

</h2>


<div className="
grid
gap-8
md:grid-cols-4
">


{
items.map((item,index)=>(

<div
key={index}
className="
rounded-xl
bg-zinc-900
border
border-zinc-800
p-8
"
>


<div className="text-cyan-400">

{item.icon}

</div>


<h3 className="mt-5 font-bold">

{item.title}

</h3>


<p className="
mt-3
text-zinc-400
">

{item.desc}

</p>


</div>

))
}


</div>


</section>

)

}   