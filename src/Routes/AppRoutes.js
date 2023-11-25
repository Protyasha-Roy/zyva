import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "../Components/Header/Header";
import About from "../Pages/About/About";
import GetAccess from "../Pages/GetAccess/GetAccess";
import Home from "../Pages/Home/Home";
import Instructions from "../Pages/Instructions/Instructions";
import Playground from "../Pages/Playground/Playground";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/instructions" element={<Instructions/>} />
        <Route path="/get-access" element={<GetAccess/>} />
        <Route path="/playground" element={<Playground/>} />
        <Route component={() => <div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;