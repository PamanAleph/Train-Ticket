"use client"
import { Register } from "@/service/api/auth";
import Link from "next/link";
import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";

function SignUpForms() {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await Register(username, email, password);
    } catch (error: any) {
      setError(error);
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-12">
      <div className="space-y-4">
        <div>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="John Doe"
            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="leroy@jenkins.com"
            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-2">
        <div>
          <button
            type="submit"
            className="w-full px-8 py-3 bg-gradient-to-tl from-sky-500 to-white text-white font-bold rounded-lg"
          >
            Sign in
          </button>
        </div>
        <p className="px-6 text-sm text-center dark:text-gray-600">
          Already Have Account ?
          <Link
            rel="noopener noreferrer"
            href="/auth/signin"
            className="hover:underline dark:text-blue-600"
          >
            Sign In
          </Link>
          .
        </p>
      </div>
    </form>
  );
}

export default SignUpForms;
