import React from 'react';
import Navbar from "./Navbar";
import { SocialIcon } from 'react-social-icons';


function Contact () {
    return (
            <div>
               
               <h4>Please reach out! I would love to hear from you.</h4>
                <SocialIcon url="https://www.linkedin.com/in/henry-parras-a98368209/" />
                <SocialIcon url="https://github.com/henryparras24" />
                <SocialIcon url="mailto: henry.parras@yahoo.com" />
            </div>
        )
    
}

export default Contact;