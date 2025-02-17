import { useParams } from "react-router";

export default function FuncionariosEditPage() {
  const { id } = useParams();

  return <h1>Funcionário com id: {id}</h1>;
}
