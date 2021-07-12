import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./card.scss";

export function Card() {
  const [profiles, setProfiles] = useState([]);
  const [sortType, setSortType] = useState("name");

  useEffect(() => {
    async function loadProfiles(type) {
      const response = await api.get("profiles");
      const types = {
        name: "name",
        price: "age",
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

  return (
    <div className="wrapper-1">
      <div className="wrapper-2">
        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="name">A-Z</option>
          <option value="age">Age</option>
        </select>
      </div>

      <div className="profiles">
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
            <button className="show-more">Show More</button>
          </div>
        ))}
      </div>
    </div>
  );
}
