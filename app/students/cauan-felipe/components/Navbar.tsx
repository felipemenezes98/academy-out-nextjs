export default function Navbar(){

return(

<header className="
fixed
top-0
z-50
w-full
border-b
border-zinc-800
bg-black/60
backdrop-blur
">

<nav className="
mx-auto
flex
max-w-7xl
justify-between
p-5
">

<h1 className="
font-black
tracking-widest
text-cyan-400
">

COMPUTER.OS

</h1>


<div className="hidden md:flex gap-8 text-zinc-300">

<a href="#systems">
Sistemas
</a>

<a href="#architecture">
Arquitetura
</a>

<a href="#binary">
Lógica
</a>

</div>


</nav>

</header>

)

}