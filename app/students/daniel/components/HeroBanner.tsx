import {Author} from "../types";


interface Props{

author:Author;

}



export default function HeroBanner({
author
}:Props){


return(

<section

style={{
backgroundImage:
`linear-gradient(to right,#000,transparent),
url(${author.banner})`
}}

className="
h-[500px]
bg-cover
bg-center
flex
items-end
p-10
"

>


<div
className="
max-w-xl
text-white
"
>

<h1
className="
text-6xl
font-bold
"
>
{author.name}
</h1>


<p
className="
mt-5
text-lg
"
>

{author.summary}

</p>


</div>


</section>


)

}