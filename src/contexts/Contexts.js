import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export default function ContextProvider({ children }) {
  const [checked, setChecked] = useState(false);
  const [sortType, setSortType] = useState("name");

  function changeCheck(event) {
    const check = event.target.checked;
    console.log(check);
    setChecked(check);
  }

  return (
    <GlobalContext.Provider
      value={{
        checked,
        changeCheck,
        sortType,
        setSortType,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
