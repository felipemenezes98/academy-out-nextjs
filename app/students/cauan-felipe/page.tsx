import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ComputerSystems from "./components/ComputerSystems";
import Architecture from "./components/Architecture";
import BinarySection from "./components/BinarySection";
import Terminal from "./components/Terminal";
import Footer from "./components/Footer";
import Background from "./components/Background";

export default function Page(){

return(

<main className="
min-h-screen
overflow-hidden
bg-[#050505]
text-white
relative
">

<Background/>

<Navbar/>

<Hero/>

<About/>

<ComputerSystems/>

<Architecture/>

<BinarySection/>

<Terminal/>

<Footer/>

</main>

)

}