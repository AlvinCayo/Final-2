import React from "react";
import "./ejercicios.css";

export const Ejercicio = ({ nombre, series, png = "" }) => {
  return (
    <div className="ejer">
      {png && <img src={png} alt="" style={{ marginRight: "10px" }} />}
      <div className="detalles">
        <div className="nEje">{nombre}</div>
        <div className="series">{series}</div>

      </div>
    </div>
  );
};
