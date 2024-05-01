import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../config/axios";
import RegisterInput from "../../features/auth/RegisterInput";
import { toast } from "react-toastify";

export default function EditBookPage() {
  const [input, setInput] = useState({
    name: "",
    author: "",
    price: "",
    categoryId: "",
  });

  const [file, setFile] = useState(input?.image);
  const [error, setError] = useState({});
  const { productId } = useParams();
  const productData = async (productId) => {
    try {
      const res = await axios.get(`/admin/product/${productId}`);
      setInput(res.data.getProductById);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    productData(productId);
  }, []);

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    setError({});
    try {
      const formData = new FormData();
      formData.append("name", input.name);
      formData.append("author", input.author);
      formData.append("price", input.price);
      formData.append("categoryId", input.categoryId);
      if (file) {
        formData.append("image", file);
      }

      await axios.patch(`/admin/edit/${productId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Item updated successfully!");
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
          Update
        </div>
        <hr className="col-span-2 border border-gray-200 " />
        <div className="text-3xl">{name?.name}</div>
        <div className="col-span-2 m-1">
          <RegisterInput
            placeholder={input?.name || "Name"}
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
          <img src={input?.image} alt="image" width={200} />
          <RegisterInput
            type="file"
            onChange={(e) => {
              if (e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
            name="image"
          />
        </div>
        <div className="flex justify-center items-center col-span-full">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg px-20 py-2 font-semibold text-xl mt-4 text-gray-800">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
