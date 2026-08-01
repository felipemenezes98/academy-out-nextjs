"use client"


import {
useState,
useRef
} from "react";


import data from "./data/philosophers.json";


import Sidebar from "./components/Sidebar";

import HeroBanner from "./components/HeroBanner";

import CategoryCarousel from "./components/CategoryCarousel";

import SearchBar from "./components/SearchBar";

import QuoteOfDay from "./components/QuoteOfDay";

import AuthorModal from "./components/AuthorModal";



export default function Page(){


const topRef = useRef<HTMLDivElement>(null);



const [search,setSearch]=useState("");

const [selected,setSelected]=useState<any>(null);

const [activeSchool,setActiveSchool]=useState<string|null>(null);



const schools=data.schools;



const allAuthors=
schools.flatMap(
school=>school.authors
);



const filteredSchools = schools

.filter(
school=>

!activeSchool ||
school.name===activeSchool

)

.map(school=>({

...school,

authors:
school.authors.filter(author=>

author.name
.toLowerCase()
.includes(
search.toLowerCase()
)

)

}));




const randomAuthor=

allAuthors[
Math.floor(
Math.random()*allAuthors.length
)
];



const quote=

Object.values(
randomAuthor.genres
)
.flat()[0];




function goHome(){


setSearch("");

setActiveSchool(null);


topRef.current?.scrollIntoView({

behavior:"smooth"

});


}



function goSearch(){

document
.getElementById("search")
?.scrollIntoView({

behavior:"smooth"

});

}




return(


<div

ref={topRef}

className="
bg-black

min-h-screen

md:pl-64

"


>


<Sidebar


schools={
schools.map(
s=>s.name
)
}


onHome={goHome}


onSearch={goSearch}


onSchoolSelect={
(name)=>
setActiveSchool(name)
}


/>



<main>


<HeroBanner

author={randomAuthor}

/>



<div

className="
p-6

"

>


<div id="search">


<SearchBar

value={search}

onChange={setSearch}

/>


</div>



<QuoteOfDay

quote={quote}

/>




{

filteredSchools.map(

school=>(


<CategoryCarousel

key={school.id}

school={school}

onSelect={setSelected}

/>


)


)


}



</div>


</main>



<AuthorModal

author={selected}

close={()=>
setSelected(null)
}

/>



</div>


)

}