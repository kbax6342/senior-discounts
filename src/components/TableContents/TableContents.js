import React from 'react'
import { FaArrowDown} from 'react-icons/fa'
import {Link} from 'react-router-dom'

import './TableContents.css'

function TableContents() {
  return (
    <>
    <h2 className='header p-5 text-left font-bold text-3xl'>Table of Contents</h2>
    <ul>
        <li className='mulish font-bold flex text-2xl'> <a href="#retail-senior" className='flex self-center'><FaArrowDown className='mr-2'/> Retail Senior Discount</a> </li>
        <li className='mulish font-bold flex text-2xl' > <a href="#grocery-store" className='flex self-center'><FaArrowDown  className='mr-2'/>Grocery Senior Discounts</a></li>
        <li className='mulish font-bold flex text-2xl'> <Link to="#senior-discount" className='flex self-center'><FaArrowDown  className='mr-2'/>Restaurant Senior Discounts</Link></li>
        <li className='mulish font-bold flex text-2xl'> <Link to="#senior-discount" className='flex self-center'> <FaArrowDown  className='mr-2'/>Leisure Activity Senior Discounts</Link></li>
        <li className='mulish font-bold flex text-2xl' > <Link to="#senior-discount" className='flex self-center'><FaArrowDown className='mr-2'/>Cruises Senior Discounts</Link></li>
        <li className='mulish font-bold flex text-2xl'> <Link to="#senior-discount" className='flex self-center'><FaArrowDown className='mr-2'/>Hotel and Rental Car Senior Discounts</Link></li>
        <li className='mulish font-bold flex text-2xl'> <Link to="#senior-discount" className='flex self-center'><FaArrowDown className='mr-2'/>Air, Bus, and Rail Senior Discounts</Link></li>
        <li className='mulish font-bold flex text-2xl'> <Link to="#senior-discount" className='flex self-center'><FaArrowDown className='mr-2'/>Internet Service and Communications Senior Discounts</Link></li>
        <li className='mulish font-bold flex text-2xl'> <Link to="#senior-discount" className='flex self-center'><FaArrowDown className='mr-2'/>Major Life Expenses Senior Discounts</Link></li>
    </ul>

   
    </>
  )
}

export default TableContents