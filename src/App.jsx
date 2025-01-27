import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { useState } from "react";

export default function App() {
  //useState = estado do componente (HOOK)
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleClick(event) {
    event.preventDefault();

    const dados = {
      email: email,
      senha: senha,
    };

    console.log(dados);
  }

  function handleChange(event) {
    if (event.target.id === "email") {
      setEmail(event.target.value);
    }

    if (event.target.id === "password") {
      setSenha(event.target.value);
    }
  }

  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="bg-white w-fit shadow-md p-10 rounded-md">
        <h1 className="text-center font-bold text-2xl mb-3 text-green-400">
          Login
        </h1>
        <form className="flex flex-col gap-5">
          <Input
            texto={"Email: "}
            tipo={"email"}
            placeholder={"Digite aqui o seu Email"}
            digitar={handleChange}
          />
          <Input
            texto={"Senha: "}
            tipo={"password"}
            placeholder={"Digite aqui sua senha"}
            digitar={handleChange}
          />
          <Button texto={"login"} acao={handleClick} />
        </form>
      </div>
    </div>
  );
}
