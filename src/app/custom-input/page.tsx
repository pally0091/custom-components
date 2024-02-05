/**
 * CustomInputPage component that renders a form with email input
 * and submit button to sign up for a newsletter.
 * Handles form submission to log email to console.
 */

"use client";
import React, { useState } from "react";

const CustomInputPage = () => {
  const [email, setEmail] = useState("");
  const handleSubscription = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="p-5 bg-black">
      <form onSubmit={handleSubscription}>
        <div className="flex flex-col gap-5 md:flex-row lg:flex-row items-center max-w-[600px] mx-auto justify-between p-2 rounded-full bg-transparent md:bg-white">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your Email"
            className="border-none py-2 w-full md:w-1/2 rounded-full focus:outline-none px-4"
          />
          <button
            type="submit"
            className="bg-[#ED7214] px-3 py-2 text-white rounded-full w-full md:w-1/2"
          >
            Sign up for our new newsletter
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomInputPage;
