import React from "react";
import { Menu } from "../components/Menu";
import { useNavigate } from "react-router";
import { VentajasEscuela } from "../components/VentajasEscuela";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleMaterial = () => {
    navigate("/material");
  };

  return (
    <>
      <Menu />
      <div className="flex items-center justify-center flex-col gap-8 mt-10">
        <div className="mockup-window border bg-base-300 container">
          <div className="flex justify-center px-4 py-16 bg-base-200 flex-col items-center">
            <h2 className="text-4xl text-center mb-10">
              La escuela que te prepara para el presente
            </h2>
            <div className="card w-3/6 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">O incluso para futuro...</h2>
                <p>
                  Mantenemos el material de enseñanza al dia para preparar a
                  nuestros alumnos a retos que se van a encontrar ahora o dentro
                  de unos pocos años, no a los de hace décadas.
                  <br />
                  <br />
                  Animamos a nuestros alumnos a participar en eventos
                  tecnológicos de otros institutos y entidades a demás de crear
                  los nuestros propios.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-4xl text-center mb-10">
          Ventajas de nuestra escuela
        </h2>
        <div className="container">
          <VentajasEscuela />
        </div>
      </div>
    </>
  );
};
