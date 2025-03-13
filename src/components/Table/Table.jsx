import { useEffect, useState } from "react";
import axios from "axios";
import ModalWrapper from "../ModalWrapper/ModalWrapper.jsx";
import DeleteContent from "../DeleteContent/DeleteContent.jsx";
import SlideOverWrapper from "../SlideOverWrapper/SlideOverWrapper.jsx";
import ContentAdd from "../ContentAdd/ContentAdd.jsx";
import { Link } from "react-router";

export default function Table() {
  const [error, setError] = useState(null);
  const [errorDelete, setErrorDelete] = useState(null);
  const [errorAdd, setErrorAdd] = useState(null);
  const [tableItems, setTableItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState({});
  const [modalAddIsVisible, setModalAddIsVisible] = useState(false);

  async function fetchData() {
    try {
      const response = await axios.get(
        "http://localhost:3001/meusfuncionarios"
      );
      const data = response.data;

      setTableItems(data);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleOpenModalDelete(item) {
    setItemToDelete(item);
    setOpen(true);
  }

  function handleOpenSlideOverAdd() {
    setModalAddIsVisible(true);
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Cadastro de Funcionários
          </h3>
          <p className="text-gray-600 mt-2">
            Seção de cadastros de funcionários.
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <button
            type="button"
            onClick={handleOpenSlideOverAdd}
            href="#"
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Adicionar Funcionário
          </button>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        {error ? (
          <div>
            <p className="text-red-500 text-center p-4">
              Ocorreu um erro ao carregar os dados.
            </p>
            <p className="text-red-500 text-center p-4">
              {error.status}: {error.message}
            </p>
          </div>
        ) : (
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">Nome</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Cargo</th>
                <th className="py-3 px-6">Salário</th>
                <th className="py-3 px-6 text-center">Ações</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {tableItems?.map((item, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.position}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                  <td className="text-right px-6 whitespace-nowrap">
                    <Link
                      to={`/funcionarios/${item.id}`}
                      className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => handleOpenModalDelete(item)}
                      href="#"
                      className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {errorDelete && (
          <div>
            <p className="text-red-500 text-center p-4">
              Ocorreu um erro ao deletar o item.
            </p>
            <p className="text-red-500 text-center p-4">
              {errorDelete.status}: {errorDelete.message}
            </p>
          </div>
        )}

        {errorAdd && (
          <div>
            <p className="text-red-500 text-center p-4">
              Ocorreu um erro ao adicionar o item.
            </p>
            <p className="text-red-500 text-center p-4">
              {errorAdd.status}: {errorAdd.message}
            </p>
          </div>
        )}

        <ModalWrapper
          open={open}
          setOpen={setOpen}
          itemToDelete={itemToDelete}
          setErrorDelete={setErrorDelete}
        >
          <DeleteContent itemToDelete={itemToDelete} />
        </ModalWrapper>

        <SlideOverWrapper
          open={modalAddIsVisible}
          setOpen={setModalAddIsVisible}
        >
          <ContentAdd
            setModalAddIsVisible={setModalAddIsVisible}
            setErrorAdd={setErrorAdd}
          />
        </SlideOverWrapper>
      </div>
    </div>
  );
}
