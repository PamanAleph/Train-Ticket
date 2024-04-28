import Input from "@/components/main/Input";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Sign In",
};

function SignInForm() {
  return (
    <form className="space-y-12">
      <div className="space-y-4">
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="leroy@jenkins.com"
            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
          />
        </div>
      </div>
      <div className="space-y-2">
        <div>
          <button
            type="button"
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
