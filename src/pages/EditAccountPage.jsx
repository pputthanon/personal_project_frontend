import { useAuth } from "../hooks/use-auth";

export default function EditAccountPage() {
  const { authUser } = useAuth();
  return (
    <div className="flex justify-center mt-10 text-font">
      <div className="bg-white w-[900px] p-4 border rounded-xl text-font">
        <div className="grid grid-cols-2 mt-2">
          <div className=" font-semibold text-xl spacing mb-2">
            Personal Information
          </div>
        </div>

        <hr className="border" />

        <div className="">
          <div className="grid grid-cols-2 mt-2 items-center ">
            <div className="mb-1">First Name</div>
            <input
              type="text"
              className="border rounded-md pl-2 mb-1 focus:ring focus:ring-blue-200 outline-none"
              placeholder={authUser.firstName}
            />
          </div>
          <div className="grid grid-cols-2 mt-2 items-center">
            <div className="mb-1">Last Name</div>
            <input
              type="text"
              className="border rounded-md pl-2 mb-1 focus:ring focus:ring-blue-200 outline-none"
              placeholder={authUser.lastName}
            />
          </div>
          <div className="grid grid-cols-2 mt-2 items-center">
            <div className="mb-1">Email</div>
            <input
              type="text"
              className="border rounded-md pl-2 mb-1 focus:ring focus:ring-blue-200 outline-none"
              placeholder={authUser.email}
            />
          </div>
          <div className="grid grid-cols-2 mt-2 items-center">
            <div className="mb-1">Phone Number</div>
            <input
              type="text"
              className="border rounded-md pl-2 mb-1 focus:ring focus:ring-blue-200 outline-none"
              placeholder={authUser.mobile}
            />
          </div>
          <div className="grid grid-cols-2 mt-2 items-center">
            <div className="mb-1">Address</div>
            <input
              type="text"
              className="border rounded-md pl-2 mb-1 focus:ring focus:ring-blue-200 outline-none"
              placeholder={authUser.address}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
