import React, { useEffect, useState } from 'react';


import img1 from '../images/babyShower.jpg';
import img2 from '../images/baby shower3.jpg';
import img3 from '../images/wedding.png';
import img4 from '../images/anniversary.jpg';
import img5 from '../images/birthday.jpg';
import img6 from '../images/engagement2.jpg';
import img7 from '../images/naming ceremony1.jpg';
import img8 from '../images/ganapati1.jpeg';
import img9 from '../images/haldi.jpg';
import img10 from '../images/reception2.jpg';
import img11 from '../images/ownerImages/WhatsApp Image 2023-08-13 at 10.14.38 AM (1).jpeg';
import img12 from '../images/ownerImages/WhatsApp Image 2023-08-13 at 10.14.38 AM.jpeg';
import img13 from '../images/ownerImages/WhatsApp Image 2023-08-13 at 10.14.40 AM (1).jpeg';
import img14 from '../images/ownerImages/WhatsApp Image 2023-08-13 at 10.14.40 AM (2).jpeg';
import img15 from '../images/ownerImages/WhatsApp Image 2023-08-13 at 10.14.41 AM (1).jpeg';
import img16 from '../images/ownerImages/WhatsApp Image 2023-08-13 at 10.14.41 AM (2).jpeg';
import img17 from '../images/ownerImages/WhatsApp Image 2023-08-13 at 10.14.41 AM.jpeg';
import img18 from '../images/ownerImages/WhatsApp Image 2023-08-13 at 10.14.42 AM (1).jpeg';

export default function Gallry() {
    const list = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18];
    const imgContainer = [];


let index = 0;
    list.forEach((ele) =>{
        imgContainer.push(
            <li className="gallary_item" key={index}>
                <img src={ele} alt="" />
            </li>
        )
        index++;
    })


    return(
        <div id='Gallery' className="gallery_container">
            <div className='head'>
                <h2>Our Gallary</h2>
            </div>
            <div className="gallary">
           {imgContainer}
            </div>
        </div>
    )
}