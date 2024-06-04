import {useState} from "react";

export  default function Main (){
    const [ nome, setNome] = useState (" ");
    const [ telefone, setTelefone] = useState ();
    const [listaContatos,setLista] = useState ([]);
    const [ CPF, setCpf] = useState (0);


    const registrar = (event) =>{
        event.preventDefault();
       alert("ola")
       setListaContatos([...listaContatos,
     {
       nomeSalvo: nome,
       telefoneSalvo: telefone
     }
     ]);
    };
     console.table(listaContatos)
     const remover = (id) => {
      const novalista = listaContatos.filter(
         (contato, index)=>{
             if(index !== id){
                 return contato
             } else{
                 return null
             }
         }
      )
     alert(id);
 }
    return(
     <main>
        <form action= ""onSubmit={registrar}>
            <label htmfor="nome">nome:</label>
        <input 
       type="text"
        nome="" id=""
         onChange={(event)=> setNome(event.target.event)}
         />
         {nome}

         <label htmfor="telefone">telefone:</label>
         <input 
       type="number"
        nome="" id=""
         onChange={(event)=> setTelefone(event.target.event)}
         />
         {telefone}

         <label htmfor="C
         PF">CPF:</label>
         <input 
       type="number"
        Cpf="" id=""
         onChange={(event)=> setCpf(event.target.event)}
         />
         {CPF}
         <button>enviar</button>
         </form>
         {listaContatos.map((contato, index) => 
           <div key={index}>
              <p>{contato.nomeSalvo}</p>
              <p>{contato.telefoneSalvo}</p>
              <button onClick={() => remover(index)}>x</button>
           </div>
        )}
     </main>

    );
}