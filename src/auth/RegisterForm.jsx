import { useState } from "react";
import RegisterInput from "./RegisterInput";
import Joi from "joi";
import InputErrorMessage from "./InputErrorMessage";

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{8,30}$/)
    .trim()
    .required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  console.dir(error);
};

export default function RegisterForm() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-gray-200 grid grid-cols-2 gap-x-3 gap-y-4 border rounded-lg w-1/2 shadow ">
        <div className="flex justify-center items-center col-span-2 py-3 font-semibold text-4xl text-gray-700">
          Register
        </div>
        <hr className="col-span-2 border border-white" />
        <div className="m-1">
          <RegisterInput
            placeholder="First Name"
            value={input.firstName}
            onChange={handleChangeInput}
            name="firstName"
            hasError={error.firstName}
          />
          {error.firstName && <InputErrorMessage message={error.firstName} />}
        </div>
        <div className="m-1">
          <RegisterInput
            placeholder="Last Name"
            value={input.lastName}
            onChange={handleChangeInput}
            name="lastName"
            hasError={error.lastName}
          />
          {error.lastName && <InputErrorMessage message={error.lastName} />}
        </div>
        <div className="col-span-2 m-1">
          <RegisterInput
            placeholder="Email "
            value={input.email}
            onChange={handleChangeInput}
            name="email"
            hasError={error.email}
          />
          {error.email && <InputErrorMessage message={error.email} />}
        </div>
        <div className="col-span-2 m-1">
          <RegisterInput
            placeholder="Password"
            type="password"
            value={input.password}
            onChange={handleChangeInput}
            name="password"
            hasError={error.password}
          />
          {error.password && <InputErrorMessage message={error.password} />}
        </div>
        <div className="col-span-2 m-1">
          <RegisterInput
            placeholder="Confirm password"
            type="password"
            value={input.confirmPassword}
            onChange={handleChangeInput}
            name="confirmPassword"
            hasError={error.confirmPassword}
          />
          {error.confirmPassword && (
            <InputErrorMessage message={error.confirmPassword} />
          )}
        </div>
        <div className="mx-auto col-span-full pb-4">
          <button className="bg-orange-300 rounded-lg text-gray-700 px-20 py-2 font-semibold text-xl">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
