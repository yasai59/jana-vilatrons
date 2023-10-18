import React, { useEffect, useState } from "react";
import axios from "axios";

export const Post = ({ titulo, descripcion, tema }) => {
  const [imagen, setImagen] = useState("https://source.unsplash.com/random");

  useEffect(() => {
    axios.get(`/search/photos?query=${tema}&per_page=1`).then((res) => {
      console.log(res.data.results[0].urls);
      setImagen(res.data.results[0].urls.regular);
    });
  }, []);

  return (
    <>
      <div className="card w-96 h-full bg-base-100 shadow-xl">
        <figure className="h-52">
          <img src={imagen} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{titulo}</h2>
          <p>{descripcion}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Ver</button>
          </div>
        </div>
      </div>
    </>
  );
};
