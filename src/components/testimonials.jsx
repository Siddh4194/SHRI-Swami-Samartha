import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import testimonial icon
// import FormatQuoteIcon from '@mui/icons-material/FormatQuoteRounded';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Card from 'react-bootstrap/Card';
import 'swiper/css/effect-creative';



// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { FormatQuoteRounded } from '@mui/icons-material';

export default function Testimonials() {

const [width, setWidth] = useState(window.innerWidth);
const [data, setdata] = useState([]);

const handleResize = () => {
  setWidth(window.innerWidth);
};
    useEffect(()=>{
        fetch("https://backend-sse.vercel.app/testfetch")
        .then(response => response.json())
        .then(data => setdata(data.data))
    },[]);

useEffect(() => {
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

const testdata = [];

data.forEach((ele,index)=>{
    testdata.push(
        <SwiperSlide key={index}>
                        <Card className="testCard"style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className='testNomials'>
                                    <div><h6>{ele.name}</h6></div>
                                    <div><FormatQuoteRounded style={{fontSize:"3em"}}/></div>
                                </Card.Title>
                                <Card.Text  className="mb-2 text-muted cardText">
                                {ele.comment}
                                </Card.Text>
                            </Card.Body>
                        </Card>
            </SwiperSlide>
    )
})

if(width > 650 ){
    return (
        <div id='Testimonials' className='testimonials'>
            <div className='head'>
            <div className="animateIcons2">
            <FormatQuoteRounded style={{fontSize:"80px"}}/>
            </div>
                <div>
                <h1>Our Happy Costumer's</h1>
                </div>
                <div className="animateIcons">
            <FormatQuoteRounded style={{fontSize:"80px"}}/>
            </div>
            </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            // pagination={{
            //   clickable: true,
            // }}
            // direction={'vertical'}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {testdata}
        </Swiper>      
            
            </div>)
} else {
    return(
    <div id='Testimonials' className='testimonials'>
            <div className='head'>
                
            <div className="animateIcons2">
            <FormatQuoteRounded style={{fontSize:"80px"}}/>
            </div>
                <div>
                <h1>Our Happy Costumer's</h1>
                </div>
                <div className="animateIcons">
            <FormatQuoteRounded style={{fontSize:"80px"}}/>
            </div>
            </div>
            <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       {testdata}
      </Swiper>
            </div>)
}
}