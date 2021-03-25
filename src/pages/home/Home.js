import React from 'react';
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css'
import ImgCoffee from "../../img/coffee.png";
import ImgPlants from "../../img/plants.png";
import ImgPC from "../../img/pc.png";
import "./Home.css"


function Home() {
    return (
      <div className="home-content">
        <div className="carousel">
      <CarouselProvider
        naturalSlideWidth={120}
        naturalSlideHeight={40}
        totalSlides={3}
        isPlaying={true}
        interval={2000}
      >
        <Slider className="slider">
          <Slide index={0}><img className="coffee-img" src={ImgCoffee} alt=""/></Slide>
          <Slide index={1}><img className="plants-img" src={ImgPlants} alt=""/></Slide>
          <Slide index={2}><img className="pc-img" src={ImgPC} alt=""/></Slide>
        </Slider>
      </CarouselProvider>
      </div>
      
      <div className="welcome">
        <p><i>Welcome to my blog!</i> </p>
        <p><i>Here I will share with you a part of myself...</i> </p>
        
      
      </div>
      
      
   
      </div>
    
   
        
      
    )
}

export default Home;