import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';


const ImageCarousel = () => {
  return (
    <div style={{width:"100%",zIndex:'-1',height:"100%",zIndex:"-1",backgroundColor:"black"}} id="Carousel-container">
    <Carousel >
      <Carousel.Item >
        <img style={{width:"100%",height:"600px"}}
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2024/06/18/04/33/travel-8836969_1280.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{color:'black',fontFamily:"fantasy",fontSize:"30px",backgroundColor:'white',width:'fit-content',borderRadius:"5px"}}>Exploe the World</h3>
          <p style={{color:'black',fontFamily:"fantasy",fontSize:"30px",backgroundColor:'white',width:'fit-content',borderRadius:"5px"}}>The world is on your hands ,Explore with us!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img style={{width:"100%",height:"600px"}}
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2019/10/19/12/21/hot-air-balloons-4561267_1280.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 style={{color:'black',fontFamily:"fantasy",fontSize:"30px",backgroundColor:'white',width:'fit-content',borderRadius:"5px"}}>Air Loons Travels</h3>
          <p style={{color:'black',fontFamily:"fantasy",fontSize:"30px",backgroundColor:'white',width:'fit-content',borderRadius:"5px"}}>Free Pack with combo packs with travel</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img style={{width:"100%",height:"600px"}}
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/07/30/08/13/moscow-1556561_1280.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 style={{color:'black',fontFamily:"fantasy",fontSize:"30px",backgroundColor:'white',width:'fit-content',borderRadius:"5px"}}>Russia travel</h3>
          <p style={{color:'black',fontFamily:"fantasy",fontSize:"30px",backgroundColor:'white',width:'fit-content',borderRadius:"5px"}}>The world is on your hands ,Explore with us!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img style={{width:"100%",height:"600px"}}
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/07/29/22/56/taj-mahal-866692_1280.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3 style={{color:'black',fontFamily:"fantasy",fontSize:"30px",backgroundColor:'white',width:'fit-content',borderRadius:"5px"}}>Exploe the India</h3>
          <p style={{color:'black',fontFamily:"fantasy",fontSize:"30px",backgroundColor:'white',width:'fit-content',borderRadius:"5px"}}>The world is on your hands ,Explore with us!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img  style={{width:"100%",height:"600px"}}
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2024/06/24/14/54/london-8850361_960_720.jpg"
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h3 style={{color:'black',fontFamily:"fantasy",fontSize:"30px",backgroundColor:'white',width:'fit-content',borderRadius:"5px"}}>London Bridge </h3>
          <p style={{color:'black',fontFamily:"fantasy",fontSize:"30px",backgroundColor:'white',width:'fit-content',borderRadius:"5px"}}>London Bridge explore for more details and packages</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img style={{width:"100%",height:"600px"}}
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/08/08/15/08/cruise-1578528_1280.jpg"
          alt="Sixth slide"
        />
        <Carousel.Caption>
          <h3 style={{color:'black',fontFamily:"fantasy",fontSize:"30px",backgroundColor:'white',width:'fit-content',borderRadius:"5px"}}>Big Cruize Rides</h3>
          <p style={{color:'black',fontFamily:"fantasy",fontSize:"30px",backgroundColor:'white',width:'fit-content',borderRadius:"5px"}}>The fantastic ride in the whole world</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default ImageCarousel;
