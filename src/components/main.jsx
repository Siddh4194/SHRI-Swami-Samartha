import React, { useEffect } from 'react';
import Expertise from './expertise';
import mainImage from '../images/sriswamisamarth.png';
import Nav from './navbar';
import About from './AboutUs';
import Testimonials from './testimonials';
import Contact from './ContactUs';
import Footer from './footer';
import Sample from './slider';
import Gallry from './Phtogalary';
export default function Main(){
    useEffect(()=>{
       textTyper();
    },[]);
    let typingTimeOut;
    let text = "We turn your moments into unforgettable experience.";
    let countAlpha = 0; 
    function textTyper(){
        const textNode = document.querySelector(".textauto");
        textNode.firstChild.textContent = text.slice(0,countAlpha);
        // console.log(text.slice(0,countAlpha));
        countAlpha++;   
        if(countAlpha <= text.length){
           typingTimeOut = setTimeout(textTyper,100)
        }
    }
    if(countAlpha > text.length){
        clearTimeout(typingTimeOut);
    }
    return(
        <>
        {/* <NavScrollExample/> */}
        <Nav/>
        <div id='Home' className="home">
            <div className="container">
                <div className="row">
                <div className="mainImage col-lg-6 col-md-12 col-sm-12">
                    <img src={mainImage} className='img-fluid' alt="" />
                </div>
                <div className="mainImage col-lg-6 col-md-12 col-sm-12">
                    <Sample/>
                    <div className='textauto'>
                    <h3></h3>
                    <p>Specializing in exceptional events that bring visions to life. Passion, creativity, and excellence combined for memorable moments.
                        </p>
                        {/* <div className='backShape1'></div>
                        <div className='backShape'>
                    
                    </div>
                    {/* <button className='button'>Contact Us</button> */}
                    </div>
                    
                </div>
                </div>
                
            </div>
            
            
        </div>
        <Expertise/>
        <Gallry/>
        <Testimonials/>
        <About/>
        <Contact/>
        <Footer/>
        </>
    )
}

