import axios from "axios";
import Input from "../Input/Input.jsx";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function FormEdit({ funcionario, setFormEditIsVisible }) {
  const router = useNavigate();

  const [name, setName] = useState(funcionario.name);
  const [email, setEmail] = useState(funcionario.email);
  const [position, setPosition] = useState(funcionario.position);
  const [salary, setSalary] = useState(funcionario.salary);

  async function handleEditFuncionario(event) {
    event.preventDefault();

    const editedFuncionario = {
      name,
      email,
      position,
      salary,
    };

    const response = await axios.put(
      `http://localhost:3001/meusfuncionarios/${funcionario.id}`,
      editedFuncionario
    );

    if (response.status === 200) {
      router(0);
    }
  }

  return (
    <div>
      <form
        className="flex flex-col gap-2 w-[550px]"
        onSubmit={handleEditFuncionario}
      >
        <Input
          texto={"Nome"}
          tipo={"text"}
          name={"name"}
          defaultValue={name}
          digitar={(event) => {
            setName(event.target.value);
          }}
          placeholder={"Digite o nome do funcionário"}
        />
        <Input
          texto={"Email"}
          tipo={"email"}
          name={"email"}
          defaultValue={email}
          digitar={(event) => {
            setEmail(event.target.value);
          }}
          placeholder={"Digite o email do funcionário"}
        />
        <Input
          texto={"Cargo"}
          tipo={"text"}
          name={"position"}
          defaultValue={position}
          digitar={(event) => {
            setPosition(event.target.value);
          }}
          placeholder={"Digite o cargo do funcionário"}
        />
        <Input
          texto={"Salário"}
          tipo={"text"}
          name={"salary"}
          defaultValue={salary}
          digitar={(event) => {
            setSalary(event.target.value);
          }}
          placeholder={"Digite o salário do funcionário"}
        />
        <div className="flex flex-row gap-5 items-center justify-between mt-5">
          <button
            onClick={() => {
              setFormEditIsVisible(false);
            }}
            type="button"
            className="text-white bg-gray-800 px-6 py-2 rounded-md hover:bg-gray-600 mr-5 w-64"
          >
            Cancelar Edição
          </button>
          <button
            type="submit"
            className="text-white bg-indigo-600 px-6 py-2 rounded-md hover:bg-indigo-500 w-64"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
