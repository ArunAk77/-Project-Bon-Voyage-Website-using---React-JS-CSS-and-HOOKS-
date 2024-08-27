import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/footer';
import Nav from './components/Navbar/Nav';
import Signin from './components/SignIN/Signin';
import FeaturedBrands from './components/Styleing/FeaturedBrands';
import BookVacation from './components/Goo/Style';
import ImageCarousel from './components/Carousel/Carousel';
import   TravelPackages from './components/Cards/TravelPackages';
import OurPartners from './components/Partner/OurPartners';
import About from './components/Aboutus/About';
import TestimonialSection from './components/Testimonal/Testimonial';
import AboutUS from './components/AboutME/aboutme';
import CollageCarousel from './components/CollageCarousel/CollageCarousel';


const App = () => (
  <div>
    <Nav/>
    <ImageCarousel/>    
    <BookVacation/>
    <TravelPackages />
    <OurPartners/>
    <About/>
    <Signin/>
    <AboutUS/>
    <TestimonialSection/>
    <FeaturedBrands/>
    <CollageCarousel/>
    <Footer/>
    </div>
);
ReactDOM.render(<App />, document.getElementById('root'));




