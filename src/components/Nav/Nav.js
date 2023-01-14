import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <nav className="">
                <ul className="flex w-full justify-around">
                    <li><Link to={'/'} className=""> Home </Link></li>
                    <li><Link to={'#contact'} className="">Contact</Link></li>
                    <li><Link to={'#about'} className="">About</Link></li>
                </ul>
            </nav>
        </div>
    )
}
