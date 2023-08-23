import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import img1 from '../images/mainSlides/img1.png';
import img2 from '../images/mainSlides/img2.jpg';
import img3 from '../images/mainSlides/img3.jpg';
import img4 from '../images/mainSlides/img4.jpg';
import img5 from '../images/mainSlides/img5.jpg';
import img6 from '../images/mainSlides/img6.jpg';
import img7 from '../images/mainSlides/img7.jpg';
import './style.css';
// import required modules
import {Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

export default function Sample() {
        const listImages = [img1,img2,img3,img4,img5,img6,img7];
        const imageCompund = [];
        listImages.forEach((element,index)=>{
          imageCompund.push(
          <SwiperSlide key={index}>
            <div className="slideImage" style={{backgroundImage:`url(${element})`}}></div>
          {/* <img src={element} alt="" srcset="" /> */}
        </SwiperSlide>)
        })
        


  return (
    <div className='contain'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {imageCompund}
      </Swiper>
    </div>
  );
}
