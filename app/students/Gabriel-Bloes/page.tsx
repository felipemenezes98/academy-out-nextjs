"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"



const tecnologias = [

{
id:1,
titulo:"Braindance",
categoria:"Tecnologia Neural",
nivel:"Experimental",
imagem:"https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
descricao:
"Tecnologia capaz de gravar e reproduzir experiências humanas através de sinais neurais.",
curiosidade:
"Permite reviver memórias, sensações e emoções de outras pessoas."
},


{
id:2,
titulo:"Cyberware",
categoria:"Implantes Cibernéticos",
nivel:"Avançado",
imagem:"https://images.unsplash.com/photo-1698647861553-54943df8212b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
descricao:
"Implantes mecânicos que substituem ou aprimoram partes do corpo humano.",
curiosidade:
"Em Night City, modificações corporais são uma parte comum da sociedade."
},


{
id:3,
titulo:"IA Alt Cunningham",
categoria:"Inteligência Artificial",
nivel:"Lendário",
imagem:"https://plus.unsplash.com/premium_photo-1678937611282-d502f722c190?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
descricao:
"Uma das inteligências artificiais mais importantes da história do universo Cyberpunk.",
curiosidade:
"As IAs além da Blackwall representam uma ameaça desconhecida."
},


{
id:4,
titulo:"Night City",
categoria:"Megacidade",
nivel:"Extremo",
imagem:"https://images.unsplash.com/photo-1557515126-1bf9ada5cb93?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
descricao:
"Uma cidade dominada por tecnologia, corporações e conflitos.",
curiosidade:
"É considerada um símbolo máximo do futuro distópico."
},


{
id:5,
titulo:"Armas Inteligentes",
categoria:"Tecnologia Militar",
nivel:"Militar",
imagem:"https://images.unsplash.com/photo-1533972751724-9135a8410a4c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
descricao:
"Armas equipadas com sistemas inteligentes de rastreamento.",
curiosidade:
"Projetadas para aumentar a precisão do usuário."
},


{
id:6,
titulo:"Veículos Autônomos",
categoria:"Mobilidade",
nivel:"Avançado",
imagem:"https://images.unsplash.com/photo-1661715328971-83cd2179df82?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
descricao:
"Transportes equipados com sistemas automatizados.",
curiosidade:
"A mobilidade em Night City depende de tecnologia extrema."
}

]





function AuroraCyber(){


return(


<div className="

fixed

inset-0

-z-10

overflow-hidden

bg-black

">


<div className="neon pink"/>

<div className="neon blue"/>

<div className="neon yellow"/>



<style>{`

.neon{

position:absolute;

width:700px;

height:700px;

border-radius:50%;

filter:blur(160px);

opacity:.45;

animation:pulse 15s infinite alternate;

}



.pink{

background:#ff007f;

top:-250px;

left:-250px;

}



.blue{

background:#00ffff;

right:-250px;

bottom:-250px;

}



.yellow{

background:#fcee0a;

top:40%;

left:40%;

}



@keyframes pulse{

from{

transform:translate(0,0)

}

to{

transform:translate(120px,-80px)

}

}



`}</style>


</div>


)


}
function CardCyber({

tecnologia,

selecionado,

abrirDetalhes,

index

}){


return(


<motion.div


initial={{

opacity:0,

y:60,

scale:0.85

}}


animate={{

opacity:1,

y:0,

scale:1

}}


transition={{

duration:0.5,

delay:index * 0.1

}}



onClick={()=>abrirDetalhes(tecnologia)}



className={`


cursor-pointer


overflow-hidden


rounded-xl


border


border-cyan-400/30


bg-black/70


backdrop-blur-xl


shadow-[0_0_30px_rgba(0,255,255,0.2)]


transition-all


duration-500



hover:-translate-y-3


hover:border-yellow-400


${


selecionado===tecnologia.id


?


"scale-105 border-yellow-400 shadow-[0_0_40px_rgba(252,238,10,0.5)]"


:


""


}



`}



>



<img


src={tecnologia.imagem}


alt={tecnologia.titulo}


className="

h-64

w-full

object-cover

transition

duration-700

hover:scale-110

"


/>





<div className="p-6">



<p className="text-sm text-cyan-400 uppercase">


{tecnologia.categoria}


</p>




<h2 className="

mt-2

text-3xl

font-bold

text-yellow-400

">


{tecnologia.titulo}


</h2>





<p className="

mt-3

text-gray-400

">


Nível:

<span className="text-pink-400">


{" "}{tecnologia.nivel}


</span>


</p>






<p className="

mt-4

text-gray-300

line-clamp-2

">


{tecnologia.descricao}


</p>







<Button


className="

mt-6

w-full

bg-cyan-500

text-black

hover:bg-yellow-400

"


>


ACESSAR ARQUIVO


</Button>





</div>





</motion.div>


)


}
function ModalCyber({

tecnologia,

fechar

}){


if(!tecnologia)

return null



return(


<AnimatePresence>



<motion.div


initial={{

opacity:0

}}


animate={{

opacity:1

}}


exit={{

opacity:0

}}


transition={{

duration:0.3

}}



className="

fixed

inset-0

z-50

flex

items-center

justify-center

bg-black/90

backdrop-blur-md

p-5

"



onClick={fechar}



>




<motion.div



initial={{

scale:0.8,

opacity:0,

y:50

}}



animate={{

scale:1,

opacity:1,

y:0

}}



exit={{

scale:0.8,

opacity:0

}}



transition={{

duration:0.4

}}




className="


w-full

max-w-4xl

overflow-hidden

rounded-2xl


border

border-cyan-400


bg-zinc-950


shadow-[0_0_50px_rgba(0,255,255,0.4)]



"




onClick={(e)=>e.stopPropagation()}



>





<img



src={tecnologia.imagem}



alt={tecnologia.titulo}



className="

w-full

h-96

object-cover

"



/>








<div className="p-8">





<p className="

text-cyan-400

uppercase

tracking-widest

">


DATABASE // {tecnologia.categoria}


</p>






<h2 className="

mt-4

text-5xl

font-bold

text-yellow-400

">


{tecnologia.titulo}


</h2>






<div className="

mt-5

rounded-lg

border

border-pink-500/40

bg-black/50

p-4

">



<p className="text-pink-400">


CLASSIFICAÇÃO:


</p>



<p className="text-white text-xl">


{tecnologia.nivel}


</p>



</div>







<p className="

mt-6

text-lg

leading-8

text-gray-300

">


{tecnologia.descricao}


</p>








<div className="

mt-6

rounded-xl

border

border-cyan-400/30

p-5

bg-cyan-950/20

">



<h3 className="

text-xl

font-bold

text-cyan-400

">


CURIOSIDADE DO ARQUIVO


</h3>





<p className="

mt-3

text-gray-300

">


{tecnologia.curiosidade}


</p>




</div>







<Button



className="

mt-8

w-full

bg-yellow-400

text-black

hover:bg-pink-500

"



onClick={fechar}



>


FECHAR TERMINAL


</Button>







</div>





</motion.div>






</motion.div>



</AnimatePresence>



)


}
export default function App(){



const [dados,setDados] = useState(tecnologias)



const [dark,setDark] = useState(true)



const [mostrar,setMostrar] = useState(false)



const [selecionado,setSelecionado] = useState(null)



const [terminal,setTerminal] = useState(null)





const lista = mostrar

?

dados

:

dados.slice(0,3)







function abrirArquivo(tecnologia){


setSelecionado(tecnologia.id)


setTerminal(tecnologia)



}







return(



<div


className={`


min-h-screen


transition-all


duration-500



${

dark

?

"text-white"

:

"text-black"

}



`}


>



<AuroraCyber/>







<main


className="


relative


z-10


mx-auto


max-w-7xl


p-10



"


>







<header


className="


mb-12


flex


items-center


justify-between



"


>







<div>



<h1


className="


text-5xl


font-bold


text-yellow-400



"


>



CYBER ARCHIVE



</h1>







<p


className="


mt-3


text-cyan-400



"


>



Banco de tecnologias do futuro



</p>



</div>








<Button



onClick={()=>setMostrar(!mostrar)}



>



{


mostrar


?


"FECHAR ARQUIVOS"


:


"VER TODOS"



}



</Button>







</header>









<section



className="



grid



gap-8



md:grid-cols-2



xl:grid-cols-3





"



>






{


lista.map((tecnologia,index)=>(



<CardCyber



key={tecnologia.id}



index={index}



tecnologia={tecnologia}



selecionado={selecionado}



abrirDetalhes={abrirArquivo}



/>



))



}






</section>







<ModalCyber



tecnologia={terminal}



fechar={()=>setTerminal(null)}



/>







</main>






<button



onClick={()=>setDark(!dark)}



className="


fixed


right-8


bottom-8


z-40


flex


h-16


w-16


items-center


justify-center



rounded-full



bg-yellow-400



text-3xl



text-black



shadow-xl



transition



hover:scale-110



"


>





{


dark


?


"☀️"


:


"🌙"



}






</button>








</div>



)



}
<style jsx global>{`

body{

background:#050505;

overflow-x:hidden;

}



::-webkit-scrollbar{

width:10px;

}



::-webkit-scrollbar-track{

background:#050505;

}



::-webkit-scrollbar-thumb{

background:#00ffff;

border-radius:20px;

}



::-webkit-scrollbar-thumb:hover{

background:#fcee0a;

}




.cyber-grid{

background-image:

linear-gradient(
rgba(0,255,255,.08) 1px,
transparent 1px
),

linear-gradient(
90deg,
rgba(0,255,255,.08) 1px,
transparent 1px
);

background-size:

40px 40px;

}



.glitch{

animation:glitch 2s infinite;

}




@keyframes glitch{


0%{

text-shadow:

2px 0 #ff007f,

-2px 0 #00ffff;

}


20%{

text-shadow:

-3px 0 #ff007f,

3px 0 #00ffff;

}



40%{

text-shadow:

3px 0 #fcee0a,

-3px 0 #00ffff;

}



60%{

text-shadow:none;

}



100%{

text-shadow:

2px 0 #ff007f,

-2px 0 #00ffff;

}



}




.scanline{

position:fixed;

inset:0;

pointer-events:none;

background:

linear-gradient(

transparent 50%,

rgba(0,255,255,.03) 50%

);

background-size:

100% 4px;

z-index:60;

}



`}</style>