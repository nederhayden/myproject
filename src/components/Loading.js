import loading from "../assets/loading.svg";
import styles from "./Loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.loaderContainer}>
      <img src={loading} alt="Loading" className={styles.loader} />
    </div>
  );
}
