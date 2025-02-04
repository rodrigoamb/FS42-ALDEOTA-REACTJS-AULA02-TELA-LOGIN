export default function DeleteContent({ itemToDelete }) {
  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">Deletar funcionário:</h1>
      <p className="text-lg text-red-600">
        {itemToDelete?.name} - {itemToDelete?.email}
      </p>
      <p className="text-lg font-bold">
        Você deseja realmente deletar esse funcionário?
      </p>
    </div>
  );
}
