import { useState } from "react";
import { useHistory } from "react-router-dom";
// import GlobalContext from "../../contexts/GlobalContext";
import api from "../../services/api";
import { Box } from "@material-ui/core";
import { toast } from "react-toastify";
import RegisterForm from "./RegisterForm";

import styles from "./NewRegister.module.scss";

export default function NewRegister() {
  const [profiles, setProfiles] = useState();

  /*=================== USADO PARA LEVAR O USUARIO PARA OUTRA ROTA ===================*/
  const history = useHistory();

  /*=================== CRIA UM NOVO PERFIL ===================*/
  async function createPost(profile) {
    const params = JSON.stringify(profile);
    const response = await api.post("/profiles", params, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 201) {
      setProfiles(profiles);
      return history.push("/", toast.success("Perfil criado com sucesso"));
    } else {
      return toast.error(
        "Não foi possível criar esse perfil. Tente novamente!"
      );
    }
  }

  return (
    <Box className={styles.Container}>
      <Box className={styles.formContainer}>
        <h1>Novo Perfil</h1>
        <RegisterForm handleSubmit={createPost} btnText="Criar Perfil" />
      </Box>
    </Box>
  );
}
