import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from "../../firebase.init";

const Login = () => {
 const [myError,setMyError] = useState();
 const [user,setUser] = useState({});
 const navigate = useNavigate();
 const provider = new GoogleAuthProvider();

 useEffect(()=>{
  onAuthStateChanged(auth, user=>{
      setUser(user);
  })
},[])
if(user){
  navigate('/');
}
  const handleFormSubmit = (event)=>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
       signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            })
            .catch((error) => {
              const errorMessage = error.message;
              setMyError(errorMessage);
            });     
}
const handleGoogleSignIn =()=>{
  signInWithPopup(auth,provider)
  .then(result=>{
    // const myUser = result.user;
    
    // setUser(myUser);
 })
}
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
            <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-red-400 text-sm md:text-lg font-bold mb-2"
                  for="username"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Email"
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
                  name="password"
                  type="password"
                  placeholder="*************"
                />
              </div>
              {myError && <p className="text-red-600 text-xs">{myError}</p>}
              <div className="flex items-center justify-between">
              <input className='bg-red-400 md:text-lg mt-5 text-white w-[30%] md:w-[20%] mx-auto py-1 cursor-pointer hover:bg-red-600 rounded-md' type="submit" value="Login" />
                <Link
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  to="/resetpassword"
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
            <button onClick={handleGoogleSignIn} className="bg-white p-3 shadow-md rounded-md"><FontAwesomeIcon className="text-blue-500" icon={faGoogle} /> Join With Google</button>
        </div>
        <div className="text-center mt-1">
            <button className="bg-white p-3 shadow-md rounded-md"><FontAwesomeIcon className="text-blue-500" icon={faFacebook} /> Join With Facebook</button>
        </div>
      </section>
    </>
  );
};

export default Login;
