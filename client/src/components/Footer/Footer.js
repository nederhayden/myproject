import { Box } from "@material-ui/core";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <Box className={styles.footer}>
      <p className={styles.copy_right}>
        <span>Desenvolvedores</span> &copy; 2021
      </p>
    </Box>
  );
}
