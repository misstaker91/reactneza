import {useState, useEffect} from "react";
import Landing from "./Landing";
import Register from "./Register";
import Error from "./Error";
import Dashboard from "./Dashboard";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/landing' element={<Landing />}/>
                <Route path='*' element={<Error />}/>


            </Routes>

        </BrowserRouter>
    );
}

export default App;
