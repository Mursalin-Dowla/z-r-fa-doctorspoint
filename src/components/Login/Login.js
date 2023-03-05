import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="container mt-20 mx-auto  min-h-screen my-font">
        <div>
          <div className="">
            <h1 className="text-center text-lg md:text-4xl font-bold text-sky-400">
              Please Login
            </h1>
          </div>
          <div className="w-full mt-10 mx-auto max-w-xs md:max-w-md">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-red-400 text-sm md:text-lg font-bold mb-2"
                  for="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-red-400 text-sm md:text-lg font-bold mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In
                </button>
                <Link
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </Link>
              </div>
            </form>
            <h1 className="text-center text-sm md:text-md">Don't Have an Account? <Link className="text-blue-500" to='/signup'>Sign Up</Link></h1>
          </div>
        </div>
        <h1 className="text-center mt-5 text-semibold border border-b-2 border-x-0 border-t-0 w-1/4 mx-auto">Or</h1>

        <div className="text-center mt-5">
            <button className="bg-white p-3 shadow-md rounded-md"><FontAwesomeIcon className="text-blue-500" icon={faGoogle} /> Join With Google</button>
        </div>
        <div className="text-center mt-1">
            <button className="bg-white p-3 shadow-md rounded-md"><FontAwesomeIcon className="text-blue-500" icon={faFacebook} /> Join With Facebook</button>
        </div>
      </section>
    </>
  );
};

export default Login;
