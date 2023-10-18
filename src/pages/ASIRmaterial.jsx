import { Post } from "../components/Post";

export const ASIRmaterial = () => {
  return (
    <>
      <h1 className="text-center text-4xl mt-20">Material didáctico DAM</h1>
      <div className="container m-auto">
        <div className="grid grid-cols-3 place-items-center mt-36 gap-16">
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
            titulo="Gestión de servidor con Windows Server"
            descripcion="Aprende a gestionar un servidor con Windows Server"
            tema="Windows Server"
          />
          <Post
            titulo="Active Directory"
            descripcion="Aprende a gestionar usuarios y recursos con Active Directory"
            tema="Windows Server user management"
          />
          <Post
            titulo="Gestión de servidor con Linux"
            descripcion="Aprende a gestionar un servidor con Linux"
            tema="Linux"
          />
          <Post
            titulo="Gestión de bases de datos con SQL"
            descripcion="Aprende a gestionar bases de datos con SQL, el lenguaje de programación de bases de datos"
            tema="SQL"
          />
          <Post
            titulo="Bases de datos no relacionales"
            descripcion="Aprende a gestionar bases de datos no relacionales con MongoDB"
            tema="MongoDB"
          />
          <Post
            titulo="TALLER, tu propio home server"
            descripcion="Aprende a montar tu propio servidor en casa con un ordenador viejo y un sistema operativo Linux"
            tema="Home Server"
          />
        </div>
        <div className="divider mt-20">Próximamente más</div>
      </div>
    </>
  );
};
