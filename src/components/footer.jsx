import {  Instagram, LinkedIn, Mail } from '@mui/icons-material';
import React from 'react';

export default function Footer() {
    // Scrollabel
    // const [image,setImage] = useState("");
    const handleClick1 = (ele) => {
        const targetElement = document.getElementById(`${ele.target.innerText}`);
        // targetElement.innerText
        console.log(`#${ele.target.innerText}`);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return(
        <div className='footer'>
            <div className="footNav">
                <div>
                    <ul>
                        <li onClick={handleClick1}>Home</li>
                        <li onClick={handleClick1}>Services</li>
                        <li onClick={handleClick1}>Gallery</li>
                        <li onClick={handleClick1}>About</li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className='col-lg-6 col-md-6 col-sm-12 rights'>
                        <div><h6>&#169; All rights are reserved by</h6></div>
                        <div className='footerImg'></div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 compinfo'>
                                <div><h6>Contact Us for Hiring And Buisness Purpose</h6></div>
                                <div>
                                <button><a href="https://www.instagram.com/sidd.d.kadam/">
                                    <div className="ic"><Instagram/></div>
                                </a></button>
                                <button><a href="mailto:siddh4194@gmail.com">
                                    <div className="ic"><Mail/></div>
                                </a></button>
                                
                                <button><a href="https://www.linkedin.com/in/siddhant-kadam-963977222/">
                                    <div className="ic"><LinkedIn/></div>
                                </a></button>
                                </div>
                    </div>
                </div>
            </div>
            <div >
            </div>
            
        </div>
    );
}