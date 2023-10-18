import { Post } from "../components/Post";

import imagenC from "../assets/img-dam/C.webp";
import imagenCplus from "../assets/img-dam/c++.png";

export const DAMmaterial = () => {
  return (
    <>
      <h1 className="text-center text-4xl mt-20">Material didáctico DAM</h1>
      <div className="container m-auto">
        <div className="grid grid-cols-3 place-items-center mt-36 gap-16  ">
          <Post
            titulo="Fundamentos de C"
            descripcion="Aprende a programar en C desde las bases como las variables hasta llegar a funciones y listas"
            imagen={imagenC}
            tema="programming C"
          />
          <Post
            titulo="Fundamentos de C++"
            descripcion="Utiliza los conceptos aprendidos en C y aprende a programar en C++, C con clases y objetos"
            imagen={imagenCplus}
            tema="programming C++"
          />
          <Post
            titulo="Fundamentos de C#"
            descripcion="Aprende a programar en C#, el lenguaje de programación que mueve los videojuegos"
            tema={"programming C#"}
          />
          <Post
            titulo="Empezando con Unity"
            descripcion="Aprende a utilizar Unity, el motor de videojuegos más utilizado en el mundo"
            tema="Videogames Unity"
          />
          <Post
            titulo="Programación de videojuegos con Unity"
            descripcion="Aprende a programar videojuegos más avanzados con Unity"
            tema="Videogames Unity"
          />
          <Post
            titulo="Programación de interfaces graficas con C#"
            descripcion="añade interactividad a tus aplicaciones con C# y Windows Forms"
            tema="Graphic User Interface"
          />
          <Post
            titulo="Programación de aplicaciones móviles con Android"
            descripcion="Aprende a programar aplicaciones móviles con Android Studio"
            tema="Android"
          />
          <Post
            titulo="Programación de aplicaciones móviles con iOS"
            descripcion="Aprende a programar aplicaciones móviles con Swift"
            tema="Iphone"
          />
          <Post
            titulo="TALLER, programa tu propio lenguaje de programación"
            descripcion="Aprende a programar un lenguaje de programación desde cero"
            tema="programming language"
          />
        </div>
        <div className="divider mt-20">Próximamente más</div>
      </div>
    </>
  );
};
