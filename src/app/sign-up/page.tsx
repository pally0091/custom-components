"use client";
import React, { useState } from "react";

const SignupPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };
  console.log(showLogin);
  return (
    <div className="relative w-96 h-[600px] bg-black overflow-hidden  m-auto">
      <div className="flex flex-col justify-between w-full h-full">
        <h1 className="text-white">Signup Page</h1>

        <button
          className="text-white px-4 py-2 rounded"
          onClick={toggleLogin}
        >
          Login
        </button>
      </div>

      <div
        className={`absolute h-full top-0 left-0 w-full transform transition-transform duration-500  ${
          showLogin ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-white p-4 rounded flex flex-col justify-between w-full h-full">
          <button
            className="bg-white px-4 py-2 rounded"
            onClick={toggleLogin}
          >
            Sign Up
          </button>
          <h1>Login Page</h1>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
