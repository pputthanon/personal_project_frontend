import Joi from "joi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../hooks/use-auth";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import InputErrorMessage from "../features/auth/InputErrorMessage";
import InputForm from "../components/InputForm";
import { useEffect } from "react";

const updateSchema = Joi.object({
  firstName: Joi.string().trim(),
  lastName: Joi.string().trim(),
  mobile: Joi.string().pattern(/^[0-9]{10}$/),
  address: Joi.string(),
});

const validateUpdate = (input) => {
  const { error } = updateSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
};

export default function EditAccountPage() {
  const [error, setError] = useState({});
  const { authUser, update } = useAuth();
  const [input, setInput] = useState(authUser);
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const { value, error } = validateUpdate(input);

    if (error) {
      return setError(error);
    }

    setError({});
    update(input).catch((err) => {
      toast.error(err.response?.data.message);
    });
    {
      input ? toast.success("Your account has been updated!") : null;
    }

    navigate("/account");
  };

  return (
    <div className="flex justify-center mt-10 text-font">
      <form
        className="bg-white w-[900px] p-4 border rounded-xl text-font"
        onSubmit={handleSubmitForm}
      >
        <div className="grid grid-cols-2 mt-2">
          <div className=" font-semibold text-xl spacing mb-2">
            Personal Information
          </div>
        </div>

        <hr className="border" />

        <div className="">
          <div className="grid grid-cols-2 mt-2 items-center ">
            <div className="mb-1 ml-4">First Name</div>
            <InputForm
              type="text"
              className="border rounded-md pl-2 mb-1 focus:ring focus:ring-blue-200 outline-none mr-4"
              placeholder={authUser.firstName}
              value={input.firstName}
              onChange={handleChangeInput}
              name="firstName"
            />
            {error.firstName && <InputErrorMessage message={error.firstName} />}
          </div>
          <div className="grid grid-cols-2 mt-2 items-center">
            <div className="mb-1 ml-4">Last Name</div>
            <InputForm
              type="text"
              className="border rounded-md pl-2 mb-1 focus:ring focus:ring-blue-200 outline-none mr-4"
              placeholder={authUser.lastName}
              value={input.lastName}
              onChange={handleChangeInput}
              name="lastName"
            />

            {error.lastName && <InputErrorMessage message={error.lastName} />}
          </div>

          <div className="grid grid-cols-2 mt-2 items-center">
            <div className="mb-1 ml-4">Email</div>
            <div className="border rounded-md pl-2 mb-1 h-7 mr-4 bg-gray-200 text-font">
              {authUser.email}
            </div>
          </div>
          <div className="grid grid-cols-2 mt-2 items-center">
            <div className="mb-1 ml-4">Phone Number</div>
            <InputForm
              type="text"
              className="border rounded-md pl-2 mb-1 focus:ring focus:ring-blue-200 outline-none mr-4"
              placeholder={authUser.mobile ?? "-"}
              value={input.mobile ?? "-"}
              onChange={handleChangeInput}
              name="mobile"
            />

            {error.mobile && <InputErrorMessage message={error.mobile} />}
          </div>

          <div className="grid grid-cols-2 mt-2 items-center">
            <div className="mb-1 ml-4">Address</div>
            <InputForm
              type="text"
              className="border rounded-md pl-2 mb-1 focus:ring focus:ring-blue-200 outline-none mr-4"
              placeholder={authUser.address ?? "-"}
              value={input.address ?? "-"}
              onChange={handleChangeInput}
              name="address"
            />

            {error.address && <InputErrorMessage message={error.address} />}
          </div>
        </div>
        <div className="flex justify-center items-center col-span-full gap-6">
          <Link to="/account">
            <button className="bg-gray-200 rounded-lg px-8 py-1 font-semibold text-xl mt-4 text-gray-800">
              Cancel
            </button>
          </Link>

          <button className="bg-gradient-to-r from-[#AEB1CD] to-[#DEC5D5] rounded-lg px-10 py-1 font-semibold text-xl mt-4 text-gray-800">
            Save
          </button>

          {/* <button className="bg-amber-500 rounded-lg px-10 py-1 font-semibold text-xl mt-4 text-gray-800">
            Back to profile
          </button> */}
        </div>
      </form>
    </div>
  );
}
