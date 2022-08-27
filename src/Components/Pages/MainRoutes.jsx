import React from "react";
import { Routes, Route } from "react-router-dom";
import Features from "../../Pages/Features";
import Whyharvest from "../../Pages/Whyharvest";
import Signin from "../../Pages/Signin";
import Homepage from "../HomePage/Homepage";
import SecondNavbar from "../SignPages/SecondNavbar";
import Time from "../SignPages/Time";
import Expenses from "../SignPages/Expenses";
import Invoices from "../SignPages/Invoices";
import Projects from "../../Pages/Projects";
import Team from "../../Pages/Team";


const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/whyHarvest" element={<Whyharvest />} />
        <Route path="/features" element={<Features />} />
        <Route path="/customers" element={<h1>customers</h1>} />
        <Route path="/integration" element={<h1>integration</h1>} />
        <Route path="/pricing" element={<h1>pricing</h1>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/tryharvestfree" element={<h1>tryharvestfree</h1>} />
        <Route path="/second" element={<SecondNavbar />} />
        <Route path="/time" element={<Time />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path='/projects' element={<Projects />}/>
        <Route path='/teams' element={<Team/>}/>
      </Routes>
    </>
  );
};

export default MainRoutes;
