import React from 'react'
import './Section1.css'

export default function Section1() {
    return (
        <>
        <h1 id="retail-senior"  className='font-bold text-4xl text-center'>Retail Discounts</h1>
          <table class="GeneratedTable  mulish my-5">
            <thead className=''>
                <tr className='bg-sky-300 text-white '>
                    <th className='p-4'>Retailer</th>
                    <th>Discount</th>
                    <th>In-Store or online</th>
                    <th>Eligibility</th>
                    <th className='p-4'>Discount availability</th>
                </tr>
            </thead>
            <tbody>
                <tr className=''>
                    <td >Amazon Prime</td>
                    <td>50% off Prime membership</td>
                    <td>Online</td>
                    <td>Must be a qualifying government assistance recipient, including SSI and SNAP</td>
                    <td>EveryDay</td>

                </tr>
                <tr className='bg-gray-200'>
                    <td >Bealls Coast2Coast Rewards</td>
                    <td>10% off your purchase</td>
                    <td>In-store</td>
                    <td>No age requirement</td>
                    <td>Every day</td>
                </tr>
                <tr>
                    <td >Big Lots Big Rewards</td>
                    <td>Cash-back rewards, VIP shopping day discounts, and a birthday surprise</td>
                    <td>In-store or Online</td>
                    <td>Must create a Big Lots account</td>
                    <td>Every Day</td>
                </tr>
                <tr className='bg-gray-200'>
                    <td >CVS Veterans Advantage</td>
                    <td>20% off your purchase</td>
                    <td>Online</td>
                    <td>VetRewards member</td>
                    <td>Every Day</td>
                </tr>
                <tr>
                    <td >CVS ExtraCare</td>
                    <td>Earn 2% back in ExtraBucks Rewards every time you use your ExtraCare card</td>
                    <td>In-store or online</td>
                    <td>CVS ExtraCare card member</td>
                    <td>Every Day</td>
                </tr>
            </tbody>
        </table>
        </>

      
    )
}
