import React from "react";

export function Checkbox({ name, value, checked, onChange, text }) {
  return (
    <>
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span>{text}</span>
    </>
  );
}
