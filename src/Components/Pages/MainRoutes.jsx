import React from "react";
import { Routes, Route } from "react-router-dom";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/whyHarvest" element={<h1>whyHarvest</h1>} />
        <Route path="/features" element={<h1>features</h1>} />
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
