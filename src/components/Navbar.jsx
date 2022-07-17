import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { removeUser } from "../redux/slice/userSlice";
const Navbar = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer navbar_logo">
          NETFLIX
        </h1>
      </Link>
      <div>
        {isAuth ? (
          <button
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white navbar_log_out"
            onClick={() => dispatch(removeUser())}
          >
            Log out {email}
          </button>
        ) : (
          <>
            <Link to="/login">
              <button className="text-white pr-4">Sign In</button>
            </Link>
            <Link to="/signup">
              <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
