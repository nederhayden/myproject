import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Project() {
  const { id } = useParams();
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3333/profiles/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProfile(data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div>
      <h1>Perfil</h1>
    </div>
  );
}
