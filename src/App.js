import './App.css';
import Login from './Component/Login';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './Component/Home';
import Logout from './Component/Logout';


function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route exact path="/" element={<Login/>} />
    <Route exact path="/home" element={<Home/>} />
    <Route exact path="/logout" element={<Logout/>} />
    </Routes>
    </Router>
    
    </>
  );
}

export default App;
