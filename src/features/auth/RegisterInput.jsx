export default function RegisterInput({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  hasError,
}) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={`block w-full border rounded-md outline-none px-3 py-1.5 text-sm 
      focus:ring
      ${
        hasError
          ? "border-red-500 focus:ring-red-300"
          : " focus:ring-orange-200  border-gray-300"
      }
      `}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}
