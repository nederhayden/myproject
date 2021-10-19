import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Link to="/">
          <p>Desenvolvedores</p>
        </Link>
      </div>
      <div className={styles.menuSection}>
        <div className={styles.menuToggle}>
          <div className={styles.one}></div>
          <div className={styles.two}></div>
          <div className={styles.three}></div>
        </div>
        <div className={styles.registerDev}>
          <ul>
            <Link to="/register">Cadastrar Dev</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
