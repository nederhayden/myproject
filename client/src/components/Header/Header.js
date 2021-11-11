import React from "react";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <Box className={styles.header}>
      <Box className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Link to="/">
          <strong>Desenvolvedores</strong>
        </Link>
      </Box>
      <Box className={styles.registerDev}>
        <ul>
          <Link to="/register">Cadastrar Dev</Link>
        </ul>
      </Box>
    </Box>
  );
}
