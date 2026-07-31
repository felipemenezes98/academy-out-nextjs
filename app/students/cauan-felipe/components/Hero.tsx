import {
Cpu,
MemoryStick,
HardDrive,
CircuitBoard
} from "lucide-react";


export default function Hero(){

const cards=[
{
icon:<Cpu/>,
title:"Processador"
},
{
icon:<MemoryStick/>,
title:"Memória"
},
{
icon:<HardDrive/>,
title:"Armazenamento"
},
{
icon:<CircuitBoard/>,
title:"Circuitos"
}
];


return(

<section className="
min-h-[85vh]
flex
items-center
mx-auto
max-w-7xl
px-8
gap-16
flex-col
md:flex-row
">


<div className="flex-1">


<p className="
text-cyan-400
font-mono
">

SYSTEM_BOOT_COMPLETE

</p>


<h1 className="
mt-5
text-6xl
font-black
">

O universo dos
<br/>

<strong className="text-cyan-400">
Computadores
</strong>

</h1>


<p className="
mt-6
max-w-xl
text-zinc-400
text-lg
">

Uma exploração visual sobre como computadores funcionam:
hardware, software, arquitetura, memória,
processamento e lógica por trás das máquinas.

</p>


</div>



<div className="
grid
grid-cols-2
gap-5
">

{
cards.map((card,index)=>(

<div
key={index}
className="
rounded-xl
border
border-cyan-500/20
bg-zinc-900
p-8
hover:border-cyan-400
transition
"
>

<div className="
text-cyan-400
">

{card.icon}

</div>

<p className="mt-3">

{card.title}

</p>


</div>

))
}


</div>


</section>

)

}