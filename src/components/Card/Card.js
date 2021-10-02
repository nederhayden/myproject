import React from "react";
import { Link } from "react-router-dom";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import styles from "./Card.module.scss";

export function Card({
  id,
  avatar,
  name,
  age,
  city,
  state,
  occupation,
  handleRemove = () => {},
}) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <div key={id} className={styles.card}>
      <div className={styles.wrapper_img}>
        <img src={avatar} alt={`Avatar de ${name}`} />
      </div>
      <div className={styles.personal_details}>
        <strong>{name}</strong>
        <div className={styles.divider}>
          <span>{age}</span>
          <div>|</div>
          {`${city} - 
              ${state}`}
        </div>
        <span>{occupation}</span>
      </div>
      <button className={styles.show_more}>Detalhes</button>
      <div className={styles.project_card_actions}>
        <Link to={`/profile/${id}`}>
          <BsPencil /> Editar
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  );
}
