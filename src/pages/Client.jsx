import React from "react";
import n_logo from "../assets/n.png";
import netflixLogo from "../assets/netflix.jpg";
import { Link } from "react-router-dom";
const Client = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-white">
      <div>
        <h1 className=" text-4xl font-bold ">welcome</h1>
      </div>
      <div>
        <img src={netflixLogo} alt="netflix" />
      </div>
      <div className="mt-5 flex justify-center flex-col items-center">
        <p className="text-2xl">unoffical web site in </p>
        <a
          className=" text-1xl rounded-lg font-bold py-1 px-4 bg-red-400"
          href="http://joxon1.github.io/portfolio"
          target="_blank"
        >
          RoadforJunior
        </a>
      </div>
    </div>
  );
};

export default Client;
