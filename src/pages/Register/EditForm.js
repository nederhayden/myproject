import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
// import GlobalContext from "../../contexts/GlobalContext";
import RegisterForm from "./RegisterForm";
import { toast } from "react-toastify";

// import styles from "./EditForm.module.scss";

export default function EditForm() {
  const { id } = useParams();
  const [profile, setProfile] = useState();

  // ===================== GET ID PROFILE =====================
  useEffect(() => {
    async function getProfileEdit() {
      const response = await api.get(`/profiles/${id}`);

      setProfile(response);
    }

    getProfileEdit();
  }, [id, setProfile]);

  async function editPost(profile) {
    const params = JSON.stringify(profile);
    const response = await api.patch(`/profiles/${id}`, params, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    setProfile(response);
    toast.success("Perfil atualizado com sucesso");
  }

  return (
    <>
      <RegisterForm
        handleSubmit={editPost}
        btnText="Concluir edição"
        profileData={profile}
      />
    </>
  );
}
