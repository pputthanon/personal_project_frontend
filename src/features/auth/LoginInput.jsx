export default function LoginInput({
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={`block w-full border rounded-md outline-none px-3 py-1.5 text-sm 
        focus:ring focus:ring-purple-200  border-gray-300`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
