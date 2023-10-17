export default function InputForm({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  hasError,
}) {
  return (
    <input
      type={type}
      className={`border rounded-md pl-2 mb-1 mr-4 focus:ring ${
        hasError
          ? "border-red-500 focus:ring-red-300"
          : "focus:ring-purple-200 outline-none border-gray-300"
      }
      `}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}
