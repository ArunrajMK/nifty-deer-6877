import React, { useRef } from 'react'
import '../Styles/Features.css'
import {useNavigate} from 'react-router-dom'
const Features = () => {
    const nav = useNavigate()
    const timeRef=useRef(null)
  const reportRef = useRef(null)
  const invoiceRef = useRef(null)
    const routeTo=()=>{
       nav('/')
    }
    const handleScroll=(ref)=>{
      window.scrollTo({
        top: ref.offsetTop,
        left: 0,
        behavior: 'smooth'
       })
    }
  return (
    <>
    <div className='feature-mainContainer'>
        <div className='AutoScroll'>
            {/* Scroll Items */}
            <div className='scrollTags'>
                <div className='scroll-items'>
                  <h1>Everything your team needs to keep ticking</h1>
                  <h3>Intuitive time tracking and powerful insights that help your team thrive.</h3>
                    <div className='tags'>
                       <div className='tag-item' onClick={()=>handleScroll(timeRef.current)}>
                        <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-time.svg" alt="Time-tracking" width="50px"/>
                        <h2>Time tracking</h2>
                        <img width="24" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/arrow-down-24.svg" alt="" className="arrow-icon"></img>
                        </div>
                        <div className='tag-item' onClick={()=>handleScroll(reportRef.current)}>
                        <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-report.svg" alt="Time-tracking" width="50px"/>
                        <h2>Reports & analysis</h2>
                        <img width="24" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/arrow-down-24.svg" alt="" className="arrow-icon"></img>
                     </div>
                     <div className='tag-item' onClick={()=>handleScroll(invoiceRef.current)}>
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
                   <div ref={timeRef} className="timetracking">
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
                     <div ref={reportRef} className='report_section'>
                       <div className="report_flexbox">
                        <div>
                        <h1>Report & Analysis</h1>
                            <h3>
                            A wide selection of visual reports keep projects running smoothly and your team supported.Start your free trial
                            </h3>
                            <button onClick={routeTo}>Start your free trial</button>
                        </div>
                        <div>
                          <img src='https://www.getharvest.com/hs-fs/hubfs/screenshot-features-projects.png?width=787&name=screenshot-features-projects.png' alt='report_section' />
                        </div>
                       </div>
                         {/* banner-flex items */}
                         <div className='report_flex'>
                    <div className='report_flexitems'>
                      <div>
                        <img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-budget.svg' alt='report_items' />
                        <h3>Keep budgets on target</h3>
                      </div>
                      <h2>Harvest updates budgets as your team tracks time, so you can keep your projects on track and profitable.</h2>
                    </div>
                    <div className='report_flexitems'>
                    <div>
                        <img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-capacity.svg' alt='banner-items' />
                        <h3>Visualize team capacity</h3>
                      </div>
                      <h2>See who’s overworked and who’s under-utilized at a glance with capacity reporting.</h2>
                    </div>
                    <div className='report_flexitems'>
                      <div>
                        <img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-costs.svg' alt='banner-items' />
                        <h3>Understand costs</h3>
                      </div>
                      <h2>Keep track of internal costs and review past project data to inform future project scope and estimates.</h2>
                    </div>
                    {/* 2nd row */}
                    <div className='report_flexitems'>
                      <div>
                        <img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-costs.svg' alt='banner-items' />
                        <h3>Understand costs</h3>
                      </div>
                      <h2>Keep track of internal costs and review past project data to inform future project scope and estimates.</h2>
                    </div>
                    <div className='report_flexitems'>
                      <div>
                        <img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-costs.svg' alt='banner-items' />
                        <h3>Understand costs</h3>
                      </div>
                      <h2>Keep track of internal costs and review past project data to inform future project scope and estimates.</h2>
                    </div>
                    <div className='report_flexitems'>
                      <div>
                        <img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-costs.svg' alt='banner-items' />
                        <h3>Understand costs</h3>
                      </div>
                      <h2>Keep track of internal costs and review past project data to inform future project scope and estimates.</h2>
                    </div>
                    </div>
                     </div> {/* Report & analysis section end */}
                     {/* banner Noah */}
                     <div className='quote-banner'>
                      <img src='https://www.getharvest.com/hs-fs/hubfs/site-images/features-quote-2.jpg?width=375&name=features-quote-2.jpg' alt='genevieve-quote' />
                      <div>
                        <h1><strong>"</strong>We really focus on work-life balance in remote work… Time tracking reveals if somebody is overburdened and that becomes an immediate conversation.<strong>"</strong></h1>
                        <strong><h3>Noah Gedrich</h3></strong>
                        <p>CTO, Zehner</p>
                      </div>
                     </div> {/* //quote-banner end */}

                     {/* Invoicing & payments */}
                     <div ref={invoiceRef} className='report_section' style={{
                      border:"none"
                     }}>
                       <div className="report_flexbox">
                        <div>
                        <h1>Invoicing & payments</h1>
                            <h3>
                            Turn your team’s tracked time and expenses into invoices and collect payment quickly with integrated online payments.
                            </h3>
                            <button onClick={routeTo}>Start your free trial</button>
                        </div>
                        <div>
                          <img src='https://www.getharvest.com/hs-fs/hubfs/screenshot-features-invoices-1.png?width=787&name=screenshot-features-invoices-1.png' alt='report_section' />
                        </div>
                       </div>
                         {/* banner-flex items */}
                         <div className='report_flex'>
                    <div className='report_flexitems'>
                      <div>
                        <img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-invoice.svg' alt='report_items' />
                        <h3>Streamline your invoicing</h3>
                      </div>
                      <h2>Easily create and send accurate invoices using your team’s time and expenses already tracked in Harvest.</h2>
                    </div>
                    <div className='report_flexitems'>
                    <div>
                        <img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-payments.svg' alt='banner-items' />
                        <h3>Get paid fast with online payments</h3>
                      </div>
                      <h2>PayPal and Stripe integrations let your clients quickly and conveniently pay invoices online.</h2>
                    </div>
                    <div className='report_flexitems'>
                      <div>
                        <img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-books.svg' alt='banner-items' />
                        <h3>Keep your books up to date</h3>
                      </div>
                      <h2>Automatically copy your Harvest invoices and payments to QuickBooks Online or Xero for simplified accounting.</h2>
                    </div>
                    </div>
                     </div>
                    </div> {/* Items end */}
                    
                 </div>  {/* scroll Tag Ending */}
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
    </>
  )
}

export default Features