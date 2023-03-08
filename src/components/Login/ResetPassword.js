import React, { useState } from 'react';
import { sendPasswordResetEmail } from "firebase/auth";
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [myError,setMyError] = useState();
    const navigate = useNavigate();

    const handleFormSubmit =(event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("An Email Was Sent to You");
            navigate('/login');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            setMyError(errorMessage);
          });
    }
    return (
        <>
           <section className="container mt-20 mx-auto  min-h-screen my-font">
          <div className="">
            <h1 className="text-center text-lg md:text-4xl font-bold text-sky-400">
              Please Enter Your Email Address
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
              {myError && <p className='text-red-600 text-xs'>{myError}</p>}
              <div className="flex items-center justify-between">
              <input className='bg-red-400 md:text-md text-xs mt-5 text-white w-[30%] md:w-[35%] mx-auto py-1 px-2 cursor-pointer hover:bg-red-600 rounded-md' type="submit" value="Send Mail" />
              </div>
            </form>
          </div>
           </section>
        </>
    );
};

export default ResetPassword;