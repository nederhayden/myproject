import { useEffect, useContext } from "react";
import { GlobalContext } from "../../contexts/Contexts";
import { Card } from "../../components/Card/Card";
import { Filter } from "../../components/Filter/Filter";
import OrderProfiles from "../../components/Filter/OrderProfiles";
import api from "../../services/api";
import { toast } from "react-toastify";

import styles from "./Home.module.scss";

export default function Home() {
  const { profiles, setProfiles, sortType } = useContext(GlobalContext);

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

  async function removeProfile(id) {
    const response = await api.delete(`/profiles/${id}`);

    if (response.status === 200) {
      const newArrProfile = profiles.filter((profile) => profile.id !== id);
      setProfiles(newArrProfile);
      return toast.success("Usuário removido com sucesso!");
    } else {
      return toast.error("Não foi possível remover esse usuário!");
    }
  }

  return (
    <div className={styles.home}>
      <Filter />
      <div className={styles.homeProfiles}>
        <OrderProfiles />
        <div className={styles.profiles}>
          {profiles.length > 0 &&
            profiles.map((profile) => (
              <Card
                id={profile.id}
                key={profile.id}
                avatar={profile.avatar}
                name={profile.name}
                age={profile.age}
                city={profile.city}
                state={profile.state.name}
                occupation={profile.occupation.name}
                handleRemove={() => removeProfile(profile.id)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
