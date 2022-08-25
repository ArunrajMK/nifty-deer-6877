import React, { useState } from "react";
import {  Link, useNavigate } from "react-router-dom";

const Signin = () => {

  const [data, setData] = useState("");

  const navigate = useNavigate();

  console.log(data)

  const handleClick=(e)=>{
    localStorage.setItem("userName", JSON.stringify(data));
    // window.location.reload();
    navigate("/")
  }


  return (
    <div style={{ display: "flex" }}>
      <img src="https://www.getharvest.com/hubfs/favicon-h-1.ico" alt="logo" />
      <h2 style={{ color: "#FA5D00" }}>harvest</h2>
      <input onChange={(e)=>{
        setData(e.target.value)
        
      }} type="text" placeholder="Enter Username" />
      <input type="password" placeholder="Enter password" />
      <button onClick={handleClick}>SIGNIN</button>
      
    </div>
  );
};

export default Signin;
