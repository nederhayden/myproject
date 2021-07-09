import React from "react";

import logo from "../../assets/logo.png";
import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" />
      <div className="redes-sociais">
        <a
          href="https://www.instagram.com/nederhayden/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://www.youtube.com/channel/UC9uS4jFptBlCg79uvKUOvhA"
          target="_blank"
          rel="noreferrer"
        >
          Youtube
        </a>
      </div>
    </div>
  );
}
