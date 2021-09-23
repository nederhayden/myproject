import { useContext } from "react";
import { GlobalContext } from "../../contexts/Contexts";
import styles from "./OrderProfiles.module.scss";

export default function OrderProfiles() {
  const { setSortType } = useContext(GlobalContext);
  return (
    <div className={styles.wrapper_1}>
      <div className={styles.wrapper_2}>
        <strong>Ordernar por</strong>
        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="name">A-Z</option>
          <option value="age">Idade</option>
        </select>
      </div>
    </div>
  );
}
