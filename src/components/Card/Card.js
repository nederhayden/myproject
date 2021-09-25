import React from "react";
import styles from "./Card.module.scss";

export function Card({ id, avatar, name, age, city, state, occupation }) {
  return (
    // <div className={styles.}"profiles">
    <div key={id} className={styles.card}>
      <div className={styles.wrapper_img}>
        <img src={avatar} alt={`Avatar de ${name}`} />
      </div>
      <div className={styles.personal_details}>
        <strong>{name}</strong>
        <span>{age}</span>
        <span>
          {`${city} - 
              ${state}`}
        </span>
        <span></span>
        <span>{occupation}</span>
      </div>
      <button className={styles.show_more}>Detalhes</button>
    </div>
    // </div>
  );
}
