import React from 'react'
import ImgMe from "../../img/me.jpg";
import "./AboutMe.css"




function AboutMe() {
    return (
        <div className="about-me-content">
            <div className="photo-container">
            <div className="div-photo"><img  className="my-photo" src={ImgMe} alt=""/></div>
            
            </div>
            
            
            <div className="about">
            <div><p>Hi, I’m Mihaela,</p></div>
            <div><p>I am 21 years old, I live in Brasov which is a quiet and beautiful place.</p></div>
            <div><p>I am a beginner in the front-end world. 
 I want to learn as much as possible and be able to create beautiful things for users.</p></div>
            
            <div><p>A few facts about myself:
I like coffee, cats and nature. I like to read, especially psychology. I also like cooking.</p></div>
            </div>
            

            
        </div>
    )
}

export default AboutMe