import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

export default function EditAccountPage() {
  const { authUser } = useAuth();
  return (
    <div className="flex justify-center mt-10 text-font">
      <form className="bg-white w-[900px] p-4 border rounded-xl text-font">
        <div className="grid grid-cols-2 mt-2">
          <div className=" font-semibold text-xl spacing mb-2">
            Personal Information
          </div>
        </div>

        <hr className="border" />

        <div className="">
          <div className="grid grid-cols-2 mt-2 items-center ">
            <div className="mb-1 ml-4">First Name</div>
            <input
              type="text"
              className="border rounded-md pl-2 mb-1 focus:ring focus:ring-blue-200 outline-none mr-4"
              placeholder={authUser.firstName}
            />
          </div>
          <div className="grid grid-cols-2 mt-2 items-center">
            <div className="mb-1 ml-4">Last Name</div>
            <input
              type="text"
              className="border rounded-md pl-2 mb-1 focus:ring focus:ring-blue-200 outline-none mr-4"
              placeholder={authUser.lastName}
            />
          </div>
          <div className="grid grid-cols-2 mt-2 items-center">
            <div className="mb-1 ml-4">Email</div>
            <input
              type="text"
              className="border rounded-md pl-2 mb-1 focus:ring focus:ring-blue-200 outline-none mr-4"
              placeholder={authUser.email}
            />
          </div>
          <div className="grid grid-cols-2 mt-2 items-center">
            <div className="mb-1 ml-4">Phone Number</div>
            <input
              type="text"
              className="border rounded-md pl-2 mb-1 focus:ring focus:ring-blue-200 outline-none mr-4"
              placeholder={authUser.mobile}
            />
          </div>
          <div className="grid grid-cols-2 mt-2 items-center">
            <div className="mb-1 ml-4">Address</div>
            <input
              type="text"
              className="border rounded-md pl-2 mb-1 focus:ring focus:ring-blue-200 outline-none mr-4"
              placeholder={authUser.address}
            />
          </div>
        </div>
        <div className="flex justify-center items-center col-span-full gap-6">
          <Link to="/account/overview">
            <button className="bg-gray-200 rounded-lg px-8 py-1 font-semibold text-xl mt-4 text-gray-800">
              Cancel
            </button>
          </Link>

          <button className="bg-gradient-to-r from-[#AEB1CD] to-[#DEC5D5] rounded-lg px-10 py-1 font-semibold text-xl mt-4 text-gray-800">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
