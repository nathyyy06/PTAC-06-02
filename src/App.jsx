import Header from "./components/Header";
import Footer from "./components/Footer";

import "./globals.css";
export default function App() {

  const nome = "nathalia";
  const sobreNome = "teixeira";

  return( 
    <div>
      <Header/>
      <main>
      <h1>bom dia</h1>
        <p>Desenvolvido por: {nathalia teixeira}</p>
      </main>
      <Footer/>
    </div>  
  );


}