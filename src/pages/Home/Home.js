import { useContext, useEffect } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import api from "../../services/api";
import { Card } from "../../components/Card/Card";
// import { Filter } from "../../components/Filter/Filter";
import OrderProfiles from "../../components/Filter/OrderProfiles";

import styles from "./Home.module.scss";

export default function Home() {
  /*=================== USA O ESTADO GLOBAL DA APLICACAO ===================*/
  const { profiles, setProfiles, sortType, removeProfile } =
    useContext(GlobalContext);

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

  return (
    <div className={styles.home}>
      {/* <Filter /> */}
      {/*=================== ORGANIZA OS PERFIS POR ALFABETO OU IDADE ===================*/}
      <OrderProfiles />
      <div className={styles.profiles}>
        {/*=================== MAPEAMENTO DOS PERFIS ===================*/}
        {profiles.length > 0 &&
          profiles.map((profile) => (
            /*=================== RENDERIZA OS PERFIS NO FORMATO DO COMPONENTE CARD ===================*/
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
  );
}
