/* eslint-disable no-unused-vars */
import React from "react";
import SignupForm from "../components/SignupForm";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-2xl space-y-6 text-center">
        <h1 className="text-3xl font-bold text-blue-600 md:text-4xl">
          Welcome to YourHR
        </h1>
        <p className="text-lg text-gray-600 md:text-xl">
          We help you find the ideal job role based on your qualifications and
          preferences.
        </p>
      </div>

      <div className="w-full max-w-lg mt-6">
        <SignupForm />
      </div>
    </div>
  );
}

export default HomePage;
