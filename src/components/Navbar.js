import React from 'react'
import { Link } from "react-router-dom";
// import "./Navbar.css";
// import { Button } from './Button.js';


function Navbar() {
    
    return (
        <>
            <nav className="navbar">
                
                <ul >
                    <li className="nav-item">
                        <Link to="/" className="nav-links" >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-links" >
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links-mobile" >
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
