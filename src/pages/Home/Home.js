import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Card } from "../../components/Card/Card";
import { Filter } from "../../components/Filter/Filter";
import OrderProfiles from "../../components/Filter/OrderProfiles";

import styles from "./Home.module.scss";

export default function Home() {
  const { profiles, removeProfile } = useContext(GlobalContext);

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
