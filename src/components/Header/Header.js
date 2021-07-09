import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <strong>Developers</strong>
      </div>
      <div className="redes-sociais">
        <Link to="sem link ainda">Front-End</Link>
        <Link to="sem link ainda">Back-End</Link>
        <Link to="sem link ainda">Fullstack</Link>
      </div>
    </div>
  );
}
