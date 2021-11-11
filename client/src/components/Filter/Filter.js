import React from "react";
import { Box } from "@material-ui/core";
import { Genero, Competencia, Nivel } from "./Modules";
import styles from "./Filter.module.scss";

export function Filter() {
  return (
    <Box className={styles.filter}>
      <h1>Filtro</h1>
      <Genero />
      <Competencia />
      <Nivel />
    </Box>
  );
}
