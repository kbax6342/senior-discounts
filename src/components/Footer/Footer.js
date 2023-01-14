import React, {useState} from 'react'

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaSearch } from "react-icons/fa";
import './Footer.css'

function Footer() {

    const [searchInput, setSearchInput] = useState("")

    const handleChange = (e) => {
        e.prevenDefault();
        setSearchInput(e.target.value)

        
    };
  
  return (
    <div className='footer'>
    
        <nav className='footer-nav'>
           <li> <Link>Privacy Policy</Link></li>
           <li><Link>Terms of Use</Link></li>
           <li><Link>Accessiblity</Link></li>
          
        </nav>
        <nav className='footer-nav'>
            <li><Link>Research</Link></li>
            <li><Link>Editorial Guidelines</Link></li>
            <li><Link>Our Editorial Team</Link></li>
            <li><Link>Expert Team</Link></li>
        </nav>
        <nav className='footer-nav'>
        <li><Link>About Us</Link></li>
        <li><Link>Contact Us</Link></li>
        <li><Link>Careers</Link></li>
        <li><Link>Press</Link></li>
        </nav>
        <div className='icon-nav'>
            <div className='icon-div'>
            <FaTwitter className='icon'/>
            </div>
            <div  className='icon-div'>
            <FaFacebookF className='icon' />
            </div>
            <div  className='icon-div'>
            <FaInstagram className='icon'/>
            </div>
            <div  className='icon-div'>
            <FaYoutube className='icon'/>
            </div>
            <br></br>
             {/* <input type="text"  placeholder={<FaSearch/> + `Search` } onChange={handleChange} value={searchInput} /> */}
        </div>

       
    </div>
  )
}

export default Footer