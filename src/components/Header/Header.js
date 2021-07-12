import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import "./header.scss";

export default function Header() {
  /* let show = true;

  const menuSection = document.querySelector(".menu-section");
  const menuToggle = document.querySelector(".menu-toggle");

  menuToggle.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial";
    menuSection.classList.toggle("on", show);
    show = !show;
  }); */

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <strong>Developers</strong>
      </div>
      <div className="menu-section">
        <div className="menu-toggle">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        <div className="types-dev">
          <ul>
            <Link to="sem link ainda">Front-End</Link>
            <Link to="sem link ainda">Back-End</Link>
            <Link to="sem link ainda">Fullstack</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
