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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11.0969 11.4482C13.5679 11.4482 15.571 9.44505 15.571 6.97408C15.571 4.50311 13.5679 2.5 11.0969 2.5C8.62593 2.5 6.62282 4.50311 6.62282 6.97408C6.62282 9.44505 8.62593 11.4482 11.0969 11.4482Z"
              fill="#9A9A9A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.99998 17.6708C3.9988 17.3563 4.06914 17.0456 4.20571 16.7623C4.63426 15.9052 5.84278 15.4509 6.8456 15.2452C7.56883 15.0909 8.30205 14.9878 9.0398 14.9367C10.4057 14.8167 11.7795 14.8167 13.1454 14.9367C13.883 14.9884 14.6162 15.0915 15.3396 15.2452C16.3424 15.4509 17.5509 15.8623 17.9795 16.7623C18.2541 17.3399 18.2541 18.0104 17.9795 18.588C17.5509 19.4879 16.3424 19.8993 15.3396 20.0965C14.6172 20.2572 13.8837 20.3632 13.1454 20.4136C12.0336 20.5078 10.9167 20.525 9.80263 20.465C9.5455 20.465 9.29694 20.465 9.0398 20.4136C8.30423 20.3638 7.57355 20.2578 6.85417 20.0965C5.84278 19.8993 4.64283 19.4879 4.20571 18.588C4.06984 18.3013 3.99956 17.988 3.99998 17.6708Z"
              fill="#9A9A9A"
            />
          </svg>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="leroy@jenkins.com"
            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
          />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-xs hover:underline dark:text-gray-600"
            >
              Forgot password?
            </a>
          </div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*****"
            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
          />
        </div>
      </div>
      <div className="space-y-2">
        <div>
          <button
            type="button"
            className="w-full px-8 py-3 font-semibold rounded-md dark:bg-blue-600 dark:text-gray-50"
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
