import {useState} from "react";

export  default function Main (){
    const [ nome, setNome] = useState (" ");
    const [ telefone, setTelefone] = useState ("0");
    return(
     <main>
        <form>
       <input 
       type="text"
        nome="" id=""
         onChange={(event)=> setNome(event.target.event)}
         />
         {nome}
         </form>

         <input 
       type="number"
        nome="" id=""
         onChange={(event)=> setTelefone(event.target.event)}
         />
         {telefone}
     </main>
    );
}