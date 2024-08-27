import { FaFacebook, FaTwitter, FaPinterest, FaSearch,FaInstagramSquare } from 'react-icons/fa';
import { FaSquareYoutube ,FaMobile,FaGithub,FaSquareWhatsapp} from "react-icons/fa6";
import React from 'react';
import './Nav.css';


const Nav = () => {
    return (
        <div className="nav-container" >
            <div className="background-image">
                <div className="nav-content">
                    <div className="logo">
                        <h1>Bon Voyage</h1>
                        <p>Best Prices, Best Holidays</p>
                        <label id='Hide' for="myInput">TRAVELISTA</label>
                    </div>
                    <div className="social-icons">
                        <a href='https://www.facebook.com/profile.php?id=100036033393076' rel="noopener noreferrer" target='_blank'><FaFacebook className="icon" /></a>
                        <a href='https://x.com/infantarun11'  rel="noopener noreferrer"target='_blank'><FaTwitter className="icon" /></a>
                        <a href='https://in.pinterest.com/infantarun11/' rel="noopener noreferrer" target='_blank'><FaPinterest className="icon" /></a>
                    </div>
                    <div className="nav-links">
                        <a href="#" >Home</a>
                        <a href="#Carousel-container" >Destinations</a>
                        <a href="#travel-packages-container" >Vacations</a>
                        <a href="#partners-container" >Partners</a>
                        <a href="#section" >Sign in</a>
                        <a href="#section-about" >About Us</a>
                    </div>
                    <div className="search-box">
                        <input className='TopBox' type='text' placeholder='Explore More...'></input>
                        <button><FaSearch className="search-icon" /></button>
                        
                    </div>
                </div>
                <div className='mid'>
                    <div className="SocialM">
                    <a href='https://www.lavamobiles.com/'  rel="noopener noreferrer" target='_blank'>< FaMobile className="icons" /></a>
                    <a href='https://github.com/ArunAk77'  rel="noopener noreferrer" target='_blank'><FaGithub className="icons" /></a>
                    <a href='https://web.whatsapp.com/'  rel="noopener noreferrer" target='_blank'><FaSquareWhatsapp className="icons" /></a>
                    <a href='https://x.com/infantarun11'  rel="noopener noreferrer" target='_blank'><FaInstagramSquare className='icons' /></a>
                    <a href='https://www.youtube.com/'  rel="noopener noreferrer" target='_blank'><FaSquareYoutube className='icons'/></a>
                    </div>
                    <div className='Content'>
                <div className='img'>
                <img style={{width:"80px",height:"50px",padding:"8px",backgroundColor: "rgba(0, 0, 0, 0.5)",borderRadius:"10px"}} src='https://static.wixstatic.com/media/41d000_256ec7e79e0ec3d5b71c80b136b0d627.png/v1/fill/w_76,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/41d000_256ec7e79e0ec3d5b71c80b136b0d627.png' alt='logo'></img>
                <h5 style={{borderStyle:'dashed',margin:"5px",borderColor:"white",width:"fit-content",padding:"3px",borderLeft:"none",borderRight:"none",fontSize:'40px',fontFamily:"fantasy",letterSpacing:"1px"}}>Book Air and Roadways</h5>
                <button className="search-button">SEARCH</button>
                <h5 style={{color:"white",fontSize:"30px",fontFamily:"fantasy",margin:"5px"}}>For A Holiday</h5>
                <button className='Butt'>Book fantasy Experience</button>
                </div>
                <div className='Box' >
                        <h2 className='Tit'>SEE HOW MUCH 
                            YOU CAN SAVE WITH 
                            THESE LAST MINUTE
                             BON VOYAGE RATES.
                             </h2><div className='Move'>
                             <h4 style={{color:"white"}}> See details</h4><button className="details-button"><b>+</b></button></div>
                </div>
                </div>
                </div>
                <div className="main-text">
                      <div className="row">
                        <div className="col-3">
                            <h1 style={{fontSize:"80px",color:"black"}}>86</h1>
                            <p style={{fontSize:"30px"}}>Countries Visited</p>
                        </div>
                        <div className="col-3">
                            <h1 style={{fontSize:"80px",color:"black"}}>7</h1>
                            <p style={{fontSize:"30px"}}>Continents Reached</p>
                        </div>
                        <div className="col-3">
                            <h1 style={{fontSize:"80px",color:"black"}}>8</h1>
                            <p style={{fontSize:"30px"}}>Torn Shoes</p>
                        </div>
                        <div className="col-3">
                            <h1 style={{fontSize:"80px",color:"black"}}>2</h1>
                            <p style={{fontSize:"30px"}}>Lost Backpacks</p>
                        </div>
                        </div> 
                </div>
            </div>
            <br></br>
        </div>
        
    );
};

export default Nav;
