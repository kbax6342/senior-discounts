import React from 'react'
import "./AARP.css"

const AARP = () => {
    let url = "https://www.aarp.org/membership/benefits/all-offers-a-z/"

    
  return (
    <div>
      <img></img>
      <p className='left'>Our discount list wouldn't be complete without diving deeper into the benefits of AARP, the leading senior savings program. From vehicle and property insurance to hearing, optical, and pharmacy savings, AARP's membership helps 
       <a target="_blank" href={url}> save on major expenses.</a> </p>
       <h3>AARP Health and Wellness Senior Discounts</h3>
       <ui  className='left'>
        <li>CareLinx In-Home Care</li>
        <li>Health savings account offered by Optum Bank</li>
        <li>Hearing care program provided by HearUSA</li>
        <li>HearUSA Hearing Shop</li>
        <li>Kroger Co. Pharmacy</li>
        <li>LensCrafters</li>
        <li>MyVision Care provided through EyeMed</li>
        <li>Prescription discounts provided by OptumRx</li>
        <li>Short-term care insurance from Medico</li>
        <li>Target Optical</li>
        <li>Vision discounts provided by EyeMed</li>
        <li>Walgreens Pharmacy</li>
        <li>Walmart Pharmacy</li>
       </ui>
    </div>
  )
}

export default AARP
