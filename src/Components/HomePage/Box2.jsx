import React from "react";

const Box2 = () => {
  return (
    <div style={{height:"700px" ,  border : "2px solid orange", width:"99.9%" , }}>
      <div className="upperDiv">
        <h3 style={{ color: "#FA5D00", marginTop: "20px" ,  marginLeft: "15px" }}>FEATURES</h3>
        <h1 style={{ marginTop: "20px" ,  marginLeft: "20px" }}>
          Everything you need to keep your team ticking
        </h1>
        <h2 style={{ marginTop: "20px" , color : "#FA5D00" ,  marginLeft: "25px" }}>
          Time tracking software that helps you keep time and get insights.
        </h2>
      </div>
      <div className="bottomDiv" style={{display:"flex" , margin:"auto" , justifyContent:"center" , marginTop:"20px"}}>
        <div className="leftDiv"  style={{width:"20%" , display:"flex",flexDirection:"column"}} >
          <div className="first" style={{border:"1px solid #FA5D00", borderRadius:"10px" , marginRight:"20px", marginTop:"10px"}}>
            <div className="imginside">
              <img
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-time.svg"
                alt="logo"
              />
            </div>
            <div>
              <h4>Time tracking</h4>
              <p>Simple and intutive time tracking your team will love.</p>
            </div>
          </div>
          <div className="second" style={{border:"1px solid #FA5D00", borderRadius:"10px" , marginRight:"20px", marginTop:"10px"}}>
            <div className="imginside">
              <img
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-reporting.svg"
                alt="logo"
              />
            </div>
            <div>
              <h4>Report & Analysis</h4>
              <p>Simple and intutive time tracking your team will love.</p>
            </div>
          </div>
          <div className="third" style={{border:"1px solid #FA5D00", borderRadius:"10px" , marginRight:"20px" , marginTop:"10px"}}>
            <div className="imginside">
              <img
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-time.svg"
                alt="logo"
              />
            </div>
            <div>
              <h4>Invoicing & Payment</h4>
              <p>Simple and intutive time tracking your team will love.</p>
            </div>
          </div>
        </div>
        <div className="rightDiv"  style={{width:"70%"}}>
          <img style={{width:"100%",height:"90%" }}
            src="https://www.getharvest.com/hs-fs/hubfs/screenshot-home-timesheets.png?width=1700&name=screenshot-home-timesheets.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Box2;
