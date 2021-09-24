import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../../contexts/Contexts";
import { Card } from "../../components/Card/Card";
import { Filter } from "../../components/Filter/Filter";
import Message from "../../components/Message";
import OrderProfiles from "../../components/Filter/OrderProfiles";
import styles from "./Home.module.scss";

export default function Home() {
  const { profiles } = useContext(GlobalContext);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={styles.home}>
      <Filter />
      {message && <Message type="success" msg={message} />}
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
                state={profile.state}
                occupation={profile.occupation}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
