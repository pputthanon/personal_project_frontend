import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { PenIcon } from "../icons";

export default function AccountPage() {
  const { authUser } = useAuth();
  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white w-2/3 p-4 border rounded-xl text-font">
        <div className="grid grid-cols-2 mb-2">
          <div className="flex justify-start items-center font-semibold">
            My Account
          </div>
          <div className="flex justify-end items-center ">
            <Link to="/account/edit">
              <div className="flex justify-center items-center gap-2 fill-gray-500">
                <span>Edit</span>
                <PenIcon />
              </div>
            </Link>
          </div>
        </div>
        <hr className="border" />
        <div className="grid grid-cols-2 mt-2">
          <div>
            <div className="">First Name</div>
            <div className="">Last Name</div>
            <div className="">Email</div>
            <div className="">Phone Number</div>
            <div className="">Address</div>
          </div>

          <div className="">
            <div className="">{authUser.firstName}</div>
            <div className="">{authUser.lastName}</div>
            <div className="">{authUser.email || (authUser.email = "-")}</div>
            <div className="">{authUser.mobile || (authUser.mobile = "-")}</div>
            <div className="">{(authUser.address = "-")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
