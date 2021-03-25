import React, {useState} from "react";
import HeaderNavBar from "./components/nav-bar/HeaderNavBar";
import GitHub from "./components/footer/GitHub";
import LinkedIn from "./components/footer/LinkedIn";
import Facebook from "./components/footer/Facebook";
import Content from "./components/content/Content";





function App() {
  const [curentScreen, setCurentScreen] = useState("Home");
  const screens = [
    "Home",
    "About Me",
    "My Online CV",
    "Hobbies",

   
  ];
  return (
    <div>
      <div className="header">
      
        <div className="logo">Mihaela Liliana</div>
        
        <div className="navbar">
       
        <div className="navbar">
       
        {screens.map((item, index) => {
              return (
                <HeaderNavBar
                  key={index}
                  title={item}
                  curentScreen={curentScreen}
                  setCurentScreen={setCurentScreen}
                ></HeaderNavBar>
              );
            })}
        </div>
      </div>
        
        
      </div>
      
      <div className="content">
      
      
      <Content
        curentScreen={curentScreen}
        setCurentScreen={setCurentScreen}
      ></Content>
       
  
     
      </div>
      <div className="footer">
        <div className="git">
          <GitHub/>
        </div>
        <div className="in">
          <LinkedIn/>
        </div>
        <div className="facebook">
          <Facebook/>
        </div>
      </div>
    </div>
         
  )

      

     

    
    
  
  
}


export default App;