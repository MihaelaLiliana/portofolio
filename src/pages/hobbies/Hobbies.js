import React from 'react';
import ImgCof from "../../img/hobbie1.png";
import ImgBooks from "../../img/hobbie2.png";
import ImgCooking from "../../img/hobbie3.png";
import "./Hobbies.css"


function Hobbies() {
    return (
        <div className="hobbies-content">
            
<div className="hobbies-photo">
    <div><img className="imgH"src={ImgCof} alt=""/></div>
    
    <div><img className="imgH"src={ImgBooks} alt=""/></div>
    
    <div><img className="imgH"src={ImgCooking} alt=""/></div>
</div>
<div  className="hobbie-description">
    <div>COFFEE</div>
    <div>I'm a big coffee lover. I like to try a variety of types of coffee. When it comes to going out for coffee it's more than that. We go out to interact, tell stories and share new experiences with friends.</div>
    <div>BOOKS</div>
    <div>I like to read psychology books.
Reading psychology books we realize that we are all to some extent psychologists. We realize that we do psychology when we talk to another person, when we make a decision for ourselves or for others.</div>
    <div>COOKING</div>
    <div>I like to cook desserts. I like to do this even if I am an amateur. I think it's never too late to perfect myself.</div>
</div>
<div className="links">
    <div className="hobbie-item"><p>MY FAVOURITE BOOKS</p>
    <div>-"Flori pentru Algernon" de Daniel Keyes</div>
    <div>-"Intelepciunea psihopatilor" de Kevin Dutton</div>
    <div>-"Omul si simbolurile sale" C. G. Jung</div>
    <div>-"Robotii" de Asimov</div>
    <div>-"Elias si spioana carturarilor" de Sabaa Tahir</div>
    <div>-"Gandire rapida, gandire lenta" de Daniel Kahneman</div>
    
    </div>
   
</div>
 



</div>
    )
}

export default Hobbies;