import styles from "./SubmitButton.module.scss";

export default function SubmitButton({ text }) {
  return (
    <div>
      <button className={styles.btn}>{text}</button>
    </div>
  );
}
