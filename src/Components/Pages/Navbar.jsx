import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SecondNavbar from "../SignPages/SecondNavbar";
// import harvestLogo from "../../utils/harvest-removebg-preview.png";

const Navbar = () => {

  const navigate = useNavigate();
 const [change,setChange] = useState(false)
const handleClick = ()=>{
  navigate("/signin")
 setChange(!change)
}


  return (
    <>
      {change? <SecondNavbar/> : <div className="nav-container">
        <div className="nav-left">
          <Link to="/">
            <img
              src="https://www.getharvest.com/hubfs/favicon-h-1.ico"
              alt="logo"
            />
          </Link>

          <Link className="link" to="/">
            <h2 style={{ color: "#FA5D00" }}>harvest</h2>
          </Link>
        </div>
        <hr className="left-vert-right"></hr>
        <div className="nav-middle">
          <ul>
            <NavLink className="link" to="/whyHarvest">
              <li>Why Harvest?</li>
            </NavLink>
            <NavLink className="link" to="/features">
              <li>Features</li>
            </NavLink>
            <NavLink className="link" to="/">
              <li>Customers</li>
            </NavLink>
            <NavLink className="link" to="/">
              <li>Integration</li>
            </NavLink>
            <NavLink className="link" to="/">
              <li to="/pricing">Pricing</li>
            </NavLink>
          </ul>
        </div>
        <div className="nav-right">
        {
          JSON.parse(localStorage.getItem("userName"))
          ? <h4>{JSON.parse(localStorage.getItem("userName"))}</h4> 
          // : <NavLink className="link" to="/signin">
            :<p onClick={handleClick}>Sign in</p>
          // </NavLink>
        }
          <NavLink className="link" to="/signin">
            <button className="nav_li_btn" >
              <h4>Try Harvest Free</h4>
            </button>
          </NavLink>
        </div>
      </div>}
    </>
  );
};

export default Navbar;
