import React from "react";
import { Routes, Route } from "react-router-dom";
import Features from "../../Pages/Features";
import Whyharvest from "../../Pages/Whyharvest";
import Homepage from "../HomePage/Homepage";

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
        <Route path="/signin" element={<h1>signin</h1>} />
        <Route path="/tryharvestfree" element={<h1>tryharvestfree</h1>} />
      </Routes>
    </>
  );
};

export default MainRoutes;
