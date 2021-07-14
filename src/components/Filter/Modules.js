import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/Contexts";
import { Checkbox } from "../Checkbox/Checkbox";

export function Genero() {
  const { checked, handleChangeCheckbox } = useContext(GlobalContext);

  return (
    <details className="genero">
      <summary className="title">Gênero</summary>
      <div className="options">
        <label>
          <Checkbox
            name="masculino"
            value="masculino"
            text="Masculino"
            checked={checked.id}
            onChange={handleChangeCheckbox}
          />
        </label>

        <label>
          <Checkbox
            name="masculino"
            value="masculino"
            text="Feminino"
            checked={checked.id}
            onChange={handleChangeCheckbox}
          />
        </label>
      </div>
    </details>
  );
}

export function Competencia() {
  const { checked, handleChangeCheckbox } = useContext(GlobalContext);

  return (
    <details className="competencia">
      <summary className="title">Competência</summary>
      <div className="options">
        <label>
          <Checkbox
            name="masculino"
            value="masculino"
            text="Front-End"
            checked={checked.id}
            onChange={handleChangeCheckbox}
          />
        </label>

        <label>
          <Checkbox
            name="masculino"
            value="masculino"
            text="Back-End"
            checked={checked.id}
            onChange={handleChangeCheckbox}
          />
        </label>

        <label>
          <Checkbox
            name="masculino"
            value="masculino"
            text="Fullstack"
            checked={checked.id}
            onChange={handleChangeCheckbox}
          />
        </label>
      </div>
    </details>
  );
}

export function Nivel() {
  const { checked, handleChangeCheckbox } = useContext(GlobalContext);

  return (
    <details className="nivel">
      <summary className="title">Nível</summary>
      <div className="options">
        <label>
          <Checkbox
            name="masculino"
            value="masculino"
            text="Júnior"
            checked={checked.id}
            onChange={handleChangeCheckbox}
          />
        </label>

        <label>
          <Checkbox
            name="masculino"
            value="masculino"
            text="Sênior"
            checked={checked.id}
            onChange={handleChangeCheckbox}
          />
        </label>

        <label>
          <Checkbox
            name="masculino"
            value="masculino"
            text="Pleno"
            checked={checked.id}
            onChange={handleChangeCheckbox}
          />
        </label>
      </div>
    </details>
  );
}
