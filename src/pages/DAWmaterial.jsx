import { Post } from "../components/Post";

export const DAWmaterial = () => {
  return (
    <>
      <h1 className="text-center text-4xl mt-20">Material didáctico DAM</h1>
      <div className="container m-auto">
        <div className="grid grid-cols-1 place-items-center mt-36 gap-16 md:grid-cols-2 xl:grid-cols-3">
          <Post
            titulo="Fundamentos de C"
            descripcion="Aprende a programar en C desde las bases como las variables hasta llegar a funciones y listas"
            tema="programming C"
          />
          <Post
            titulo="Fundamentos de C++"
            descripcion="Utiliza los conceptos aprendidos en C y aprende a programar en C++"
            tema="programming C++"
          />
          <Post
            titulo="Fundamentos de C#"
            descripcion="Aprende a programar en C#, el lenguaje de programación que mueve los videojuegos"
            tema="programming C#"
          />
          <Post
            titulo="Programación con JavaScript"
            descripcion="Empieza a crear tus webs interactivas con JavaScript"
            tema="programming JavaScript"
          />
          <Post
            titulo="Programación con PHP"
            descripcion="Aprende a programar en PHP, el lenguaje de programación web de los servidores"
            tema="programming PHP"
          />
          <Post
            titulo="Servidores con NodeJS"
            descripcion="Aprende a crear servidores con NodeJS, el lenguaje de programación de JavaScript en el servidor"
            tema="programming NodeJS"
          />
          <Post
            titulo="JavaScript: React"
            descripcion="Aprende a crear aplicaciones web con React, el framework de JavaScript más popular"
            tema="programming React"
          />
          <Post
            titulo="JavaScript: Vue"
            descripcion="Aprende a crear aplicaciones web con Vue, el framework de JavaScript más fácil de aprender"
            tema="programming Vue"
          />
          <Post
            titulo="JavaScript: Angular"
            descripcion="Aprende a crear aplicaciones web con Angular, el framework de JavaScript más completo"
            tema="programming Angular"
          />
        </div>
        <div className="divider mt-20">Próximamente más</div>
      </div>
    </>
  );
};
