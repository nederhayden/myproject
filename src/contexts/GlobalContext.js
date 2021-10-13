import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

export const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
  const [profiles, setProfiles] = useState([]);
  const [checked, setChecked] = useState(false);
  const [sortType, setSortType] = useState("name");

  function changeCheck(event) {
    const check = event.target.checked;
    console.log(check);
    setChecked(check);
  }

  // ================ HOME ================
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
  }, [sortType, setProfiles]);

  // ================ REGISTER FORM ================

  // ================ CRUD ================
  async function removeProfile(id) {
    const response = await api.delete(`/profiles/${id}`);

    if (response.status === 200) {
      const newArrProfile = profiles.filter((profile) => profile.id !== id);
      setProfiles(newArrProfile);
      return toast.success("Perfil removido com sucesso!");
    } else {
      return toast.error("Não foi possível remover esse perfil.");
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        profiles,
        setProfiles,
        checked,
        changeCheck,
        sortType,
        setSortType,
        removeProfile,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
