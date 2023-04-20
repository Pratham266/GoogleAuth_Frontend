import './App.css';
import Login from './Component/Login';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './Component/Home';
import Logout from './Component/Logout';
import UserContext from './Context/UserContext';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [user,setUser] = useState({name:null,email:null,googleId:null});

  const isLoggedIn = async () => {
    try {
      const response = await axios.post("http://localhost:4000/isLoggedIn", {}, {
        withCredentials: true
      });
      const content = response.data;
      console.log(content);
      if (content.success === "true") {
        console.log("Content : ", content);
        console.log("User : ", content.user);
        // setUser({ id: content.user._id, ...content.user });
        console.log("User context : ", user);
      } else {
        setUser({});  
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    isLoggedIn();
  },[])
   return (
    <>
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
    <Routes>
    <Route exact path="/" element={<Login/>} />
    <Route exact path="/home" element={<Home/>} />
    <Route exact path="/logout" element={<Logout/>} />
    </Routes>
    </UserContext.Provider>
    </Router>
    
    </>
  );
}

export default App;
