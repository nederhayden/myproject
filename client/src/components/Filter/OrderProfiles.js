import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Box } from "@material-ui/core";
import styles from "./OrderProfiles.module.scss";

export default function OrderProfiles() {
  const { setSortType } = useContext(GlobalContext);
  return (
    <Box className={styles.wrapper1}>
      <Box className={styles.wrapper2}>
        <strong>Ordernar por</strong>
        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="name">A-Z</option>
          <option value="age">Idade</option>
        </select>
      </Box>
    </Box>
  );
}
