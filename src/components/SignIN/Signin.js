import React  from 'react';
import './Signin.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaGooglePlus } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Signin = () => {
  return (
   <div id='section'>
    <div className='container'>
        <div className='row'>
            <div className='col-6 col1'>
                <h1>Sign In</h1>
                <div className='Icons'>
                <a rel="noopener noreferrer" href='http://google.com/' target='_blank'><FaGooglePlus className='icons' /></a>
                <a rel="noopener noreferrer" href='https://www.facebook.com/profile.php?id=100036033393076' target='_blank'><FaFacebookSquare className='icons'/></a>
                <a rel="noopener noreferrer" href='https://www.linkedin.com/in/infant-arun-kumar-s-688b2029b/' target='_blank'> <FaLinkedin className='icons'/></a>
                <a rel="noopener noreferrer" href='https://x.com/infantarun11' target='_blank'> <FaInstagramSquare className='icons'/></a>
                </div>
                <h4>Or Use Your Account</h4>
                <input className='myInput' type='text'placeholder=' E-MAIL'></input>
                <br></br>
                <br></br>
                <input className='myInput' type='password' placeholder='PASSWORD'></input>
                <br></br>
                <br></br>
                <h4>Forgot Your Password ?</h4>
                <br></br>
                <button className="search-button" type='submit'>Submit</button>
            </div>
            <div className='col-6 col2'>
                <h1>Sign Up</h1>
                <div className='Icons'>
                <a rel="noopener noreferrer" href='http://google.com/' target=''> <FaGooglePlus className='icons' /></a>
                <a rel="noopener noreferrer" href='https://www.facebook.com/profile.php?id=100036033393076' target=''> <FaFacebookSquare className='icons'/></a>
                <a rel="noopener noreferrer" href='https://x.com/infantarun11' target=''> <FaInstagramSquare className='icons'/></a>
                </div>
                <h4>Or Create Your Account</h4>
                <input className='myInput' type='text' placeholder='NAME'></input>
                <br></br>
                <br></br>
                <input  className='myInput'type='text' placeholder='E-MAIL' ></input>
                <br></br>
                <br></br>
                <input  className='myInput' type='password' placeholder='PASSWORD'></input>
                <br></br>
                <br></br>
                <h4>Suggest me a Password !</h4>
                <button className="search-button" type='submit'>Sign Up</button>
            </div>
        </div>
    </div>
   </div>
  );
};

export default Signin;
