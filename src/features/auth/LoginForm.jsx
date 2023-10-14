import { toast } from "react-toastify";
import { useState } from "react";
import LoginInput from "./LoginInput";
import { useAuth } from "../../hooks/use-auth";

export default function LoginForm() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    login(input).catch((err) => {
      toast.error(err.response?.data.message);
    });
  };

  return (
    <div className="flex justify-center mt-20">
      <form
        className="bg-white p-8 border border-gray-200 rounded-2xl w-1/3 shadow "
        onSubmit={handleSubmitForm}
      >
        <div className="flex justify-center font-semibold text-4xl text-gray-600 ">
          Sign in
        </div>
        <hr className="col-span-2 border border-gray-200 mt-4" />
        <div className="p-2 mt-4">
          <LoginInput
            placeholder="Email"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
        </div>
        <div className="p-2">
          <LoginInput
            type="password"
            placeholder="Password"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
        </div>
        <div className="flex justify-center items-center col-span-full">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg px-20 py-2 font-semibold text-xl mt-4 text-gray-800">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
