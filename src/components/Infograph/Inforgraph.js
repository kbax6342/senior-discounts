import React from 'react'
import { FaBullhorn } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Infograph.css'

export default function Inforgraph() {
  return (
    <div id="info" className='infograph flex w-full bg-gray-200 justify-between w-[75%] mx-auto my-5'>
      <div className='bg-[#bee599] flex justify-center h-[45px] ml-5'>
        <FaBullhorn className='text-5xl p-3 '> <span className='icn'></span></FaBullhorn>
      </div>


      <div className='max-w-full mulish py-3 px-2'>
        <span className='font-bold mulish'>Did You Know: </span>
        Savings.com is a terrific resource to snag thousands of coupon<a href="https://www.savings.com/coupons/food-and-beverage" target="_blank" className='text-cyan-400'>food and restaurant coupons</a> to <a href="https://www.savings.com/coupons/apparel-and-accessories" target="_blank" className='text-cyan-400'>clothing</a> and
        <a href="https://www.savings.com/coupons/health-and-medicine" target="_blank" className='text-cyan-400'>health and medicine </a>      
         coupons (and everything in between), Savings.com has savvy shoppers covered!
      </div>
    </div>
  )
}
