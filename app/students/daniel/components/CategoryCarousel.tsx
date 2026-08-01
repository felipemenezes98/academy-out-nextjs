"use client"


import {
useRef
} from "react";


import {
ChevronLeft,
ChevronRight
} from "lucide-react";


import AuthorCard from "./AuthorCard";

import {
School
} from "../types";



interface Props {

school:School;

onSelect:(author:any)=>void;

}



export default function CategoryCarousel({

school,
onSelect

}:Props){



const carouselRef = useRef<HTMLDivElement>(null);



function scroll(direction:"left"|"right"){


if(!carouselRef.current)
return;



const amount = 500;



carouselRef.current.scrollBy({

left:
direction==="left"
?
-amount
:
amount,

behavior:"smooth"

});


}



return(


<section

className="
mb-12
relative

"

>


<h2

className="
text-white
text-2xl
md:text-3xl

font-bold

mb-5

"

>

{school.name}

</h2>




<button

onClick={()=>scroll("left")}

className="
absolute
left-0
top-1/2

z-20

bg-black/70

text-white

p-3

rounded-full

hover:bg-red-600

hidden
md:flex

"

>

<ChevronLeft size={28}/>

</button>




<div


ref={carouselRef}

className="

flex

gap-5

overflow-x-hidden

scroll-smooth

px-10

"

>


{

school.authors.map(author=>(

<AuthorCard

key={author.id}

author={author}

onClick={()=>onSelect(author)}

/>

))

}


</div>




<button

onClick={()=>scroll("right")}

className="

absolute

right-0

top-1/2

z-20

bg-black/70

text-white

p-3

rounded-full

hover:bg-red-600

hidden
md:flex

"

>

<ChevronRight size={28}/>


</button>



</section>


)

}