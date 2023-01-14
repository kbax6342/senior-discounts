import React from 'react'
import './Header.css'
import bannerImage from '../../assets/banner-1.png'

function Header() {
  return (
    <div className="heading">
      <h1 className="text-5xl font-bold mulish text-left">
        Senior Discounts and Savings
      </h1>

      <p className='mulish text-left text-2xl mt-2'>Your Guide to Finding the Best Deals and Senior Discounts</p>
      <div className='time text-left text-2xl text-gray-500 mt-5 mb-3'>
       Updated: {new Date().toLocaleString() + ""}
      </div>
      <div>
        <image srr="" alt="" />
        <image src="" alt="" />
      </div>
      <div>
        <h1 className='mulish text-2xl text-left'>Website name is compensated when you click on the provider links listed on this page. This compensation does not impact our ratings or reviews.</h1>
      </div>
      <img src={bannerImage} alt="50 percent off sales" className='my-3'/>

      <div className="text-2xl mulish text-left my-4">
      Relish your golden years with savings! Many businesses offer exclusive discounts to customers over a specific age. You may be surprised that some senior discounts are offered long before you turn 65, as not all companies classify senior citizens in the same way. Ready to start saving on your favorite leisure activities, restaurants, grocery stores, and more? Our research team has compiled over 100 senior discounts to cash in on.
      </div>
    </div>
  )
}

export default Header
