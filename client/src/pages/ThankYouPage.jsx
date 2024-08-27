/* eslint-disable no-unused-vars */
import React from "react";

function ThankYou() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 space-y-4 text-center bg-white rounded-lg shadow-lg md:p-10">
        <h1 className="text-3xl font-bold text-blue-600 md:text-4xl">
          Thank You!
        </h1>
        <p className="text-lg text-gray-700 md:text-xl">
          Your application has been submitted successfully.
        </p>
        <p className="text-sm text-gray-500 md:text-base">
          We will review your submission and get back to you shortly.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="px-6 py-2 mt-4 text-white transition duration-300 ease-in-out bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
}

export default ThankYou;
