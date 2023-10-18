import { Link } from "react-router-dom";

import administracionSistemas from "../assets/img/asir.png";
import { Pregunta, Respuesta } from "./DAM";

export const Mockup = ({ children }) => {
  return (
    <>
      <div class="relative mx-auto border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[342px] max-w-[602px] md:h-[588px] md:max-w-[1024px]">
        <div class="rounded-lg h-[312px] md:h-[556px] bg-gray-200 overflow-y-scroll">
          {children}
        </div>
      </div>
      <div class="relative mx-auto bg-gray-900 rounded-b-xl rounded-t-sm h-[34px] max-w-[702px] md:h-[42px] md:max-w-[1194px]">
        <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[112px] h-[10px] md:w-[192px] md:h-[16px] bg-gray-800"></div>
      </div>
    </>
  );
};

export const Lista = ({ children }) => {
  return (
    <div className="card bg-base-100 shadow-xl mb-5">
      <div className="card-body">
        <p>{children}</p>
      </div>
    </div>
  );
};

export const ASIR = () => {
  return (
    <>
      {/* Título */}
      <section class="bg-base-100">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6x">
              Administración de sistemas informáticos en red
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-x">
              Aprende todo sobre redes, sistemas operativos y seguridad para ser
              un profesional de la informática.
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
              to="/ASIR/material"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
            >
              Accede al material
            </Link>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src={administracionSistemas}
              alt="web-development"
              className="h-80"
            />
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section id="faq" className="flex items-center justify-center flex-col">
        <h2 className="text-4xl text-center mb-10">ASIR en Jana Vilatrons</h2>
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
              ASIR?
            </Pregunta>
            <Respuesta>
              En ASIR aprenderas sobre la infraestructura <br />
              de las redes, se manejan:
            </Respuesta>
            <Respuesta>Sistemas Operativos</Respuesta>
            <Respuesta>Bases de datos y seguridad</Respuesta>
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
      {/* Competéncias básicas */}
      <section id="competencias">
        <h2 className="text-center text-4xl mt-44 mb-20">
          Competéncias básicas en ASIR
        </h2>
        <Mockup>
          <div className="container p-10">
            <h2 className="text-3xl mb-10 text-center">
              Nuestros mínimos són:
            </h2>
            <Lista>
              Administrar sistemas operativos de servidor, instalando y
              configurando el software, en condiciones de calidad para asegurar
              el funcionamiento del sistema.
            </Lista>
            <Lista>
              Administrar servicios de red (web, mensajería electrónica y
              transferencia de archivos, entre otros) instalando y configurando
              el software, en condiciones de calidad.
            </Lista>
            <Lista>
              Administrar aplicaciones instalando y configurando el software, en
              condiciones de calidad para responder a las necesidades de la
              organización.
            </Lista>
            <Lista>
              Implantar y gestionar bases de datos instalando y administrando el
              software de gestión en condiciones de calidad, según las
              características de la explotación.
            </Lista>
            <Lista>
              Optimizar el rendimiento del sistema configurando los dispositivos
              hardware de acuerdo a los requisitos de funcionamiento.
            </Lista>
            <Lista>
              Evaluar el rendimiento de los dispositivos hardware identificando
              posibilidades de mejoras según las necesidades de funcionamiento.
            </Lista>
            <Lista>
              Determinar la infraestructura de redes telemáticas elaborando
              esquemas y seleccionando equipos y elementos.
            </Lista>
            <Lista>
              Integrar equipos de comunicaciones en infraestructuras de redes
              telemáticas, determinando la configuración para asegurar su
              conectividad.
            </Lista>
            <Lista>
              Implementar soluciones de alta disponibilidad, analizando las
              distintas opciones del mercado, para proteger y recuperar el
              sistema ante situaciones imprevistas.
            </Lista>
            <Lista>
              Supervisar la seguridad física según especificaciones del
              fabricante y el plan de seguridad para evitar interrupciones en la
              prestación de servicios del sistema.
            </Lista>
            <Lista>
              Asegurar el sistema y los datos según las necesidades de uso y las
              condiciones de seguridad establecidas para prevenir fallos y
              ataques externos.
            </Lista>
            <Lista>
              Administrar usuarios de acuerdo a las especificaciones de
              explotación para garantizar los accesos y la disponibilidad de los
              recursos del sistema.
            </Lista>
            <Lista>
              Diagnosticar las disfunciones del sistema y adoptar las medidas
              correctivas para restablecer su funcionalidad.
            </Lista>
            <Lista>
              Gestionar y/o realizar el mantenimiento de los recursos de su área
              (programando y verificando su cumplimiento), en función de las
              cargas de trabajo y el plan de mantenimiento.
            </Lista>
            <Lista>
              Efectuar consultas, dirigiéndose a la persona adecuada y saber
              respetar la autonomía de los subordinados, informando cuando sea
              conveniente.
            </Lista>
            <Lista>
              Mantener el espíritu de innovación y actualización en el ámbito de
              su trabajo para adaptarse a los cambios tecnológicos y
              organizativos de su entorno profesional.
            </Lista>
            <Lista>
              Liderar situaciones colectivas que se puedan producir, mediando en
              conflictos personales y laborales, contribuyendo al
              establecimiento de un ambiente de trabajo agradable y actuando en
              todo momento de forma sincera, respetuosa y tolerante.
            </Lista>
            <Lista>
              Resolver problemas y tomar decisiones individuales, siguiendo las
              normas y procedimientos establecidos, definidos dentro del ámbito
              de su competencia.
            </Lista>
            <Lista>
              Gestionar su carrera profesional, analizando las oportunidades de
              empleo, autoempleo y de aprendizaje.
            </Lista>
            <Lista>
              Participar de forma activa en la vida económica, social y cultural
              con actitud crítica y responsable.
            </Lista>
            <Lista>
              Crear y gestionar una pequeña empresa, realizando un estudio de
              viabilidad de productos, de planificación de la producción y de
              comercialización.
            </Lista>
          </div>
        </Mockup>
      </section>
    </>
  );
};
