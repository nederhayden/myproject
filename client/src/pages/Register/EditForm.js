import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../../services/api";
import RegisterForm from "./RegisterForm";
import { Box } from "@material-ui/core";
import { toast } from "react-toastify";

import styles from "./EditForm.module.scss";

export default function EditForm() {
  const { id } = useParams();
  const [profile, setProfile] = useState({});
  const history = useHistory();

  /*=================== CARREGA O PERFIL ESCOLHIDO PARA SER EDITADO ===================*/
  useEffect(() => {
    async function getProfileEdit() {
      const response = await api.get(`/profiles/${id}`);

      setProfile(response.data);
      // console.log(profile);
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
      {"name" in profile && (
        <Box className={styles.Container}>
          <Box className={styles.formContainer}>
            <h1>Perfil de {profile.name}</h1>
            <RegisterForm
              handleSubmit={editPost}
              btnText="Concluir edição"
              profileData={profile}
            />
          </Box>
        </Box>
      )}
    </>
  );
}
