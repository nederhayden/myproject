import { Link } from "react-router-dom";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import { Box, Button } from "@material-ui/core";
import styles from "./CardProfile.module.scss";

export function CardProfile({
  id,
  image,
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
    <Box className={styles.card}>
      <Box className={styles.wrapperImg}>
        <img src={image} alt={`Avatar de ${name}`} />
      </Box>
      <Box className={styles.personalDetails}>
        {name}
        <Box className={styles.divider}>
          {age}
          <Box>|</Box>
          {`${city} - 
              ${state}`}
        </Box>
        {occupation}
      </Box>
      <Button className={styles.showMore}>Detalhes</Button>
      <Box className={styles.projectCardActions}>
        <Link to={`/edit/${id}`}>
          <BsPencil /> Editar
        </Link>
        <Button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </Button>
      </Box>
    </Box>
  );
}
