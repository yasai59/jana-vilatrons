import React from "react";
import { Category } from "./Category";

import daw from "../assets/img/codigo.jpg";
import asix from "../assets/img/ASIX.jpg";
import dam from "../assets/img/DAM.webp";

export const Menu = () => {
  return (
    <div className="grid xl:grid-cols-3 xl:h-[50vmin] md:h-[70vmin] h-[120vmin]">
      <Category link="DAM" text="DAM" img={dam} />
      <Category link="ASIR" text="ASIR" img={asix} />
      <Category link="DAW" text="DAW" img={daw} />
    </div>
  );
};
