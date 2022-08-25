import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
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
    <div style={{margin:"auto", width:"30%", marginTop:"40px"}}>
      <div style={{display:"flex",width:"30%", margin:"auto"}}>
      <img src="https://www.getharvest.com/hubfs/favicon-h-1.ico" alt="logo" />
      <h2 style={{ color: "#FA5D00" }}>harvest</h2>
      </div>
      <br/>
       <h2 style={{textAlign:"center"}}>Sign in to Harvest ID</h2>
      <div  style={{padding:"20px 10px 40px 10px", backgroundColor:"#fff8f1",border:"1px solid #ffa26c"}}>
      <button
         style={{
          textAlign:"center",
          width:"80%",
          margin:"auto",
          padding:"0.25rem",
          borderRadius:"4px",
          marginTop:"6px",
          backgroundColor:"white"
        }}
      >Sign in with Google</button>
      <input 
       style={{
        textAlign:"left",
        width:"80%",
        margin:"auto",
        padding:"0.25rem",
        borderRadius:"4px",
        marginTop:"6px",
      }}
      onChange={(e)=>{
        setData(e.target.value) 
        
      }} type="text" placeholder="Work Email" />
      <br/>
      <input 
      style={{
        textAlign:"left",
        width:"80%",
        margin:"auto",
        padding:"0.25rem",
        borderRadius:"4px",
        marginTop:"10px"
      }}
      type="password" placeholder="Password" />
      <button 
      style={{
        backgroundColor: "#76bc82",
        border:"#76bc82",
        color:"white",
        textAlign:"center",
        width:"80%",
        margin:"auto",
        padding:"0.25rem",
        borderRadius:"8px",
        marginTop:"10px"
      }}
      onClick={handleClick}>Sign in</button>
      </div>
      
    </div>
  );
};

export default Signin;



