import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";
import FormEdit from "../components/FormEdit/FormEdit";

export default function FuncionariosEditPage() {
  const [formEditIsVisible, setFormEditIsVisible] = useState(false);

  const { id } = useParams();

  const [funcionario, setFuncionario] = useState({});

  async function fetchDataFuncionario() {
    const response = await axios.get(
      `http://localhost:3001/meusfuncionarios/${id}`
    );
    const data = response.data;
    setFuncionario(data);
  }

  useEffect(() => {
    fetchDataFuncionario();
  }, []);

  function handleChangeFormEdit() {
    setFormEditIsVisible(true);
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-3">Editar Funcionário:</h1>

      {formEditIsVisible ? (
        <FormEdit funcionario={funcionario} />
      ) : (
        <div>
          <p>Nome: {funcionario.name}</p>
          <p>Email: {funcionario.email}</p>
          <p>Cargo: {funcionario.position}</p>
          <p>Salario: {funcionario.salary}</p>
          <div className="mt-5">
            <Link
              to={"/funcionarios"}
              className="bg-gray-300 px-6 py-2 rounded-md hover:bg-gray-200 mr-5"
            >
              Voltar
            </Link>
            <button
              onClick={handleChangeFormEdit}
              className="text-white bg-indigo-600 px-6 py-2 rounded-md hover:bg-indigo-500"
            >
              Editar dados
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
