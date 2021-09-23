import { useState, useEffect } from "react";
import SubmitButton from "../../components/Form/SubmitButton";
import Input from "../../components/Form/Input";
import Select from "../../components/Form/Select";

export default function Register({ handleSubmit, registerData }) {
  const [categories, setCategories] = useState([]);
  const [register, setRegister] = useState(registerData || {});

  useEffect(() => {
    fetch("http://localhost:3333/categories", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.error(err));
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
          text="Cidade/Estado"
          name="name"
          placeholder="Informe sua cidade e estado"
          handleOnChange={handleChange}
        />
      </div>

      <Select
        name="category_id"
        text="Selecione seu nível"
        options={categories}
        handleOnChange={handleCategory}
        value={register.category ? register.category.id : ""}
      />

      <SubmitButton text="Enviar Cadastro" />
    </form>
  );
}
