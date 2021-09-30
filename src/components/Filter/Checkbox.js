import React from "react";

export function Checkbox({
  key,
  id,
  name,
  value,
  checked,
  onChange,
  onClick,
  text,
}) {
  return (
    <>
      <input
        key={key}
        id={id}
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        onClick={onClick}
      />
      <span>{text}</span>
    </>
  );
}
