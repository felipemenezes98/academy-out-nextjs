"use client";

import {useEffect,useState} from "react";


const commands=[

"boot computer.exe",

"checking cpu... OK",

"loading memory modules...",

"detecting storage...",

"starting operating system",

"system ready_"

];


export default function Terminal(){

const [text,setText]=useState("");

const [line,setLine]=useState(0);


useEffect(()=>{


if(line >= commands.length)
return;


let index=0;


const interval=setInterval(()=>{


setText(prev=>
prev + commands[line][index]
);


index++;


if(index === commands[line].length){

clearInterval(interval);


setTimeout(()=>{

setText(prev=>prev+"\n");

setLine(prev=>prev+1);


},600)

}


},60);



return()=>clearInterval(interval);


},[line]);



return(

<section
className="
mx-auto
max-w-5xl
px-8
py-12
"
>


<div
className="
rounded-xl
border
border-green-500/30
bg-black
p-6
font-mono
text-green-400
shadow-lg
shadow-green-500/10
"
>


<div className="
mb-4
text-zinc-500
">

terminal.exe

</div>


<pre
className="
whitespace-pre-wrap
leading-7
"
>

{ text }

<span className="animate-pulse">
█
</span>

</pre>


</div>


</section>

)

}