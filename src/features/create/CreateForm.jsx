import { useRef, useState } from "react";
import InputErrorMessage from "../auth/InputErrorMessage";
import { toast } from "react-toastify";
import RegisterInput from "../auth/RegisterInput";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import axios from "../../config/axios";

const createSchema = Joi.object({
  name: Joi.string().trim().required(),
  author: Joi.string().trim().required(),
  price: Joi.number().min(0).required(),
  image: Joi.required(),
  categoryId: Joi.number().min(0).required(),
});

const validateCreate = (input) => {
  const { error } = createSchema.validate(input, { abortEarly: false });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
};

export default function CreateForm() {
  const [input, setInput] = useState({
    name: "",
    author: "",
    price: "",
    image: "",
    categoryId: "",
  });
  const [file, setFile] = useState(null);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  //   const inputImage = useRef(null);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const validationError = validateCreate(input);
    if (validationError) {
      return setError(validationError);
    }

    setError({});

    try {
      const formData = new FormData();
      formData.append("name", input.name);
      formData.append("author", input.author);
      formData.append("price", input.price);
      formData.append("categoryId", input.categoryId);
      formData.append("image", file);

      await axios.post("/admin/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Item created successfully!");
      navigate("/admin");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to create item. Please try again.");
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <form
        className="bg-white grid grid-cols-2 gap-x-3 gap-y-4 border border-gray-200 rounded-2xl w-1/2 shadow p-10"
        onSubmit={handleSubmitForm}
      >
        <div className="flex justify-center items-center col-span-2 font-semibold text-4xl text-gray-600">
          Create
        </div>
        <hr className="col-span-2 border border-gray-200 " />

        <div className="col-span-2 m-1">
          <RegisterInput
            placeholder="Name "
            value={input.name}
            onChange={handleChangeInput}
            name="name"
            hasError={error.name}
          />
          {error.name && <InputErrorMessage message={"Name is required"} />}
        </div>
        <div className="col-span-2 m-1">
          <RegisterInput
            placeholder="Author"
            value={input.author}
            onChange={handleChangeInput}
            name="author"
            hasError={error.author}
          />
          {error.author && <InputErrorMessage message={"Author is required"} />}
        </div>
        <div className="m-1">
          <RegisterInput
            placeholder="Price"
            value={input.price}
            onChange={handleChangeInput}
            name="price"
            hasError={error.price}
          />
          {error.price && (
            <InputErrorMessage
              message={"Price is required, should be a number"}
            />
          )}
        </div>

        <div className="m-1">
          <RegisterInput
            placeholder="Category"
            value={input.categoryId}
            onChange={handleChangeInput}
            name="categoryId"
            hasError={error.categoryId}
          />
          {error.categoryId && (
            <InputErrorMessage message={"Category is required"} />
          )}
        </div>
        <div className="col-span-2 m-1">
          <RegisterInput
            type="file"
            value={input.image}
            onChange={(e) => {
              if (e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
            name="image"
            hasError={error.image}
          />
          {error.image && <InputErrorMessage message={"Image is required"} />}
        </div>
        <div className="flex justify-center items-center col-span-full">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg px-20 py-2 font-semibold text-xl mt-4 text-gray-800">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
