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

  /*=================== SELECIONA O PERFIL ESCOLHIDO PARA SER EDITADO ===================*/
  useEffect(() => {
    async function getProfileEdit() {
      const response = await api.get(`/profiles/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setProfile(response.data);
    }

    getProfileEdit();
  }, [id]);

  /*=================== EDITA O PERFIL ESCOLHIDO ===================*/
  async function editPost(profileEdit) {
    const params = JSON.stringify(profileEdit);
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
      <div className={styles.Container}>
        <div className={styles.formContainer}>
          <h1>
            {profile.name
              ? `Perfil de ${profile.name}`
              : "Não foi possível identificar o nome"}
          </h1>
          <RegisterForm
            handleSubmit={editPost}
            btnText="Concluir edição"
            profileData={profile}
          />
        </div>
      </div>
    </>
  );
}
