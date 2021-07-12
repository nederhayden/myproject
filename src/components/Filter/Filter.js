import React from "react";
import "./filter.scss";
import { Genero, Competencia, Nivel } from "./Modules";

export function Filter() {
  return (
    <div className="filter">
      <h1>Filtrar</h1>
      <Genero />
      <Competencia />
      <Nivel />
    </div>
  );
}
