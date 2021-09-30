import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/Contexts";
import { Checkbox } from "./Checkbox";
import styles from "./Modules.module.scss";

export function Genero() {
  const { checked, profiles, setProfiles, changeCheck } =
    useContext(GlobalContext);

  return (
    <details className={styles.genero}>
      <summary className={styles.title}>Gênero</summary>
      <div className={styles.options}>
        <label>
          <Checkbox
            value="Masculino"
            text="Masculino"
            checked={checked.id}
            onChange={changeCheck}
            onClick={() => {
              if (!checked) {
                const profileFiltered = profiles.filter(
                  (profile) => profile.gender === "Masculino"
                );
                setProfiles(profileFiltered);
              }
            }}
          />
        </label>

        <label>
          <Checkbox
            value="Feminino"
            text="Feminino"
            checked={checked.id}
            onChange={changeCheck}
            onClick={() => {
              if (!checked) {
                const profileFiltered = profiles.filter(
                  (profile) => profile.gender === "Feminino"
                );
                setProfiles(profileFiltered);
              }
            }}
          />
        </label>
      </div>
    </details>
  );
}

export function Competencia() {
  const { checked, profiles, changeCheck, setProfiles } =
    useContext(GlobalContext);

  return (
    <details className={styles.competencia}>
      <summary className={styles.title}>Competência</summary>
      <div className={styles.options}>
        <label>
          <Checkbox
            value="Front-End"
            text="Front-End"
            checked={checked.id}
            onChange={changeCheck}
            /* onClick={() => {
              if (!checked) {
                const profileFiltered = profiles.filter(
                  (profile) => profile.occupation === "Front-End"
                );
                setProfiles(profileFiltered);
              }
            }} */
          />
        </label>

        <label>
          <Checkbox
            value="Back-End"
            text="Back-End"
            checked={checked.id}
            onChange={changeCheck}
            /* onClick={() => {
              if (!checked) {
                const profileFiltered = profiles.filter(
                  (profile) => profile.occupation === "Back-End"
                );
                setProfiles(profileFiltered);
              }
            }} */
          />
        </label>

        <label>
          <Checkbox
            value="Fullstack"
            text="Fullstack"
            checked={checked.id}
            onChange={changeCheck}
            /* onClick={() => {
              if (!checked) {
                const profileFiltered = profiles.filter(
                  (profile) => profile.occupation === "Fullstack"
                );
                setProfiles(profileFiltered);
              }
            }} */
          />
        </label>
      </div>
    </details>
  );
}

export function Nivel() {
  const { checked, profiles, changeCheck, setProfiles } =
    useContext(GlobalContext);

  return (
    <details className={styles.nivel}>
      <summary className={styles.title}>Nível</summary>
      <div className={styles.options}>
        <label>
          <Checkbox
            value="Júnior"
            text="Júnior"
            checked={checked.id}
            onChange={changeCheck}
            /* onClick={() => {
              if (!checked) {
                const profileFiltered = profiles.filter(
                  (profile) => profile.level === "Júnior"
                );
                setProfiles(profileFiltered);
              }
            }} */
          />
        </label>

        <label>
          <Checkbox
            value="Pleno"
            text="Pleno"
            checked={checked.id}
            onChange={changeCheck}
            /* onClick={() => {
              if (!checked) {
                const profileFiltered = profiles.filter(
                  (profile) => profile.level === "Pleno"
                );
                setProfiles(profileFiltered);
              }
            }} */
          />
        </label>

        <label>
          <Checkbox
            value="Sênior"
            text="Sênior"
            checked={checked.id}
            onChange={changeCheck}
            /* onClick={() => {
              if (!checked) {
                const profileFiltered = profiles.filter(
                  (profile) => profile.level === "Sênior"
                );
                setProfiles(profileFiltered);
              }
            }} */
          />
        </label>
      </div>
    </details>
  );
}
