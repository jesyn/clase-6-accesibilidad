/*
  4.1.2 - Nombre, función, valor [A]

  El código debe ser semánticamente correcto y sin
  errores significativos.

  ---

  4.1.1 - Análisis (código) [A]

  Toda tecnología accesible hace uso de las propiedades de
  nombre, función y valor para identificar correctamente los
  elementos HTML estándar. Cualquier componente
  personalizado también debe traer estos atributos de forma adecuada.

*/

import "./App.css";
import Navbar from "./components/navbar";
import Email from "./components/email";
import About from "./components/about";
import Video from "./components/video";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="mainPage">
        <section>
          <h2>Vídeo</h2>
          <Video />
        </section>
        <section className="about">
          <h2>Sobre Rick and Morty</h2>
          <About />
        </section>
        <section className="news">
          <h2>Recibir noticias sobre la serie</h2>
          <Email />
        </section>
      </main>
    </>
  );
};

export default App;
