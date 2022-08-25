import React from 'react'
import '../Styles/Whyharvest.css'
import {useNavigate} from 'react-router-dom'
const Whyharvest = () => {
    const nav = useNavigate();
   const routeTo = () =>{
    nav('/')

   }
   const browseFeature=()=>{
    nav('/')
   }
  return (
    <div className='harvest-mainContainer'>
     <div className='harvest-banner'>
     <div className='banner-hero-img'>
        <div className='text'>
        <h1>Help your team spend time wisely</h1>
        <h3>Harvest time tracking makes it easy to capture time, gain&nbsp;<br/> insights from past projects, and get paid for your work.</h3>
        <div className='btnn'>
        <button onClick={routeTo}>Try Harvest Free</button><p>Free 30-day trial. No credit card required.</p>
        </div>
        </div>
     </div>
     </div>
     <div className='middle-section'>
        {/* Empower Section */}
        <div className='empower-section'>
         <div className='empower-text'>
            <h1>Empower your team with insight</h1>
            <h3>By tracking time and expenses in Harvest, you capture critical project data that allows you to learn from the past, keep current projects on track, and better estimate future projects.</h3>
            <ul className="feature-checklist">
            <li className="listItem">Review past data to improve how you scope and price work</li>
            <li className="listItem">Understand which projects are profitable — and why</li>
            <li className="listItem">Know when to take on new business (or grow your team)</li>
          </ul>
          <button onClick={browseFeature}>Browse Features</button>
         </div>
         <div className='empower-image'>
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-reflect.svg" alt="empower-img" />
            <h3>"As a growing business, with Harvest we get a lot of insights and intelligence that we couldn’t get before."</h3>
            <h4>Ben Graham, Turnstyle</h4>
         </div>
        </div>
        {/* Time Tracker */}
        <div className='Timetrack-section'>
        <div className='Timetrack-img'>
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-keep.svg" alt="Timetrack-img" />
            <h3>"We needed something super simple because we don’t want to have to teach people how to use it as part of onboarding."</h3>
            <h4>Nick Frandsen, Dovetail</h4>
         </div>
         <div className='Timetrack-text'>
            <h1>Time tracking that works the way your team works</h1>
            <h3>Time tracking software is only useful if it’s actually used. That’s why we designed Harvest to be easy to adopt, integrated with your favorite apps, and flexible enough for all types of teams.</h3>
            <ul className="feature-checklist">
            <li className="listItem">Integrated with the tools your team already knows and loves</li>
            <li className="listItem">Track time wherever you work - desktop, browser, and mobile</li>
            <li className="listItem">Intuitive and easy to learn</li>
          </ul>
          <button onClick={browseFeature}>Browse Features</button>
         </div>
        
        </div>
        {/* Keep Projects On Track */}
        <div className='KeepTrack-section'>
         <div className='KeepTrack-text'>
            <h1>Keep your projects on track </h1>
            <h3>Harvest provides visibility into the key aspects of your projects—budget, team capacity, and costs—enabling you to keep everything on time and on budget.</h3>
            <ul className="feature-checklist">
            <li className="listItem">Review past data to improve how you scope and price work</li>
            <li className="listItem">Understand which projects are profitable — and why</li>
            <li className="listItem">Know when to take on new business (or grow your team)</li>
          </ul>
          <button onClick={browseFeature}>Browse Features</button>
         </div>
         <div className='KeepTrack-image'>
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-track.svg" alt="KeepTrack-img" />
            <h3>"We can see if a project is in danger of going off track and course-correct way before it actually becomes a problem."</h3>
            <h4>Michael Kucera, Zehner</h4>
         </div>
        </div>
        {/* Trusted section */}
        <div className='Timetrack-section'>
        <div className='Timetrack-img'>
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-invest.svg" alt="Timetrack-img" />
            <h3>"Harvest gives us feedback on how we’re doing so we can be competitive, make a profit, and keep ourselves afloat."</h3>
            <h4>John Wall, Public</h4>
         </div>
         <div className='Timetrack-text'>
            <h1>Trusted by thousands of teams worldwide</h1>
            <h3>We’ve been serving teams of all sizes, across all types of industries for over 15 years. Today, with more than 70,000 customers, you can be sure that Harvest will work for your team’s unique needs.</h3>
            <ul className="feature-checklist">
            <li className="listItem">Flexible timekeeping and invoicing, whether you bill by time or by project</li>
            <li className="listItem">Scalable one-product-fits-all approach, that can grow with your team</li>
            <li className="listItem">Used by companies of all types, from creative agencies to management consulting</li>
          </ul>
          <button onClick={browseFeature}>Browse Features</button>
         </div>
        </div>
        {/* partner banner */}
        <div className="Partner-banner">
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize" alt="partner" />
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize" alt="partner" />
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize" alt="partner" />
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize" alt="partner" />
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize" alt="partner" />
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-deloitte.svg?noresize" alt="partner" />
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-lululemon.svg?noresize" alt="partner" />
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-yale.svg?noresize" alt="partner" />
        </div>
     </div>
     <div className='bottom-section'>
         <div className='bottom-text'>
            <h1>Start tracking time today</h1>
            <h3>Join 70,000+ companies spending their time wisely with Harvest.</h3>
            
            <div className='btnn'>
        <button onClick={routeTo}>Try Harvest Free</button><p>Free 30-day trial. No credit card required.</p>
        </div>
         </div>
         <div className='bottom-img'>
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg" alt="bottom-img" />
         </div>
     </div>
     
    </div>
  )
}

export default Whyharvest;


