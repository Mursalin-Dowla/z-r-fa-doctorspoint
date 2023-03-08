import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faX } from '@fortawesome/free-solid-svg-icons'
import {onAuthStateChanged,signOut } from "firebase/auth";
import auth from "../../../firebase.init";

const Header = () => {
    const [menuIcon,setMenuIcon] = useState(false);
    const [user,setUser] = useState({});
    useEffect(()=>{
      onAuthStateChanged(auth, user=>{
          setUser(user);
      })
  },[])

  const handleSignOut =()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
    });
  }
  return (
    <>
     <nav className="py-5 fixed top-0 left-0 right-0 bg-gray-500/[.3]">
        <div className="hidden container md:flex flex-wrap items-center justify-between mx-auto md:text-md lg:text-xl">
           <div className="flex ">
            <img className="w-6 mr-2" src={logo} alt="Site Logo" />
            <span className="my-font uppercase font-bold">D<span className="text-red-600">o</span>ct<span className="text-red-600">o</span>rs P<span className="text-red-600">o</span>int</span>
           </div>
           <div className="w-[50%] flex justify-evenly">
           <ul className="flex flex-row">
            <Link to='/' className="mx-2 my-font hover:text-red-600 hover:underline hover:decoration-2">Home</Link>
            <Link to='/learn' className="mx-2 my-font hover:text-red-600 hover:underline hover:decoration-2">Learn</Link>
            <Link to='/achievements' className="mx-2 my-font hover:text-red-600 hover:underline hover:decoration-2">Achievements</Link>
            <Link to='/blog' className="mx-2 my-font hover:text-red-600 hover:underline hover:decoration-2">Blog</Link>
            {user && <button onClick={handleSignOut} className="mx-2 my-font hover:text-red-600 hover:underline hover:decoration-2">Signout</button>}
           </ul>
           <div>
            {!user && <Link to='/login' className="my-font hover:bg-red-600 hover:text-white px-2 py-1 rounded-md">Login</Link>}
           </div>
           </div>
        </div>
        <div className="flex justify-between md:hidden">
        <div className="flex ">
            <img className="w-6 h-6 mx-2" src={logo} alt="Site Logo" />
            <span className="my-font uppercase font-bold">D<span className="text-red-600">o</span>ct<span className="text-red-600">o</span>rs P<span className="text-red-600">o</span>int</span>
           </div>
           <div>
            <button className="mr-5 text-xl text-white" onClick={()=>setMenuIcon(!menuIcon)}>
                {menuIcon ?  <FontAwesomeIcon icon={faX} /> :<FontAwesomeIcon icon={faBars} />}
            </button>
            <ul className={`pb-12 absolute flex flex-col bg-gray-600/[.5] border border-red-100 border-b-0 border-r-0 border-l-0  z-[-1] top-[67px] w-full  pl-9 transition-all duration-500 ease-in ${menuIcon ? 'left-0 ':'left-[-890px]'}`}>
            <Link to='/' className="my-font text-sky-300 hover:text-red-600 hover:underline hover:decoration-2 mt-4 mb-2 w-[100%] ">Home</Link>
            <Link to='/learn' className="my-font text-sky-300 hover:text-red-600 hover:underline hover:decoration-2 my-2 w-[100%] ">Learn</Link>
            <Link to='/achievements' className="my-font text-sky-300 hover:text-red-600 hover:underline hover:decoration-2 my-2 w-[100%] ">Achievements</Link>
            <Link to='/blog' className="my-font text-sky-300 hover:text-red-600 hover:underline hover:decoration-2 my-2 w-[100%] ">Blog</Link>
            {user && <Link onClick={handleSignOut} className="my-font text-sky-300 hover:text-red-600 hover:underline hover:decoration-2 my-2 w-[100%] ">Signout</Link>}
            {!user && <Link to='/login' className="my-font text-sky-300 hover:text-red-600 hover:underline hover:decoration-2 my-2 w-[100%]">Login</Link>}
             </ul>
           </div>
        </div>
     </nav>
    </>
  );
};

export default Header;
