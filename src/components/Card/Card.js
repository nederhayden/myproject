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
  handleRemove,
}) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <div className={styles.card}>
      <div className={styles.wrapperImg}>
        <img src={avatar} alt={`Avatar de ${name}`} />
      </div>
      <div className={styles.personalDetails}>
        <strong>{name}</strong>
        <div className={styles.divider}>
          <span>{age}</span>
          <div>|</div>
          {`${city} - 
              ${state}`}
        </div>
        <span>{occupation}</span>
      </div>
      <button className={styles.showMore}>Detalhes</button>
      <div className={styles.projectCardActions}>
        <Link to={`/edit/${id}`}>
          <BsPencil /> Editar
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  );
}
