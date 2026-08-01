import {Author} from "../types";


interface Props{

author:Author|null;
close:()=>void;

}



export default function AuthorModal({
author,
close
}:Props){


if(!author)
return null;


return(

<div

className="
fixed
inset-0
bg-black/80
flex
items-center
justify-center
z-50
p-5
"

>


<div

className="
bg-zinc-900
text-white
max-w-3xl
p-8
rounded-xl
"

>


<button
onClick={close}
className="float-right text-red-500"
>
X
</button>



<h1 className="text-4xl font-bold">
{author.name}
</h1>


<p className="mt-5">
{author.summary}
</p>



{
Object.entries(author.genres)
.map(([genre,quotes])=>(

<div
key={genre}
className="mt-6"
>

<h3
className="
text-xl
text-red-500
"
>

{genre}

</h3>


{
quotes.map(q=>(

<p
key={q}
className="mt-2 italic"
>
"{q}"
</p>

))

}


</div>

))
}



</div>

</div>

)

}