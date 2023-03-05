import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import auth from "../../firebase.init";

const Signup = () => {
    const [myError,setMyError] = useState('');
    const [user,setUser] = useState({});
    const navigate = useNavigate();
    
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
        var passCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmpassword = event.target.confirmpassword.value;
        if(password.match(passCheck)){
            if(confirmpassword !== password){
                setMyError('Password Did Not Matched');
            }
            else{
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                   
                })
                .catch((error) => {
                  const errorMessage = error.message;
                  setMyError(errorMessage);
                });
            }
        }
        else{
            setMyError('Put at least on letter of both case and one special character in password');
        }
    }
  return (
    <>
          <section  className="w-[80%] md:w-[50%] mx-auto shadow-lg mt-20 pb-5 my-font">
                    <form onSubmit={handleFormSubmit} className='flex flex-col w-[70%] mx-auto mt-10'>
                        <h1 className='text-center md:text-2xl uppercase font-bold mt-32 md:mt-20 mb-10'>Join <span className='text-red-400'>Doctors Point</span> </h1>
                        <input className='pl-1 border mt-5 md:text-lg border-red-400 rounded-md' type="text" name="name" id="name" placeholder='Name' required/>
                        <input className='pl-1 border mt-5 md:text-lg border-red-400 rounded-md' type="email" name="email" id="email" placeholder='Email' required/>
                        <input className='pl-1 border mt-5 md:text-lg border-red-400 rounded-md' type="password" name="password" id="pw" placeholder='Password' required/>
                        <input className='pl-1 border mt-5 md:text-lg border-red-400 rounded-md' type="password" name="confirmpassword" id="cpw" placeholder='Confirm Password' required/>
                        {
                             myError && <p className='text-center text-red-600'>{myError}</p>
                        }
                        <input className='bg-red-400 md:text-lg mt-5 text-white w-[30%] md:w-[20%] mx-auto py-1 cursor-pointer hover:bg-red-600 rounded-md' type="submit" value="Sign Up" />
                    </form>
                     <p className='mt-4 text-xs md:text-sm text-center'>Already have an account? <Link className='text-blue-600' to='/login'>Login</Link></p>
            </section>
    </>
  );
};

export default Signup;
