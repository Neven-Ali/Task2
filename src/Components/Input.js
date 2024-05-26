import React from "react";

export default function Input({ title, children }) {
  return (
    <div>
      <div className="relative my-8 w-full">
        <label className="absolute bg-primary-white right-px   text-sm font-medium  text-black  -translate-y-1/2 ">
          {title}
        </label>
        <input
          type="text"
          id="username"
          required
          className="border-black px-3 py-2 w-full rounded-2xl  border-[1px]  focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
    </div>
  );
}
