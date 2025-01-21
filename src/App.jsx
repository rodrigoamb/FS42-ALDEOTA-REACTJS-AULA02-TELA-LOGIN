import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { useState } from "react";

export default function App() {
  //useState = estado do componente (HOOK)
  const [quant, setQuant] = useState(0);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleClick(event) {
    event.preventDefault();
    setQuant(quant + 1);
    console.log(email);
  }

  function handleChange(event) {
    setEmail(event.target.value);
  }

  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="bg-white w-fit shadow-md p-10 rounded-md">
        <h1 className="text-center font-bold text-2xl mb-3 text-green-400">
          {quant}
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
          />
          <Button texto={"login"} acao={handleClick} />
        </form>
      </div>
    </div>
  );
}
