import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <strong>Developers</strong>
      </div>
      <div className="menu-section">
        <div className="menu-toggle">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        <div className="login">
          <ul>
            <Link to="sem link ainda">Entrar</Link>
            <Link to="sem link ainda">Cadastra-se</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
