import React from "react";
import bg from "../assets/bg.jpg";
import Form from "../components/Form";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <>
      <div className="w-full h-full">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src={bg}
          alt="bg"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 rounded-xl text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <Form title="Sign Up" />
              <p className="py-4">
                Already have an account?
                <Link to="/login">
                  <button className="bg-red-600 py-1 px-6 mx-3 my-6 rounded font-bold">
                    Login
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
