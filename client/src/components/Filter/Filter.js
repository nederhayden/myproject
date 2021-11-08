import React from "react";
import { Genero, Competencia, Nivel } from "./Modules";
import styles from "./Filter.module.scss";

export function Filter() {
  return (
    <div className={styles.filter}>
      <h1>Filtro</h1>
      <Genero />
      <Competencia />
      <Nivel />
    </div>
  );
}
