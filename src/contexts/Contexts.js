import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";

export const GlobalContext = createContext();

export default function ContextProvider({ children }) {
  const [checked, setChecked] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [sortType, setSortType] = useState("name");

  useEffect(() => {
    async function loadProfiles(type) {
      const response = await api.get("profiles");
      const types = {
        name: "name",
        age: "age",
      };
      const sortProperty = types[type];

      const data = response.data
        .sort((a, b) => (a[sortProperty] < b[sortProperty] ? -1 : 1))
        .map((profile) => ({
          ...profile,
        }));

      setProfiles(data);
    }

    loadProfiles(sortType);
  }, [sortType]);

  function handleChangeCheckbox() {
    setChecked(!checked);
  }

  return (
    <GlobalContext.Provider
      value={{ checked, handleChangeCheckbox, profiles, setSortType }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
