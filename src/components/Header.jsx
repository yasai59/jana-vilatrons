import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";

export const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <NavLink className="btn btn-ghost normal-case text-xl" to="/">
          <img src={logo} alt="Site logo" style={{ height: "100%" }} />
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <details>
              <summary>Cursos</summary>
              <ul className="p-2 bg-base-100" style={{ zIndex: 2 }}>
                <li>
                  <NavLink to="/DAM">DAM</NavLink>
                </li>
                <li>
                  <NavLink to="/DAW">DAW</NavLink>
                </li>
                <li>
                  <NavLink to="/ASIX">ASIX</NavLink>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};
