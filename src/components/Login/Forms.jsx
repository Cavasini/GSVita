import { FormMain } from "./styled";
import { useRef, useState } from "react";

function Forms() {
  const [error, setError] = useState("");
  const name = useRef();
  const password = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameValue = name.current.value;
    const passwordValue = password.current.value;

    try {
      const response = await fetch("http://localhost:5000/clients");
      const clients = await response.json();
      const user = clients.find(
        (u) => u.nome === nameValue && u.senha === passwordValue
      );


      if (user) {
        setError("");
        console.log("Login bem-sucedido!");
        let token =
          Math.random().toString(16).substring(2) +
          Math.random().toString(16).substring(2);

        sessionStorage.setItem("userData", user.nome);
        sessionStorage.setItem("emailData",user.email)
        sessionStorage.setItem("senhaData", token);
        window.location = "/";
      } else {
        console.log("nao foi!");
        setError("Credenciais inválidas. Tente novamente.");
      }
    } catch (error) {
      setError("Erro ao fazer login. Tente novamente mais tarde.");
      console.log("Erro ao fazer login:", error);
    }
  };

  return (
    <FormMain>
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label htmlFor="">Username</label>
          <input type="text" ref={name} />
        </div>
        <div className="inputDiv">
          <label htmlFor="">Password</label>
          <input type="password" ref={password} />
        </div>
        <div className="buttonDiv">
          <input type="submit" />
        </div>
        {error && <p>{error}</p>}
      </form>
    </FormMain>
  );
}
export default Forms;
