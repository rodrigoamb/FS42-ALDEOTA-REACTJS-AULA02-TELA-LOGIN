export default function Input({ texto, tipo, placeholder, digitar }) {
  return (
    <>
      <label htmlFor={tipo}>{texto}</label>
      <input
        className="bg-gray-200 py-3 px-2 w-[450px] rounded-lg"
        type={tipo}
        id={tipo}
        name={tipo}
        placeholder={placeholder}
        onChange={digitar}
      />
    </>
  );
}
