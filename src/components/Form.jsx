import React, { useState } from "react";

const Form = ({ title }) => {
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
      />
      <input
        className="p-3 my-2 bg-gray-700 rounded"
        type="password"
        value={pass}
        placeholder="Enter your password..."
        autoComplete="current-password"
      />
      <button className="bg-red-600 py-3 my-6 rounded font-bold">
        {title}
      </button>
    </form>
  );
};

export default Form;
