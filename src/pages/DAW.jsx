import React from "react";

import webDevelopment from "../assets/img/web-development.png";
import { Link } from "react-router-dom";
import { Pregunta, Respuesta } from "./DAM";
import { Lista, Mockup } from "./ASIR";

export const DAW = () => {
  return (
    <>
      {/* titulo */}
      <section class="bg-base-100">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6x">
              Desarrollo de aplicaciones web
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-x">
              Aprende a desarrollar soluciones web con tecnologias actuales y
              demandadas por el mercado laboral.
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
              to="/DAW/material"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
            >
              Accede al material
            </Link>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={webDevelopment} alt="web-development" className="h-80" />
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section id="faq" className="flex items-center justify-center flex-col">
        <h2 className="text-4xl text-center mb-10">DAW en Jana Vilatrons</h2>
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
              DAW?
            </Pregunta>
            <Respuesta>
              En DAW aprenderas a realizar web, <br />
              totalmente interactivas que se adapten a todo tipo de pantallas.
            </Respuesta>
            <Respuesta>Lenguajes del lado servidor</Respuesta>
            <Respuesta>Lenguajes del lado cliente</Respuesta>
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
          Competéncias básicas en DAW
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
              Gestionar servidores de aplicaciones adaptando su configuración en
              cada caso para permitir el despliegue de aplicaciones web.
            </Lista>
            <Lista>
              Gestionar bases de datos, interpretando su diseño lógico y
              verificando integridad, consistencia, seguridad y accesibilidad de
              los datos.
            </Lista>
            <Lista>
              Desarrollar aplicaciones web con acceso a bases de datos
              utilizando lenguajes, objetos de acceso y herramientas de mapeo
              adecuados a las especificaciones.
            </Lista>
            <Lista>
              Integrar contenidos en la lógica de una aplicación web,
              desarrollando componentes de acceso a datos adecuados a las
              especificaciones.
            </Lista>
            <Lista>
              Desarrollar interfaces en aplicaciones web de acuerdo con un
              manual de estilo, utilizando lenguajes de marcas y estándares web.
            </Lista>
            <Lista>
              Desarrollar complementos multimedia para su integración en
              aplicaciones web, empleando herramientas específicas y siguiendo
              las especificaciones establecidas.
            </Lista>
            <Lista>
              Integrar componentes multimedia en el interface de una aplicación
              web, realizando el análisis de interactividad, accesibilidad y
              usabilidad de la aplicación.
            </Lista>
            <Lista>
              Desarrollar e integrar componentes software en el entorno del
              servidor web, empleando herramientas y lenguajes específicos, para
              cumplir las especificaciones de la aplicación.
            </Lista>
            <Lista>
              Desarrollar servicios para integrar sus funciones en otras
              aplicaciones web, asegurando su funcionalidad.
            </Lista>
            <Lista>
              Integrar servicios y contenidos distribuidos en aplicaciones web,
              asegurando su funcionalidad.
            </Lista>
          </div>
        </Mockup>
      </section>
    </>
  );
};
