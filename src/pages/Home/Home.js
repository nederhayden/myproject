import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { Filter } from "../../components/Filter/Filter";
import Message from "../../components/Message";
import OrderProfiles from "../../components/Filter/OrderProfiles";
import styles from "./Home.module.scss";

export default function Home() {
  const [profiles, setProfiles] = useState([]);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    fetch("http://localhost:3333/profiles", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProfiles(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.home}>
      <Filter />
      <OrderProfiles />

      {message && <Message type="success" msg={message} />}
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
  );
}
