import { useState } from "react";
import { toast } from "react-toastify";
import RegisterInput from "./RegisterInput";
import Joi from "joi";
import InputErrorMessage from "./InputErrorMessage";
import { useAuth } from "../../hooks/use-auth";
import { useNavigate } from "react-router-dom";

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
  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
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
  const { register, authUser } = useAuth();
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const validationError = validateRegister(input);
    if (validationError) {
      return setError(validationError);
    }

    setError({});
    register(input).catch((err) => {
      console.log(err);
      toast.error(err.response?.data.message);
    });
    //ใช้use navigate navigateไปหน้าloginซึ่งก่อนจะนาวิเกตบอกยูเซ้อหน่อยว่าสมัตรสำเร็จ
    toast.success("Your account has been created!");

    navigate("/login");
  };

  return (
    <div className="flex justify-center mt-20">
      <form
        className="bg-white grid grid-cols-2 gap-x-3 gap-y-4 border border-gray-200 rounded-2xl w-1/2 shadow p-10"
        onSubmit={handleSubmitForm}
      >
        <div className="flex justify-center items-center col-span-2 font-semibold text-4xl text-gray-600">
          Register
        </div>
        <hr className="col-span-2 border border-gray-200 " />
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
        <div className="flex justify-center items-center col-span-full">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg px-20 py-2 font-semibold text-xl mt-4 text-gray-800">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
