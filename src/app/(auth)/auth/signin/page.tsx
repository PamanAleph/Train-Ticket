import React from "react";
import SignInForm from "./_components/SignInForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center max-w-md p-6 rounded-md sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign In To Your Account</h1>
          <p className="text-sm text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <SignInForm />
      </div>
        <ToastContainer/>
    </div>
  );
}

export default page;
