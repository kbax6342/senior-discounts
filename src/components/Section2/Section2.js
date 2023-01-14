import React from 'react'

export default function Section2() {
  return (
    <>
      <h1 id="grocery-store" className='font-bold text-4xl text-center'>Grocery Discounts</h1>
         <table  class="GeneratedTable  mulish my-5">
  <thead className=''>
    <tr className='bg-sky-300 text-white '>
      <th className='p-4'>Grocery</th>
      <th>Discount</th>  
      <th>Eligibility</th>
      <th className='p-4'>Discount availability</th>
    </tr>
  </thead>
  <tbody>
    <tr className=''>
      <td >ACME Markets</td>
      <td>Savings each week in coupons and deals; earn points, and redeem rewards for discounts on gas or groceries	</td>
      <td>just for U reward card member</td>
      <td>Every day</td>
  
    </tr>
    <tr className='bg-gray-200'>
    <td >Albertsons</td>
      <td>Savings each week in coupons and deals; earn points, and redeem rewards for discounts on gas or groceries	</td>
      <td>just for U reward card member</td>
      <td>Every day</td>
    </tr>
    <tr>
    <td >Food Lion</td>
      <td>Receive personalized savings and ways to earn rewards each month</td>
      <td>Shop & Earn MVP Monthly Rewards card member</td>
      <td>Every Day</td>
    </tr>
    <tr  className='bg-gray-200'>
    <td >Fred Meyer</td>
      <td>Save 10% on select items</td>
      <td>55+ years</td>
      <td>	First Tuesday of the month</td>
    </tr>
    <tr>
    <td >Harris Teeter</td>
      <td>Save 5% on your purchase</td>
      <td>60+ years</td>
      <td>Every Thursday</td>
    </tr>
  </tbody>
</table>  
    </>
  )
}
