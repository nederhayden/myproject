import React from "react";

export function Genero() {
  return (
    <details className="genero">
      <summary className="title">Gênero</summary>
      <div className="options">
        <label>
          <input
            type="checkbox"
            name="masculino"
            id="masculino"
            checked={null}
            onChange={null}
          />
          <span>Masculino</span>
        </label>

        <label>
          <input
            type="checkbox"
            name="feminino"
            id="feminino"
            checked={null}
            onChange={null}
          />
          <span>Feminino</span>
        </label>
      </div>
    </details>
  );
}

export function Competencia() {
  return (
    <details className="competencia">
      <summary className="title">Competência</summary>
      <div className="options">
        <label>
          <input
            type="checkbox"
            name="front-End"
            id="front-End"
            checked={null}
            onChange={null}
          />
          <span>Front-End</span>
        </label>

        <label>
          <input
            type="checkbox"
            name="back-end"
            id="back-end"
            checked={null}
            onChange={null}
          />
          <span>Back-End</span>
        </label>

        <label>
          <input
            type="checkbox"
            name="fullstack"
            id="fullstack"
            checked={null}
            onChange={null}
          />
          <span>Fullstack</span>
        </label>
      </div>
    </details>
  );
}

export function Nivel() {
  return (
    <details className="nivel">
      <summary className="title">Nível</summary>
      <div className="options">
        <label>
          <input
            type="checkbox"
            name="junior"
            id="junior"
            checked={null}
            onChange={null}
          />
          <span>Júnior</span>
        </label>

        <label>
          <input
            type="checkbox"
            name="senior"
            id="senior"
            checked={null}
            onChange={null}
          />
          <span>Sênior</span>
        </label>

        <label>
          <input
            type="checkbox"
            name="Pleno"
            id="Pleno"
            checked={null}
            onChange={null}
          />
          <span>Pleno</span>
        </label>
      </div>
    </details>
  );
}
