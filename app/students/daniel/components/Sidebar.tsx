"use client"


import {
Home,
Search,
BookOpen
} from "lucide-react";


interface Props{

schools:string[];

onHome:()=>void;

onSchoolSelect:(school:string)=>void;

onSearch:()=>void;

}



export default function Sidebar({

schools,
onHome,
onSchoolSelect,
onSearch

}:Props){


return(

<aside

className="
fixed
left-0
top-0

h-screen

w-64

bg-black

text-white

p-6

hidden
md:block

z-50

"

>


<h1

className="
text-3xl
font-bold

text-red-600

mb-10

"

>

PhiloFlix

</h1>



<nav

className="
space-y-6

"

>


<button

onClick={onHome}

className="
flex
gap-3
hover:text-red-500

"

>

<Home/>

Início

</button>



<button

onClick={onSearch}

className="
flex
gap-3
hover:text-red-500

"

>

<Search/>

Buscar

</button>




<div>


<h3

className="
text-gray-500
mb-4

"

>

Escolas

</h3>



{

schools.map(item=>(


<button

key={item}

onClick={()=>onSchoolSelect(item)}

className="
block
mb-3

hover:text-red-500

"

>

<BookOpen
size={16}
className="inline mr-2"
/>

{item}

</button>


))

}



</div>


</nav>


</aside>


)

}