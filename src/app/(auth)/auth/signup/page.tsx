import React from "react";
import SignUpForms from "./_components/SignUpForms";

function page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center max-w-md p-6 rounded-md sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up To Your Account</h1>
          <p className="text-sm text-gray-600">
            Sign Up to access your ticket
          </p>
        </div>
        <SignUpForms/>
      </div>
    </div>
  );
}

export default page;
