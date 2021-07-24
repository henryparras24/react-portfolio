import React from 'react';
import Navbar from "./Navbar";
import henrypic from '../images/henrypic.jpg';

function Home () {
    return (
        <div>
            <img src={henrypic} className="henry"/>
            <h4>Hi! My name is Henry Parras. I am an aspiring web developer. As a coding bootcamp student
                 I am working hard to develop skills in fullstack web development. My passions inlcude
                 fitness, piano, and technology!
                </h4>
        </div>
    )
    
}

export default Home;