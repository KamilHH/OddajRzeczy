import React from 'react';
import Home from './components/Home'
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/logowanie" element={<Login />}/>
                <Route path="/rejestracja" element={<Register />}/>
            </Routes>
        </>
    );
};

export default App;