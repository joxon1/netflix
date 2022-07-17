import React from "react";
import Form from "../components/Form";
import bg from "../assets/bg.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slice/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      try {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      } catch {
        console.error();
      }
    });
  };

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
              <h1 className="text-3xl font-bold">Sign In</h1>
              <Form title="Sign In" handleClick={handleLogin} />
              <p className="py-4">
                or 
                <Link to="/signup">
                  <button className="bg-red-600 py-1 px-6 mx-3 my-6 rounded font-bold">
                    Register
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

export default Login;
