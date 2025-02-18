import Input from "../Input/Input.jsx";

export default function FormEdit({ funcionario }) {
  return (
    <div>
      <form className="flex flex-col gap-2">
        <Input
          texto={"Nome"}
          tipo={"text"}
          name={"name"}
          defaultValue={funcionario.name}
          placeholder={"Digite o nome do funcionário"}
        />
        <Input
          texto={"Email"}
          tipo={"email"}
          name={"email"}
          defaultValue={funcionario.email}
          placeholder={"Digite o email do funcionário"}
        />
        <Input
          texto={"Cargo"}
          tipo={"text"}
          name={"position"}
          defaultValue={funcionario.position}
          placeholder={"Digite o cargo do funcionário"}
        />
        <Input
          texto={"Salário"}
          tipo={"text"}
          name={"salary"}
          defaultValue={funcionario.salary}
          placeholder={"Digite o salário do funcionário"}
        />
        <div className="flex gap-5 items-center justify-between">
          <button
            type="button"
            className="text-white bg-gray-800 px-6 py-2 rounded-md hover:bg-gray-600 mr-5 mt-5 w-64"
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
