import React from 'react'

const Main = () => {
  return (
    <>
    <div className='main-container'>
        <div>
            <img src="delivery.png" alt="image"/> 
        </div>
        <div className='content-container'>
            <div className='content-title'>
                <h1>ASSIGNMENT</h1>
            </div>
            <div id='services' className='content-services'>
                <p>Our services-</p>
                <ul>
                    <li className='content-main'><span className="material-symbols-outlined">arrow_forward_ios</span>Domestic and international shipping options</li>
                    <li  className='content-main'><span className="material-symbols-outlined">arrow_forward_ios</span>Flexible delivery options to fit your schedule</li>
                    <li className='content-main'><span className="material-symbols-outlined">arrow_forward_ios</span>Affordable rates with no hidden fees</li>
                    <li className='content-main'><span className="material-symbols-outlined">arrow_forward_ios</span>Real-time tracking so you can always stay informed</li>             
                    <li  className='content-main'><span className="material-symbols-outlined">arrow_forward_ios</span>A user-friendly platform for easy ordering and management</li>
                </ul>
            </div>
        </div>
    </div>
        
        
    </>
  )
}

export default Main