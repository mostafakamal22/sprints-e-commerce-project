import React from "react";
import { AiOutlineUser } from "react-icons/ai";

export default function AboutUser() {
  return (
    <div className="bg-white px-3 py-10 shadow rounded border-t-4 border-yellow-400">
      <div className="flex items-center  text-gray-900 mb-4 text-2xl">
        <span clas="text-green-500">
          <AiOutlineUser className="mr-1" size={30} />
        </span>
        <span className="tracking-wide">About</span>
      </div>
      <div className="text-gray-700">
        <div className="grid md:grid-cols-2 text-sm">
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">First Name</div>
            <div className="px-4 py-2">Jane</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Last Name</div>
            <div className="px-4 py-2">Doe</div>
          </div>

          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Address</div>
            <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Secondary Address</div>
            <div className="px-4 py-2">Arlington Heights, IL, Illinois</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Email.</div>
            <div className="px-4 py-2 ">
              <span className="hover:text-yellow-700">jane@example.com</span>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Phone Number</div>
            <div className="px-4 py-2">01008871950</div>
          </div>
        </div>
      </div>
    </div>
  );
}
