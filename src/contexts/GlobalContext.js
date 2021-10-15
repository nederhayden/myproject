import React, { createContext, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

export const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
  const [profiles, setProfiles] = useState([]);
  const [checked, setChecked] = useState(false);
  const [sortType, setSortType] = useState("name");

  // ================ FILTER ================
  function changeCheck(event) {
    const check = event.target.checked;
    console.log(check);
    setChecked(check);
  }

  // ================ HOME ================

  // ================ REMOVE UM PERFIL ================
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
