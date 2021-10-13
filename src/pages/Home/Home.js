import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Card } from "../../components/Card/Card";
import { Filter } from "../../components/Filter/Filter";
import OrderProfiles from "../../components/Filter/OrderProfiles";

import styles from "./Home.module.scss";

export default function Home() {
  /*=================== USA O ESTADO GLOBAL DA APLICACAO ===================*/
  const { profiles, removeProfile } = useContext(GlobalContext);

  return (
    <div className={styles.home}>
      <Filter />
      <div className={styles.homeProfiles}>
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
    </div>
  );
}
