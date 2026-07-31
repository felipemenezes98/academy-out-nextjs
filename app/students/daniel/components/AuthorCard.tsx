"use client"

import { Author } from "../types";


interface Props {
  author: Author;
  onClick: () => void;
}


export default function AuthorCard({
  author,
  onClick
}: Props) {


return (

<div

onClick={onClick}

className="
group

w-[150px]
sm:w-[170px]
md:w-[190px]
lg:w-[200px]

h-[300px]
sm:h-[330px]

bg-zinc-900

rounded-lg

overflow-hidden

cursor-pointer

shadow-lg

transition-transform

duration-300

hover:scale-105

flex-shrink-0

"

>


{/* IMAGEM */}

<div

className="
w-full

h-[220px]
sm:h-[245px]

overflow-hidden

"

>

<img

src={`${author.image}?auto=format&fit=crop&w=400&h=600&q=80`}

alt={author.name}

className="
w-full
h-full

object-cover

group-hover:scale-110

transition-transform

duration-500

"

/>

</div>



{/* TEXTO */}

<div

className="
p-3

flex

flex-col

justify-between

h-[80px]

"

>


<h3

className="
text-white

font-bold

text-sm
sm:text-base

truncate

"

>

{author.name}

</h3>



<p

className="
text-gray-400

text-xs

truncate

"

>

{author.period}

</p>



</div>


</div>


)

}