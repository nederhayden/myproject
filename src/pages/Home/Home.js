import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../contexts/Contexts";
import { Card } from "../../components/Card/Card";
import { Filter } from "../../components/Filter/Filter";
import OrderProfiles from "../../components/Filter/OrderProfiles";
import api from "../../services/api";
import { toast } from "react-toastify";

import styles from "./Home.module.scss";

export default function Home() {
  const [profiles, setProfiles] = useState([]);
  const { sortType } = useContext(GlobalContext);

  const successToast = () => {
    toast.success("Projeto removido com sucesso!");
  };

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

  function removeProfile(id) {
    fetch(`http://localhost:3333/profiles/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/" },
    })
      .then((resp) => resp.json())
      .then(() => {
        const removeProfile = profiles.filter((profile) => profile.id !== id);
        setProfiles(removeProfile);
        successToast();
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.home}>
      <Filter />
      <div className={styles.home_profiles}>
        <OrderProfiles />
        <div className={styles.profiles}>
          {profiles.length > 0 &&
            profiles.map((profile) => (
              <Card
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
