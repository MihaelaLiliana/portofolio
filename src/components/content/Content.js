import React from "react";
import Home from "../../pages/home/Home";
import AboutMe from "../../pages/about me/AboutMe";
import MyOnlineCV from "../../pages/my-online-cv/MyOnlineCv";
import Hobbies from "../../pages/hobbies/Hobbies";
import "./Content.css"

function Content({ curentScreen, setCurentScreen }) {
    console.log(curentScreen);
    return (
      <div className="content">
        {curentScreen === "Home" ? (
          <Home setCurentScreen={setCurentScreen} />
        ) : null}
        {curentScreen === "About Me" ? <AboutMe/> : null}
        {curentScreen === "My Online CV" ? <MyOnlineCV /> : null}
        {curentScreen === "Hobbies" ? <Hobbies/> : null}
     
       
        
       
      </div>
    );
  }
  
  export default Content;