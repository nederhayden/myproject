import { useHistory } from "react-router-dom";
import Register from "./Register";
import styles from "./NewRegister.module.scss";

export default function NewProject() {
  const history = useHistory();

  function createPost(project) {
    fetch("http://localhost:3333/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        history.push("/", { message: "Projeto criado com sucesso" });
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <Register handleSubmit={createPost} />
    </div>
  );
}
