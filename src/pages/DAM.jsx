import React from "react";
import { Link } from "react-router-dom";

import multiPlatform from "../assets/img/multiplataforma.png";
import { Lista, Mockup } from "./ASIR";

export const Pregunta = ({ children }) => {
  return (
    <div className="chat chat-end">
      <div className="chat-bubble chat-bubble-primary">{children}</div>
    </div>
  );
};

export const Respuesta = ({ children }) => {
  return (
    <div className="chat chat-start">
      <div className="chat-bubble chat-bubble-success w-80">{children}</div>
    </div>
  );
};

export const DAM = () => {
  return (
    <>
      {/* Titulo */}
      <section class="bg-base-100">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6x">
              Desarrollo de aplicaciones multiplataforma
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-x">
              Aprende a desarrollar aplicaciones para todo tipo de sistemas y
              dispositivos actuales.
            </p>
            <a
              href="#competencias"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-info focus:ring-4 focus:ring-primary-300"
            >
              Más información
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="gray"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <Link
              to="/DAM/material"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
            >
              Accede al material
            </Link>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={multiPlatform} alt="web-development" className="h-80" />
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section id="faq" className="flex items-center justify-center flex-col">
        <h2 className="text-4xl text-center mb-10">DAM en Jana Vilatrons</h2>
        <div className="grid grid-cols-3 container gap-52">
          <div>
            <Pregunta>
              Llegare a buen nivel en <br />
              vuestro instituto?
            </Pregunta>
            <Respuesta>
              En Jana Vilatrons, <br />
              el objetivo es que pases por encima
              <br /> de los limites.
            </Respuesta>
            <Respuesta>
              Nosotros damos unos conceptos
              <br /> básicos y tu los desarrollas a tu manera. <br />Y siempre
              estamos aquí
              <br />
              para ayudarte.
            </Respuesta>
          </div>
          {/* Chat 2 */}
          <div>
            <Pregunta>
              Que se aprende en <br />
              DAM?
            </Pregunta>
            <Respuesta>
              En DAM aprenderas a realizar apps, <br />
              para todo tipo de dispositivos.
              <br /> Como ejemplos tenemos:
            </Respuesta>
            <Respuesta>Aplicaciones de escritorio</Respuesta>
            <Respuesta>Aplicaciones moviles</Respuesta>
            <Respuesta>Y mucho más</Respuesta>
          </div>
          {/* Chat 3 */}
          <div>
            <Pregunta>
              Que pasa si estoy <br /> trabajando y no puedo asistir a clases?
            </Pregunta>
            <Respuesta>
              ¡No pasa absolutamente nada! <br />
              Entendemos que hay muchas situaciones que dificultan la asistencia
            </Respuesta>
            <Respuesta>
              Todo el material és publico y puedes acceder a el en cualquier
              momento y luegar para seguir el ritmo de clase, tu solo preocupate
              por hacer los ejercicios y practicar lo suficiente para los
              examenes.
            </Respuesta>
          </div>
        </div>
      </section>
      {/* Competencias básicas */}
      <section id="competencias">
        <h2 className="text-center text-4xl mt-44 mb-20">
          Competéncias básicas en DAM
        </h2>
        <Mockup>
          <div className="container p-10">
            <h2 className="text-3xl mb-10 text-center">
              Nuestros mínimos són:
            </h2>
            <Lista>
              Configurar y explotar sistemas informáticos, adaptando la
              configuración lógica del sistema según las necesidades de uso y
              los criterios establecidos.
            </Lista>
            <Lista>
              Aplicar técnicas y procedimientos relacionados con la seguridad en
              sistemas, servicios y aplicaciones, cumpliendo el plan de
              seguridad.
            </Lista>
            <Lista>
              Gestionar bases de datos, interpretando su diseño lógico y
              verificando integridad, consistencia, seguridad y accesibilidad de
              los datos.
            </Lista>
            <Lista>
              Gestionar entornos de desarrollo adaptando su configuración en
              cada caso para permitir el desarrollo y despliegue de
              aplicaciones.
            </Lista>
            <Lista>
              Desarrollar aplicaciones multiplataforma con acceso a bases de
              datos utilizando lenguajes, librerías y herramientas adecuados a
              las especificaciones.
            </Lista>
            <Lista>
              Desarrollar aplicaciones implementando un sistema completo de
              formularios e informes que permitan gestionar de forma integral la
              información almacenada.
            </Lista>
            <Lista>
              Integrar contenidos gráficos y componentes multimedia en
              aplicaciones multiplataforma, empleando herramientas específicas y
              cumpliendo los requerimientos establecidos.
            </Lista>
            <Lista>
              Desarrollar interfaces gráficos de usuario interactivos y con la
              usabilidad adecuada, empleando componentes visuales estándar o
              implementando componentes visuales específicos.
            </Lista>
            <Lista>
              Participar en el desarrollo de juegos y aplicaciones en el ámbito
              del entretenimiento y la educación empleando técnicas, motores y
              entornos de desarrollo específicos.
            </Lista>
            <Lista>
              Desarrollar aplicaciones para teléfonos, PDA y otros dispositivos
              móviles empleando técnicas y entornos de desarrollo específicos.
            </Lista>
            <Lista>
              Crear ayudas generales y sensibles al contexto, empleando
              herramientas específicas e integrándolas en sus correspondientes
              aplicaciones.
            </Lista>
            <Lista>
              Crear tutoriales, manuales de usuario, de instalación, de
              configuración y de administración, empleando herramientas
              específicas.
            </Lista>
            <Lista>
              Empaquetar aplicaciones para su distribución preparando paquetes
              auto instalables con asistentes incorporados.
            </Lista>
            <Lista>
              Desarrollar aplicaciones multiproceso y multihilo empleando
              librerías y técnicas de programación específicas.
            </Lista>
            <Lista>
              Desarrollar aplicaciones capaces de ofrecer servicios en red
              empleando mecanismos de comunicación.
            </Lista>
            <Lista>
              Participar en la implantación de sistemas ERP-CRM evaluando la
              utilidad de cada uno de sus módulos.
            </Lista>
            <Lista>
              Gestionar la información almacenada en sistemas ERP-CRM
              garantizando su integridad.
            </Lista>
            <Lista>
              Desarrollar componentes personalizados para un sistema ERP-CRM
              atendiendo a los requerimientos.
            </Lista>
            <Lista>
              Realizar planes de pruebas verificando el funcionamiento de los
              componentes software desarrollados, según las especificaciones.
            </Lista>
            <Lista>
              Desplegar y distribuir aplicaciones en distintos ámbitos de
              implantación verificando su comportamiento y realizando las
              modificaciones necesarias.
            </Lista>
            <Lista>
              Establecer vías eficaces de relación profesional y comunicación
              con sus superiores, compañeros y subordinados, respetando la
              autonomía y competencias de las distintas personas.
            </Lista>
            <Lista>
              Liderar situaciones colectivas que se puedan producir, mediando en
              conflictos personales y laborales, contribuyendo al
              establecimiento de un ambiente de trabajo agradable, actuando en
              todo momento de forma respetuosa y tolerante.
            </Lista>
            <Lista>
              Gestionar su carrera profesional, analizando las oportunidades de
              empleo, autoempleo y de aprendizaje.
            </Lista>
            <Lista>
              Mantener el espíritu de innovación y actualización en el ámbito de
              su trabajo para adaptarse a los cambios tecnológicos y
              organizativos de su entorno profesional.
            </Lista>
            <Lista>
              Crear y gestionar una pequeña empresa, realizando un estudio de
              viabilidad de productos, de planificación de la producción y de
              comercialización.
            </Lista>
            <Lista>
              Participar de forma activa en la vida económica, social y
              cultural, con una actitud crítica y responsable.
            </Lista>
          </div>
        </Mockup>
      </section>
    </>
  );
};
