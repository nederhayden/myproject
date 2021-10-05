import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

export default function EditForm() {
  const { id } = useParams();
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    async function getProfileEdit() {
      const response = await api.get(`/profiles/${id}`);

      setProfile(response);
    }

    getProfileEdit();
  }, [id]);

  return (
    <div>
      <h1>Perfil</h1>
    </div>
  );
}
