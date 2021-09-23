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
        <strong>Developers</strong>
      </div>
      <div className={styles.menu_section}>
        <div className={styles.menu_toggle}>
          <div className={styles.one}></div>
          <div className={styles.two}></div>
          <div className={styles.three}></div>
        </div>
        <div className={styles.register_dev}>
          <ul>
            <Link to="/register">Cadastrar Dev</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
