import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/Contexts";
import { Filter } from "../Filter/Filter";

import "./card.scss";

export function Card() {
  const { profiles, setSortType } = useContext(GlobalContext);

  return (
    <div className="wrapper-1">
      <Filter />

      <div className="wrapper-2">
        <div className="wrapper-3">
          <strong>Ordernar por</strong>
          <select onChange={(e) => setSortType(e.target.value)}>
            <option value="name">A-Z</option>
            <option value="age">Idade</option>
          </select>
        </div>

        <div className="profiles">
          {profiles.map((profile) => (
            <div key={profile.id} className="card">
              <div className="wrapper-img">
                <img src={profile.avatar} alt={`Avatar de ${profile.name}`} />
              </div>
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
    </div>
  );
}
