import { AddIcCall, Call, Facebook, Instagram, Mail, Twitter } from '@mui/icons-material';
import { Button, Popover, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

export default function Nav() {

    // Scrollabel
    const handleClick1 = (ele) => {
        ele.preventDefault();
        const targetElement = document.getElementById(`${ele.target.innerText}`);
        // targetElement.innerText
        console.log(`#${ele.target.innerText}`);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      };

    // screen size 
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); 




    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.preventDefault();
    setAnchorEl(null);
    var scrollH = document.querySelector('.app');
    // console.log(scrollH.scrollTop);
    positionset(scrollH.scrollTop);
  };

  const positionset = (val)=> {
    var scrollH = document.querySelector('.app');
    scrollH.scrollBy(0,val)
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  const list = (<div className="list">
  <ul>
      <li  onClick={handleClick1}>Home</li>
      <li onClick={handleClick1}>Services</li>
      <li onClick={handleClick1}>Gallery</li>
      <li onClick={handleClick1}>About</li>
      <li onClick={handleClick1}>Testimonials</li>
      <li onClick={handleClick1}>ContactUs</li>
  </ul>
</div>)
if(width > 750){
    return(
        <div className='nav'>
            <div><h4><span style={{fontFamily:"'Barriecito', cursive"}}>SS  Events</span></h4></div>
            {list}
            <div className='navSocial'>
                <button><a href="https://www.instagram.com/shri.swami_samarth_events/" className='anchorButton'>
                                    <div className="ic"><Instagram/></div>
                                </a></button>
                                <button><a href="https://mail.google.com/mail/u/0/" className='anchorButton'>
                                    <div className="ic"><Mail/></div>
                                </a></button>
                                <button><a href="tel:+917620357772" className='anchorButton'>
                                    <div className="ic"><Twitter/></div>
                                </a></button>
                                <button><a href="tel:+917620357772" className='anchorButton'>
                                    <div className="ic"><Call/></div>
                                </a></button>
            </div>
        </div>
    );
}else{
    return(
        <div className='nav'>
            <div style={{display:"flex",marginRight:"1em"}}>
            <button className='menuButton' onClick={handleClick}>
            <span className="material-symbols-outlined">menu</span>
            </button>
            <div><h4><span style={{fontFamily:"'Barriecito', cursive"}}>SS  Events</span></h4></div>
            </div>
            
            <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            >
            <Typography sx={{ p: 2 }}>
                <div className="menu_list">
                <ul>
      <li  onClick={handleClick1}>Home</li>
      <li onClick={handleClick1}>Services</li>
      <li onClick={handleClick1}>Gallery</li>
      <li onClick={handleClick1}>About</li>
      <li onClick={handleClick1}>Testimonials</li>
      <li onClick={handleClick1}>ContactUs</li>
                </ul>
                </div>
            </Typography>
            </Popover>
            <div className='navSocial'>
                <button><a href="https://www.instagram.com/shri.swami_samarth_events/" className='anchorButton'>
                                    <Instagram/>
                                </a></button>
                                <button><a href="https://mail.google.com/mail/u/0/" className='anchorButton'>
                                    <Mail/>
                                </a></button>
                                <button><a href="tel:+917620357772" className='anchorButton'>
                                    <Twitter/>
                                </a></button>
                                <button><a href="tel:+917620357772" className='anchorButton'>
                                    <Call/>                               </a></button>
            </div>
        </div>
    );
}
    
}