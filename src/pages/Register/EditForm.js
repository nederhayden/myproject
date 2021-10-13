import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../../services/api";
// import GlobalContext from "../../contexts/GlobalContext";
import RegisterForm from "./RegisterForm";
import { toast } from "react-toastify";

import styles from "./EditForm.module.scss";

export default function EditForm() {
  const { id } = useParams();
  const [profile, setProfile] = useState([]);
  const history = useHistory();

  // ===================== GET ID PROFILE =====================
  useEffect(() => {
    async function getProfileEdit() {
      const response = await api.get(`/profiles/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setProfile(response);
    }

    getProfileEdit();
  }, [id]);

  async function editPost(profile) {
    const params = JSON.stringify(profile);
    const response = await api.patch(`/profiles/${id}`, params, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    setProfile(response);
    history.push("/", toast.success("Perfil atualizado com sucesso"));
  }

  return (
    <>
      {profile && (
        <div className={styles.Container}>
          <div className={styles.formContainer}>
            <h1>Perfil {profile.name}</h1>
            <RegisterForm
              handleSubmit={editPost}
              btnText="Concluir edição"
              profileData={profile}
            />
          </div>
        </div>
      )}
    </>
  );
}
