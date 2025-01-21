export default function Button({ texto, acao }) {
  return (
    <>
      <button
        onClick={acao}
        className="bg-green-400 text-white px-4 py-2 rounded-md hover:bg-green-800 uppercase"
      >
        {texto}
      </button>
    </>
  );
}
