import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function ContentAdd({ setModalAddIsVisible }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [position, setPosition] = useState();
  const [salary, setSalary] = useState();

  const router = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const novoFuncionario = {
      name,
      email,
      position,
      salary,
    };

    const response = await axios.post(
      "http://localhost:3001/meusfuncionarios",
      novoFuncionario
    );

    if (response.status === 201) {
      setModalAddIsVisible(false);
      router(0);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Nome do Funcionário: </label>
            <input
              onChange={(event) => {
                setName(event.target.value);
              }}
              type="text"
              name="name"
              id="name"
              className="border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email do Funcionário: </label>
            <input
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              type="email"
              name="email"
              id="email"
              className="border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="position">Cargo do Funcionário: </label>
            <input
              onChange={(event) => {
                setPosition(event.target.value);
              }}
              type="text"
              name="position"
              id="position"
              className="border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="salary">Salário do Funcionário: </label>
            <input
              onChange={(event) => {
                setSalary(event.target.value);
              }}
              type="text"
              name="salary"
              id="salary"
              className="border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          <button
            type="submit"
            className={
              "bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mt-5"
            }
          >
            Adicionar Funcionário
          </button>
        </div>
      </form>
    </div>
  );
}
