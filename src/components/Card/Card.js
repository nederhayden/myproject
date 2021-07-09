import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./card.scss";

export function Card() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    async function loadProfiles() {
      const response = await api.get("profiles");
      const data = response.data.map((profile) => ({
        ...profile,
      }));

      setProfiles(data);
    }

    loadProfiles();
  }, []);

  return (
    <>
      {profiles.map((profile) => (
        <div className="card">
          <img src={profile.avatar} alt={`Avatar de ${profile.name}`} />
          <div className="personal-details">
            <strong>{profile.name}</strong>
            <span>{profile.age}</span>
            <span>
              {`${profile.city} - 
              ${profile.state}`}
            </span>
            <span></span>
            <span>{profile.occupation}</span>
          </div>
          <button className="show-more">Saiba mais</button>
        </div>
      ))}
    </>
  );
}
