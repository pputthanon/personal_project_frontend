import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { PenIcon } from "../icons";
import { useEffect } from "react";
import axios from "../config/axios";
import { useState } from "react";

export default function AccountPage() {
  const { authUser } = useAuth();
  console.log(authUser);

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white w-2/3 p-4 border rounded-xl text-font ">
        <div className="grid grid-cols-2 mb-2">
          <div className="flex justify-start items-center font-semibold text-xl">
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
        <div className="grid grid-cols-2 mt-2 ml-6">
          <div>
            <div className="mb-1">First Name</div>
            <div className="mb-1">Last Name</div>
            <div className="mb-1">Email</div>
            <div className="mb-1">Phone Number</div>
            <div className="mb-1">Address</div>
          </div>

          <div className="">
            <div className="mb-1">{authUser.firstName}</div>
            <div className="mb-1">{authUser.lastName}</div>
            <div className="mb-1">{authUser.email}</div>
            <div className="mb-1">{authUser.mobile || "-"} </div>
            <div className="mb-1">{authUser.address || "-"} </div>
          </div>
        </div>
      </div>
    </div>
  );
}
