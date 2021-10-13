import { useState, useEffect } from "react";
import api from "../../services/api";
import SubmitButton from "../../components/Form/SubmitButton";
import Input from "../../components/Form/Input";
import Select from "../../components/Form/Select";
import styles from "./RegisterForm.module.scss";

export default function RegisterForm({ handleSubmit, btnText, profileData }) {
  const [profile, setProfile] = useState(profileData || {});
  const [categories, setCategories] = useState([]);
  const [genders, setGenders] = useState([]);
  const [states, setStates] = useState([]);
  const [occupations, setOccupations] = useState([]);

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

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(profile);
  };

  function handleChange(e) {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  }

  function handleAvatar(e) {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProfile({
      ...profile,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  function handleGender(e) {
    setProfile({
      ...profile,
      gender: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  function handleStates(e) {
    setProfile({
      ...profile,
      state: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  function handleOccupations(e) {
    setProfile({
      ...profile,
      occupation: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <div>
        <span>
          <Input
            type="text"
            text="Nome"
            name="name"
            placeholder="Digite seu nome completo"
            handleOnChange={handleChange}
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
      </div>

      <div>
        <Input
          type="text"
          text="Cidade"
          name="city"
          placeholder="Informe sua cidade e estado"
          handleOnChange={handleChange}
          value={profile.city ? profile.city : ""}
        />
      </div>

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

      {/* <Upload handleOnChange={handleAvatar} /> */}
      <div>
        <Input
          type="url"
          text="Imagem"
          name="avatar"
          placeholder="https://example.com"
          pattern="https://.*"
          handleOnChange={handleAvatar}
          // value={profile.avatar ? profile.avatar : ""}
        />
      </div>

      <SubmitButton text={btnText} />
    </form>
  );
}
