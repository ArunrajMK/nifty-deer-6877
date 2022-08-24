import React from "react";
import { Link, NavLink } from "react-router-dom";
import harvestLogo from "../../utils/harvest-removebg-preview.png";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
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
            <NavLink className="link" to="/customers">
              <li>Customers</li>
            </NavLink>
            <NavLink className="link" to="/integration">
              <li>Integration</li>
            </NavLink>
            <NavLink className="link" to="/pricing">
              <li to="/pricing">Pricing</li>
            </NavLink>
          </ul>
        </div>
        <div className="nav-right">
          <NavLink className="link" to="/signin">
            <p>Sign in</p>
          </NavLink>
          <NavLink className="link" to="/tryharvestfree">
            <button className="nav-li-btn">
              <h4>Try Harvest Free</h4>
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
