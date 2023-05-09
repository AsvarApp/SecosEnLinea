import { useState } from "react";
import { MenuIcon, MenuIconCLose } from "../iconSvg";
import LogoCun from '../../../public/cundi.webp'

function MenuMobile() {
  const [MenuIsOn, setMenuIsOn] = useState(false);

  function handleMenuClick() {
    setMenuVisible(!MenuIsOn);
  }

  return (
    <div
      onClick={() => setMenuIsOn(!MenuIsOn)}
      class="cursor-pointer w-auto p-1"
    >
      {MenuIsOn ? <MenuIconCLose /> : <MenuIcon />}
      <nav className={MenuIsOn?"fixed h-[345px] w-full bg-colorMenu/90 z-10 left-0 transition-all duration-300 overflow-hidden":"fixed h-[0px] w-full bg-colorMenu/90 left-0 overflow-hidden transition-all duration-500"}>
        <ul>
          <li><a href="cundinamarca" className="inline-block p-3 outline-1 border-b-purple-700/70 border-l-0 border-t-0 border-r-0 border text-white w-2/4 float-left"><img className="m-auto w-8 h-8 inline-block mr-2" src='../../../public/cundi.webp' alt="Logo de la loteria de cundinamarca colombia" /> Cundinamarca</a></li>
          <li><a href="bogota" className="block mr-2 p-3 outline-1 border-b-purple-700/70 border-l-0 border-r-0 border-t-0 border text-white w-full"><img className="m-auto w-8 h-8 inline-block mr-2" src='../../../public/bogota.webp' alt="Logo de la loteria de bogotá colombia" />Bogotá</a></li>
          <li><a href="tolima" className="inline-block mr-2 p-3 outline-1 border-b-purple-700/70 border-l-0 border-r-0 border-t-0 border text-white w-2/4 float-left"><img className="m-auto w-8 h-8 inline-block mr-2" src='../../../public/toli.webp' alt="Logo de la loteria de tolima colombia" />Tolima</a></li>
          <li><a href="quindio" className="block mr-2 p-3 outline-1 border-b-purple-700/70 border-l-0 border-r-0 border-t-0 border text-white w-full"><img className="m-auto w-8 h-8 inline-block mr-2" src='../../../public/quindio.webp' alt="Logo de la loteria del quindio colombia" />Quindio</a></li>
          <li><a href="cruzroja" className="inline-block p-3 outline-1 border-b-purple-700/70 border-l-0 border-t-0 border-r-0 border text-white w-2/4 float-left"><img className="m-auto w-8 h-8 inline-block mr-2" src='../../../public/cruz.webp' alt="Logo de la loteria de la cruz roja colombia" />Cruz Roja</a></li>
          <li><a href="medellín" className="block mr-2 p-3 outline-1 border-b-purple-700/70 border-l-0 border-r-0 border-t-0 border text-white w-full"><img className="m-auto w-8 h-8 inline-block mr-2" src='../../../public/medellin.webp' alt="Logo de la loteria del medellin colombia" />Medellín</a></li>
          <li><a href="huila" className="inline-block p-3 outline-1 border-b-purple-700/70 border-l-0 border-t-0 border-r-0 border text-white w-2/4 float-left"><img className="m-auto w-8 h-8 inline-block mr-2" src='../../../public/huila.webp' alt="Logo de la loteria del huila colombia" />Huila</a></li>
          <li><a href="risaralda" className="block mr-2 p-3 outline-1 border-b-purple-700/70 border-l-0 border-r-0 border-t-0 border text-white w-full"><img className="m-auto w-8 h-8 inline-block mr-2" src='../../../public/risaralda.webp' alt="Logo de la loteria de risaralda colombia" />Risaralda</a></li>
          <li><a href="meta" className="inline-block p-3 outline-1 border-b-purple-700/70 border-l-0 border-t-0 border-r-0 border text-white w-2/4 float-left"><img className="m-auto w-8 h-8 inline-block mr-2" src='../../../public/meta.webp' alt="Logo de la loteria del meta colombia" />Meta</a></li>
          <li><a href="santander" className="block mr-2 p-3 outline-1 border-b-purple-700/70 border-l-0 border-r-0 border-t-0 border text-white w-full"><img className="m-auto w-8 h-8 inline-block mr-2" src='../../../public/santander.webp' alt="Logo de la loteria del santander colombia" />Santander</a></li>
          <li><a href="Manizales" className="inline-block p-3 outline-1 border-b-purple-700/70 border-l-0 border-t-0 border-r-0 border text-white w-2/4 float-left"><img className="m-auto w-8 h-8 inline-block mr-2" src='../../../public/mani.webp' alt="Logo de la loteria del manizales colombia" />manizales</a></li>
          <li><a href="boyaca" className="block mr-2 p-3 outline-1 border-b-purple-700/70 border-l-0 border-r-0 border-t-0 border text-white w-full"><img className="m-auto w-8 h-8 inline-block mr-2" src='../../../public/boyaca.webp' alt="Logo de la loteria de boyaca colombia" />Boyacá</a></li>
          <li><a href="valle" className="inline-block p-3 outline-1 border-b-purple-700/70 border-l-0 border-t-0 border-r-0 border text-white w-2/4 float-left"><img className="m-auto w-8 h-8 inline-block mr-2" src='../../../public/valle.webp' alt="Logo de la loteria del valle colombia" />Valle</a></li>
          
          <li><a href="cauca" className="block mr-2 p-3 outline-1 border-b-purple-700/70 border-l-0 border-r-0 border-t-0 border text-white w-full"><img className="m-auto w-8 h-8 inline-block mr-2" src='../../../public/cauca.webp' alt="Logo de la loteria de cauca colombia" />Cauca</a></li>
        </ul>
      </nav> 
    </div>
  );
}
export default MenuMobile;
