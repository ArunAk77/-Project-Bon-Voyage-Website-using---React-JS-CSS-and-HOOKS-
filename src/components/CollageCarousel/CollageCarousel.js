import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import './CollageCarousel.css';


const StyledCarouselItem = styled(Carousel.Item)`
  img {
    width: 100%;
    height: auto;
    transition: transform 0.5s ease, opacity 0.5s ease;
    &:hover {
      transform: scale(1.1);
      opacity: 0.4;
    }
  }
`;

const CollageCarousel = () => {
  return (
    <div className='row container-caro'>
        <div className='col-6 colum1'>
  <div id='container-Collage' style={{zIndex:'-1'}}>
    <Carousel fade={true} interval={3000}>
      <StyledCarouselItem>
        <img style={{width:"100%",height:"600px"}}
          className="d-block w-100"
          src="https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?cs=srgb&dl=pexels-vince-2265876.jpg&fm=jpg"
          alt="First slide"
        />
              </StyledCarouselItem>
      <StyledCarouselItem>
        <img style={{width:"100%",height:"600px"}}
          className="d-block w-100"
          src="https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?cs=srgb&dl=pexels-josh-hild-1270765-2422259.jpg&fm=jpg"
          alt="Second slide"
        />
      </StyledCarouselItem>
      <StyledCarouselItem>
        <img style={{width:"100%",height:"600px"}}
          className="d-block w-100"
          src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />
      </StyledCarouselItem>
      <StyledCarouselItem>
        <img style={{width:"100%",height:"600px"}}
          className="d-block w-100"
          src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Fourth slide"
        />
      </StyledCarouselItem>
      <StyledCarouselItem>
        <img style={{width:"100%",height:"600px"}}
          className="d-block w-100"
          src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Fifth slide"
        />
      </StyledCarouselItem>
      <StyledCarouselItem>
        <img style={{width:"100%",height:"600px"}}
          className="d-block w-100"
          src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Sixth slide"
        />
      </StyledCarouselItem>
    </Carousel>
    </div>
    </div>
    <div className='col-6 colum2'>
  <div id='container-Collage' style={{zIndex:'-1'}}>
    <Carousel fade={true} interval={3000}>
      <StyledCarouselItem>
        <img style={{width:"100%",height:"600px"}}
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2017/02/18/18/43/motorcycle-2077914_1280.jpg"
          alt="First slide"
        />
              </StyledCarouselItem>
      <StyledCarouselItem>
        <img style={{width:"100%",height:"600px"}}
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2017/12/11/11/30/helicopter-3011983_1280.jpg"
          alt="Second slide"
        />
      </StyledCarouselItem>
      <StyledCarouselItem>
        <img style={{width:"100%",height:"600px"}}
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2012/10/10/05/04/train-60539_960_720.jpg"
          alt="Third slide"
        />
      </StyledCarouselItem>
      <StyledCarouselItem>
        <img style={{width:"100%",height:"600px"}}
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2020/08/14/15/22/canal-5488271_960_720.jpg"
          alt="Fourth slide"
        />
      </StyledCarouselItem>
      <StyledCarouselItem>
        <img style={{width:"100%",height:"600px"}}
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2020/03/27/19/27/airplane-4974678_1280.jpg"
          alt="Fifth slide"
        />
      </StyledCarouselItem>
      <StyledCarouselItem>
        <img style={{width:"100%",height:"600px"}}
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/11/29/10/01/vw-bulli-1868890_1280.jpg"
          alt="Sixth slide"
        />
      </StyledCarouselItem>
    </Carousel>
    </div>
    </div>
    </div>
  );
};

export default CollageCarousel;
