import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import Messages from "./Messages";
import Signup from "./Signup";

function App() {
    return (

        <React.Fragment>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Messages" element={<Messages />} />
                <Route path="/Signup" element={<Signup />} />
            </Routes>
        </React.Fragment>



    );
}

export default App;