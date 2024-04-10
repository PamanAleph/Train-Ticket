import React from "react";
import { CiSearch } from "react-icons/ci";

interface InputProps {
  placeholder?: string;
  type: string;
}

function Input({ placeholder, type }: InputProps) {
  return (
    <div className="relative flex items-center mt-2">
      <input
        type={type}
        placeholder={placeholder}
        className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-5 pr-11 outline-none"
      />

      <span className="absolute items-center right-3">
        <CiSearch size={20} color="gray" />
      </span>
    </div>
  );
}

export default Input;
