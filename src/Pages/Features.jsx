import React from 'react'
import '../Styles/Features.css'
import {useNavigate} from 'react-router-dom'
const Features = () => {
    const nav = useNavigate()
    const routeTo=()=>{
        nav('/')
    }
  return (
    <div className='feature-mainContainer'>
        <div className='AutoScroll'>
            {/* Scroll Items */}
            <div className='scrollTags'>
                <div className='scroll-items'>
                  <h1>Everything your team needs to keep ticking</h1>
                  <h3>Intuitive time tracking and powerful insights that help your team thrive.</h3>
                    <div className='tags'>
                       <div className='tag-item'>
                        <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-time.svg" alt="Time-tracking" width="50px"/>
                        <h2>Time tracking</h2>
                        <img width="24" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/arrow-down-24.svg" alt="" className="arrow-icon"></img>
                        </div>
                        <div className='tag-item'>
                        <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-report.svg" alt="Time-tracking" width="50px"/>
                        <h2>Reports & analysis</h2>
                        <img width="24" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/arrow-down-24.svg" alt="" className="arrow-icon"></img>
                     </div>
                     <div className='tag-item'>
                        <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-invoice.svg" alt="Time-tracking" width="50px"/>
                        <h2>Invoicing & payments</h2>
                        <img width="24" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/arrow-down-24.svg" alt="" className="arrow-icon"></img>
                      </div>
                    </div> 

                  </div>
                </div>
                {/* Items-Section */}
                 <div className='items'>
                    {/* Timetracking */}
                   <div className="timetracking">
                    <div className='timetrack-flex'>
                        <div>
                            <h1>Time tracking </h1>
                            <h3>
                            An intuitive, lightweight time tracking experience that’s easy to adopt and use every day.
                            </h3>
                            <button onClick={routeTo}>Try Harvest Free</button>
                        </div>
                        <div>
                          <img src="https://www.getharvest.com/hs-fs/hubfs/screenshot-features-timesheets.png?width=787&name=screenshot-features-timesheets.png" alt="screenshot"/>
                        </div>
                    </div>
                    <div className='banner-flex'>
                    <div className='banner-flexitems'>
                      <div>
                        <img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-stopwatch.svg' alt='banner-items' />
                        <h3>Track time from browser, desktop, and mobile</h3>
                      </div>
                      <h2>Make it as easy as possible for your team to capture their time with dedicated apps across devices.</h2>
                    </div>
                    <div className='banner-flexitems'>
                    <div>
                        <img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-integrations.svg' alt='banner-items' />
                        <h3>Integrated with your workflow</h3>
                      </div>
                      <h2>Harvest integrates with the tools your team knows and loves — capture time the way your team already works.</h2>
                    </div>
                    <div className='banner-flexitems'>
                    <div>
                        <img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-reminder.svg' alt='banner-items' />
                        <h3>Custom reminders for consistent time tracking</h3>
                      </div>
                      <h2>Create automated reminders to help your team track time regularly and accurately.</h2>
                    </div>
                    </div>
                 {/* banner Genevieve */}
                     <div className='quote-banner'>
                      <img src='https://www.getharvest.com/hs-fs/hubfs/site-images/features-quote-1.jpg?width=375&name=features-quote-1.jpg' alt='genevieve-quote' />
                      <div>
                        <h1><strong>"</strong> Harvest’s easy, clean time tracking allows us to focus on the tough engineering problems where we bring value to our clients.<strong>"</strong></h1>
                        <strong><h3>Genevieve Laing</h3></strong>
                        <p>Director of Engineering, Cooper Perkins</p>
                      </div>
                     </div> {/* //quote-banner end */}
                     {/* Report & analysis */}
                     <div className='reportsection'>
                      
                     </div> {/* Report & analysis section end */}

                    </div> {/* Items end */}
                     
                 </div>  {/* scroll Tag Ending */}
                 
            </div>
    </div>
  )
}

export default Features