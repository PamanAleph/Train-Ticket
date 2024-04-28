"use client";
import Input from "@/components/main/Input";
import { Login } from "@/service/api/auth";
import axios from "axios";
import { access } from "fs";
import { Metadata } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "Sign In",
};

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await Login(email, password);
    } catch (error: any) {
      setError(error);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-12">
      <div className="space-y-4">
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
          Don't have an account yet?
          <Link
            rel="noopener noreferrer"
            href="/auth/signup"
            className="hover:underline dark:text-blue-600"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </form>
  );
}

export default SignInForm;
