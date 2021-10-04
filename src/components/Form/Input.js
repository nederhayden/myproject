import styles from "./Input.module.scss";

export default function Input({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
  pattern,
}) {
  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        pattern={pattern}
      />
    </div>
  );
}
