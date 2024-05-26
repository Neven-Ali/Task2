import React from "react";

export default function CodeEmail() {
  return (
    <div className="flex flex-row container my-6 items-center justify-center ">
      <input
        required
        placeholder="_"
        value={"5"}
        type="text"
        maxLength={1}
        className={`mx-2 min-w-4   max-w-16 bg-slate-200 aspect-auto rounded-xl  border border-gray-400 text-center text-3xl focus:outline-none  focus:ring-2 focus:ring-blue-400 `}
      />
      <input
        required
        placeholder="_"
        value={"4"}
        type="text"
        maxLength={1}
        className={`mx-2 min-w-4 max-w-16 bg-slate-200 aspect-auto rounded-xl  border border-gray-400 text-center text-3xl focus:outline-none  focus:ring-2 focus:ring-blue-400 `}
      />
      <input
        required
        placeholder="_"
        value={"0"}
        type="text"
        maxLength={1}
        className={`mx-2 min-w-4 max-w-16 bg-slate-200 aspect-auto rounded-xl  border border-gray-400 text-center text-3xl focus:outline-none  focus:ring-2 focus:ring-blue-400 `}
      />
      <input
        required
        placeholder="_"
        value={"3"}
        type="text"
        maxLength={1}
        className={`mx-2 min-w-4 max-w-16 bg-slate-200 aspect-auto rounded-xl  border border-gray-400 text-center text-3xl focus:outline-none  focus:ring-2 focus:ring-blue-400 `}
      />
      <input
        required
        placeholder="_"
        value={"3"}
        type="text"
        maxLength={1}
        className={`mx-2 min-w-4 max-w-16 bg-slate-200 aspect-auto rounded-xl  border border-gray-400 text-center text-3xl focus:outline-none  focus:ring-2 focus:ring-blue-400 `}
      />
      <input
        required
        placeholder="_"
        type="text"
        maxLength={1}
        className={`mx-2 min-w-4 max-w-16 bg-slate-200 aspect-auto rounded-xl  border border-gray-400 text-center text-3xl focus:outline-none  focus:ring-2 focus:ring-blue-400 `}
      />
    </div>
  );
}
