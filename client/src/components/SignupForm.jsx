/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("resume", formData.resume);

    try {
      const response = await fetch("http://localhost:5000/api/users/signup", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const result = await response.json();
      console.log(result);

      alert("Thank you! Your details have been submitted.");

      navigate("/thank-you");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg p-6 mx-auto my-10 space-y-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center text-blue-600 md:text-3xl">
        Sign Up
      </h2>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
          className="w-full p-3 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          className="w-full p-3 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="resume"
          className="block text-sm font-medium text-gray-700"
        >
          Upload Resume
        </label>
        <input
          type="file"
          name="resume"
          onChange={handleChange}
          className="w-full p-3 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-3 text-white transition duration-150 ease-in-out bg-blue-500 rounded-lg hover:bg-blue-600 focus:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

export default SignupForm;
