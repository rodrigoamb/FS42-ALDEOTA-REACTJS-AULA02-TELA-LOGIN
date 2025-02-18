export default function Input({
  texto,
  tipo,
  placeholder,
  digitar,
  defaultValue,
}) {
  return (
    <>
      <label htmlFor={tipo}>{texto}</label>
      <input
        className="bg-gray-200 py-3 px-2 w-full rounded-lg"
        type={tipo}
        id={tipo}
        name={tipo}
        placeholder={placeholder}
        onChange={digitar}
        defaultValue={defaultValue}
      />
    </>
  );
}
