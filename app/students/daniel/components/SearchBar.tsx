"use client"


interface Props{

value:string;

onChange:(value:string)=>void;

}



export default function SearchBar({

value,
onChange

}:Props){


return(

<input

value={value}

onChange={(e)=>
onChange(e.target.value)
}

placeholder="
Pesquisar filósofos, escritores...
"

className="
w-full

bg-zinc-900

text-white

p-4

rounded-lg

outline-none

"

/>


)

}