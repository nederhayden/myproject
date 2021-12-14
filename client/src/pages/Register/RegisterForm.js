import { useState, useEffect } from "react";
import api from "../../services/api";
// import { useFiles } from "../../contexts/GlobalContext";
import { Box } from "@material-ui/core";
import SubmitButton from "../../components/Form/SubmitButton";
import Input from "../../components/Form/Input";
import Select from "../../components/Form/Select";

import styles from "./RegisterForm.module.scss";
import Upload from "../../components/Upload/Upload";
import FileImage from "../../components/FileImage/FileImage";

export default function RegisterForm({ handleSubmit, btnText, profileData }) {
  const [profile, setProfile] = useState(profileData || {});
  const [categories, setCategories] = useState([]);
  const [genders, setGenders] = useState([]);
  const [states, setStates] = useState([]);
  const [occupations, setOccupations] = useState([]);
  // const { uploadedFile: files } = useFiles();

  /*=================== BUSCA AS OPCOES DOS COMPONENTES SELECTS ===================*/
  useEffect(() => {
    async function getCategories() {
      const response = await api.get("categories");

      const data = response.data.map((profile) => ({
        ...profile,
      }));

      setCategories(data);
    }

    async function getGenders() {
      const response = await api.get("genders");

      const data = response.data.map((profile) => ({
        ...profile,
      }));

      setGenders(data);
    }

    async function getStates() {
      const response = await api.get("states");

      const data = response.data.map((profile) => ({
        ...profile,
      }));

      setStates(data);
    }

    async function getOccupations() {
      const response = await api.get("occupations");

      const data = response.data.map((profile) => ({
        ...profile,
      }));

      setOccupations(data);
    }

    getCategories();
    getGenders();
    getStates();
    getOccupations();
  }, []);

  /*=================== ENVIA O FORMULARIO PARA O JSON ===================*/
  const submit = (e) => {
    e.preventDefault();
    handleSubmit(profile);
  };

  /*=================== PEGA O DADO DIGITADO NO CAMPO DE NOME ===================*/
  function handleChange(e) {
    let value = e.target.value;
    value = value.toLowerCase().replace(/(?:^|\s)\S/g, (v) => {
      return v.toUpperCase();
    });
    setProfile({ ...profile, [e.target.name]: value });
  }

  /*=================== PEGA A OPCAO ESCOLHIDA NO CAMPO DE NIVEL ===================*/
  function handleCategory(e) {
    setProfile({
      ...profile,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  /*=================== PEGA A OPCAO ESCOLHIDA NO CAMPO DE GENERO ===================*/
  function handleGender(e) {
    setProfile({
      ...profile,
      gender: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  /*=================== PEGA A OPCAO ESCOLHIDA NO CAMPO DE ESTADO ===================*/
  function handleStates(e) {
    setProfile({
      ...profile,
      state: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  /*=================== PEGA A OPCAO ESCOLHIDA NO CAMPO DE CARGO ===================*/
  function handleOccupations(e) {
    setProfile({
      ...profile,
      occupation: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  /*=================== PEGA A OPCAO ESCOLHIDA NO CAMPO DE CARGO ===================*/
  /* function handleImage(e) {
    setProfile({
      ...profile,
      image: "",
    });
  } */

  return (
    /*=================== FORMULARIO ===================*/
    <form className={styles.form} onSubmit={submit}>
      <Box>
        <span>
          <Input
            type="text"
            text="Nome"
            name="name"
            placeholder="Digite seu nome completo"
            handleOnChange={handleChange}
            /*=================== VALOR QUE SERA ENVIADO PARA O JSON ===================*/
            value={profile.name ? profile.name : ""}
          />
          <Input
            type="number"
            text="Idade"
            name="age"
            placeholder="Informe sua idade"
            handleOnChange={handleChange}
            value={profile.age ? profile.age : ""}
          />
        </span>
      </Box>

      <Box>
        <Input
          type="text"
          text="Cidade"
          name="city"
          placeholder="Informe sua cidade e estado"
          handleOnChange={handleChange}
          value={profile.city ? profile.city : ""}
        />
      </Box>

      <Select
        name="stateId"
        text="Estado"
        options={states}
        handleOnChange={handleStates}
        value={profile.state ? profile.state.id : ""}
      />

      <Select
        name="occupationId"
        text="Cargo"
        options={occupations}
        handleOnChange={handleOccupations}
        value={profile.occupation ? profile.occupation.id : ""}
      />

      <Select
        name="categoryId"
        text="Nível"
        options={categories}
        handleOnChange={handleCategory}
        value={profile.category ? profile.category.id : ""}
      />

      <Select
        name="genderId"
        text="Gênero"
        options={genders}
        handleOnChange={handleGender}
        value={profile.gender ? profile.gender.id : ""}
      />

      <Upload />
      <FileImage />

      <SubmitButton text={btnText} />
    </form>
  );
}
