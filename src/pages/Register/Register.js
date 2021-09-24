import { useState, useEffect } from "react";
import api from "../../services/api";
import SubmitButton from "../../components/Form/SubmitButton";
import Input from "../../components/Form/Input";
import Select from "../../components/Form/Select";

export default function Register({ handleSubmit, registerData }) {
  const [categories, setCategories] = useState([]);
  const [genders, setGenders] = useState([]);
  const [states, setStates] = useState([]);
  const [occupations, setOccupations] = useState([]);
  const [register, setRegister] = useState(registerData || {});

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

  function handleChange(e) {
    setRegister({ ...register, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setRegister({
      ...register,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  function handleGender(e) {
    setRegister({
      ...register,
      gender: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  function handleStates(e) {
    setRegister({
      ...register,
      state: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  function handleOccupations(e) {
    setRegister({
      ...register,
      occupation: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  const submit = (e) => {
    e.preventDefault();
    // console.log(project);
    handleSubmit(register);
  };

  return (
    <form onSubmit={submit}>
      <h1>Novo Cadastro</h1>
      <div>
        <span>
          <Input
            type="text"
            text="Nome"
            name="name"
            placeholder="Digite seu nome completo"
            handleOnChange={handleChange}
          />
          <Input
            type="number"
            text="Idade"
            name="name"
            placeholder="Informe sua idade"
            handleOnChange={handleChange}
          />
        </span>
      </div>

      <div>
        <Input
          type="text"
          text="Cidade"
          name="name"
          placeholder="Informe sua cidade e estado"
          handleOnChange={handleChange}
        />
      </div>

      <Select
        name="state_id"
        text="Estado"
        options={states}
        handleOnChange={handleStates}
        value={register.state ? register.state.id : ""}
      />

      <Select
        name="occupation_id"
        text="Cargo"
        options={occupations}
        handleOnChange={handleOccupations}
        value={register.occupation ? register.occupation.id : ""}
      />

      <Select
        name="category_id"
        text="Nível"
        options={categories}
        handleOnChange={handleCategory}
        value={register.category ? register.category.id : ""}
      />

      <Select
        name="gender_id"
        text="Gênero"
        options={genders}
        handleOnChange={handleGender}
        value={register.gender ? register.gender.id : ""}
      />

      <SubmitButton text="Enviar Cadastro" />
    </form>
  );
}
