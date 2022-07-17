import React, { useState } from "react";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <form className="w-full flex flex-col py-4">
      <input
        className="p-3 my-2 bg-gray-700 rounded"
        type="email"
        value={email}
        placeholder="Enter your email..."
        autoComplete="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="p-3 my-2 bg-gray-700 rounded"
        type="password"
        value={pass}
        placeholder="Enter your password..."
        autoComplete="current-password"
        onChange={(e) => setPass(e.target.value)}
      />
      <button
        className="bg-red-600 py-3 my-6 rounded font-bold"
        onClick={(e) => {
          e.preventDefault();
          handleClick(email, pass);
        }}
      >
        {title}
      </button>
    </form>
  );
};

export default Form;
