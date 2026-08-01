
interface Props{

quote:string;

}



export default function QuoteOfDay({
quote
}:Props){


return(

<div

className="
bg-gradient-to-r
from-red-700
to-black

p-8
rounded-xl
text-white
mb-10

"

>

<h2 className="text-2xl font-bold">
Frase do Dia
</h2>


<p
className="
mt-4
text-xl
italic
"
>
"{quote}"
</p>


</div>


)

}   