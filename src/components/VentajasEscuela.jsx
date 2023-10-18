const Ventaja = ({ children }) => {
  return (
    <div className="collapse collapse-plus border border-base-300 bg-base-200 mb-4">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-neutral text-white peer-checked:bg-gray-300 peer-checked:text-secondary-content font-bold">
        {children[0]}
      </div>
      <div className="collapse-content bg-neutral text-primary-content peer-checked:bg-gray-300 peer-checked:text-secondary-content">
        {children[1]}
      </div>
    </div>
  );
};

export const VentajasEscuela = () => {
  return (
    <>
      <Ventaja>
        <p>Flexibilidad con horarios</p>
        <p>
          En Jana Vilatrons no creemos que obligarte a venir al instituto sea lo
          que demuestre lo que sabes o dejas de saber, por eso nosotros contamos
          los ejercicios y examenes unicamente para la nota.
          <br />
          <br />
          tienes disponibles en la web todo el material didactico que se ha
          utilizado durante la clase, y si tienes alguna duda puedes preguntarle
          a tu profesor en cualquier momento.
          <br />
          Si puedes demostrar que sabes hacer los ejercicios, no tienes por que
          venir a clase.
        </p>
      </Ventaja>
      <Ventaja>
        <p>Enseñanza personalizada</p>
        <p>
          Dividimos a los alumnos segun el nivel de atencion que requieran,
          aunque todos saldran como minimo con el nivel requerido por el grado.
          Entendemos que algunos alumnos necesitan más refuerzo que otros, y
          queremos que todos puedan aprender.
          <br />
          <br />
          Además de eso, queremos que los alumnos que puedan dar más de si,
          exploten todo su potencial en nuestro centro, Añadiendo contenido
          extra para los alumnos que quieran aprender más.
          <br />
          Por lo que Jana Vilatrons es perfecto tanto para los alumnos que más
          les cueste como para los que quieran aprender más.
        </p>
      </Ventaja>
      <Ventaja>
        <p>Explotamos la creatividad</p>
        <p>
          Tenemos una sala especializada unicamente para la creatividad, donde
          los alumnos pueden venir a trabajar en sus proyectos, ya sean
          personales o para el instituto.
          <br />
          Esta equipada con todo lo necesario para que los alumnos puedan
          explotar su imaginación y crear lo que quieran, tenemos desde
          pizarras, hasta impresoras 3D.
          <br />
          <br />
          Además, tenemos un equipo de profesores especializados en diversos
          temas que pueden ayudar a los alumnos a desarrollar sus ideas.
        </p>
      </Ventaja>
      <Ventaja>
        <p>Trabajamos los conceptos, no las herramientas</p>
        <p>
          Creemos firmemente que los conceptos són importantes, pero hay tantas
          formas de aplicarlos que dejamos que el alumnado elija la que más le
          guste de todas las opciones, o si no sabe cual elegir, siempre puede
          escojer la misma que la que se esté usando para seguir al pie de la
          letra la clase
        </p>
      </Ventaja>
    </>
  );
};
