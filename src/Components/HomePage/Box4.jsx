import React from 'react'
import module from "./box4.module.css"

const Box4 = () => {
  return (
    <>
     <div className={module.box4bottomSection}>
         <div className='bottom-text'>
            <h1>Start tracking time today</h1>
            <h3>Join 70,000+ companies spending their time wisely with Harvest.</h3>
            
            <div className={module.btnn}>
        <button >Try Harvest Free</button><p>Free 30-day trial. No credit card required.</p>
        </div>
         </div>
         <div >
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg" alt="bottom-img" />
         </div>
     </div>
     
      
    </>
  )
}

export default Box4
