import React from 'react'
import { Link } from "react-router-dom";
// import "./Navbar.css";

function Navbar() {
    
    return (
        <div className="navbar">
            <ul>
                <li className="links">
                    <Link to="/" >
                            Home
                    </Link>
                </li>
                <li className="links">
                    <Link to="/projects" >
                            Projects
                    </Link>
                </li>
                <li className="links">
                    <Link to="/contact" >
                            Contact 
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
