import { useState } from "react";
import RegisterInput from "./RegisterInput";
import Joi from "joi";

// const registerSchema = Joi.object({
//   firstName: Joi.string().trim().required(),
//   lastName: Joi.string().trim().required(),
//   email: Joi.string().email().required(),
//   password: Joi.string()
//     .pattern(/^[a-zA-Z0-9]{6,30}$/)
//     .trim()
//     .required(),
//   confirmPassword: Joi.string()
//     .valid(Joi.ref("password"))
//     .trim()
//     .required()
//     .strip(),
// });

export default function RegisterForm() {
  // const [input, setInput] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });
  return (
    <div className="flex justify-center items-center ">
      <form className="bg-gray-200 grid grid-cols-2 gap-x-3 gap-y-4 border rounded-lg w-1/2 shadow">
        <div className="flex justify-center items-center col-span-2 py-3 font-semibold text-4xl">
          Register
        </div>
        <hr className="col-span-2 border border-white" />
        <div>
          <RegisterInput />
        </div>
        <div>
          <RegisterInput />
        </div>
        <div className="col-span-2">
          <RegisterInput />
        </div>
        <div className="col-span-2">
          <RegisterInput />
        </div>
        <div className="col-span-2">
          <RegisterInput />
        </div>
      </form>
    </div>
  );
}
