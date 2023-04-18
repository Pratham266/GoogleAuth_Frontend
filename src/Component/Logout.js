import React from 'react';
import axios from 'axios';

const handleLogout=()=>{
    axios.get('http://localhost:4000/logout')
  .then(response => {
    console.log(response);
    // do something after logging out
  })
  .catch(error => {
    console.log(error);
    // handle error
  });
}

const handleCheckUser =()=>[
  axios.get("http://localhost:4000/checkuserlogin").then(response=>{
    console.log(response);
  }).catch(error=>{
    console.log("frontend error",error);
  })
]
const Logout = () => {
    
    return (
    <>
<button type="submit" onClick={handleLogout} className="justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Logout</button>
<button type="submit" onClick={handleCheckUser} className="justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Check User Login</button>

    </>
  )
}

export default Logout
