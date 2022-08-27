import React from "react";
import footerMod from "./footer.module.css";

const Footer = () => {
  return (
    <div className={footerMod.outerfooter}>
      <div className={footerMod.innerfooter}>
        <div className="first">
          <h1>
            {" "}
            <span>
              <img
                className="image"
                src="https://www.getharvest.com/hubfs/favicon-h-1.ico"
                alt="logo"
              />
            </span>{" "}
            harvest
          </h1>
        </div>
        <div className="second">
          <h2>Harvest</h2>
          <ul>
            <li>Home</li>
            <li>Why Harvest</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Integrations</li>
            <li>Apps</li>
            <li>Security</li>
          </ul>
        </div>
        <div className="third">
          <h2>Community</h2>
          <ul>
            <li>Customer stories</li>
            <li>Resources</li>
            <li>Webinars</li>
            <li>Help & support</li>
            <li>Integrate with Harvest</li>
            <li>Time Well Spent</li>
            <li>Time in This Time</li>
          </ul>
        </div>
        <div className="fourth">
          <h2>Company</h2>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Pricing</li>
            <li>Legal</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
      <input
        type="text"
        value="We also make : Harvest Forecast - the fast and simple way to schedule your team across "
      />

      <div className={footerMod.footerBottom}>
        <div >
          <h2>© 2006-2022 Harvest</h2>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
