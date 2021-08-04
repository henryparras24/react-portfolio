import React from 'react'
import { Link } from "react-router-dom";
// import { Image } from "react-router-dom";


function Footer() {

    return(
        <div className="foot">
            <a href="">&copy; Copyright 2021, HenryParras</a>
            <ul >
                {/* <li className="links">
                    <Link to="https://www.linkedin.com/in/henry-parras-a98368209/">
                    <Image src="linkedin.png"/>
                    </Link>
                </li> */}
                {/* <li className="links">
                    <Link to="https://github.com/henryparras24">
                    <Image src="github.jpeg"/>
                    </Link>
                </li> */}
                {/* <li className="links">
                    <Link to="mailto: henry.parras@yahoo.com" className="nav-links-mobile" >
                    <Image src="Email.png" className="emailIcon" />
                    </Link>
                </li> */}
            </ul>
        </div>


    );

    }    

export default Footer;

