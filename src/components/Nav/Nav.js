import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./Nav.css"

export default function Nav() {
    return (
        <div className='nav mb-5'>
            <nav className="">
                <ul className="flex w-full justify-around">
                    <li><Link to={'/'} className="li p-3 rounded text-2xl"> Home </Link></li>
                    <li><Link to={'/contact'} className="li p-3 rounded text-2xl">Contact</Link></li>
                    <li><Link to={'/about'} className="li p-3 rounded text-2xl">About</Link></li>
                </ul>
            </nav>
        </div>
    )
}
