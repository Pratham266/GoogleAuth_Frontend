import React, { useState } from "react";
import axios from "axios";


const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  // const handleForm=(e)=>{
  //   e.preventDefault();
  //   const data = axios.get("http://localhost:4000/auth/google").then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // }
  return (
    <>
      <form action="http://localhost:4000/auth/google" >
       
        <button
          type="submit"
          className="justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Sign in with Google
        </button>
      </form>
    </>
  );
};

export default Login;
